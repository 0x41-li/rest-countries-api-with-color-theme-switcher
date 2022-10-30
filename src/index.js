import { createRoot } from "react-dom/client";
import React from "react";
// components
import App from "./App";

const container = document.getElementById("app");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
