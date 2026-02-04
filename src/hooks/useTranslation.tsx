import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Translation files
const translations = {
  es: {
    about: {
      title: "Sobre mí",
      description1: "Soy un desarrollador full-stack apasionado por crear experiencias digitales excepcionales. Me especializo en tecnologías modernas como React, Next.js y Node.js, siempre buscando la combinación perfecta entre funcionalidad y diseño elegante.",
      description2: "Mi enfoque se centra en escribir código limpio, mantenible y escalable. Creo en la importancia de la colaboración y el aprendizaje continuo, manteniéndome al día con las últimas tendencias tecnológicas.",
      description3: "Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source y compartir conocimientos con la comunidad desarrolladora."
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto"
    },
    contact: {
      title: "Contacto",
      subtitle: "Trabajemos juntos",
      description: "Actualmente estoy abierta a nuevas oportunidades y colaboraciones. Ya sea que tengas una pregunta, una idea de proyecto, o simplemente quieras saludar, mi bandeja de entrada siempre está abierta.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      sendMessage: "Enviar Mensaje",
      sending: "Enviando...",
      successMessage: "¡Redirigiendo a WhatsApp! Tu mensaje se enviará automáticamente.",
      emailLabel: "Email",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Tu mensaje..."
    },
    skills: {
      title: "Habilidades",
      frontend: "Frontend",
      styling: "Estilos",
      tools: "Herramientas"
    },
    projects: {
      title: "Proyectos",
      featured: "Proyecto Destacado",
      aguaraTitle: "Aguara Veterinaria",
      aguaraDesc: "Landing page para una veterinaria que brinda servicios a domicilio en Mendoza, enlace directo a WhatsApp, y descripción de los servicios que se ofrecen. Con diseño moderno y responsive para mobile, tablet y escritorio.",
      biotechTitle: "Catalogo de laboratorio",
      biotechDesc: "Catálogo de productos de laboratorio, con funcionalidades de busqueda, filtrado, y visualizacion de productos. Tiene la opcion de descargar un PDF con las especificaciones de cada producto. Con diseño responsive para mobile, tablet y escritorio."
    },
    hero: {
      greeting: "Hola, soy",
      name: "Tu Nombre",
      role: "Desarrollador Full-Stack",
      description: "Creo experiencias digitales excepcionales",
      cta: "Descargar CV",
      viewWork: "Ver mi trabajo",
      contactMe: "Contáctame"
    }
  },
  en: {
    about: {
      title: "About me",
      description1: "I'm a passionate full-stack developer focused on creating exceptional digital experiences. I specialize in modern technologies like React, Next.js and Node.js, always seeking the perfect balance between functionality and elegant design.",
      description2: "My approach focuses on writing clean, maintainable and scalable code. I believe in the importance of collaboration and continuous learning, keeping up with the latest technology trends.",
      description3: "When I'm not coding, I enjoy exploring new technologies, contributing to open source projects and sharing knowledge with the developer community."
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    contact: {
      title: "Contact",
      subtitle: "Let's work together",
      description: "I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello, my inbox is always open.",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
      sending: "Sending...",
      successMessage: "Redirecting to WhatsApp! Your message will be sent automatically.",
      emailLabel: "Email",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Your message..."
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      styling: "Styling",
      tools: "Tools"
    },
    projects: {
      title: "Projects",
      featured: "Featured Project",
      aguaraTitle: "Aguara Veterinary",
      aguaraDesc: "Landing page for a veterinary clinic that provides home services in Mendoza, direct WhatsApp link, and description of the services offered. With modern and responsive design for mobile, tablet and desktop.",
      biotechTitle: "Laboratory Catalog",
      biotechDesc: "Laboratory product catalog, with search, filtering, and product visualization functionalities. It has the option to download a PDF with the specifications of each product. With responsive design for mobile, tablet and desktop."
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Your Name",
      role: "Full-Stack Developer",
      description: "I create exceptional digital experiences",
      cta: "Download CV",
      viewWork: "View my work",
      contactMe: "Contact me"
    }
  }
};

type Language = 'es' | 'en';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};