import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from './Appearance/ThemeContext';
import { registerServiceWorker } from './utils/registerServiceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

// Register the service worker
registerServiceWorker();
