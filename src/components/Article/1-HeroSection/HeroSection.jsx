import React from "react";
import articleMain from "../../../assets/article-main.png";
import articleUser from "../../../assets/article-user-1.png";
import SectionLayout from "../../layouts/SectionLayout";
const HeroSection = () => {
  return (
    <SectionLayout x={true} y={true}>
      <article className="flex flex-col items-center justify-center text-center">
        <h1 className="text-text text-2xl lg:text-5xl font-bold mb-5">
          Article
        </h1>
        <p className="text-paragraph text-sm lg:text-lg mb-12">
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </p>
        <div className="relative flex items-center justify-center w-full">
          <img
            src={articleMain}
            alt="Article"
            className="w-full h-[200px] lg:h-[550px] object-cover"
          />
          <article className="flex flex-col items-start text-left p-3 lg:p-12 shadow-[0_4px_80px_rgba(175,173,181,0.3)] absolute -bottom-16 lg:-bottom-24 bg-white w-11/12">
            <p className="text-paragraph text-xs lg:text-lg mb-2">
              Tips And Trick
            </p>
            <h3 className="text-text text-sm lg:text-2xl font-bold mb-4">
              This 400-Square-Foot New York Apartment Is Maximized With Custom
              Millwork
            </h3>
            <div className="flex items-center gap-3">
              <img src={articleUser} alt="Article Creator" />
              <h6 className="text-text text-xs lg:text-sm font-bold">
                By Morgan Goldberg
              </h6>
              <p className="text-paragraph text-xs lg:text-sm hidden sm:block">
                Tuesday, 17 May 2022
              </p>
            </div>
          </article>
        </div>
      </article>
    </SectionLayout>
  );
};

export default HeroSection;
