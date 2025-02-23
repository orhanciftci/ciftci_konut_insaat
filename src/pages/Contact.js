import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Bizimle İletişime Geçin</h2>
        <p>Her türlü soru ve talepleriniz için bizimle iletişime geçebilirsiniz.</p>

        <div className="contact-content">
          {/* İletişim Bilgileri */}
          <div className="contact-info">
            <div className="info-item">
              <a href="Çiftçiler Grup İnşaat, Şahintepe, 657. Sk 2-A, 06620 Mamak/Ankara" target="_blank" rel="noopener noreferrer" className="info-link">
                <FaMapMarkerAlt className="info-icon" title="Yol Tarifi Al" />
              </a>
              <p>Mamak,Ankara</p>
            </div>
            <div className="info-item">
              <a href="tel:+90 534 858 65 65" className="info-link">
                <FaPhone className="info-icon" title="Bizi Arayın" />
              </a>
              <p>+90 534 858 65 65 </p>
            </div>
            <div className="info-item">
              <a href="mailto:info@ciftcioglugrup.com" className="info-link">
                <FaEnvelope className="info-icon" title="Bize Mail Atın" />
              </a>
              <p>info@ciftcioglugrup.com</p>
            </div>
          </div>

          {/* İletişim Formu */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>İsim</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>E-posta</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Mesajınız</label>
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange} required />

            <button type="submit">Gönder</button>
          </form>
        </div>

        {/* Harita */}
        <div className="map-container">
          <iframe
            title="Harita"
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.125034730688!2d32.91622081199805!3d39.92145677140468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d351eafbd01d55%3A0xf982bdf92f2dd521!2zw4dpZnTDp2lsZXIgR3J1cCDEsG7Fn2FhdA!5e1!3m2!1str!2str!4v1739615008564!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
