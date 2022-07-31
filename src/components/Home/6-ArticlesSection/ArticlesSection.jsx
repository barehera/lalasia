import React from "react";
import article1 from "../../../assets/article-1.png";
import article2 from "../../../assets/article-2.png";
import article3 from "../../../assets/article-3.png";
import article4 from "../../../assets/article-4.png";
import articleUser1 from "../../../assets/article-user-1.png";
import articleUser2 from "../../../assets/article-user-2.png";
import articleUser3 from "../../../assets/article-user-3.png";
import ArticleUserCard from "./UI/ArticleUserCard";
import ArticleSliderCard from "./UI/ArticleSliderCard";
import SectionLayout from "../../layouts/SectionLayout";

const ArticlesSection = () => {
  return (
    <SectionLayout x={true} y={true}>
      <div className="grid  xl:grid-cols-2 gap-7 items-end">
        <div>
          <article>
            <h5 className="text-secondary text-sm lg:text-lg font-bold mb-3">
              Articles
            </h5>
            <h2 className="text-text text-2xl lg:text-5xl font-bold mb-7">
              The best furniture comes from Lalasia
            </h2>
            <p className="text-paragraph text-sm lg:text-lg mb-12">
              Pellentesque etiam blandit in tincidunt at donec.
            </p>

            <ArticleSliderCard
              id={"1"}
              image={article4}
              category="Tips and Trick"
              title="Create Cozy Dinning Room Vibes"
              text="Decorating with neutrals brings balance to the dining room. With eclectic decoration on the sides, Caruso Dining Table and Cyrillo Dining Chairs elevate the tonal base of the room. The modern furniture set gives personality to any space in all types of architecture. The wide volume enables everyone to sit back and relax, be it in the dining room, conference, or office."
            ></ArticleSliderCard>
          </article>
        </div>
        <div className="flex flex-col gap-7">
          <ArticleUserCard
            image={article1}
            category="Tips and Trick"
            title="6 ways to give your home minimalistic vibes"
            text="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum ."
            userImage={articleUser1}
            name="Jerremy Jean"
            date="Friday, 1 April 2022"
          ></ArticleUserCard>
          <ArticleUserCard
            image={article2}
            category="Design Inspiration"
            title="How to make your interiors cooler and more stylish"
            text="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum ."
            userImage={articleUser2}
            name="Michaela Augus"
            date="Friday, 1 April 2022"
          ></ArticleUserCard>
          <ArticleUserCard
            image={article3}
            category="Tips and Trick"
            title="Elements to add character to your space"
            text="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum ."
            userImage={articleUser3}
            name="Kim Gurameh"
            date="Friday, 1 April 2022"
          ></ArticleUserCard>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ArticlesSection;
