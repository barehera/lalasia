import { Link, useLocation } from "react-router-dom";
import React from "react";

const HeaderLink = ({ title, route }) => {
  const location = useLocation();

  return (
    <li className="h-full">
      <Link
        className={`${
          location.pathname === route
            ? " border-main text-main  hover:border-secondary"
            : " border-transparent text-text"
        }  cursor-pointer border-b-4 flex items-center justify-center h-full text-sm font-semibold lg:font-normal lg:text-lg px-6  xl:px-12 hover:bg-main hover:text-white   transition-all duration-500 ease-out `}
        to={route}
      >
        {title}
      </Link>
    </li>
  );
};

export default HeaderLink;
