import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Geo-Stream',
      description: 'Html5, css, and Javascript',
      link: "https://graybishop.github.io/Geo-Stream/",
      repo: "https://github.com/graybishop/Geo-Stream"
    },
    {
      name: 'reel-cinema',
      description: 'Html5, css, and Javascript',
      link: "https://intense-lake-77911.herokuapp.com/",
      repo: "https://github.com/AWSMProdigy/Theater-website"
    }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
