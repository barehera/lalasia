import React from "react";
import ServicesCard from "./UI/ServicesCard";
import { servicesData } from "../../../data/services";
import SectionLayout from "../../layouts/SectionLayout";

const ServicesSection = () => {
  return (
    <SectionLayout x={true} y={true}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {servicesData.map((service, index) => (
          <ServicesCard
            key={index}
            index={index}
            title={service.title}
            text={service.text}
          ></ServicesCard>
        ))}
      </div>
    </SectionLayout>
  );
};

export default ServicesSection;
