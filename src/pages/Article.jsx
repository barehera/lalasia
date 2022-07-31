import React from "react";
import HeroSection from "../components/Article/1-HeroSection/HeroSection";
import DailyNewsSection from "../components/Article/2-DailyNewsSection/DailyNewsSection";
import TrendingTopicsSection from "../components/Article/3-TrendingTopicsSection/TrendingTopicsSection";
import SubscribeSection from "../components/Article/4-SubscribeSection/SubscribeSection";
import PageLayout from "../components/layouts/PageLayout";

const Article = () => {
  return (
    <PageLayout>
      <HeroSection></HeroSection>
      <DailyNewsSection></DailyNewsSection>
      <TrendingTopicsSection></TrendingTopicsSection>
      <SubscribeSection></SubscribeSection>
    </PageLayout>
  );
};

export default Article;
