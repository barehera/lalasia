import React from "react";
import RelatedItemCard from "./UI/RelatedItemCard";
import { productData } from "../../../data/productData";

import { useLocation } from "react-router-dom";

const RelatedItems = () => {
  const a = useLocation();
  const products = productData.filter((product) => {
    return product.id !== a.pathname.split("/")[2];
  });

  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44">
      <h3 className="text-text text-lg lg:text-2xl font-bold mb-7">
        Realted Items
      </h3>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
        {products.slice(0, 3).map((relatedItem, index) => (
          <RelatedItemCard
            key={index}
            relatedItem={relatedItem}
          ></RelatedItemCard>
        ))}
      </section>
    </section>
  );
};

export default RelatedItems;
