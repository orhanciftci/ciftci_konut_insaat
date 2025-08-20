import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaInfoCircle, FaImages, FaMapMarkerAlt, FaExpand } from "react-icons/fa";
import "./ProjectDetail.css";

const projectData = [
  {
    id: 1,
    name: "Proje 1",
    location: "Ankara",
    status: "tamamlandı",
    image: "/images/selenyumfoto/selenyumevleri.jpg",
    description: "Selenyum Evleri, modern yaşamı doğayla buluşturan özgün mimarisiyle dikkat çekiyor. Ankara’nın yükselen bölgelerinden birinde konumlanan proje, aileler için konforlu ve güvenli bir yaşam alanı sunuyor. Geniş peyzaj alanları, ferah daire tipleri ve sosyal donatılarıyla sakinlerine huzurlu bir hayat vadediyor.",
    gallery: ["/images/selenyumfoto/selenyumevleri.jpg", "/images/konut2.jpg", "/images/konut3.jpg"]
  },
  {
    id: 2,
    name: "Proje 2",
    location: "Ankara",
    status: "tamamlandı",
    image: "/images/alyafoto/alyatower.jpg",
    description: "Ankara Mamak Yeni Bayındır Mahallesi'nde yükselen Alya Tower, bölgenin çehresini değiştiren prestijli bir rezidans projesidir. Toplamda 180 adet 2+1, 3+1 ve 4+1 daire ile 14 adet ticari alandan oluşan proje, modern şehir yaşamını konforla buluşturuyor. Geniş balkonlar, akıllı bina teknolojisi ve zengin sosyal alanlarıyla Alya Tower, yeni nesil yaşamın merkezinde yer alıyor.",
    gallery: ["/images/alyafoto/alyatower.jpg", "/images/alyafoto/alyatower2.jpg", "/images/alyafoto/alyatower3.jpg"]
  },
  {
    id: 3,
    name: "Proje 3",
    location: "Ankara",
    status: "tamamlandı",
    image: "/images/elitefoto/elitetower2.jpg",
    description: "Ankara Mamak Cengizhan Mahallesi'nde konumlanan Elite Tower, seçkin bir yaşam anlayışını yansıtan butik bir site projesidir. Toplam 48 daireden oluşan projede 3+1, 4+1 ve 5+1 geniş ve ferah yaşam alanları sunulmaktadır. Modern mimari detaylar, geniş yeşil alanlar ve güvenlikli site yaşamı ile Elite Tower, aile yaşamı için ideal bir tercih sunmaktadır.",
    gallery: ["/images/elitefoto/elitetower1.jpg", "/images/elitefoto/elitetower2.jpg", "/images/elitefoto/elitetower3.jpg", "/images/elitefoto/elitetower4.jpg"]
  },
  {
    id: 4,
    name: "Yeni Proje",
    location: "Ankara",
    status: "devam ediyor",
    image: "/images/project4.jpg",
    description: "Yeni projelerimizle çok yakında sizlerle birlikte olacağız. Kalite, estetik ve fonksiyonelliği bir araya getiren mimari anlayışımızla, beklentilerinizi aşacak yeni yaşam alanları tasarlıyoruz. Takipte kalın; hayalinizdeki yaşam çok yakında gerçeğe dönüşüyor.",
    gallery: ["/images/site1.jpg", "/images/site2.jpg", "/images/site3.jpg"]
  },
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
