import React from "react";

const ProductCard = ({ image, title, desc, category, price }) => {
  return (
    <article className="px-2 lg:px-4">
      <img
        src={image}
        alt={desc}
        className="mb-6 h-80 w-[40rem] object-cover"
      />
      <h5 className="text-paragraph font-semibold text-xs lg:text-lg mb-3">
        {category}
      </h5>
      <h3 className="text-text text-base lg:text-2xl font-bold mb-1">
        {title}
      </h3>
      <p className="text-paragraph text-sm lg:text-lg mb-4">{desc}</p>
      <h3 className="text-text text-base lg:text-2xl font-bold">$ {price}</h3>
    </article>
  );
};

export default ProductCard;
