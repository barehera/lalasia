import React from "react";
import ProductImage1 from "../../../assets/product-info-1.png";
import ProductImage2 from "../../../assets/product-info-2.png";

const ProductInfoSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44">
      <article>
        <div className="grid lg:grid-cols-2 items-end mb-4 lg:mb-12">
          {/*Title */}
          <div className="flex flex-col" id="title">
            <h5 className="text-secondary text-sm lg:text-lg font-bold mb-2 lg:mb-4">
              Our Products
            </h5>
            <h2 className="text-text text-2xl lg:text-5xl font-bold">
              Crafted by talented and high quality material
            </h2>
          </div>
          {/*Numbers */}
          <div className="hidden lg:flex items-center justify-end gap-12">
            <article>
              <h3 className="text-text text-5xl font-bold">20+</h3>
              <p className="text-paragraph text-lg">Years Experience</p>
            </article>
            <article>
              <h3 className="text-text text-5xl font-bold">483</h3>
              <p className="text-paragraph text-lg">Happy Client</p>
            </article>
            <article>
              <h3 className="text-text text-5xl font-bold">150+</h3>
              <p className="text-paragraph text-lg">Project Finished</p>
            </article>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-7">
          <div className="flex flex-col  relative">
            <p className="text-paragraph text-sm lg:text-lg mb-7 lg:mb-12">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
              morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
            </p>
            <button className="p-2 bg-main text-sm lg:text-md text-white mb-7 lg:mb-12 lg:w-36">
              Learn More
            </button>
            {/*Mobile Number */}
            <div className="flex lg:hidden  items-center justify-between mb-12">
              <article>
                <h3 className="text-text text-2xl font-bold">20+</h3>
                <p className="text-paragraph text-sm">Years Experience</p>
              </article>
              <article>
                <h3 className="text-text text-2xl font-bold">483</h3>
                <p className="text-paragraph text-sm">Happy Client</p>
              </article>
              <article>
                <h3 className="text-text text-2xl font-bold">150+</h3>
                <p className="text-paragraph text-sm">Project Finished</p>
              </article>
            </div>
            <div className="w-full h-full flex items-end">
              <img
                src={ProductImage1}
                alt="Product"
                className="w-full h-80 lg:h-60 xl:h-96  mb-5 lg:mb-0"
              />
            </div>
          </div>

          <img
            src={ProductImage2}
            alt="Product"
            className="w-full lg:h-full h-80 "
          />
        </div>
      </article>
    </section>
  );
};

export default ProductInfoSection;
