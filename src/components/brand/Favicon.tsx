
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Favicon: React.FC = () => {
  return (
    <Helmet>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#D4AF37" />
      <meta name="msapplication-TileColor" content="#0D0D20" />
      <meta name="theme-color" content="#0D0D20" />
    </Helmet>
  );
};

export default Favicon;
