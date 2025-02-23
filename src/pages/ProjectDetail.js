import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaInfoCircle, FaImages, FaMapMarkerAlt, FaExpand } from "react-icons/fa";
import "./ProjectDetail.css";

const projectData = [
  { id: 1, name: "Proje 1", location: "Ankara", status: "tamamlandı", image: "/images/selenyumfoto/selenyumevleri.jpg", 
    description: "Ankara'da tamamlanan modern bir konut projesi.", gallery: ["/images/selenyumfoto/selenyumevleri.jpg", "/images/konut2.jpg", "/images/konut3.jpg"] },
  { id: 2, name: "Proje 2", location: "Ankara", status: "tamamlandı", image: "/images/alyafoto/alyatower.jpg", 
    description: "Ankara'da doğa manzaralı yüksek katlı konut projesi.", gallery: ["/images/alyafoto/alyatower.jpg", "/images/alyafoto/alyatower2.jpg", "/images/alyafoto/alyafoto5.jpg"] },
  { id: 3, name: "Proje 3", location: "Ankara", status: "tamamlandı", image: "/images/elitefoto/elitetower2.jpg", 
    description: "Ankara'da yüksek katlı rezidans projesi.", gallery: ["/images/elitefoto/elitetower1.jpg", "/images/elitefoto/elitetower2.jpg", "/images/elitefoto/elitetower3.jpg", "/images/elitefoto/elitetower4.jpg"] },
  { id: 4, name: "Proje 4", location: "Ankara", status: "devam ediyor", image: "/images/project4.jpg", 
    description: "Ankara'da yükselen bölgesinde prestijli site projesi.", gallery: ["/images/site1.jpg", "/images/site2.jpg", "/images/site3.jpg"] },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!project) {
    return <div>Proje bulunamadı.</div>;
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="project-detail">
      <div className="cover-image">
        <img src={project.image} alt={project.name} />
      </div>

      <div className="project-nav">
        <a href="#about"><FaInfoCircle /> Proje Hakkında</a>
        <a href="#gallery"><FaImages /> Proje Galerisi</a>
        <a href="#location"><FaMapMarkerAlt /> Proje Lokasyonu</a>
      </div>

      <div id="about" className="project-about">
        <h2>Proje Hakkında</h2>
        <p>{project.description}</p>
        <table>
          <tbody>
            <tr><td><strong>Konum:</strong></td><td>{project.location}</td></tr>
            <tr><td><strong>Durum:</strong></td><td>{project.status === "tamamlandı" ? "Tamamlandı" : "Devam Ediyor"}</td></tr>
          </tbody>
        </table>
      </div>

      <div id="gallery" className={`project-gallery ${isFullscreen ? "fullscreen" : ""}`}>
        <h2>Proje Galerisi</h2>
        <div className="gallery-container">
          <button className="gallery-button left" onClick={prevImage}>‹</button>
          <img src={project.gallery[currentImage]} alt={`Gallery ${currentImage}`} />
          <button className="gallery-button right" onClick={nextImage}>›</button>
          <button className="fullscreen-button" onClick={toggleFullscreen}>
            <FaExpand />
          </button>
        </div>
      </div>

      <div id="location" className="project-location">
        <h2>Proje Lokasyonu</h2>
        <div className="map-container">
          <iframe 
            title="Proje Lokasyonu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.456248585242!2d32.85404881539073!3d39.92077227942416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34b41a12cbbab%3A0xe0cfa6f21be3b0e0!2sAnkara!5e0!3m2!1str!2str!4v1619589925075!5m2!1str!2str"
            allowFullScreen
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
