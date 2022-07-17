import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productLargeBg from "../../assets/product-large-bg-desktop.png";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import HeroSectionSliderCard from "./HeroSectionSliderCard";

const HeroSection = () => {
  function SampleNextArrow({ onClick }) {
    return (
      <button
        className="bg-black bg-opacity-50 h-12 w-12 rounded-full text-white flex items-center justify-center absolute top-1/2 right-6 -translate-y-1/2 hover:scale-110 transition-all duration-300 ease-out "
        onClick={onClick}
      >
        <IoIosArrowForward size={24}></IoIosArrowForward>
      </button>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <button
        className="bg-black bg-opacity-50 h-12 w-12 rounded-full text-white flex items-center justify-center absolute top-1/2 left-6 z-50 -translate-y-1/2 hover:scale-110 transition-all duration-300 ease-out"
        onClick={onClick}
      >
        <IoIosArrowBack size={24}></IoIosArrowBack>
      </button>
    );
  }

  const settings = {
    initialSlide: 2,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <section className="mt-24 lg:mt-44">
      <article className="flex flex-col items-center justify-center text-center mb-7 lg:mb-12 px-6 lg:px-24">
        <h1 className="text-text text-2xl lg:text-5xl font-bold mb-5">
          Products
        </h1>
        <p className="text-paragraph text-sm lg:text-lg lg:w-1/2">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
      </article>
      <Slider {...settings}>
        <HeroSectionSliderCard image={productLargeBg}></HeroSectionSliderCard>
        <HeroSectionSliderCard image={productLargeBg}></HeroSectionSliderCard>
        <HeroSectionSliderCard image={productLargeBg}></HeroSectionSliderCard>
        <HeroSectionSliderCard image={productLargeBg}></HeroSectionSliderCard>
      </Slider>
      {/*<Slider {...settings}>
        
      </Slider> */}
    </section>
  );
};

export default HeroSection;
