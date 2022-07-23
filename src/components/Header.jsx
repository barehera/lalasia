import React, { useState } from "react";
import logo from "../assets/logo.svg";
import userIcon from "../assets/icons/user.svg";
import bagIcon from "../assets/icons/bag.svg";
import menuIcon from "../assets/icons/menu.svg";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md">
      <header className="px-6 lg:px-24 flex items-center justify-between text-text  h-[72px] lg:h-[120px] max-w-[120rem] mx-auto ">
        <Link to="/">
          <div className="flex gap-3 items-center justify-center cursor-pointer hover:scale-110 transition-all duration-500 ease-out">
            <img src={logo} alt="Logo" className="h-11 w-11" />
            <h2 className="text-lg font-bold">Lalasia</h2>
          </div>
        </Link>

        <nav className="lg:flex items-center justify-center hidden h-full">
          <ul className="flex items-center justify-center gap-2 xl:gap-10 h-full">
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
            <li className="h-full">
              <Link
                className={`${
                  location.pathname === "/services"
                    ? " border-main text-main  hover:border-secondary"
                    : " border-transparent text-text"
                }  cursor-pointer border-b-4 flex items-center justify-center h-full  text-lg hover:-skew-x-12 px-5 hover:bg-main hover:text-white   transition-all duration-500 ease-out `}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="h-full">
              <Link
                className={`${
                  location.pathname === "/article"
                    ? " border-main text-main  hover:border-secondary"
                    : " border-transparent text-text"
                }  cursor-pointer border-b-4 flex items-center justify-center h-full  text-lg hover:-skew-x-12 px-5 hover:bg-main hover:text-white   transition-all duration-500 ease-out `}
                to="/article"
              >
                Article
              </Link>
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
      {open && (
        <nav className="  bg-white h-[72px]  items-center justify-center border-y lg:hidden">
          <ul className="flex items-center justify-center xl:gap-10 h-full w-full">
            <li className="h-full w-full">
              <Link
                className={`${
                  location.pathname === "/product"
                    ? " bg-main text-white font-bold"
                    : " border-transparent text-black font-semibold"
                }  cursor-pointer  flex items-center justify-center h-full  text-sm px-3 hover:bg-main hover:text-white   transition-all duration-500 ease-out `}
                to="/product"
              >
                Product
              </Link>
            </li>
            <li className="h-full w-full">
              <Link
                className={`${
                  location.pathname === "/services"
                    ? " bg-main text-white font-bold"
                    : " border-transparent text-black font-semibold"
                }  cursor-pointer  flex items-center justify-center h-full  text-sm px-3 hover:bg-main hover:text-white   transition-all duration-500 ease-out `}
                to="/services"
              >
                Services
              </Link>
            </li>

            <li className="h-full w-full">
              <Link
                className={`${
                  location.pathname === "/article"
                    ? " bg-main text-white font-bold"
                    : " border-transparent text-black font-semibold"
                }  cursor-pointer  flex items-center justify-center h-full  text-sm px-3 hover:bg-main hover:text-white   transition-all duration-500 ease-out `}
                to="/article"
              >
                Article
              </Link>
            </li>
            <li className="h-full w-full">
              <Link
                className={`${
                  location.pathname === "/about-us"
                    ? " bg-main text-white font-bold"
                    : " border-transparent text-black font-semibold"
                }  cursor-pointer  flex items-center justify-center h-full  text-sm px-3 hover:bg-main hover:text-white   transition-all duration-500 ease-out `}
                to="/about-us"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
