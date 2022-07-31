import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import HeroSection from "../components/Product/1-HeroSection/HeroSection";
import ProductsSection from "../components/Product/2-ProductsSection/ProductsSection";

const Product = () => {
  return (
    <PageLayout>
      <HeroSection></HeroSection>
      <ProductsSection></ProductsSection>
    </PageLayout>
  );
};

export default Product;
