import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HeaderSecond from './components/HeaderSecond';
import Figma from './pages/Figma';
import WebDesign from './pages/WebDesign';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Service from './components/Service';
import Contact from './components/Contact';
import Projectlink from './components/Projectlink';

function App() {
  return (
    <div>
       <HeaderSecond />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/figma" element={<Figma />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projectlink" element={<Projectlink />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
