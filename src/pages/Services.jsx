import React from "react";
import WorkWithUsSection from "../components/Services/4-WorkWithUsSection/WorkWithUsSection";
import HeroSection from "../components/Services/1-HeroSection/HeroSection";
import ServicesSection from "../components/Services/2-ServicesSection/ServicesSection";
import PortfolioSection from "../components/Services/3-PortfolioSection/PortfolioSection";
import PageLayout from "../components/layouts/PageLayout";

const Services = () => {
  return (
    <PageLayout>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <PortfolioSection></PortfolioSection>
      <WorkWithUsSection></WorkWithUsSection>
    </PageLayout>
  );
};

export default Services;
