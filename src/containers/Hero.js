import React from 'react';

const Hero = () => {
  return (
    <div id='hero' className='hero-section'>
      <div className='hero-text'>
        <h2 className='hero-header'>Some fancy tagline here...</h2>
        <p>Lorem ipsum text here....</p>
      </div>
      <div className='hero-picture'>
        <img src='/images/hero.png' alt='hero' />
      </div>
    </div>
  );
};

export default Hero;
