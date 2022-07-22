import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
