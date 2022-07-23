import React from "react";

const DailyNewsArticleCard = ({ article }) => {
  const { image, category, title, text, creatorName, creatorImage, date } =
    article;
  return (
    <article className="hover:scale-[1.02] transition-all duration-300 ease-out cursor-pointer">
      <img
        src={image}
        alt="Daily New Articles"
        className="w-full h-[180px] lg:h-[340px] object-cover mb-4"
      />
      <p className="text-paragraph text-xs lg:text-lg mb-2">{category}</p>
      <h3 className="text-text text-sm lg:text-2xl font-bold mb-3">
        {title.slice(0, 35)}...
      </h3>
      <p className="text-paragraph text-xs lg:text-lg mb-4">
        {text.slice(0, 120)}...
      </p>
      <div className="flex items-center gap-3">
        <img src={creatorImage} alt="Creator of Article" />
        <h6 className="text-text text-xs lg:text-sm font-bold">
          {creatorName}
        </h6>
        <p className="text-paragraph text-xs lg:text-sm hidden sm:block">
          {date}
        </p>
      </div>
    </article>
  );
};

export default DailyNewsArticleCard;
