import React from "react";
import HeroSection from "../components/AboutUs/HeroSection";
import OurMissionSection from "../components/AboutUs/OurMissionSection";
import OurTeamSection from "../components/AboutUs/OurTeamSection";
import WorkWithUsSection from "../components/AboutUs/WorkWithUsSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <>
      <Header></Header>
      <main>
        <HeroSection></HeroSection>
        <OurMissionSection></OurMissionSection>
        <OurTeamSection></OurTeamSection>
        <WorkWithUsSection></WorkWithUsSection>
      </main>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
