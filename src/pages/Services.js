import React, { useState } from 'react';
import { FaBuilding, FaHardHat, FaHome } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import './Services.css';

const serviceData = [
  {
    id: 1,
    title: 'Konut İnşaatı',
    icon: <FaBuilding size={50} className="service-icon" />,
    description: 'Modern ve konforlu yaşam alanları inşa ediyoruz.',
    details: 'Konut projelerimiz sürdürülebilir ve dayanıklı malzemelerle inşa edilmektedir.',
    image: '/images/renderfoto/city.jpg',
    video: '/videos/ciftcilertower.mp4'
  },
  {
    id: 2,
    title: 'Ticari Alanlar',
    icon: <FaHardHat size={50} className="service-icon" />,
    description: 'Mağaza, ofis ve iş merkezlerinizi modern mimari ile inşa ediyoruz.',
    details: 'Ticari yapılarımız, fonksiyonellik ve estetiği bir arada sunar.',
    image: '/images/renderfoto/construction.jpg',
    video: '/videos/endustriyel.mp4'
  },
  {
    id: 3,
    title: 'Villa Projeleri',
    icon: <FaHome size={50} className="service-icon" />,
    description: 'Doğa ile uyumlu, lüks ve modern villalar tasarlıyoruz.',
    details: 'Villa projelerimiz geniş yaşam alanları ve modern tasarım sunmaktadır.',
    image: '/images/renderfoto/villa-projesi.jpg',
    video: '/videos/villa.mp4'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="services">
      <h2 className="services-title">Hizmetlerimiz</h2>
      <div className="service-list">
        {serviceData.map((service) => (
          <div 
            key={service.id} 
            className={`service ${activeService === service.id ? 'active' : ''}`}
          >
            {/* Üst kısım (ikon ve başlık) */}
            <div className="service-header">
              {service.icon}
              <h3>{service.title}</h3>
            </div>
            <p>{service.description}</p>
            <button className="service-btn" onClick={() => toggleService(service.id)}>
              Detayları Gör
            </button>
            {activeService === service.id && (
              <div className="service-details">
                <p>{service.details}</p>
                <img src={service.image} alt={service.title} className="service-image" />
                <ReactPlayer 
                  url={process.env.PUBLIC_URL + service.video} 
                  width="100%" 
                  height="200px" 
                  controls 
                  className="service-video"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
