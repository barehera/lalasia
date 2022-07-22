import React from "react";

const ArticleUserCard = ({
  category,
  image,
  title,
  text,
  userImage,
  name,
  date,
}) => {
  return (
    <article className="flex items-center  gap-3 lg:gap-7 ">
      <img
        src={image}
        alt={category}
        className="w-28 h-28 md:h-48 md:w-48 object-fill lg:h-60 lg:w-60"
      />

      <div>
        <p className="text-paragraph text-sm  lg:text-lg mb-1 lg:mb-4">
          {category}
        </p>
        <h3 className="text-text text-base lg:text-2xl font-bold mb-3">
          {title}
        </h3>
        <p className="text-paragraph text-lg mb-4 hidden lg:flex">
          {text.slice(0, 29)}...
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={userImage} alt="User" />
            <h6 className="text-text font-bold text-[0.7rem]">By {name}</h6>
          </div>
          <p className="text-paragraph text-[0.7rem] lg:text-sm hidden md:block">
            {date}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArticleUserCard;
