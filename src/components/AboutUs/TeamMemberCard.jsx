import React from "react";

const TeamMemberCard = ({ image, name, role }) => {
  return (
    <article>
      <img
        src={image}
        alt={`Member: ${name}`}
        className="w-full h-72 xl:h-96 object-fill mb-6"
      />
      <h3 className="text-text text-lg lg:text-2xl font-bold mb-1">{name}</h3>
      <p className="text-paragraph text-base lg:text-lg">{role}</p>
    </article>
  );
};

export default TeamMemberCard;
