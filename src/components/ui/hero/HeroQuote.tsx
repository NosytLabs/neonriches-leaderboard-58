
import React from 'react';

interface HeroQuoteProps {
  text: string;
  className?: string;
}

const HeroQuote = ({ text, className = '' }: HeroQuoteProps) => {
  return (
    <p className={`text-xl md:text-2xl text-white/80 max-w-3xl mb-16 font-serif leading-relaxed italic ${className}`}>
      {text}
    </p>
  );
};

export default HeroQuote;
