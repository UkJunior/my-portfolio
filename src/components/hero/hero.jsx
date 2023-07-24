import React from "react";
import "./hero.scss";
import { CiCircleChevDown } from "react-icons/ci";
import {
  LinkedinFilled,
  WhatsAppOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import Arrow from "../arrow/arrow";

function Hero() {
  return (
    <div className="hero-section " id="home">
      <div className="hero">
        <div className="hero-left">
          <div className="desc">
            <h1>
              Hello, I'm <span>Magnus</span>
            </h1>
            <p>
              A personate Frontend developer, crypto, blockchain enthusiast and
              a lover of NFT
            </p>
            <p>
              with a specal human ability to love learning
              and working on teamwork.
            </p>
          </div>

          <div className="social-links">

            <a href="" className="social circle-icon">
              <LinkedinFilled />
            </a>
            <a href="" className="social  circle-icon">
              <WhatsAppOutlined />
            </a>
            <a href="" className="social circle-icon">
              <GithubOutlined />
            </a>
          </div>

          <button className="btn-connect-me">Connect with Me</button>
        </div>
        <div className="hero-right">
          <div className="image-container">
            <img
              src="https://user-images.githubusercontent.com/94774069/245753889-b48dd7c9-38d2-4e5f-b86d-6b28cf3be3f3.jpg"
              alt="Your Img"
            />
            <div className="overlay"></div>
          </div>
        </div>
      </div>

     <Arrow 
     activeClass="active" 
     to="about" 
     spy={true} 
     smooth={true}
     offset={-70}
     duration={500}
     />
      
    </div>
  );
}



export default Hero;
