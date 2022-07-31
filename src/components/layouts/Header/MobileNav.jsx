import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLink from "./HeaderLink";

const MobileNav = ({ open }) => {
  const location = useLocation();
  return (
    <>
      {open && (
        <nav className="  bg-white h-[72px]  items-center justify-center border-y lg:hidden">
          <ul className="flex items-center justify-center xl:gap-10 h-full w-full">
            <HeaderLink route="/product" title="Product"></HeaderLink>
            <HeaderLink route="/services" title="Services"></HeaderLink>
            <HeaderLink route="/article" title="Article"></HeaderLink>
            <HeaderLink route="/about-us" title="About Us"></HeaderLink>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileNav;
