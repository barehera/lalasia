import React from "react";
import ProductCard from "./ProductCard";
import productImage1 from "../assets/product-1.png";
import productImage2 from "../assets/product-2.png";
import productImage3 from "../assets/product-3.png";
import productImage4 from "../assets/product-4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PopularProductsSection = () => {
  return (
    <section className="px-6 md:px-0 mt-24 lg:mt-44 mb-8 relative">
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
      <div className="flex justify-center  w-full">
        <Carousel
          additionalTransfrom={0}
          arrows
          centerMode={false}
          className="p-0 m-0"
          containerClass="container"
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1440,
              },
              items: 4,
            },
            mobile: {
              breakpoint: {
                max: 780,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1440,
                min: 780,
              },
              items: 2,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
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
        </Carousel>
      </div>
    </section>
  );
};

export default PopularProductsSection;
