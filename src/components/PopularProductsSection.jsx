import React from "react";
import ProductCard from "./ProductCard";
import productImage1 from "../assets/product-1.png";
import productImage2 from "../assets/product-2.png";
import productImage3 from "../assets/product-3.png";
import productImage4 from "../assets/product-4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const PopularProductsSection = () => {
  function SampleNextArrow({ onClick }) {
    return (
      <button
        className="bg-black bg-opacity-50 h-12 w-12 rounded-full text-white flex items-center justify-center absolute top-1/2 right-6 -translate-y-1/2 hover:scale-110 transition-all duration-300 ease-out "
        onClick={onClick}
      >
        <IoIosArrowForward size={24}></IoIosArrowForward>
      </button>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <button
        className="bg-black bg-opacity-50 h-12 w-12 rounded-full text-white flex items-center justify-center absolute top-1/2 left-6 z-50 -translate-y-1/2 hover:scale-110 transition-all duration-300 ease-out"
        onClick={onClick}
      >
        <IoIosArrowBack size={24}></IoIosArrowBack>
      </button>
    );
  }

  const settings = {
    initialSlide: 2,
    infinite: false,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",

    centerPadding: "350px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          centerMode: true,
          className: "center",
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          className: "center",
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          className: "center",
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          className: "center",
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
    ],
  };
  return (
    <section className=" mt-24 lg:mt-44 mb-8 relative">
      <article className="flex flex-col items-center justify-center text-center mb-12">
        <h6 className="text-secondary text-sm lg:text-lg font-bold mb-2">
          Product
        </h6>
        <h3 className="text-text text-2xl lg:text-5xl font-bold mb-4">
          Our Popular Products
        </h3>
        <p className="text-paragraph text-sm lg:text-lg w-1/2">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </article>
      <div
        className="mx-auto max-w-full"
        id="carousel-with-products-and-products-details"
      >
        <Slider {...settings}>
          <ProductCard
            image={productImage1}
            title="Wooden Bookshelf"
            category="Bookshelf"
            desc="Combination of wood and wool"
            price="48.99"
          ></ProductCard>
          <ProductCard
            image={productImage2}
            title="White Aesthetic Chair"
            category="Chair"
            desc="Combination of wood and wool"
            price="63.47"
          ></ProductCard>
          <ProductCard
            image={productImage3}
            title="Bardono Smart Lamp"
            category="Lamp"
            desc="Easy to use with bluetooth connection"
            price="89.90"
          ></ProductCard>
          <ProductCard
            image={productImage4}
            title="Sofa Empuk Banget"
            category="Sofa"
            desc="Using kapuk randu material"
            price="58.99"
          ></ProductCard>
          <div className="w-96"></div>
        </Slider>
      </div>
    </section>
  );
};

export default PopularProductsSection;
