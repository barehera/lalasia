import React from "react";
import BenefitsSection from "../components/Home/BenefitsSection";
import HeroSection from "../components/Home/HeroSection";
import PopularProductsSection from "../components/Home/PopularProductsSection";
import ProductInfoSection from "../components/Home/ProductInfoSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import ArticlesSection from "../components/Home/ArticlesSection";
import DiscountSection from "../components/Home/DiscountSection";
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
