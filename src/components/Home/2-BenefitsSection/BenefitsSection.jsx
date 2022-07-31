import React from "react";
import benefit1 from "../../../assets/icons/benefit-1.svg";
import benefit2 from "../../../assets/icons/benefit-2.svg";
import benefit3 from "../../../assets/icons/benefit-3.svg";
import SectionLayout from "../../layouts/SectionLayout";
import BenefitCard from "./UI/BenefitCard";
const BenefitsSection = () => {
  return (
    <SectionLayout x={true} y={true}>
      <article className="mb-5 lg:mb-12 grid lg:grid-cols-3 items-center lg:gap-7">
        <div className=" mb-4 lg:col-span-2">
          <h6 className="text-secondary text-sm font-bold mb-2">Benefits</h6>
          <h3 className="text-text text-2xl font-bold lg:text-5xl">
            Benefits when using our services
          </h3>
        </div>
        <p className="text-paragraph lg:text-lg lg:col-span-1">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </article>
      <div className="grid md:grid-cols-3 gap-7">
        <BenefitCard
          title="Many Choises"
          text=" Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non "
          icon={benefit1}
        ></BenefitCard>
        <BenefitCard
          title="Fast and On Time"
          text=" Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non "
          icon={benefit2}
        ></BenefitCard>
        <BenefitCard
          title="Affordable Price"
          text=" Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non "
          icon={benefit3}
        ></BenefitCard>
      </div>
    </SectionLayout>
  );
};

export default BenefitsSection;
