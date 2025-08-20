import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mvgkjpba", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setStatus("error");
        setErrorMessage(data?.error || "Bilinmeyen bir hata oluştu.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Sunucuya bağlanılamadı.");
    }
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
              <a href="https://maps.google.com/?q=Çiftçiler Grup İnşaat, Şahintepe, 657. Sk 2-A, 06620 Mamak/Ankara" target="_blank" rel="noopener noreferrer" className="info-link">
                <FaMapMarkerAlt className="info-icon" title="Yol Tarifi Al" />
              </a>
              <p>Mamak, Ankara</p>
            </div>
            <div className="info-item">
              <a href="tel:+905348586565" className="info-link">
                <FaPhone className="info-icon" title="Bizi Arayın" />
              </a>
              <p>+90 534 858 65 65</p>
            </div>
            <div className="info-item">
              <a href="mailto:info@ciftcikonut.com" className="info-link">
                <FaEnvelope className="info-icon" title="Bize Mail Atın" />
              </a>
              <p>info@ciftcikonut.com</p>
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

            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Gönderiliyor..." : "Gönder"}
            </button>

            {status === "success" && <p className="success-message">✔️ Mesajınız başarıyla gönderildi!</p>}
            {status === "error" && <p className="error-message">❌ Hata: {errorMessage}</p>}
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
