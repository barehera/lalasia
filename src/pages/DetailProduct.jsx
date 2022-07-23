import React, { useEffect } from "react";
import ProductInfo from "../components/DetailProduct/1-ProductInfo/ProductInfo";
import RelatedItems from "../components/DetailProduct/RelatedItemsSection/RelatedItems";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DetailProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header></Header>
      <main className="max-w-[120rem] mx-auto">
        <ProductInfo></ProductInfo>
        <RelatedItems></RelatedItems>
      </main>
      <Footer></Footer>
    </>
  );
};

export default DetailProduct;
