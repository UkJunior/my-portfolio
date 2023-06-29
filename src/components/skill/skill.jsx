import React from "react";
import skill_img_deco from "../../assets/svg/skill-image-deco.svg";
import Arrow from "../arrow/arrow";
import skill_image from "../../assets/images/skill-image.png";
import html5 from "../../assets/svg/html5-rating.svg";
import sql from "../../assets/svg/sql-rating.svg";
import react from "../../assets/svg/react-rating.svg";
import javascript from "../../assets/svg/javascript-rating.svg";
import css from "../../assets/svg/css-rating.svg";
import "./skill.scss";

const Skill = () => {
  return (
    <section className="skill_container">
      <div className="top_skill_section">
        <div className="left">
          <h1>Skill</h1>
          <p className="para">
            I take great pleasure in designing and developing various digital
            creations that cater to the needs of modern-day users.{" "}
          </p>
          <p className="para">
            The art of creating a fully functional and visually appealing
            website, app or any other digital medium that falls within the
            spectrum of web design, development and block-chain is both
            challenging and rewarding.{" "}
          </p>
        </div>

        <div className="right">
          <img src={skill_image} alt="" className="pentagon_img" />
        </div>
      </div>

      <div className="stack_ratings">
        <div className="rating-box">
          <div className="inner-circle">
            <img src={html5} alt="" />
            <p className="rating">90%</p>
          </div>
          <a href="">hTML5</a>
        </div>

        <div className="rating-box">
          <div className="inner-circle">
            <img src={css} alt="" />
            <p className="rating">70%</p>
          </div>
          <a href="">CSS3</a>
        </div>

        <div className="rating-box">
          <div className="inner-circle">
            <img src={javascript} alt="" />
            <p className="rating">40%</p>
          </div>
          <a href="">Javascript</a>
        </div>

        <div className="rating-box">
          <div className="inner-circle">
            <img src={react} alt="" />
            <p className="rating">70%</p>
          </div>
          <a href="">React</a>
        </div>

        <div className="rating-box">
          <div className="inner-circle">
            <img src={sql} alt="" />
            <p className="rating">20%</p>
          </div>
          <a href="">SQL</a>
        </div>
      </div>
      <Arrow />
    </section>
  );
};

export default Skill;
