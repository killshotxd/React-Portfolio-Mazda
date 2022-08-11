import React from "react";
import "./Project.css";

const Project = ({ id, name, image, desc }) => {
  return (
    <>
      <div className="two-container">
        <div className="pr-img-container">
          <img src={image} alt={name} />
        </div>
        <div className="pr-text-container">
          <h2>{name}</h2>
          <p>{desc}</p>

          <div className="btn-wrapper">
            <p className="prim-btn">Live</p>
            <p className="sec-btn">Source</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
