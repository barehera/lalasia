import React, { useEffect } from "react";
import HeroSection from "../components/DetailArticle/1-HeroSection/HeroSection";
import ArticleTextSection from "../components/DetailArticle/2-ArticleTextSection/ArticleTextSection";
import SimilarTopicSection from "../components/DetailArticle/3-SimilarTopicSection/SimilarTopicSection";
import SubscribeSection from "../components/DetailArticle/4-SubscribeSection/SubscribeSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DetailArticle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header></Header>
      <main className="max-w-[120rem] mx-auto">
        <HeroSection></HeroSection>
        <ArticleTextSection></ArticleTextSection>
        <SimilarTopicSection></SimilarTopicSection>
        <SubscribeSection></SubscribeSection>
      </main>
      <Footer></Footer>
    </>
  );
};

export default DetailArticle;
