import React from "react";
import HeroSection from "../components/Article/1-HeroSection/HeroSection";
import DailyNewsSection from "../components/Article/2-DailyNewsSection/DailyNewsSection";
import TrendingTopicsSection from "../components/Article/3-TrendingTopicsSection/TrendingTopicsSection";
import SubscribeSection from "../components/Article/4-SubscribeSection/SubscribeSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Article = () => {
  return (
    <>
      <Header></Header>
      <main className="max-w-[120rem] mx-auto">
        <HeroSection></HeroSection>
        <DailyNewsSection></DailyNewsSection>
        <TrendingTopicsSection></TrendingTopicsSection>
        <SubscribeSection></SubscribeSection>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Article;
