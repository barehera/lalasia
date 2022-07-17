import React from "react";

const BenefitCard = ({ title, text, icon }) => {
  return (
    <article className="p-4 text-text shadow-[0_4px_80px_rgba(175,173,181,0.1)]">
      <img src={icon} alt="Benefit Icon" className="mb-4" />
      <h6 className="mb-2 font-bold lg:text-2xl">{title}</h6>
      <p className="text-paragraph text-sm lg:text-lg">{text}</p>
    </article>
  );
};

export default BenefitCard;
