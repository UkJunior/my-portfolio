import React from "react";
import "./footer.scss";

function Footer() {
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

            <button className="btn_submit" type="submit">Let’s get started</button>
          </form>
        </div>
      </div>

      <div className="footer_footer">
        <h1></h1>
        <div className="footer_social"></div>
        <p></p>
      </div>
    </div>
  );
}

export default Footer;
