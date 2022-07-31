import React from "react";
import logo from "../../../assets/logo.svg";
import FooterLink from "./FooterLink";
import FooterTitle from "./FooterTitle";

const Footer = () => {
  return (
    <div className="border-t mt-24 lg:mt-44">
      <footer className="px-6 lg:px-24 py-6 lg:py-20  max-w-[120rem] mx-auto">
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
            <div>
              <FooterTitle title="Product"></FooterTitle>
              <nav>
                <ul>
                  <FooterLink title="New Arrivals" />
                  <FooterLink title="Best Sellings" />
                  <FooterLink title="Home Decor" />
                  <FooterLink title="Kitchen Set" />
                </ul>
              </nav>
            </div>
            <div>
              <FooterTitle title="Services"></FooterTitle>
              <nav>
                <ul>
                  <FooterLink title="Catalog" />
                  <FooterLink title="Blog" />
                  <FooterLink title="Faq" />
                  <FooterLink title="Pricing" />
                </ul>
              </nav>
            </div>
            <div>
              <FooterTitle title="Follow Us"></FooterTitle>
              <nav>
                <ul>
                  <FooterLink title="Facebook" />
                  <FooterLink title="Instagram" />
                  <FooterLink title="Twitter" />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
