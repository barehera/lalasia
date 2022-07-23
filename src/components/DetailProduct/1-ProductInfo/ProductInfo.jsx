import React from "react";
import productImage from "../../../assets/product-2.png";

const ProductInfo = () => {
  return (
    <section className="px-6 lg:px-24 mt-24">
      <article className="grid lg:grid-cols-2 gap-12">
        <img
          src={productImage}
          alt="Product"
          className="w-full h-[330px] md:h-[450px] lg:h-[600px] object-cover"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-text text-2xl lg:text-5xl font-bold mb-2">
            White Aesthetic Chair
          </h2>
          <p className="text-paragraph text-lg mb-7">
            Combination of wood and wool
          </p>
          <h5 className="text-text text-sm lg:text-lg font-bold mb-2 lg:mb-5">
            Color
          </h5>
          <div className="flex mb-5">
            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-black hover:scale-105 transition-all duration-300 ease-out cursor-pointer"></div>
            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#314443] hover:scale-105 transition-all duration-300 ease-out cursor-pointer"></div>
            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#c5a26e] hover:scale-105 transition-all duration-300 ease-out cursor-pointer"></div>
            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#d8dbe0] hover:scale-105 transition-all duration-300 ease-out cursor-pointer"></div>
          </div>
          <p className="text-paragraph text-sm lg:text-lg mb-7">
            Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
            facilisis facilisis ligula felis et a parturient aenean. Ac maecenas
            ultricies felis risus scelerisque duis posuere...{" "}
            <b className="text-main">Read More</b>
          </p>
          <h3 className="text-text text-2xl lg:text-5xl font-bold mb-12">
            $99.99
          </h3>
          <div className="flex flex-col lg:flex-row gap-7">
            <button className="w-full bg-main h-14 text-white  text-base lg:text-lg font-bold">
              Buy Now
            </button>
            <button className="w-full bg-white border border-gray-100 rounded-sm h-14 text-black text-base lg:text-lg font-bold">
              Add To Chart
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductInfo;
