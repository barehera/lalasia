import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import userIcon from "../../../assets/icons/user.svg";
import bagIcon from "../../../assets/icons/bag.svg";
import menuIcon from "../../../assets/icons/menu.svg";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import MobileNav from "./MobileNav";
import HeaderLink from "./HeaderLink";
const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-sm">
      <header className="px-6 lg:px-24 flex items-center justify-between text-text h-[72px] lg:h-[120px] max-w-[110rem] mx-auto ">
        <Link to="/">
          <div className="flex gap-3 items-center justify-center cursor-pointer hover:scale-110 transition-all duration-500 ease-out">
            <img src={logo} alt="Logo" className="h-11 w-11" />
            <h2 className="text-lg font-bold">Lalasia</h2>
          </div>
        </Link>

        <nav className="lg:flex items-center justify-center hidden h-full">
          <ul className="flex items-center justify-center  h-full">
            <HeaderLink route="/product" title="Product"></HeaderLink>
            <HeaderLink route="/services" title="Services"></HeaderLink>
            <HeaderLink route="/article" title="Article"></HeaderLink>
            <HeaderLink route="/about-us" title="About Us"></HeaderLink>
          </ul>
        </nav>
        <nav className="lg:flex items-center justify-center hidden">
          <ul className="flex items-center justify-center gap-6">
            <li className="cursor-pointer">
              <img src={bagIcon} alt="Shopping Bag Icon"></img>
            </li>
            <li className="cursor-pointer">
              <img src={userIcon} alt="User Icon"></img>
            </li>
          </ul>
        </nav>
        {open ? (
          <>
            <AiOutlineClose
              onClick={() => setOpen(false)}
              className="text-2xl cursor-pointer lg:hidden"
            ></AiOutlineClose>
            <img
              src={menuIcon}
              alt="Menu Icon"
              onClick={() => setOpen(true)}
              className="cursor-pointer w-8 hidden lg:block"
            />
          </>
        ) : (
          <img
            src={menuIcon}
            alt="Menu Icon"
            onClick={() => setOpen(true)}
            className="lg:hidden cursor-pointer w-8"
          />
        )}
      </header>
      {/*Mobile nav */}
      <MobileNav open={open}></MobileNav>
    </div>
  );
};

export default Header;
