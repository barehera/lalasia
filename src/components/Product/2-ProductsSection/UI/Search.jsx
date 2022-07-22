import searchIcon from "../../../../assets//icons/search.svg";
import filter from "../../../../assets/icons/filter.svg";
import React from "react";

const Search = () => {
  return (
    <div className="px-6 lg:px-24 my-12 lg:my-24 lg:flex lg:items-center lg:gap-5">
      <div className="flex items-center  w-full px-4  lg:px-6  bg-screen py-2 shadow-[0_4px_80px_rgba(175,173,181,0.3)]">
        <img src={searchIcon} alt="Search Icon" className="w-6 h-6" />
        <input
          type="text"
          className="flex-1 p-1 lg:p-4 focus:border-none focus:outline-none placeholder:text-sm lg:placeholder:text-lg"
          placeholder="Search property"
        />
        <button className="text-white font-semibold bg-main p-2 text-xs lg:text-lg lg:w-36">
          Search
        </button>
      </div>

      <button className="bg-white hidden lg:flex items-center p-5 w-36 justify-center gap-2 text-text shadow-[0_4px_80px_rgba(175,173,181,0.3)]">
        <img src={filter} alt="Filter Icon" />
        <p className="text-text text-lg">Filter</p>
      </button>
    </div>
  );
};

export default Search;
