import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = ({ isBottom }) => {
  return (
    <footer className={`footer-container ${isBottom ? "is-bottom" : ""}`}>
      <div className="footer-column">
        <h3>Çiftçi Prestige Group </h3>
        <p>Güven ve kaliteyle inşa ediyoruz. Hayalinizdeki yapılar için bizimle iletişime geçin.</p>
      </div>

      <div className="footer-column">
        <h3>İletişim</h3>
        
        <div className="info-item">
          <FaPhone className="info-icon" title="Bizi Arayın" />
          <a href="tel:+90 534 858 65 65" className="info-link">+90 534 858 65 65</a>
        </div>

        <div className="info-item">
          <FaEnvelope className="info-icon" title="Bize Mail Atın" />
          <a href="mailto:ociftci527@gmail.com" className="info-link">ociftci527@gmail.com</a>
        </div>

        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" title="Yol Tarifi Al" />
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Çiftçiler+Grup+İnşaat,+Şahintepe,+657.+Sk+2-A,+06620+Mamak/Ankara" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="info-link"
          >
            Mamak, Ankara
          </a>
        </div>
      </div>

      <div className="footer-column">
        <h3>Bizi Takip Edin</h3>
        <div className="social-icons">
          <a href="#" className="facebook"><FaFacebookF /></a>
          <a href="#" className="instagram"><FaInstagram /></a>
          <a href="#" className="linkedin"><FaLinkedinIn /></a>
          <a href="#" className="youtube"><FaYoutube /></a>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Çiftçi Prestige. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
