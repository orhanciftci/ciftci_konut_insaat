import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Şirket Tanıtımı */}
        <div className="footer-column">
          <h3>ÇİFTÇİ KONUT İNŞAAT</h3>
          <p>Güven ve kaliteyle inşa ediyoruz. Hayalinizdeki yapılar için bizimle iletişime geçin.</p>
        </div>

        {/* İletişim Bilgileri */}
        <div className="footer-column">
          <h3>İletişim</h3>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <a href="tel:+905348586565" className="info-link">+90 534 858 65 65</a>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <a href="mailto:info@ciftcikonut.com" className="info-link">info@ciftcikonut.com</a>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Çiftçiler+Grup+İnşaat,+Mamak/Ankara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="info-link"
            >
              Mamak, Ankara
            </a>
          </div>
        </div>

        {/* Sosyal Medya Linkleri */}
        <div className="footer-column">
          <h3>Bizi Takip Edin</h3>
          <div className="social-icons">
            <a href="#" className="social facebook"><FaFacebookF /></a>
            <a href="#" className="social instagram"><FaInstagram /></a>
           {/*  <a href="#" className="social linkedin"><FaLinkedinIn /></a>*/}
            <a href="#" className="social youtube"><FaYoutube /></a>
            <a href="https://wa.me/905348586565?text=Merhabalar%2C%20projeleriniz%20hakkında%20bilgi%20almak%20istiyorum." className="social whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Orhan Çiftçi . Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
