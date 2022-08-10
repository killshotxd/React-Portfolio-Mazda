import React from "react";
import Navbar from "./components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="two-container">
        <div className="text-container">
          <h1>
            Hi, I'm <span>Hassan</span>
          </h1>
          <h2>
            I build and design <span>websites</span>
          </h2>
          <h2>
            I'm a very passionate <span>frontend developer</span>
          </h2>
          <h2>
            Tech Stack I use <span>HTML</span>, <span>CSS</span> ,{" "}
            <span>JavaScript</span> and <span>Reactjs</span>{" "}
          </h2>

          <div className="btn-wrapper">
            <p className="prim-btn">My Projects</p>
            <p className="sec-btn">Hire Me</p>
          </div>
        </div>

        <div className="img-container">
          <img
            src="https://avatars.githubusercontent.com/u/89957432?v=4"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
