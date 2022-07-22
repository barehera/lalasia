import React from "react";
import ServicesCard from "./UI/ServicesCard";
import { servicesData } from "../../../data/services";

const ServicesSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44">
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
    </section>
  );
};

export default ServicesSection;
