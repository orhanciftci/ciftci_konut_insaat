import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeContent.css';

const HomeContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slaytlar
  const slides = [
    '/images/elitetower1.jpg',
    '/images/elitetower2.jpg',
    '/images/elitetower3.jpg',
    '/images/elitetower4.jpg',
  ];

  // Slaytları değiştir
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 5 saniye arayla geçiş

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="home-content">
      <div className="home-content-wrapper">
        <div className="home-content-slider">
          <img src={slides[currentIndex]} alt="Proje görseli" className="home-content-slide" />
        </div>
        <div className="home-content-text">
          <h2 className="home-content-title">Kaliteli ve Güvenli İnşaat Çözümleri</h2>
          <p className="home-content-description">
            Yılların verdiği deneyimle, modern projeler ve güvenli inşaat çözümleri sunuyoruz.
            Bizimle işbirliği yaparak, geleceğe sağlam adımlarla ilerleyebilirsiniz.
          </p>
          <Link to="/projects" className="home-content-cta">Projelerimizi Keşfedin</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
