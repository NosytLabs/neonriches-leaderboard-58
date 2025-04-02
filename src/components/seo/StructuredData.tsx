
import React from 'react';

// Try to import from react-helmet-async, but fall back to our custom implementation
let Helmet: React.ComponentType<any>;
try {
  Helmet = require('react-helmet-async').Helmet;
} catch (e) {
  Helmet = require('./Helmet').default;
  console.warn('Using fallback Helmet component. Some SEO features may be limited.');
}

interface StructuredDataProps {
  data: object;
}

/**
 * Component to add structured data (JSON-LD) to pages
 */
const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  const jsonLd = JSON.stringify(data);
  
  return (
    <Helmet>
      <script type="application/ld+json">{jsonLd}</script>
    </Helmet>
  );
};

export default StructuredData;
