import React from "react";

const Project = ({ id, name, image }) => {
  return (
    <>
      <div className="two-container">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="text-container">
          <h2>{name}</h2>
        </div>
      </div>
    </>
  );
};

export default Project;
