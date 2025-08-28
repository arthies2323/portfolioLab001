// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Objeto que conterá todas as nossas traduções
const resources = {
  // Objeto para o idioma Inglês
  en: {
    translation: {
      "sobre": {
        "nome": "Arthur",
        "cargo": "To Be Software Engineer",
        "biografia": "Hello! I am a Software Enginnering Student, and a Cloud Platform Engineering Intern. I aspire to be a great professional one day!",
        "titulo_skills": "Main Skills:"
      }
    }
  },
  // Objeto para o idioma Português
  pt: {
    translation: {
      "sobre": {
        "nome": "Arthur",
        "cargo": "Futuro Engenheiro de Software",
        "biografia": "Olá! Sou um Estudante de Engenharia de Software, e um estagiário em Engenharia de plataformas de Cloud. Minha meta é um dia ser um excelente profissional.",
        "titulo_skills": "Principais Habilidades:"
      }
    }
  }
};

i18n
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    resources,
    lng: 'pt', // Define o idioma inicial
    fallbackLng: 'en', // Idioma para usar caso a tradução não seja encontrada
    interpolation: {
      escapeValue: false // React já protege contra XSS
    }
  });

export default i18n;