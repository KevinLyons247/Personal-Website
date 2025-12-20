import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;

