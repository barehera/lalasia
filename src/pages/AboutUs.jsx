import React from "react";
import HeroSection from "../components/AboutUs/1-HeroSection/HeroSection";
import OurMissionSection from "../components/AboutUs/2-OurMissionSection/OurMissionSection";
import OurTeamSection from "../components/AboutUs/3-OurTeamSection/OurTeamSection";
import WorkWithUsSection from "../components/AboutUs/4-WorkWithUsSection/WorkWithUsSection";
import PageLayout from "../components/layouts/PageLayout";

const AboutUs = () => {
  return (
    <PageLayout>
      <HeroSection></HeroSection>
      <OurMissionSection></OurMissionSection>
      <OurTeamSection></OurTeamSection>
      <WorkWithUsSection></WorkWithUsSection>
    </PageLayout>
  );
};

export default AboutUs;
