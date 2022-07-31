import React, { useEffect } from "react";
import ProductInfo from "../components/DetailProduct/1-ProductInfo/ProductInfo";
import RelatedItems from "../components/DetailProduct/2-RelatedItemsSection/RelatedItems";
import PageLayout from "../components/layouts/PageLayout";

const DetailProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <ProductInfo></ProductInfo>
      <RelatedItems></RelatedItems>
    </PageLayout>
  );
};

export default DetailProduct;
