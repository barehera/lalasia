import React from "react";
import { dailyNewArticlesData } from "../../../data/dailyNewArticles";
import SectionLayout from "../../layouts/SectionLayout";
import DailyNewsArticleCard from "./UI/DailyNewsArticleCard";

const DailyNewsSection = () => {
  return (
    <SectionLayout x={true} y={true}>
      <article>
        <h5 className="text-secondary text-sm lg:text-lg font-bold mb-3">
          Daily News
        </h5>
        <h2 className="text-text text-2xl lg:text-5xl font-bold mb-7">
          Today top headlines
        </h2>
      </article>
      <section className="grid lg:grid-cols-2 gap-7">
        {dailyNewArticlesData.map((article, index) => (
          <DailyNewsArticleCard
            key={index}
            article={article}
          ></DailyNewsArticleCard>
        ))}
      </section>
    </SectionLayout>
  );
};

export default DailyNewsSection;
