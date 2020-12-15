import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { CgEnter } from "react-icons/cg";

const SingleWork = ({ name, project, image, code, tags }) => {
    
  let link = null;
  if (code !== "") {
    link = (
      <a
        href={code}
        className="code-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FaGithubAlt size="40" />
      </a>
    );
  }
  let live = null;
  if (project !== "") {
    live = (
      <a
        href={project}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CgEnter size="40" />
      </a>
    );
  }
  return (
    <div className="single-work" style={{ backgroundImage: `url(${image})` }}>
      <h3>{name}</h3>
      <div className="tags">
        {tags && tags.map((item, index) => <span className='tag' key={index}>{item}</span>)}
      </div>
      <div className="single-work-footer">
        {link}
        {live}
      </div>
    </div>
  );
};
export default SingleWork;
