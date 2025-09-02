// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
 
  en: {
    translation: {
      "sobre": {
        "nome": "Arthur",
        "cargo": "To Be Software Engineer",
        "biografia": "Hello! I am a Software Enginnering Student, and a Cloud Platform Engineering Intern. I aspire to be a great Software Engineer one day!",
        "titulo_skills": "Main Skills:"
      }
    }
  },

  pt: {
    translation: {
      "sobre": {
        "nome": "Arthur",
        "cargo": "Futuro Engenheiro de Software",
        "biografia": "Olá! Sou um Estudante de Engenharia de Software, e um estagiário em Engenharia de plataformas de Cloud. Minha meta é um dia ser um excelente Engenheiro de Software.",
        "titulo_skills": "Principais Habilidades:"
      }
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'pt', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;