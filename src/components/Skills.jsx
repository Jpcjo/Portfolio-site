import React from "react";
import SectionTile from "../components/SectionTile";
import SkillsCard from "../components/SkillsCard";
import { skills } from "../data";
import { useEffect } from "react";

const Skills = () => {
  return (
    <section
      className="pt-28 pb-20 align-element md:px-20 md:pt-20"
      id="skills"
    >
      <SectionTile text="tech skills" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
//text="tech stack" is a prop to pass on

export default Skills;
