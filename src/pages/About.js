import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
     
        <h2>Hakkımızda</h2>
     

      {/* Hakkımızda İçerik */}
      <section className="about-content">
        <div className="about-text">
          <h3>15+ Yıl Tecrübe ile Kaliteyi İnşa Ediyoruz</h3>
          <p>
            Kaliteli, güvenilir ve estetik yapılar inşa ederek müşterilerimize en iyi
            yaşam alanlarını sunuyoruz. Sektördeki deneyimimizle modern ve sürdürülebilir
            projeler geliştiriyoruz.
          </p>
        </div>

        {/* Kartlar */}
        <div className="about-grid">
          <div className="about-card">
            <h3>Vizyonumuz</h3>
            <p>Modern ve sürdürülebilir yapılar inşa ederek sektörde öncü olmak.</p>
          </div>
          <div className="about-card">
            <h3>Misyonumuz</h3>
            <p>Müşteri memnuniyetini ön planda tutarak kaliteli yapılar inşa etmek.</p>
          </div>
          <div className="about-card">
            <h3>Deneyim</h3>
            <p>15+ yıl tecrübe, 10+ tamamlanmış proje, mutlu müşteriler.</p>
          </div>
        </div>
      </section>

      {/* Ekibimiz Bölümü */}
      <section className="team-section">
        <h2>Ekibimiz</h2>
        <div className="team-content">
          <img src="/images/renderfoto/city.jpg" alt="Ekibimiz" className="team-image" />
          <p>
            Alanında uzman mühendislerimiz, mimarlarımız ve inşaat ekibimiz ile her projeye
            değer katıyoruz. Takım ruhumuz ve güçlü organizasyon yapımız sayesinde müşteri
            beklentilerini her zaman en iyi şekilde karşılıyoruz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
