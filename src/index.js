import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="max-w-[120rem] mx-auto">
    <Header></Header>
    <App />
    <Footer></Footer>
  </div>
);
