import React, { useState, useEffect, useRef } from "react";
import { project } from "../../data/project/project";

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

  const { project_title, project_desc, stack } = project[count];

  return (
    <div className="project-container">
      <div className="left">
        <button className="btn-next" onClick={handleClick}>
          Next
        </button>
      </div>
      <div className="right">
        <div className="project">
          <h1>{project_title}</h1>
          <p>{project_desc}</p>
          <div className="stack">
            {stack.map((item, index) => (
              <div className="box" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
