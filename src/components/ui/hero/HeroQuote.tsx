
import React from 'react';

interface HeroQuoteProps {
  text?: string;
}

const HeroQuote: React.FC<HeroQuoteProps> = ({ text }) => {
  return (
    <div className="max-w-lg mx-auto">
      <blockquote className="italic text-white/60 font-medieval-text">
        "{text || "Where wealth buys playful status, not power."}"
      </blockquote>
    </div>
  );
};

export default HeroQuote;
