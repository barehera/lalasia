import React from "react";
import ProductCard from "./UI/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { productData } from "../../../data/productData";
import SectionLayout from "../../layouts/SectionLayout";

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
    infinite: true,
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
    <SectionLayout x={false} y={true}>
      <article className="flex flex-col items-center justify-center text-center mb-12">
        <h6 className="text-secondary text-sm lg:text-lg font-bold mb-2">
          Product
        </h6>
        <h3 className="text-text text-2xl lg:text-5xl font-bold mb-4">
          Our Popular Products
        </h3>
        <p className="text-paragraph text-sm lg:text-lg text-start lg:w-1/2 lg:text-center px-6 lg:px-0">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </article>
      <div
        className="mx-auto max-w-full"
        id="carousel-with-products-and-products-details"
      >
        <Slider {...settings}>
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              desc={product.desc}
              price={product.price}
            ></ProductCard>
          ))}
        </Slider>
      </div>
    </SectionLayout>
  );
};

export default PopularProductsSection;
