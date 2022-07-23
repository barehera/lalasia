import React from "react";
import ProductCard from "./UI/ProductCard";
import Pagination from "./UI/Pagination";
import Search from "./UI/Search";
import { productData } from "../../../data/productData";

const ProductsSection = () => {
  return (
    <section>
      <Search></Search>
      <section className="px-6 lg:px-26">
        <div className="flex gap-2 items-center">
          <h5 className="text-text text-lg font-bold">Total Products</h5>
          <p className="text-main text-xs font-bold p-2 bg-gray-100 rounded-full w-10 flex items-center justify-center">
            184
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-8">
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              desc={product.desc}
              price={product.price}
            ></ProductCard>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-20 mb-24">
          <Pagination></Pagination>
        </div>
      </section>
    </section>
  );
};

export default ProductsSection;
