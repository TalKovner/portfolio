import React from 'react';
import './style/App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Protfolio';
import Hobbies from './components/Hobbies';
import Languages from './components/Languages';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Portfolio />
      <Hobbies />
      <Languages />
      <Contact />
    </div>
  );
}

export default App