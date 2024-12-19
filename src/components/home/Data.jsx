import React from "react";
import { FaSmileWink } from "react-icons/fa";
const Data = () => {
  return (
    <>
      <div className="home-data">
        <div className="small-home-section">
          <h1 className="home-title">M Khalil Ur Rehman</h1>
          <h3 className="text-animation">
            I'm a <span></span>
          </h3>
          <p className="home-description">
            A passionate software developer with experience
            specializing in Flutter, dedicated to creating seamless
            cross-platform applications. Explore my dynamic portfolio showcasing
            expertise in Flutter.!
          </p>
        </div>
        <a href="#contact" className="button button-flex">
          Say Hi
          <FaSmileWink className="home-icon" />
        </a>
      </div>
    </>
  );
};

export default Data;
