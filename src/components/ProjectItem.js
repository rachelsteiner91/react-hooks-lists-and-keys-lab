import React from "react";
//The ProjectItem component should get a prop of technologies passed down from ProjectList. For each element in this array of technologies, create a <span> tag that displays the name of the technology.//
function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map((technology) => {
          return (
            <span key={technology}>{technology}</span>
          )
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
