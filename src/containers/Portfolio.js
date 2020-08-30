import React from 'react';
import Project from '../components/Project';
import { BrowserRouter, Link } from 'react-router-dom';
import { Projects } from '../data';

const Portfolio = () => {
  return (
    <div id='portfolio' className='portfolio-section'>
      <h2 className='portfolio-header'>Portfolio</h2>
      <ul className='portfolio-projects-list'>
        {Projects.map(project => (
          <li key={project.projectName}>
            <Project
              name={project.projectName}
              description={project.projectDescription}
              stack={project.projectStack}
              image={project.projectImage}
              demoLink={project.projectDemoLink}
              codeLink={project.projectCodeLink}
            />
          </li>
        ))}
      </ul>
      <BrowserRouter>
        <div className='portfolio-archive-button-section'>
          <Link to={'/'}>
            <button className='portfolio-archive-button'>View Archive</button>
          </Link>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Portfolio;
