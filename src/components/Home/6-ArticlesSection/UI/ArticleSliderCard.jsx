import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleSliderCard = ({ image, category, title, text, id }) => {
  const navigate = useNavigate();
  return (
    <section className="relative" onClick={() => navigate(`/article/${id}`)}>
      <div className="relative">
        <img
          src={image}
          alt="article3"
          className="w-full h-80 lg:h-[40rem] lg:object-cover object-fill"
        />
        <div className="w-full h-full bg-black z-20 absolute top-0 bg-opacity-30"></div>
      </div>
      <article className="absolute bottom-0 z-30 p-7">
        <p className="text-white text-xs lg:text-lg mb-2">{category}</p>
        <h3 className="text-white text-base  lg:text-2xl font-bold mb-1">
          {title}
        </h3>
        <p className="text-white text-sm lg:text-lg mb-3">
          {text.slice(0, 40)}...
        </p>
        <button className="text-white text-sm lg:text-lg">Read More</button>
      </article>
    </section>
  );
};

export default ArticleSliderCard;
