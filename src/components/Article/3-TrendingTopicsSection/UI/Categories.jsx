import React from "react";
import { AiOutlineFilter } from "react-icons/ai";

const Categories = () => {
  return (
    <section className="mb-12 md:flex items-center justify-between hidden">
      <nav>
        <ul className="flex gap-5">
          <li className="text-text text-sm lg:text-lg font-bold cursor-pointer">
            All
          </li>
          <li className="text-paragraph text-sm lg:text-lg cursor-pointer">
            Tips And Trick
          </li>
          <li className="text-paragraph text-sm lg:text-lg cursor-pointer">
            Interior Design
          </li>
          <li className="text-paragraph text-sm lg:text-lg cursor-pointer">
            Design Inspiration
          </li>
          <li className="text-paragraph text-sm lg:text-lg cursor-pointer">
            Color Guide
          </li>
        </ul>
      </nav>
      <button className="flex items-center justify-center gap-3 lg:h-14 lg:w-32 w-24 h-12  border border-gray-50 rounded-sm hover:bg-gray-100 transition-all duration-300 ease-out ">
        <AiOutlineFilter className="text-text text-2xl"></AiOutlineFilter>
        <p className="text-text text-sm lg:text-lg">Filter</p>
      </button>
    </section>
  );
};

export default Categories;
