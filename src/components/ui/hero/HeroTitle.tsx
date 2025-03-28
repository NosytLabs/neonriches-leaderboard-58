
import React from 'react';

export interface HeroTitleProps {
  children?: React.ReactNode;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ children }) => {
  return (
    <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-3 royal-text royal-gradient font-medieval">
      {children || "SpendThrone.com"}
    </h1>
  );
};

export default HeroTitle;
