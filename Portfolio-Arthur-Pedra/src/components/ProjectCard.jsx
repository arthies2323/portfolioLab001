// src/components/ProjectCard.jsx

import React from 'react';
import './ProjectCard.css'; 

const ProjectCard = ({ project }) => {

  const { title, description, image, repoLink, technologies } = project;

  return (
    <div className="card-container">
      
      <div className="gif-container">
        <img src={image} alt={`Animação do projeto ${title}`} className="project-gif" />
      </div>

      
      <div className="content-container">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="technologies-container">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <a href={repoLink} className="repo-link" target="_blank" rel="noopener noreferrer">
          Ver Repositório →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;