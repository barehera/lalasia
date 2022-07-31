import React from "react";

const SectionLayout = ({ children, x, y }) => {
  return (
    <section className={`${x && "px-6 lg:px-24"} ${y && "mt-24 lg:mt-44"}`}>
      {children}
    </section>
  );
};

export default SectionLayout;
