import React from "react";
import "./about.css";
import { Link } from "react-scroll";
import photo from "./ShivMangalSingh.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <span className="hello">
          Hello, <br />
        </span>
        <span className="aboutText">
          I'm <span id="name">Shiv Mangal</span>
          <br /> Website Designer
        </span>
        <p className="aboutPara">
          I am a skilled web designer with experience in creating <br />
          visually appealing and user-friendly websites.
        </p>
        <Link>
          <button className="btn">📞 Hire Me</button>
        </Link>
      </div>
      <div>
        <img src={photo} alt="profile" id="bgPhoto" />
      </div>
    </section>
  );
};

export default About;
