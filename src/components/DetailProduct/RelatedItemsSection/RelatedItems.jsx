import React from "react";
import RelatedItemCard from "./UI/RelatedItemCard";
import product3 from "../../../assets/product-3.png";
import product4 from "../../../assets/product-4.png";
import product5 from "../../../assets/product-5.png";

const relatedItems = [
  {
    image: product3,
    category: "Decoration",
    title: "Wooden Aesthetic Chair",
    desc: "Combination of wood and wool",
    price: "58.39",
  },
  {
    image: product4,
    category: "Decoration",
    title: "Plant With Clay Stand",
    desc: "Combination of wood and wool",
    price: "61.49",
  },
  {
    image: product5,
    category: "Decoration",
    title: "Oval Gold Mirror",
    desc: "Combination of wood and wool",
    price: "32.99",
  },
];

const RelatedItems = () => {
  return (
    <section className="px-6 lg:px-24 mt-12">
      <h3 className="text-text text-lg lg:text-2xl font-bold mb-7">
        Realted Items
      </h3>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
        {relatedItems.map((relatedItem, index) => (
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
