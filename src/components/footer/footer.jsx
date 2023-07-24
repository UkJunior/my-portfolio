import React from "react";
import at from "../../assets/svg/at.svg";
import git_icon from "../../assets/svg-social/git.svg";
import linkedin_icon from "../../assets/svg-social/linkedin.svg";
import twitter_icon from "../../assets/svg-social/twitter.svg";
import Arrow from "../arrow/arrow";
import "./footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer" id="footer">
      <div className="footer_section">
        <div className="footer_left">
          <h1>Connect with MU</h1>
          <p>
            Now that you know a lot about me, I would love to know about you
            too.
          </p>
          <br />
          <p>
            lets work together on your amazing projects and make it a great one
            !
          </p>
        </div>
        <div className="footer_right">
          <form className="my-form">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />

            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <button className="btn_submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="footer_footer">
        <div className="footer_social_container">
          <h2>My Social Media links</h2>
          <div className="footer_social_left">
            <a href="https://twitter.com/celebrityweb3">
              <img src={twitter_icon} alt="twitter" />
            </a>
            <a href="#">
               <img src={linkedin_icon} alt="linkedin" />
            </a>
            <a href="https://github.com/magnus-uche">
              <img src={git_icon} alt="github" />
            </a>
          </div>
        </div>

        <div className="footer_contact">
          <h2>More projects I've worked on</h2>
          <div className="footer_social_right">
            <img src={git_icon} alt="github" />

            <a href="https://github.com/magnus-uche">
              &#64;magnus-uche on github
            </a>
          </div>
        </div>
      </div>
      <Arrow
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        color="white"
        transform = "rotate(180deg)"
        transition = "transform 0.3s ease"
      
      />
    </div>
  );
}

export default Footer;
