import React from "react";
import aboutUsMain from "../../assets/about-us-main.png";

const HeroSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-24">
      <article className="flex flex-col items-center justify-center">
        <h1 className="text-text text-2xl lg:text-5xl font-bold mb-5">
          About Us
        </h1>
        <p className="text-paragraph text-sm lg:text-lg mb-7 lg:mb-12 lg:w-1/2 text-center">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
        <img
          src={aboutUsMain}
          alt="About Us video"
          className="h-[150px] md:h-[250px] lg:h-[550px] w-full object-fill"
        />
      </article>
    </section>
  );
};

export default HeroSection;
