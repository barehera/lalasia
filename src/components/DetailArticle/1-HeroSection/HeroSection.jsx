import React from "react";
import mainImage from "../../../assets/article-main-image.png";
import SectionLayout from "../../layouts/SectionLayout";

const HeroSection = () => {
  return (
    <SectionLayout x={true} y={true}>
      <h1 className="text-text text-2xl lg:text-5xl font-bold text-center mb-5">
        Bedroom Design is the Most Personal Reflection of the Owner, Really?
      </h1>
      <p className="text-paragraph text-sm lg:text-lg text-center mb-12">
        Is it true that the bedroom design is the most personal reflection of
        the owner? Many people believe that to be able to judge a person's
        personality, it is enough to
      </p>
      <img
        src={mainImage}
        alt="Article"
        className="w-full h-[200px] lg:h-[550px] object-cover"
      />
    </SectionLayout>
  );
};

export default HeroSection;
