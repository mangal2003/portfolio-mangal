import React from "react";
import "./works.css";
import apple from "./appleVisionPro.jpg";
import clock from "./digitalClock.jpg";
import bgmi from "./bgmi.jpg";
import passwordGenerator from "./passwordGenerator.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help business achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <a href="https://mangal2003.github.io/digitalclock/">
          <img src={clock} alt="Digital Clock" className="workImg" />
        </a>
        <a href="https://mangal2003.github.io/visionProClone/">
          <img src={apple} alt="Apple vision Pro" className="workImg" />
        </a>
        <a href="https://mangal2003.github.io/bgmiClone/">
          <img src={bgmi} alt="BGMI" className="workImg" />
        </a>

        <a href="https://mangal2003.github.io/passwordgenerator/">
          {" "}
          <img
            src={passwordGenerator}
            alt="Random Password Generator"
            className="workImg"
          />
        </a>
      </div>
      <button>
        <a href="https://github.com/mangal2003?tab=repositories">See More</a>
      </button>
    </section>
  );
};

export default Works;
