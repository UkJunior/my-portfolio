import React from "react";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="nav-container">
    <nav className="navbar">
      <div className="logo">MK</div>
        <ul className="navlink">
          <li  className="active">Home</li>
          <li  className="active">About</li>
          <li  className="active">Skills</li>
          <li  className="active">Projects</li>
          <li  className="active">Contact</li>
        </ul>
    </nav>
    </ div>
  );
}

export default Navbar;