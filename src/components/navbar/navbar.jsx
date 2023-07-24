import React, {useState} from "react";
import "./navbar.scss";
import Hambugar from "../hambugar/hambugar";
// import CardHeader from '@mui/material/CardHeader'
// import { Link } from "@mui/material";
import { Link } from 'react-scroll';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
  setIsOpen(!isOpen);
  }

  return (
    <div className="nav-container">
    <nav className="navbar">
      <div className="logo">MU</div>

    <div className="hambugar_icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

        <ul className="navlink">
          <Link 
          activeClass = "active"
          to='home'
          spy = {true}
          offset = {-70}
          smooth = {true}
          duration = {500}
          > 
            <li  className="active">Home</li>
            </Link>
         <Link 
         activeClass="active"
         to = "about"
         spy = {true}
         smooth = {true}
         offset={true}
         duration={true}
         >
          <li  className="active">About</li>
          </Link > 
          <Link  
          activeClass="active"
          to = "skills"
          spy = {true}
          smooth = {true}
          offset={true}
          duration={true}
          >
          <li  className="active">Skills</li>
          </Link >
          <Link  h 
          activeClass="active"
          to = "project"
          spy = {true}
          smooth = {true}
          offset={true}
          duration={true}
          >
          <li  className="active">Projects</li>
          </Link >
          <Link   
          activeClass="active"
          to = "footer"
          spy = {true}
          smooth = {true}
          offset={-70}
          duration={true}
          >
          <li  className="active">Contact</li>
          </Link >
        </ul>
    </nav>
      <Hambugar isOpen = {isOpen} toggleMenu={toggleMenu}/>
    </ div>
  );
}

export default Navbar;