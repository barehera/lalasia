import React from "react";
import portfolio1 from "../../../assets/portfolio-1.png";
import portfolio2 from "../../../assets/portfolio-2.png";
import portfolio3 from "../../../assets/portfolio-3.png";

const PortfolioSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44">
      <article className="grid lg:grid-cols-2 gap-4 lg:gap-7 mb-12 items-end">
        <div className="2xl:w-2/3">
          <h5 className="text-secondary text-sm lg:text-lg font-bold mb-2">
            Portfolio
          </h5>
          <h2 className="text-text text-2xl lg:text-5xl font-bold">
            Amazing project we’ve done before
          </h2>
        </div>
        <div className="2xl:flex 2xl:justify-end">
          <div className="2xl:w-2/3">
            <p className="text-paragraph text-lg mb-4">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non.
            </p>
            <button className="text-main text-lg font-bold">
              View Portfolio
            </button>
          </div>
        </div>
      </article>
      <section className="grid lg:grid-cols-2 lg:gap-7">
        <div>
          <article className="relative mb-5 lg:mb-0">
            <img
              src={portfolio1}
              alt="Portfolio"
              className="w-full h-[400px] lg:h-[40rem]"
            />
            <div className="absolute bottom-0 p-3 lg:p-7">
              <h3 className="text-white text-sm lg:text-2xl font-bold mb-1">
                Siska Kohl’s Bedroom
              </h3>
              <p className="text-white text-xs lg:text-lg mb-3">
                We start renovating her bedroom with minimalist...
              </p>
              <button className="text-white text-xs lg:text-lg">
                See Detail
              </button>
            </div>
          </article>
        </div>
        <div className="flex flex-col justify-between ">
          <article className="relative mb-5 lg:mb-0">
            <img
              src={portfolio2}
              alt="Portfolio"
              className="w-full h-[400px] lg:h-[19rem] object-cover"
            />
            <div className="absolute bottom-0 p-3 lg:p-7">
              <h3 className="text-white text-sm lg:text-2xl font-bold mb-1">
                Jeruk Veldevana Living Room Design
              </h3>
              <p className="text-white text-xs lg:text-lg mb-3">
                We start renovating her bedroom with minimalist...
              </p>
              <button className="text-white text-xs lg:text-lg">
                See Detail
              </button>
            </div>
          </article>
          <article className="relative">
            <img
              src={portfolio3}
              alt="Portfolio"
              className="w-full h-[400px] lg:h-[19rem] object-cover"
            />
            <div className="absolute bottom-0 p-3 lg:p-7">
              <h3 className="text-white text-sm lg:text-2xl font-bold mb-1">
                Cozy Co-working space
              </h3>
              <p className="text-white text-xs lg:text-lg mb-3">
                We start renovating her bedroom with minimalist...
              </p>
              <button className="text-white text-xs lg:text-lg">
                See Detail
              </button>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default PortfolioSection;
