import React from 'react';

const Project = props => {
  return (
    <div className='portfolio-project'>
      <div className='project-image-section'>
        <img src={props.image} alt='project' />
      </div>
      <div className='project-info-section'>
        <h3 className='project-name'>{props.name}</h3>
        <div className='project-stack-list'>
          <ul>
            {props.stack.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='project-description'>{props.description}</div>
        <div className='project-links'>
          <a href={props.demoLink} target='_blank' rel='noopener noreferrer'>
            <button className='project-demo-button'>View Demo</button>
          </a>
          <a href={props.codeLink} target='_blank' rel='noopener noreferrer'>
            <button className='project-code-button'>View Code</button>
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Project;
