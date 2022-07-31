import React from "react";

import HeroSection from "../components/Home/1-HeroSection/HeroSection";
import BenefitsSection from "../components/Home/2-BenefitsSection/BenefitsSection";
import PopularProductsSection from "../components/Home/3-PopularProductsSection/PopularProductsSection";
import ProductInfoSection from "../components/Home/4-ProductInfoSection/ProductInfoSection";
import TestimonialsSection from "../components/Home/5-TestimonialsSection/TestimonialsSection";
import ArticlesSection from "../components/Home/6-ArticlesSection/ArticlesSection";
import DiscountSection from "../components/Home/7-DiscountSection/DiscountSection";
import PageLayout from "../components/layouts/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection></HeroSection>
      <BenefitsSection></BenefitsSection>
      <PopularProductsSection></PopularProductsSection>
      <ProductInfoSection></ProductInfoSection>
      <TestimonialsSection></TestimonialsSection>
      <ArticlesSection></ArticlesSection>
      <DiscountSection></DiscountSection>
    </PageLayout>
  );
};

export default Home;
