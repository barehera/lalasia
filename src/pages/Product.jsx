import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/Product/HeroSection";
import ProductsSection from "../components/Product/ProductsSection";

const Product = () => {
  return (
    <>
      <Header></Header>
      <main>
        <HeroSection></HeroSection>
        <ProductsSection></ProductsSection>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Product;
