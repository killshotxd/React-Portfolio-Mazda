import React from "react";
import { Ring } from "react-awesome-spinners";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <h1>
        <Ring />
      </h1>
    </div>
  );
};

export default Loading;
