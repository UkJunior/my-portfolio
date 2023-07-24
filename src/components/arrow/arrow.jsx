import React from "react";
import { CiCircleChevDown } from "react-icons/ci";

import "./arrow.scss"
import { Link, animateScroll as scroll } from 'react-scroll';

const Arrow = ({activeClass, to, spy, smooth, offset, duration, color, transform, transition}) => {

  const scrollToTop = () => {
    scroll.scrollToTop();

  };

  return (
    <Link  className="anchor-link"
    activeClass = {activeClass}
    to={to}
    spy={spy}
    smooth={smooth}
    offset={offset}
    duration={duration}

    >
      <CiCircleChevDown className="w" 
      style={{
        color,
        transform,
        transition, 
          }}>


      </CiCircleChevDown>
    </Link>
  );
}

export default Arrow;
