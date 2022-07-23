import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({
  image,
  category,
  title,
  text,
  creatorImage,
  creatorName,
  date,
}) => {
  const navigate = useNavigate();
  return (
    <article
      className="hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer"
      onClick={() => {
        navigate("/article/example-article");
        window.scrollTo(0, 0);
      }}
    >
      <img
        src={image}
        alt="Article"
        className="w-full h-[180px] lg:h-[360px] object-cover mb-6"
      />
      <p className="text-paragraph text-xs lg:text-lg mb-2">{category}</p>
      <h3 className="text-text text-sm lg:text-2xl font-bold mb-1">
        {title.slice(0, 45)}...
      </h3>
      <p className="text-paragraph text-xs lg:text-lg mb-4">
        {text.slice(0, 100)}...
      </p>
      <div className="flex items-center gap-3">
        <img src={creatorImage} alt="creator" />
        <h4 className="text-text text-xs lg:text-sm font-bold">
          {creatorName}
        </h4>
        <p className="text-paragraph text-sm hidden md:block">{date}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
