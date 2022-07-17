import React from "react";

const MissionCard = ({ image, title, text }) => {
  return (
    <article className="flex gap-6 items-start">
      <img src={image} alt="Mission Icon" />
      <div>
        <h3 className="text-text text-base lg:text-2xl font-bold mb-2 lg:mb-4">
          {title}
        </h3>
        <p className="text-paragraph text-sm lg:text-lg">{text}</p>
      </div>
    </article>
  );
};

export default MissionCard;
