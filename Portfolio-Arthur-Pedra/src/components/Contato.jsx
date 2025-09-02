// src/components/Contato.jsx

import React from 'react';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contato.css'; 

const Contato = () => {
 
  const seuLinkedIn = "https://www.linkedin.com/in/arthur-pedra-111744218/";
  const seuGitHub = "https://github.com/arthies2323";
  const seuEmail = "arthurpedrasantana@gmail.com";

  return (
    <div className="contato-container" style={{ padding: '0 1.5rem' }}>
      <h3 className="contato-titulo">Entre em Contato</h3>
      <p className="contato-subtitulo">
        Sinta-se à vontade para se conectar ou me enviar uma mensagem.
      </p>

      <div className="contato-links">
        {/* LinkedIn */}
        <a href={seuLinkedIn} target="_blank" rel="noopener noreferrer" className="contato-item">
          <FaLinkedin className="contato-icone" />
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a href={seuGitHub} target="_blank" rel="noopener noreferrer" className="contato-item">
          <FaGithub className="contato-icone" />
          <span>GitHub</span>
        </a>

        {/* E-mail*/}
        <a href={`mailto:${seuEmail}`} className="contato-item">
          <FaEnvelope className="contato-icone" />
          <span>{seuEmail}</span>
        </a>
      </div>
    </div>
  );
};

export default Contato;