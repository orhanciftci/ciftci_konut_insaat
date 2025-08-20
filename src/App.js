import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop'; // Yeni eklenen bileşeni import ettik
import './App.css';
import ChatBot from "./components/ChatBot";

const App = () => {
  const [isBottom, setIsBottom] = useState(false);

  const checkScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="app">
      <ScrollToTop /> {/* Sayfa değiştiğinde en üste kaydırma */}
      <Navbar />
      <div className="content-wrap">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<ChatBot />} />
          </Routes>
        </main>
      </div>
      <Footer isBottom={isBottom} />
    </div>
  );
};

export default App;
