import React from "react";

import HeroSection from "../components/Home/1-HeroSection/HeroSection";
import BenefitsSection from "../components/Home/2-BenefitsSection/BenefitsSection";
import PopularProductsSection from "../components/Home/3-PopularProductsSection/PopularProductsSection";
import ProductInfoSection from "../components/Home/4-ProductInfoSection/ProductInfoSection";
import TestimonialsSection from "../components/Home/5-TestimonialsSection/TestimonialsSection";
import ArticlesSection from "../components/Home/6-ArticlesSection/ArticlesSection";
import DiscountSection from "../components/Home/7-DiscountSection/DiscountSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <main>
        <HeroSection></HeroSection>
        <BenefitsSection></BenefitsSection>
        <PopularProductsSection></PopularProductsSection>
        <ProductInfoSection></ProductInfoSection>
        <TestimonialsSection></TestimonialsSection>
        <ArticlesSection></ArticlesSection>
        <DiscountSection></DiscountSection>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
