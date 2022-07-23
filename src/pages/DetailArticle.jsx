import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DetailArticle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header></Header>
      <main className="max-w-[120rem] mx-auto"></main>
      <Footer></Footer>
    </>
  );
};

export default DetailArticle;
