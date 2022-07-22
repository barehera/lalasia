import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/Services/1-HeroSection/HeroSection";
import ServicesSection from "../components/Services/2-ServicesSection/ServicesSection";

const Services = () => {
  return (
    <>
      <Header></Header>
      <main>
        <HeroSection></HeroSection>
        <ServicesSection></ServicesSection>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Services;
