import React from "react";
import { createRoot } from 'react-dom';
import "./index.css";
import App from "./App";
import { ThemeProvider } from './Appearance/ThemeContext';
import { Provider } from 'react-redux';
import store from './ReduxTool/store.js';

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
