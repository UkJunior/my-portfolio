import React, { useState, useEffect, useRef } from "react";
import { project } from "../../data/project/project";
import project_image from "../../assets/images/project-image.PNG";
import arrow_next from "../../assets/images/arrow-next.png";
import Arrow from "../arrow/arrow";
import "./project.scss";

const Project = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const handleSlide = () => {
    setCount((prevCount) => (prevCount + 1) % project.length);
  };

  const handleClick = () => {
    handleSlide();
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(handleSlide, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(handleSlide, 5000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const { project_title, project_desc, project_tools_desc, stack } =
    project[count];

  return (
    <div >
      <section className="project-section">
        <div className="left">
          <img src={project_image} alt="project img" />
          <button className="btn-next" onClick={handleClick}>
            <img src={arrow_next} alt="arrow next" className="arrow-next" />
          </button>
        </div>
        <div className="right">
          <div className="project">
            <h1>Projects</h1>
            <h2 className="project_title">{project_title}</h2>
            <div className="project_dec">
              <p>{project_desc}</p>
              <p>{project_tools_desc}</p>
            </div>
            <div className="stack">
              {stack.map((item, index) => (
                <button className="stack_text" key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="model">
            {project.map((item, index, i) => {
              return (
                <div
                  key={index}
                  className={`display ${
                    count === index ? "active" : "neutral"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </section>
      <Arrow />
    </div>
  );
};

export default Project;
