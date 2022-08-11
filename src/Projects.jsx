import React from "react";
import Project from "./components/Project";
import { projectData } from "./projectData";

const Projects = () => {
  console.log(...projectData);
  return (
    <section>
      <div className="projects-container">
        <Project {...projectData} />
      </div>
    </section>
  );
};

export default Projects;
