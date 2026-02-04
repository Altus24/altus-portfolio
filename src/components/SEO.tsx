import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = "Aldana Ingrassia | Desarrolladora Frontend",
  description = "Aldana Ingrassia - Desarrolladora Frontend especializada en React, TypeScript y Next.js. Creo experiencias web modernas, accesibles y de alto rendimiento con diseño UX/UI.",
  keywords = "desarrolladora frontend, react, typescript, next.js, javascript, web developer, portfolio, ux/ui, desarrollo web, argentina",
  image = "/images/og-image.jpg",
  url = "https://aldanaingrassia.dev",
  type = "website"
}: SEOProps) => {
  const siteName = "Portfolio de Aldana Ingrassia";

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Mobile and PWA */}
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Aldana Ingrassia" />

      {/* Structured Data se mantiene en index.html para la página principal */}
    </Helmet>
  );
};

export default SEO;