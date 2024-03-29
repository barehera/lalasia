import React from "react";
import { useNavigate } from "react-router-dom";

const RelatedItemCard = ({ relatedItem }) => {
  const navigate = useNavigate();
  return (
    <article
      className=" hover:scale-105 transition-all cursor-pointer duration-300"
      onClick={() => navigate(`/product/${relatedItem.id}`)}
    >
      <img
        src={relatedItem.image}
        alt="Product"
        className="w-full h-52 lg:h-60 xl:h-80 mb-2 lg:mb-6 object-cover"
      />
      <p className="text-paragraph text-xs lg:text-lg font-bold mb-3">
        {relatedItem.category}
      </p>
      <h3 className="text-text text-sm lg:text-2xl font-bold mb-1">
        {relatedItem.title.slice(0, 15)}...
      </h3>
      <p className="text-paragraph text-xs lg:text-lg mb-4">
        {relatedItem.desc.slice(0, 25)}...
      </p>
      <p className="text-text text-xs lg:text-2xl font-bold">
        ${relatedItem.price}
      </p>
    </article>
  );
};

export default RelatedItemCard;
