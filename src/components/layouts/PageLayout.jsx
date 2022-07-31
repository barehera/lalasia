import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main className="max-w-[120rem] mx-auto">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default PageLayout;
