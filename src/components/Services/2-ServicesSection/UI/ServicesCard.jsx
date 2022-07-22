import React from "react";

const ServicesCard = ({ index, title, text }) => {
  return (
    <article>
      <h4 className="text-main text-5xl font-bold mb-6">0{index + 1}</h4>
      <h3 className="text-text text-2xl font-bold mb-2">{title}</h3>
      <p className="text-paragraph text-lg">{text}</p>
    </article>
  );
};

export default ServicesCard;
