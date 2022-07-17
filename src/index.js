import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="max-w-[120rem] mx-auto">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
