import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="px-6 lg:px-24 py-6 lg:py-20 border-t border-secondary ">
      <div className="grid lg:grid-cols-2 items-center">
        <div>
          <div className="flex gap-3 items-center cursor-pointer mb-5">
            <img src={logo} alt="Logo" className="h-8 w-8 lg:w-12 lg:h-12" />
            <h2 className="text-sm lg:text-xl font-bold">Lalasia</h2>
          </div>
          <p className="text-paragraph text-sm lg:text-lg mb-7">
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </p>
        </div>
        <div className="flex justify-between lg:justify-end lg:gap-14 xl:gap-28">
          <navbar>
            <h6 className="text-text text-base lg:text-xl font-bold mb-3">
              Product
            </h6>
            <nav>
              <ul>
                <li className="text-paragraph text-sm lg:text-lg mb-2">
                  New Arrivals
                </li>
                <li className="text-paragraph text-sm lg:text-lg mb-2">
                  Best Sellings
                </li>
                <li className="text-paragraph text-sm lg:text-lg mb-2">
                  Home Decor
                </li>
                <li className="text-paragraph text-sm lg:text-lg mb-2">
                  Kitchen Set
                </li>
              </ul>
            </nav>
          </navbar>
          <navbar>
            <h6 className="text-text text-base lg:text-xl font-bold mb-3">
              Services
            </h6>
            <nav>
              <ul>
                <li className="text-paragraph text-sm lg:text-lg mb-2">
                  Catalog
                </li>
                <li className="text-paragraph text-sm lg:text-lg mb-2">Blog</li>
                <li className="text-paragraph text-sm lg:text-lg mb-2">Faq</li>
                <li className="text-paragraph text-sm lg:text-lg mb-2">
                  Pricing
                </li>
              </ul>
            </nav>
          </navbar>
          <navbar>
            <h6 className="text-text text-base lg:text-xl font-bold mb-3">
              Follow Us
            </h6>
            <nav>
              <ul>
                <li className="text-paragraph text-sm lg:text-lg mb-2">
                  Facebook
                </li>
                <li className="text-paragraph text-sm lg:text-lg mb-2">
                  Instagram
                </li>
                <li className="text-paragraph text-sm lg:text-lg mb-2">
                  Twitter
                </li>
              </ul>
            </nav>
          </navbar>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
