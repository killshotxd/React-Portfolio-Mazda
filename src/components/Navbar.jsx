import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="logo-name">
        <a href="#">Hassan.Dev</a>
      </div>
      <div className="navbar-items">
        <ul>
          <li>
            {" "}
            <a href="#">Home</a>{" "}
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
