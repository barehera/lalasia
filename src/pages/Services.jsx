import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WorkWithUsSection from "../components/Services/4-WorkWithUsSection/WorkWithUsSection";
import HeroSection from "../components/Services/1-HeroSection/HeroSection";
import ServicesSection from "../components/Services/2-ServicesSection/ServicesSection";
import PortfolioSection from "../components/Services/3-PortfolioSection/PortfolioSection";

const Services = () => {
  return (
    <>
      <Header></Header>
      <main className="max-w-[120rem] mx-auto">
        <HeroSection></HeroSection>
        <ServicesSection></ServicesSection>
        <PortfolioSection></PortfolioSection>
        <WorkWithUsSection></WorkWithUsSection>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Services;
