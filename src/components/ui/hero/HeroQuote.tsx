
import React from 'react';

export interface HeroQuoteProps {
  text?: string;
}

const HeroQuote: React.FC<HeroQuoteProps> = ({ text }) => {
  return (
    <div className="italic text-white/60 max-w-xl mx-auto my-8 font-medieval-text">
      <p>"{text || "Why earn nobility through deeds when you can simply purchase it with currency? A truly modern aristocracy."}"</p>
    </div>
  );
};

export default HeroQuote;
