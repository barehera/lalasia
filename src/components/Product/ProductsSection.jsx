import React from "react";
import searchIcon from "../../assets//icons/search.svg";

import ProductCard from "../Product/ProductCard";
import productImage1 from "../../assets/product-1.png";
import productImage2 from "../../assets/product-2.png";
import productImage3 from "../../assets/product-3.png";
import productImage4 from "../../assets/product-4.png";
import productImage5 from "../../assets/product-5.png";
import productImage6 from "../../assets/product-6.png";
import filter from "../../assets/icons/filter.svg";
import Pagination from "./Pagination";
const ProductsSection = () => {
  return (
    <section>
      <div className="mx-6 lg:mx-24 my-10 flex items-center gap-5">
        <div className=" flex items-center bg-screen py-2 px-6 shadow-[0_4px_80px_rgba(175,173,181,0.3)] flex-1">
          <img src={searchIcon} alt="Search Icon" />
          <input
            type="text"
            className="flex-1 p-4 focus:border-none focus:outline-none"
            placeholder="Search property"
          />
          <button className="text-white font-semibold bg-main p-2 lg:w-32 w-24">
            Search
          </button>
        </div>

        <button className="bg-white hidden lg:flex items-center p-5 w-36 justify-center gap-2 text-text shadow-[0_4px_80px_rgba(175,173,181,0.3)]">
          <img src={filter} alt="Filter Icon" />
          <p className="text-text text-lg">Filter</p>
        </button>
      </div>

      <section className="px-6 lg:px-24">
        <div className="flex gap-2 items-center">
          <h5 className="text-text text-lg font-bold">Total Products</h5>
          <p className="text-main text-xs font-bold p-2 bg-gray-100 rounded-full w-10 flex items-center justify-center">
            184
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-8">
          <ProductCard
            image={productImage1}
            title="Wooden Bookshelf"
            category="Bookshelf"
            desc="Combination of wood and wool"
            price="48.99"
          ></ProductCard>
          <ProductCard
            image={productImage2}
            title="White Aesthetic Chair"
            category="Chair"
            desc="Combination of wood and wool"
            price="63.47"
          ></ProductCard>
          <ProductCard
            image={productImage3}
            title="Bardono Smart Lamp"
            category="Lamp"
            desc="Easy to use with bluetooth connection"
            price="89.90"
          ></ProductCard>
          <ProductCard
            image={productImage4}
            title="Sofa Empuk Banget"
            category="Sofa"
            desc="Using kapuk randu material"
            price="58.99"
          ></ProductCard>
          <ProductCard
            image={productImage5}
            title="Minimalist Lounge Chair"
            category="Chair"
            desc="Combination of wood and wool"
            price="158.99"
          ></ProductCard>
          <ProductCard
            image={productImage6}
            title="Plant With Clay Stand"
            category="Decoration"
            desc="Using kapuk randu material"
            price="19.99"
          ></ProductCard>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-20 mb-24">
          <Pagination></Pagination>
        </div>
      </section>
    </section>
  );
};

export default ProductsSection;
