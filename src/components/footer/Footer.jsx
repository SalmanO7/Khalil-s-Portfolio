import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { CiFacebook } from "react-icons/ci";
import { RiMediumLine } from "react-icons/ri";
import { FaStackOverflow } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">&lt;MKhalilUrRehman /&gt;</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skill" className="footer-link">
              Skills
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-social socialMedia">
        <a
          href="https://www.instagram.com/khalil.flutter/"
          className="footer-social-link"
          target="blank"
        >
          <CiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-khalil-ur-rehman/"
          target="blank"
        >
          <CiLinkedin />
        </a>
        <a
          href="https://github.com/Build-With-Khalil"
          className="footer-social-link"
          target="blank"
        >
          <VscGithubAlt />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100082018273158"
          className="footer-social-link"
          target="blank"
        >
          <CiFacebook />
        </a>
        <a
          href="https://medium.com/@mkhalilurrehman"
          className="footer-social-link"
          target="blank"
        >
          <RiMediumLine />
        </a>
        <a
          href="https://stackoverflow.com/users/27552503/muhammad-khalil-ur-rehman"
          className="footer-social-link"
          target="blank"
        >
          <FaStackOverflow />
        </a>
      </div>
      <span className="footer-copy">
        &#169;Muhammad Khalil Ur Rehman. All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
