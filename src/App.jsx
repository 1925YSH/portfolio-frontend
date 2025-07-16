import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HOme';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>

      <Footer/>
    </>
  );
};

export default App;
