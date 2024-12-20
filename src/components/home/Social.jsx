import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

const Social = () => {
  return (
    <div className="home-social">
      <a
        href="https://www.instagram.com/khalil.flutter/"
        className="home-social-icon"
        target="blank"
      >
        <CiInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-khalil-ur-rehman/"
        className="home-social-icon"
        target="blank"
      >
        <CiLinkedin />
      </a>
      <a
        href="https://github.com/Build-With-Khalil"
        className="home-social-icon"
        target="blank"
      >
        <VscGithubAlt />
      </a>
    </div>
  );
};

export default Social;
