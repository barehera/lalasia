import React from "react";

const FooterLink = ({ title }) => {
  return (
    <li className="text-paragraph text-sm lg:text-lg mb-2 hover:scale-110  transition-all duration-500 ease-out cursor-pointer">
      {title}
    </li>
  );
};

export default FooterLink;
