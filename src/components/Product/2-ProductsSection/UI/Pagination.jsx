import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Pagination = () => {
  return (
    <div className="bg-white flex items-center justify-between ">
      <div className="flex items-center justify-between">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <div className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Previous</span>
              <IoIosArrowBack className="h-5 w-5" aria-hidden="true" />
            </div>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-100 text-gray-500 hover:bg-gray-50" */}
            <div
              aria-current="page"
              className="z-10 bg-main text-white  relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </div>
            <div className="bg-white border-gray-100 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              2
            </div>
            <div className="bg-white border-gray-100 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
              3
            </div>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-100 bg-white text-sm font-medium text-gray-700">
              ...
            </span>

            <div className="bg-white border-gray-100 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              10
            </div>
            <div className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-100 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span className="sr-only">Next</span>
              <IoIosArrowForward className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
