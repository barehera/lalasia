import React from "react";
import logo from "../assets/logo.svg";
import userIcon from "../assets/icons/user.svg";
import bagIcon from "../assets/icons/bag.svg";
import menuIcon from "../assets/icons/menu.svg";
const Header = () => {
  return (
    <header className="flex items-center justify-between lg:py-10 lg:px-24 px-6 py-5 text-text border-b-[1.5px] border-line">
      <figure className="flex gap-3 items-center justify-center">
        <img src={logo} alt="Logo" className="h-11 w-11" />
        <figcaption className="text-lg font-bold">Lalasia</figcaption>
      </figure>
      <navbar className="lg:flex items-center justify-center gap-14 hidden">
        <nav>Product</nav>
        <nav>Services</nav>
        <nav>Article</nav>
        <nav>About Us</nav>
      </navbar>
      <navbar className="lg:flex items-center justify-center gap-6 hidden">
        <nav>
          <img src={bagIcon} alt="Shopping Bag Icon"></img>
        </nav>
        <nav>
          <img src={userIcon} alt="User Icon"></img>
        </nav>
      </navbar>
      <img src={menuIcon} alt="Menu Icon" className="lg:hidden" />
    </header>
  );
};

export default Header;
