import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  url = 'https://sahith-rao.vercel.app',
  type = 'website'
}) => {
  const fullTitle = 'Sahith Rao | Portfolio';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      {/* Twitter */}
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO; 