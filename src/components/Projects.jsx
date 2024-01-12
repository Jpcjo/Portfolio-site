import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "../components/SectionTile";

import React from "react";
import SectionTile from "../components/SectionTile";

const Projects = () => {
  return (
    <section
      className="pt-28 pb-20 align-element md:px-20 md:pt-20"
      id="projects"
    >
      <SectionTile text="Web Projects" />
      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
