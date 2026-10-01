import React, { useEffect, useState } from "react";
import "./infra.css";

/**
 * Live stats from the Kubernetes cluster that hosts this site.
 *
 * Degrades to rendering nothing if VITE_INFRA_API_URL is unset or the endpoint
 * is unreachable, so the portfolio is never broken by the cluster being down.
 */

const API_URL = import.meta.env.VITE_INFRA_API_URL;
const REFRESH_MS = 60000;

const FIELDS = [
  { key: "uptimeDays", label: "Node uptime", suffix: "d" },
  { key: "podsRunning", label: "Pods running" },
  { key: "deployments", label: "Deployments" },
  { key: "namespaces", label: "Namespaces" },
  { key: "cpuCores", label: "CPU cores", suffix: "" },
  { key: "memoryGb", label: "Memory", suffix: " GB" },
];

function InfraStats() {
  const [data, setData] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!API_URL) return undefined;

    let cancelled = false;
    const controller = new AbortController();

    const load = async () => {
      try {
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error(String(res.status));
        const json = await res.json();
        if (!cancelled) {
          setData(json);
          setFailed(false);
        }
      } catch {
        // Never surface an error state to the visitor; just stay hidden.
        if (!cancelled) setFailed(true);
      }
    };

    load();
    const timer = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      controller.abort();
      clearInterval(timer);
    };
  }, []);

  if (!API_URL || failed || !data) return null;

  const shown = FIELDS.filter(
    (f) => data[f.key] !== null && data[f.key] !== undefined
  );
  if (shown.length === 0) return null;

  return (
    <section className="infra-section" id="infra" aria-labelledby="infra-heading">
      <div className="infra-inner">
        <header className="infra-head">
          <h2 className="infra-heading" id="infra-heading">
            <span className="infra-dot" aria-hidden="true" />
            Live cluster
          </h2>
          <p className="infra-sub">
            This site runs on a Kubernetes cluster I operate. These numbers come
            from its Prometheus, refreshed every minute.
          </p>
        </header>

        <dl className="infra-grid">
          {shown.map((f) => (
            <div className="infra-stat" key={f.key}>
              <dt className="infra-stat-label">{f.label}</dt>
              <dd className="infra-stat-value">
                {data[f.key]}
                {f.suffix ? <span className="infra-unit">{f.suffix}</span> : null}
              </dd>
            </div>
          ))}
        </dl>

        <p className="infra-updated">
          Updated{" "}
          <time dateTime={data.updated}>
            {new Date(data.updated).toLocaleTimeString()}
          </time>
        </p>
      </div>
    </section>
  );
}

export default InfraStats;
