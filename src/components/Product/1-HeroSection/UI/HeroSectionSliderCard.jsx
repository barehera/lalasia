import React from "react";

const HeroSectionSliderCard = ({ image }) => {
  return (
    <article className="relative">
      <img
        src={image}
        alt="Product"
        className="w-full h-[200px] md:h-[300px] lg:h-[500px]"
      />
      <div className="absolute bottom-0 p-6 lg:p-36 flex flex-col  justify-center">
        <button className="p-2 w-28 lg:w-36 bg-main text-sm lg:text-lg rounded-full text-white mb-4">
          Discount
        </button>
        <h3 className="text-base lg:text-5xl text-white font-bold mb-1 lg:mb-5">
          Ramadhan Sale Offer
        </h3>
        <p className="text-xs lg:text-2xl text-white">
          Get 40% off for the first transaction on Lalasia
        </p>
      </div>
    </article>
  );
};

export default HeroSectionSliderCard;
