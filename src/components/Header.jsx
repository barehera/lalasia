import React from "react";
import logo from "../assets/logo.svg";
import userIcon from "../assets/icons/user.svg";
import bagIcon from "../assets/icons/bag.svg";
import menuIcon from "../assets/icons/menu.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="px-6 lg:px-24 flex items-center justify-between text-text shadow-md h-[72px] lg:h-[120px] ">
      <Link to="/">
        <div className="flex gap-3 items-center justify-center cursor-pointer hover:scale-110 transition-all duration-500 ease-out">
          <img src={logo} alt="Logo" className="h-11 w-11" />
          <h2 className="text-lg font-bold">Lalasia</h2>
        </div>
      </Link>

      <nav className="lg:flex items-center justify-center hidden h-full">
        <ul className="flex items-center justify-center gap-10 h-full">
          <li className="h-full">
            <Link
              className={`${
                location.pathname === "/product"
                  ? " border-main text-main  hover:border-secondary"
                  : " border-transparent text-text"
              }  cursor-pointer border-b-4 flex items-center justify-center h-full  text-lg hover:-skew-x-12 px-5 hover:bg-main hover:text-white   transition-all duration-500 ease-out `}
              to="/product"
            >
              Product
            </Link>
          </li>
          <li
            className={`${
              location.pathname === "/services"
                ? " border-main text-main  hover:border-secondary"
                : " border-transparent text-text"
            }  cursor-pointer border-b-4 flex items-center justify-center h-full  text-lg hover:-skew-x-12 px-5 hover:bg-main hover:text-white   transition-all duration-500 ease-out`}
          >
            Services
          </li>
          <li
            className={`${
              location.pathname === "/article"
                ? " border-main text-main  hover:border-secondary"
                : " border-transparent text-text"
            }  cursor-pointer border-b-4 flex items-center justify-center h-full  text-lg hover:-skew-x-12 px-5 hover:bg-main hover:text-white   transition-all duration-500 ease-out`}
          >
            Article
          </li>
          <li className="h-full">
            <Link
              className={`${
                location.pathname === "/about-us"
                  ? " border-main text-main  hover:border-secondary"
                  : " border-transparent text-text"
              }  cursor-pointer border-b-4 flex items-center justify-center h-full  text-lg hover:-skew-x-12 px-5 hover:bg-main hover:text-white   transition-all duration-500 ease-out `}
              to="/about-us"
            >
              About Us
            </Link>
          </li>
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
      <img
        src={menuIcon}
        alt="Menu Icon"
        className="lg:hidden cursor-pointer"
      />
    </header>
  );
};

export default Header;
