import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import TestimonialCard from "./UI/TestimonialCard";
import user2 from "../../../assets/testimonial-user-2.png";
import user1 from "../../../assets/testimonial-user-1.png";
import SectionLayout from "../../layouts/SectionLayout";

const TestimonialsSection = () => {
  function SampleNextArrow({ onClick }) {
    return (
      <button
        className="bg-black hidden bg-opacity-50 h-12 w-12 rounded-full text-white  items-center justify-center absolute top-1/2 right-6 -translate-y-1/2 hover:scale-110 transition-all duration-300 ease-out "
        onClick={onClick}
      >
        <IoIosArrowForward size={24}></IoIosArrowForward>
      </button>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <button
        className="bg-black hidden bg-opacity-50 h-12 w-12 rounded-full text-white  items-center justify-center absolute top-1/2 left-6 z-50 -translate-y-1/2 hover:scale-110 transition-all duration-300 ease-out"
        onClick={onClick}
      >
        <IoIosArrowBack size={24}></IoIosArrowBack>
      </button>
    );
  }

  const settings = {
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",

    centerPadding: "450px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          centerMode: true,
          className: "center",
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "350px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerMode: true,
          className: "center",
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          className: "center",
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          className: "center",
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: false,
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
          Testimonials
        </h6>
        <h3 className="text-text text-2xl lg:text-5xl font-bold mb-4">
          What our customer say
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
          <TestimonialCard
            comment="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non. Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non."
            profileImage={user1}
            name="Berry Gunawan"
            rate="3.4"
          ></TestimonialCard>
          <TestimonialCard
            comment="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non. Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non."
            profileImage={user1}
            name="Janne Cooper"
            rate="4.3"
          ></TestimonialCard>
          <TestimonialCard
            comment="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non. Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
        placerat nisi, adipiscing mauris non."
            profileImage={user2}
            name="Adam Alvin"
            rate="4.8"
          ></TestimonialCard>
        </Slider>
      </div>
    </SectionLayout>
  );
};

export default TestimonialsSection;
