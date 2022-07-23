import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Article from "./pages/Article";
import DetailProduct from "./pages/DetailProduct";
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
        <Route path="/article" element={<Article />} />
        <Route path="/product/:id" element={<DetailProduct />} />
      </Routes>
    </>
  );
}

export default App;
