import React from "react";

const ServicesCard = ({ index, title, text }) => {
  return (
    <article>
      <p className="text-main text-2xl lg:text-5xl font-bold mb-3 lg:mb-6">
        0{index + 1}
      </p>
      <h3 className="text-text text-sm lg:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-paragraph text-xs lg:text-lg">{text}</p>
    </article>
  );
};

export default ServicesCard;
