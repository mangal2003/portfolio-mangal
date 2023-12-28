import React from "react";
import "./skills.css";
import ui_ux from "./ui_design.jpg";
import webDesign from "./website_design.jpg";

const Skills = () => {
  return (
    <section id="skills">
      <span id="skillTitle">
        What I do <br />
      </span>
      <span className="skillDescription">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS and JavaScript.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={ui_ux} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Crafting Experiences: Where Creativity Meets Functionality</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p> Translating Ideas into Immersive Experiences </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
