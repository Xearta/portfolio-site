import React from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Hero from './containers/Hero';
import Portfolio from './containers/Portfolio';
import About from './containers/About';
import Contact from './containers/Contact';

function App() {
  return (
    <div className='grid-container'>
      <Header />
      <main className='main'>
        <Hero />
        <hr />
        <Portfolio />
        <hr />
        <About />
        <hr />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
