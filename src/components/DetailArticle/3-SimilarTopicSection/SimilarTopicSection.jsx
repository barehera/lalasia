import React from "react";
import { articleData } from "../../../data/articleData";
import ArticleCard from "./UI/ArticleCard";

const SimilarTopicSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44">
      <article className="flex flex-col items-center justify-center text-center">
        <h5 className="text-secondary text-sm lg:text-lg font-bold mb-3">
          Similar Topics
        </h5>
        <h2 className="text-text text-2xl lg:text-5xl font-bold mb-12">
          Maybe you’re interested
        </h2>
      </article>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
        {articleData.map((article, index) => (
          <ArticleCard
            key={index}
            image={article.image}
            title={article.title}
            category={article.category}
            text={article.text}
            creatorImage={article.creatorImage}
            creatorName={article.creatorName}
            date={article.date}
          ></ArticleCard>
        ))}
      </section>
    </section>
  );
};

export default SimilarTopicSection;
