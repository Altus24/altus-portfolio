import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aldana Ingrassia",
    "url": "https://aldanaingrassia.dev",
    "logo": "https://aldanaingrassia.dev/images/logo.png",
    "description": "Portfolio de Aldana Ingrassia, Desarrolladora Frontend especializada en React, TypeScript y Next.js",
    "founder": {
      "@type": "Person",
      "name": "Aldana Ingrassia",
      "jobTitle": "Frontend Developer",
      "knowsAbout": [
        "React",
        "TypeScript",
        "Next.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Node.js",
        "UX/UI Design"
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+54-926-165-41624",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    }
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aldana Ingrassia - Portfolio",
    "url": "https://aldanaingrassia.dev",
    "description": "Portfolio profesional de Aldana Ingrassia, Desarrolladora Frontend",
    "inLanguage": "es-AR",
    "copyrightHolder": {
      "@type": "Person",
      "name": "Aldana Ingrassia"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aldanaingrassia.dev/#projects?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://aldanaingrassia.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sobre mí",
        "item": "https://aldanaingrassia.dev/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Habilidades",
        "item": "https://aldanaingrassia.dev/#skills"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Proyectos",
        "item": "https://aldanaingrassia.dev/#projects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contacto",
        "item": "https://aldanaingrassia.dev/#contact"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;