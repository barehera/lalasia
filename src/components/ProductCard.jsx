import React from "react";

const ProductCard = ({ image, title, desc, category, price }) => {
  return (
    <article className="flex flex-col justify-center items-center mx-3">
      <img src={image} alt={desc} className="mb-6 h-80 w-96 object-cover " />
      <h5 className="text-paragraph font-semibold text-lg mb-3">{category}</h5>
      <h3 className="text-text text-2xl font-bold mb-1">{title}</h3>
      <p className="text-paragraph text-lg mb-4">{desc}</p>
      <h3 className="text-text text-2xl font-bold">$ {price}</h3>
    </article>
  );
};

export default ProductCard;
