import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/Product/1-HeroSection/HeroSection";
import ProductsSection from "../components/Product/2-ProductsSection/ProductsSection";

const Product = () => {
  return (
    <>
      <Header></Header>
      <main className="max-w-[120rem] mx-auto">
        <HeroSection></HeroSection>
        <ProductsSection></ProductsSection>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Product;
