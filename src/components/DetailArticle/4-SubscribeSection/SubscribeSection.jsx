import React from "react";
import SectionLayout from "../../layouts/SectionLayout";

const SubscribeSection = () => {
  return (
    <SectionLayout x={true} y={true}>
      <article className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <h2 className="text-text text-2xl mb-4 lg:mb-0 lg:text-5xl font-bold lg:w-2/3">
          Subscribe our newsletter
        </h2>
        <button className="p-3 bg-main text-white text-sm lg:text-lg  w-48">
          Subscribe
        </button>
      </article>
    </SectionLayout>
  );
};

export default SubscribeSection;
