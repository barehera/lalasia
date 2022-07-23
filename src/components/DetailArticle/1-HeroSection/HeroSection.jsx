import React from "react";
import mainImage from "../../../assets/article-main-image.png";

const HeroSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24">
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
    </section>
  );
};

export default HeroSection;
