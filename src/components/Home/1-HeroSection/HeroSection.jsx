import React from "react";
import mainImage from "../../../assets/hero-section-main-image.png";
import searchIcon from "../../../assets//icons/search.svg";
import arrowIcon from "../../../assets/icons/hero-section-arrow.svg";
import titleIcon from "../../../assets/icons/hero-section-title-icon.svg";
import SectionLayout from "../../layouts/SectionLayout";

const HeroSection = () => {
  return (
    <SectionLayout x={true} y={true}>
      <img
        src={arrowIcon}
        alt="Arrow Icon"
        className="absolute hidden lg:block lg:left-auto lg:top-auto "
      />
      <article className="flex flex-col items-center justify-center mb-24 gap-7">
        <h1 className="text-3xl lg:text-5xl flex flex-col  font-bold text-center  max-w-xl">
          <span>Discover Furniture With</span>
          <span className="relative">
            High Quality Wood
            <img
              src={titleIcon}
              alt="Title Icon"
              className="absolute -right-4 -bottom-2 lg:right-0"
            />
          </span>
        </h1>

        <p className="text-paragraph  max-w-lg text-center">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non. Purus parturient viverra nunc,
          tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.
        </p>
      </article>
      <article className="relative flex flex-col items-center justify-center">
        <div className=" lg:absolute -top-8 mb-7 lg:mb-0 flex items-center lg:w-2/3 bg-screen py-2 px-6 shadow-[0_4px_80px_rgba(175,173,181,0.3)]">
          <img src={searchIcon} alt="Search Icon" />
          <input
            type="text"
            className="flex-1 p-4 focus:border-none focus:outline-none"
            placeholder="Search property"
          />
          <button className="text-white font-semibold bg-main p-2 lg:w-32 w-24">
            Search
          </button>
        </div>
        <img
          src={mainImage}
          alt="Hero Section"
          className="w-full object-contain"
        />
      </article>
    </SectionLayout>
  );
};

export default HeroSection;
