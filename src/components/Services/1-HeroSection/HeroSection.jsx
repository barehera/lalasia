import React from "react";
import mainImage from "../../../assets/services-main.png";
const HeroSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44">
      <article className="flex flex-col text-center items-center justify-center">
        <h1 className="text-text text-2xl lg:text-5xl font-bold mb-5">
          Services
        </h1>
        <p className="text-paragraph text-sm lg:text-lg mb-12">
          The product crafted by talented crafter and using high quality
          material with love inside
        </p>
        <img
          src={mainImage}
          alt="Services"
          className="w-full h-[200px] lg:h-[550px] object-cover"
        />
      </article>
    </section>
  );
};

export default HeroSection;
