"use strict";

/**
 * Read-only metrics aggregator for the portfolio's live infrastructure panel.
 *
 * Queries Prometheus in-cluster and exposes a single small JSON document of
 * curated aggregate numbers. Prometheus itself is never exposed: this service
 * runs a fixed allowlist of queries and returns scalars only, so no pod names,
 * namespaces, labels or internal addresses leak to the public internet.
 *
 * Zero npm dependencies -- Node stdlib only.
 */

const http = require("http");

const PORT = Number(process.env.PORT || 8080);
const PROMETHEUS_URL =
  process.env.PROMETHEUS_URL ||
  "http://kube-prometheus-stack-prometheus.monitoring.svc.cluster.local:9090";
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "https://aliasgar.cloud")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const CACHE_TTL_MS = Number(process.env.CACHE_TTL_SECONDS || 30) * 1000;

/**
 * Fixed allowlist. Everything returned is an aggregate scalar; adding a query
 * that returns labels would leak cluster internals, so keep these scalar-only.
 */
const QUERIES = {
  nodes: 'count(kube_node_info)',
  podsRunning: 'count(kube_pod_status_phase{phase="Running"} == 1)',
  namespaces: "count(kube_namespace_created)",
  deployments: "count(kube_deployment_created)",
  cpuCores: 'sum(rate(container_cpu_usage_seconds_total{container!=""}[5m]))',
  memoryBytes: 'sum(container_memory_working_set_bytes{container!=""})',
  uptimeSeconds: "time() - node_boot_time_seconds",
  containerRestarts: "sum(kube_pod_container_status_restarts_total)",
};

let cache = { at: 0, body: null };

function promQuery(expr) {
  const url = `${PROMETHEUS_URL}/api/v1/query?query=${encodeURIComponent(expr)}`;
  return new Promise((resolve) => {
    const req = http.get(url, { timeout: 5000 }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        try {
          const parsed = JSON.parse(data);
          const result = parsed?.data?.result;
          if (!Array.isArray(result) || result.length === 0) return resolve(null);
          const value = Number(result[0].value[1]);
          resolve(Number.isFinite(value) ? value : null);
        } catch {
          resolve(null);
        }
      });
    });
    req.on("error", () => resolve(null));
    req.on("timeout", () => {
      req.destroy();
      resolve(null);
    });
  });
}

async function collect() {
  const names = Object.keys(QUERIES);
  const values = await Promise.all(names.map((n) => promQuery(QUERIES[n])));

  const raw = {};
  names.forEach((n, i) => (raw[n] = values[i]));

  return {
    updated: new Date().toISOString(),
    // null means "this metric was unavailable" rather than "zero", so the UI
    // can hide it instead of displaying a misleading 0.
    nodes: raw.nodes,
    podsRunning: raw.podsRunning,
    namespaces: raw.namespaces,
    deployments: raw.deployments,
    cpuCores: raw.cpuCores === null ? null : Math.round(raw.cpuCores * 100) / 100,
    memoryGb:
      raw.memoryBytes === null ? null : Math.round((raw.memoryBytes / 1073741824) * 10) / 10,
    uptimeDays:
      raw.uptimeSeconds === null ? null : Math.floor(raw.uptimeSeconds / 86400),
    containerRestarts: raw.containerRestarts,
  };
}

function corsHeadersFor(origin) {
  const headers = {
    Vary: "Origin",
    "Cache-Control": `public, max-age=${Math.floor(CACHE_TTL_MS / 1000)}`,
  };
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return headers;
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin;
  const url = new URL(req.url, "http://localhost");

  if (url.pathname === "/healthz") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ok\n");
    return;
  }

  if (url.pathname !== "/api/infra") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "not found" }));
    return;
  }

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      ...corsHeadersFor(origin),
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Max-Age": "86400",
    });
    res.end();
    return;
  }

  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "method not allowed" }));
    return;
  }

  try {
    if (!cache.body || Date.now() - cache.at > CACHE_TTL_MS) {
      cache = { at: Date.now(), body: JSON.stringify(await collect()) };
    }
    res.writeHead(200, {
      ...corsHeadersFor(origin),
      "Content-Type": "application/json; charset=utf-8",
    });
    res.end(cache.body);
  } catch {
    res.writeHead(503, {
      ...corsHeadersFor(origin),
      "Content-Type": "application/json; charset=utf-8",
    });
    res.end(JSON.stringify({ error: "metrics unavailable" }));
  }
});

server.listen(PORT, () => {
  console.log(`infra-api listening on :${PORT}, querying ${PROMETHEUS_URL}`);
  console.log(`allowed origins: ${ALLOWED_ORIGINS.join(", ")}`);
});
