import React from "react";
import ArticleCard from "./UI/ArticleCard";
import Categories from "./UI/Categories";
import { articleData } from "../../../data/articleData";

const TrendingTopicsSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44">
      <article>
        <h5 className="text-secondary text-sm lg:text-lg font-bold mb-3">
          Trending Topics
        </h5>
        <h2 className="text-text text-2xl lg:text-5xl font-bold mb-7">
          Popular Last Week
        </h2>
      </article>

      <Categories></Categories>
      <section className="grid gap-7">
        {articleData.map((article, index) => (
          <ArticleCard key={index} article={article}></ArticleCard>
        ))}
        <div className="flex items-center justify-center mt-12">
          <button className="text-text text-sm lg:text-lg font-bold h-12 w-24 lg:h-14 lg:w-44 border border-gray-50 rounded-sm hover:bg-gray-50 transition-all duration-300 ease-out">
            Load More
          </button>
        </div>
      </section>
    </section>
  );
};

export default TrendingTopicsSection;
