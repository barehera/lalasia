import React from "react";
import ServicesCard from "./UI/ServicesCard";

const servicesData = [
  {
    title: "Furniture",
    text: "At the ultimate smart home, you're met with technology before you even step through the front door. ",
  },
  {
    title: "Home Decoration",
    text: "Create A Calming Summer Escape With Our Luxurious Home Accessories For The Balmy Evenings. ",
  },
  {
    title: "Kitchen Cabinet",
    text: "Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets.  ",
  },
  {
    title: "Interior Design",
    text: "Innovative products often feature innovative designs that play with the patterns we are familiar. ",
  },
  {
    title: "Exterior Design",
    text: "These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces. ",
  },
  {
    title: "Custom Furniture",
    text: "With Quality Materials and Modern Designs, we have Designs for all Tastes. we bring you World Class Designs. ",
  },
];

const ServicesSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44">
      <div className="grid grid-cols-3 gap-7">
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
