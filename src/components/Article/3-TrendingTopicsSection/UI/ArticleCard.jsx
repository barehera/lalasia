import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <article className="flex items-center gap-2 lg:gap-6 hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer">
      <img
        src={article.image}
        alt="Article"
        className="w-28 h-28 lg:w-52 lg:h-52 object-cover"
      />
      <div>
        <p className="text-paragraph text-xs lg:text-lg mb-2">
          {article.category}
        </p>
        <h3 className="text-text text-sm lg:text-2xl font-bold mb-3">
          {article.title}
        </h3>
        <p className="text-paragraph text-xs lg:text-lg mb-4 hidden md:block">
          {article.text.slice(0, 100)}...
        </p>
        <div className="flex items-center gap-3">
          <img src={article.creatorImage} alt="Creator" />
          <h6 className="text-text text-xs lg:text-sm font-bold">
            {article.creatorName}
          </h6>
          <p className="text-paragraph text-xs lg:text-sm hidden sm:block">
            {article.date}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
