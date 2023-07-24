import "./hambugar.scss";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import InfoIcon from "@mui/icons-material/Info";
import HandymanIcon from "@mui/icons-material/Handyman";
import WorkIcon from "@mui/icons-material/Work";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-scroll";

const Hambugar = ({ isOpen, toggleMenu }) => {

  const handleClick = (isOpen) => toggleMenu(!isOpen)

  return (
    <div className={`hambugar ${isOpen ? "open" : ""}`}>

      <div className="hambugar_section">
        <div className="hambugar_header">
          <h3>MK</h3>
          <div className="close" onClick={handleClick}><CloseIcon/></div>
        </div>

        <ul className="menu_items">
          <li className="active">
            <OtherHousesIcon className="menu_icons" /> <Link
            activeClass="active"
            to="home"
            spy = {true}
            smooth = {true}
            offset={-70}
            duration={500}
            >Home</Link>
          </li>
          <li className="active">
            <InfoIcon className="menu_icons" /> <Link
            activeClass="active"
            to="about"
            spy = {true}
            smooth = {true}
            offset={-70}
            duration={500}
            >About</Link>
          </li>
          <li className="active">
            <HandymanIcon className="menu_icons" /><Link
            activeClass="active"
            to="skills"
            spy = {true}
            smooth = {true}
            offset={-70}
            duration={500}
            >Skills</Link> 
          </li>
          <li className="active">
            <WorkIcon className="menu_icons" /> <Link
            activeClass="active"
            to="project"
            spy = {true}
            smooth = {true}
            offset={-70}
            duration={500}
            >Projects </Link> 
          </li>
          <li className="active">
            <ContactPageIcon className="menu_icons" /> <Link
            activeClass="active"
            to="footer"
            spy = {true}
            smooth = {true}
            offset={-70}
            duration={500}
            > Contact</Link> 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hambugar;
