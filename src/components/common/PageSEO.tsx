
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    image?: string;
  };
}

const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  canonical,
  openGraph
}) => {
  const siteName = 'SpendThrone';
  const ogTitle = openGraph?.title || title;
  const ogDescription = openGraph?.description || description;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={openGraph?.type || 'website'} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content={siteName} />
      {openGraph?.url && <meta property="og:url" content={openGraph.url} />}
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
    </Helmet>
  );
};

export default PageSEO;
