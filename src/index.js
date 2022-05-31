import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/tailwind.css";
import "./assets/font-awesome/fontawesome.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
