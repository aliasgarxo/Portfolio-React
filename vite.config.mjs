import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Keep CRA's output directory so existing deploy configuration still works.
  build: {
    outDir: "build",
    sourcemap: false,
  },

  server: {
    port: 3000,
    host: true, // listen on all interfaces so the dev server is reachable on the LAN
  },

  preview: {
    port: 4173,
    host: true,
  },

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
