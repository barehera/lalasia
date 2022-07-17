import React from "react";

const DiscountSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44 mb-24">
      <article className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <h2 className="text-text text-2xl lg:text-5xl font-bold mb-4 lg:mb-0">
          Join with me to get special discount
        </h2>
        <button className="text-sm lg:text-lg bg-main text-white p-3 w-32 lg:w-48">
          Learn More
        </button>
      </article>
    </section>
  );
};

export default DiscountSection;
