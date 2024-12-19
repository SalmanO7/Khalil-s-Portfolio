import React from "react";
import { projects } from "./Data";
import WorksItems from "./WroksItem";
import "./Work.css";

const Works = () => {
  return (
    <div className="work-box">
      <div className="work-container container grid">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
