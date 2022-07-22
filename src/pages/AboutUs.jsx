import React from "react";
import HeroSection from "../components/AboutUs/1-HeroSection/HeroSection";
import OurMissionSection from "../components/AboutUs/2-OurMissionSection/OurMissionSection";
import OurTeamSection from "../components/AboutUs/3-OurTeamSection/OurTeamSection";
import WorkWithUsSection from "../components/AboutUs/4-WorkWithUsSection/WorkWithUsSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <>
      <Header></Header>
      <main className="max-w-[120rem] mx-auto">
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
