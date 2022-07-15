import React from "react";
import logo from "../assets/logo.svg";
import userIcon from "../assets/icons/user.svg";
import bagIcon from "../assets/icons/bag.svg";
import menuIcon from "../assets/icons/menu.svg";
const Header = () => {
  return (
    <header className="px-6 lg:px-24 flex items-center justify-between lg:py-10 py-5 text-text border-b-[1.5px] border-line">
      <div className="flex gap-3 items-center justify-center cursor-pointer">
        <img src={logo} alt="Logo" className="h-11 w-11" />
        <h2 className="text-lg font-bold">Lalasia</h2>
      </div>
      <nav className="lg:flex items-center justify-center hidden">
        <ul className="flex items-center justify-center gap-14">
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Article</li>
          <li className="cursor-pointer">About Us</li>
        </ul>
      </nav>
      <nav className="lg:flex items-center justify-center hidden">
        <ul className="flex items-center justify-center gap-6">
          <li>
            <img src={bagIcon} alt="Shopping Bag Icon"></img>
          </li>
          <li>
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
