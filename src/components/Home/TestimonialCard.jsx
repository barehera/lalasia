import React from "react";
import quoteIcon from "../../assets/icons/quote.svg";
import starIcon from "../../assets/icons/star.svg";

const TestimonialCard = ({ comment, profileImage, name, rate }) => {
  return (
    <article className="flex flex-col gap-7 p-6 shadow-[0_4px_80px_rgba(175,173,181,0.1)]">
      <img src={quoteIcon} alt="Quote Icon" className="w-12 h-12" />
      <p className="text-paragraph text-sm lg:text-lg">{comment}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={profileImage} alt="User" />
          <h4 className="text-md lg:text-xl font-bold">{name}</h4>
        </div>
        <div className="flex gap-2">
          <img src={starIcon} alt="Star Icon" />
          <h4 className="text-md lg:text-lg font-bold">{rate}</h4>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
