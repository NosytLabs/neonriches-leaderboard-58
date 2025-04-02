
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title = 'SpendThrone | The Ultimate Pay-to-Win Social Experiment',
  description = 'Join SpendThrone, the satirical social platform where your rank is determined by your spending. A unique pay-to-win experiment that parodies digital status.',
  canonical,
  image = '/og-image.jpg',
  type = 'website',
  keywords = ['pay to win', 'social experiment', 'digital nobility', 'online status', 'spending competition']
}) => {
  const siteUrl = 'https://spendthrone.com';
  const siteTitle = 'SpendThrone';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical || siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      
      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEO;
