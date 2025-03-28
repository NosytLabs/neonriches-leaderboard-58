
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
