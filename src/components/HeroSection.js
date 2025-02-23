import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const slides = useMemo(() => [
    { type: "video", title: "İnşaat Sektöründe Güvenilir Çözümler", subtitle: "Yılların deneyimiyle kaliteli projeler.", media: '/videos/ciftcilertower.mp4', duration: 10, projectLink: '/projects' },
    { type: "video", title: "Etkili ve Zamanında Teslimatlar", subtitle: "Sizin için en iyi projeleri sunuyoruz.", media: '/videos/alyatowers.mp4', duration: 10, projectLink: '/projects' }
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const currentSlide = slides[currentIndex];
    const interval = setTimeout(nextSlide, currentSlide.duration * 1000);
    return () => clearTimeout(interval);
  }, [currentIndex, slides, nextSlide]);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
  
      if (playPromise !== undefined) {
        playPromise.catch(error => console.log("Autoplay engellendi, kullanıcı etkileşimi bekleniyor:", error));
      }
    }
  }, [currentIndex]);
  

  return (
    <section className="hero">
      <motion.div 
        key={slides[currentIndex].media} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 1 }} 
        className="hero-media-wrapper"
      >
        {slides[currentIndex].type === "video" ? (
        <video 
        ref={videoRef}
        className="hero-media" 
        autoPlay 
        muted 
        loop 
        playsInline
        onCanPlay={() => videoRef.current && videoRef.current.play().catch(() => console.log("Video oynatma hatası"))}
      >
        <source src={slides[currentIndex].media} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      
        ) : (
          <div className="hero-image" style={{ backgroundImage: `url(${slides[currentIndex].media})` }}></div>
        )}
      </motion.div>

      <div className="hero-overlay">
        <motion.div 
          className="hero-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">{slides[currentIndex].title}</h1>
          <p className="hero-subtitle">{slides[currentIndex].subtitle}</p>
          <Link to={slides[currentIndex].projectLink} className="cta-button">Detayları Gör</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
