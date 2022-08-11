import React from "react";
import { useState } from "react";
import Project from "./components/Project";
import projectData from "./projectData";

const Projects = () => {
  const [myProject, setMyProject] = useState(projectData);
  return (
    <section>
      <div className="projects-container">
        {myProject.map((myP) => {
          return <Project key={myProject.id} {...myP}></Project>;
        })}
      </div>
    </section>
  );
};

export default Projects;
