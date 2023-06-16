import React from "react";
import AboutDeco from "../../assets/svg/about-image.svg";
import AboutImage from "../../assets/images/aboutImage01.jpeg";
import Arrow from "../arrow/arrow";
import Download from "../download/download";
import "./about.scss";

function About() {
  return (
    <div className="bout">
      <section className="">
        <div className="about_left">
          <img src={AboutDeco} alt="About decoration" className="image_deco" />
          <img src={AboutImage} alt="about Img" className="about_img" />
          <Download />
        </div>

        <div className="about_right">
          <h1>About</h1>
          <p>
            I am a software engineer with experience in front-end and blockchain
            development. I create user-friendly interfaces using front-end
            technologies like HTML, CSS, and JavaScript, Js Framework and
            develop decentralized applications using blockchain technologies
            such as smart contracts, decentralized applications, and blockchain
            protocols.{" "}
          </p>
          <br></br>
          <p>
            {" "}
            I have experience with various blockchain platforms and can
            integrate smart contracts into blockchain networks while creating
            seamless user experiences.
          </p>
        </div>
      </section>
      <Arrow />
    </div>
  );
}

export default About;
