import React from "react";
import TeamMemberCard from "./UI/TeamMemberCard";
import member1 from "../../../assets/member-1.png";
import member2 from "../../../assets/member-2.png";
import member3 from "../../../assets/member-3.png";
import member4 from "../../../assets/member-4.png";
import member5 from "../../../assets/member-5.png";
import member6 from "../../../assets/member-6.png";

const OurTeam = () => {
  return (
    <section className="px-6 lg:px-24 mt-24 lg:mt-44">
      <article className="grid lg:grid-cols-2 items-end gap-3 lg:gap-44 mb-7 lg:mb-12">
        <div>
          <h5 className="text-secondary text-sm lg:text-lg font-bold mb-2 lg:mb-3">
            Our Team
          </h5>
          <h2 className="text-text text-2xl lg:text-5xl font-bold">
            Meet our leading and strong team
          </h2>
        </div>
        <p className="text-paragraph text-sm lg:text-lg ">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </article>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        <TeamMemberCard
          name="Jesse Depp"
          role="Founder & CEO"
          image={member1}
        ></TeamMemberCard>
        <TeamMemberCard
          name="Margareth Carter"
          role="COO"
          image={member2}
        ></TeamMemberCard>
        <TeamMemberCard
          name="Andrew Taggart"
          role="Developer"
          image={member3}
        ></TeamMemberCard>
        <TeamMemberCard
          name="Grace Marie"
          role="Manager"
          image={member4}
        ></TeamMemberCard>
        <TeamMemberCard
          name="Adam Kila"
          role="Senior Designer"
          image={member5}
        ></TeamMemberCard>
        <TeamMemberCard
          name="Çağan Büyükavcılar"
          role="Developer"
          image={member6}
        ></TeamMemberCard>
      </section>
    </section>
  );
};

export default OurTeam;
