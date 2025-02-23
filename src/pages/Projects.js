import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projectData = [
  { id: 1, name: 'Selenyum Evleri', location: 'Ankara', status: 'completed', image: '/images/selenyumfoto/selenyumevleri.jpg', description: 'Ankara\'da tamamlanan modern bir konut projesi.' },
  { id: 2, name: 'Alya Towers', location: 'Ankara', status: 'completed', image: '/images/alyafoto/alyatower.jpg', description: 'Ankara\'da tamamlanan lüks konut projesi.' },
  { id: 3, name: 'Çiftçiler Sitesi', location: 'Ankara', status: 'completed', image: '/images/elitefoto/elitetower2.jpg', description: 'Ankara\'da tamamlanan yüksek katlı site projesi.' },
  { id: 4, name: 'Proje 4', location: 'Antalya', status: 'ongoing', image: '/images/project4.jpg', description: 'Antalya\'da sahil kenarında bir resort projesi.' },
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' ? projectData : projectData.filter(project => project.status === filter);

  useEffect(() => {
    const hoverTitle = document.createElement("div");
    hoverTitle.classList.add("project-title-hover");
    document.body.appendChild(hoverTitle);

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const title = card.querySelector(".project-info h3").textContent;
        hoverTitle.textContent = title;
        hoverTitle.style.display = "block";
        hoverTitle.style.left = `${e.pageX + 10}px`;
        hoverTitle.style.top = `${e.pageY + 10}px`;
      });

      card.addEventListener("mouseleave", () => {
        hoverTitle.style.display = "none";
      });
    });

    return () => {
      hoverTitle.remove();
      projectCards.forEach(card => {
        card.removeEventListener("mousemove", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, [filteredProjects]);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projelerimiz</h1>
      <p className="projects-description">Şirketimiz tarafından tamamlanmış ve devam eden projeler.</p>
      
      <div className="filter-buttons">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Tümü</button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Tamamlanan</button>
        <button className={filter === 'ongoing' ? 'active' : ''} onClick={() => setFilter('ongoing')}>Devam Eden</button>
      </div>
      
      <div className="projects-grid">
  {filteredProjects.map(project => (
    <div key={project.id} className="project-card">
      <Link to={`/projects/${project.id}`} className="project-link">
        <img src={project.image} alt={project.name} className="project-image" />
      </Link>
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.location}</p>
        <p>{project.description}</p>
        <Link to={`/projects/${project.id}`} className="details-link">
          <button className="details-button">Detayları Gör</button>
        </Link>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Projects;
