import React, { useEffect } from "react";
import HeroSection from "../components/DetailArticle/1-HeroSection/HeroSection";
import ArticleTextSection from "../components/DetailArticle/2-ArticleTextSection/ArticleTextSection";
import SimilarTopicSection from "../components/DetailArticle/3-SimilarTopicSection/SimilarTopicSection";
import SubscribeSection from "../components/DetailArticle/4-SubscribeSection/SubscribeSection";
import PageLayout from "../components/layouts/PageLayout";

const DetailArticle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <HeroSection></HeroSection>
      <ArticleTextSection></ArticleTextSection>
      <SimilarTopicSection></SimilarTopicSection>
      <SubscribeSection></SubscribeSection>
    </PageLayout>
  );
};

export default DetailArticle;
