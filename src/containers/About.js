import React from 'react';
import { FaGithub, FaLinkedinIn, FaCodepen } from 'react-icons/fa';

const About = () => {
  return (
    <div id='about' className='about-section'>
      <div className='about-header'>
        <h2>About Tannner Townsend</h2>
      </div>
      <div className='about-content'>
        <p>
          Hello! I'm Tanner, a full-stack web developer based in Philadelphia, PA. I enjoy creating things that live on
          the internet, whether that be websites, applications, or anything in between! My goal is to always build
          products that provide pixel-perfect, performant experiences.
        </p>
      </div>
      <div className='about-categories'>
        <div className='about-category'>
          <div className='about-category-header'>Languages</div>
          <div className='about-category-content'>
            <div className='about-category-content-item'>JavaScript</div>
            <div className='about-category-content-item'>Ruby</div>
            <div className='about-category-content-item'>HTML5</div>
            <div className='about-category-content-item'>CSS3</div>
          </div>
        </div>
        <div className='about-category'>
          <div className='about-category-header'>Frameworks & Libs</div>
          <div className='about-category-content'>
            <div className='about-category-content-item'>React</div>
            <div className='about-category-content-item'>Ruby on Rails</div>
            <div className='about-category-content-item'>Sinatra</div>
          </div>
        </div>
        <div className='about-category'>
          <div className='about-category-header'>Methods & Tools</div>
          <div className='about-category-content'>
            <div className='about-category-content-item'>Webpack, NPM, Yarn</div>
            <div className='about-category-content-item'>Git/GitHub</div>
            <div className='about-category-content-item'>Agile</div>
          </div>
        </div>
      </div>
      <div className='about-social-links'>
        <div className='about-social-link'>
          <a href='http://github.com/xearta' target='_blank'>
            <FaGithub className='fa' size={35} />
          </a>
        </div>
        <div className='about-social-link'>
          <a href='https://www.linkedin.com/in/tanner-townsend-302077186/' target='_blank'>
            <FaLinkedinIn className='fa' size={35} />
          </a>
        </div>
        <div className='about-social-link'>
          <a href='https://codepen.io/Xearta' target='_blank'>
            <FaCodepen className='fa' size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
