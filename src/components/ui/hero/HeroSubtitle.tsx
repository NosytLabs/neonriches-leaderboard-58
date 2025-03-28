
import React from 'react';

interface HeroSubtitleProps {
  text?: string;
}

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ text }) => {
  return (
    <h2 className="text-xl md:text-2xl text-white/80 font-medieval-text">
      {text || "Digital nobility, purely cosmetic"}
    </h2>
  );
};

export default HeroSubtitle;
