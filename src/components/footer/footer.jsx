import React from "react";
import at from "../../assets/svg/at.svg";
import git_icon from "../../assets/svg-social/git.svg";
import linkedin_icon from "../../assets/svg-social/linkedin.svg";
import twitter_icon from "../../assets/svg-social/twitter.svg";

import "./footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
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
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" />

            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <button className="btn_submit" type="submit">
              Let’s get started
            </button>
          </form>
        </div>
      </div>

      <div className="footer_footer">
        <h2>Mu_eth</h2>
        <div className="footer_social">
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
        <p>
          All rights reserved{" "}
          <span style={{ color: "#313169", width: "23", height: "23", font: "23" }}>
            {" "}
            &copy;
          </span>{" "}
          <span id="currentYear">{currentYear}</span> Mu_eth{" "}
          <span style={{ color: "red" }}>&hearts;</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
