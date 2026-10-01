import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// React 18+ entry point. ReactDOM.render was removed in React 19.
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pass a function to log results, e.g. reportWebVitals(console.log),
// or send to an analytics endpoint.
reportWebVitals();
