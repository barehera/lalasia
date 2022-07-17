import React from "react";
import MissionCard from "./MissionCard";
import mission1 from "../../assets/icons/mission-1.svg";
import mission2 from "../../assets/icons/mission-2.svg";
import mission3 from "../../assets/icons/mission-3.svg";

const OurMissionSection = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-24">
        <article>
          <h5 className="text-secondary text-sm lg:text-lg font-bold mb-2 lg:mb-3">
            Our Mission
          </h5>
          <h2 className="text-text text-2xl lg:text-5xl font-bold mb-7 lg:mb-12">
            Our team dedicated to help find smart home product
          </h2>
          <div className="flex justify-between gap-12">
            <article>
              <h3 className="text-text text-2xl lgtext-5xl font-bold">20+</h3>
              <p className="text-paragraph text-sm lg:text-lg">
                Years Experience
              </p>
            </article>
            <article>
              <h3 className="text-text text-2xl lgtext-5xl font-bold">483</h3>
              <p className="text-paragraph text-sm lg:text-lg">Happy Client</p>
            </article>
            <article>
              <h3 className="text-text text-2xl lgtext-5xl font-bold">150+</h3>
              <p className="text-paragraph text-sm lg:text-lg">
                Project Finished
              </p>
            </article>
          </div>
        </article>
        <div className="flex flex-col gap-7">
          <MissionCard
            image={mission1}
            title="24/7 Supports"
            text="24/7 support means a support service that is provided 24 hours a day and 7 days a week. "
          ></MissionCard>
          <MissionCard
            image={mission2}
            title="Free Consultation"
            text="A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible"
          ></MissionCard>
          <MissionCard
            image={mission3}
            title="Overall Guarantee"
            text="The comprehensive guarantee is required for import, warehousing, transit, processing and specific use. "
          ></MissionCard>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
