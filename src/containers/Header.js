import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className='header'>
      <BrowserRouter>
        <div className='brand'>
          <Link to='/#hero'>Tanner Townsend</Link>
        </div>
        <div className='header-links'>
          <Link to='/#portfolio'>Portfolio</Link>
          <Link to='/#about'>About</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/#contact'>Contact</Link>
          <Link to='/'>Resume</Link>
        </div>
      </BrowserRouter>
    </header>
  );
};

export default Header;
