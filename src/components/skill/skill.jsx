import React from "react";
import skill_img_deco from "../../assets/svg/skill-image-deco.svg";
import Arrow from "../arrow/arrow";
import skill_image from "../../assets/images/skill-pic.PNG";
import polygon from "../../assets/images/Polygon.svg";
import html5 from "../../assets/images/html5.PNG";
import firebase from "../../assets/images/firebase.PNG";
import react from "../../assets/images/react.PNG";
import javascript from "../../assets/images/javascript.PNG";
import css from "../../assets/images/css3.PNG";
import "./skill.scss";

const Skill = () => {
  return (
    <section className="skill_container" id="skills">
      <div className="top_skill_section">
        <div className="left">
          <h1>Skill</h1>
          <p className="para">
            I take great pleasure in designing and developing various digital
            creations that cater to the needs of modern-day users.{" "}
          </p>
          <div className="stack_ratings">
            <div className="rating-box">
              <img src={html5} alt="" />
              <a href="">HTML5</a>
            </div>

            <div className="rating-box">
              <img src={css} alt="" />
              <a href="">CSS5</a>
            </div>

            <div className="rating-box">
              <img src={javascript} alt="" />
              <a href="">JAVASCRIPT</a>
            </div>

            <div className="rating-box">
      
              <img src={react} alt="" className="react" />
              <img src={polygon} alt="" className="polygon" />
              <a href="">REACT</a>
            </div>

            <div className="rating-box img">
              <img src={firebase} alt="" className="firebase" />
              <img src={polygon} alt="" className="polygon" />
              <a href="">FIREBASE</a>
            </div>
          </div>
        </div>

        <div className="right">
          <img src={skill_image} alt="" className="pentagon_img" />
        </div>
      </div>

      <Arrow 
      activeClass = "active"
      to= "project"
      spy= {true}
      smooth = {true}
      offset = {-70}
      duration = {500}
      

      />
      
    </section>
  );
};

export default Skill;
