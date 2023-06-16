import React, { Fragment,useRef } from "react";
import resume from "../../assets/resume/myResume.docx";
import "./download.scss";

const Download = () => {
  const downloadLinkRef = useRef(null);

  const handleDownload = () => {
    const fileName = "myResume.docx";
    if (downloadLinkRef.current) {
      downloadLinkRef.current.href = resume;
      downloadLinkRef.current.download = fileName;
      downloadLinkRef.current.click();
    }
  };
  return (
    <Fragment>
      <div>
      <a type="file" ref={downloadLinkRef} style={{ display : "none"}}/>
      <button onClick={handleDownload} className="btn_download">Download Resume</button>
      </div>
    </Fragment>
  );
};

export default Download;
