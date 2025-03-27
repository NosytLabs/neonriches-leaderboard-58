
import React from 'react';

export interface HeroSubtitleProps {
  text?: string;
}

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ text }) => {
  return (
    <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8 font-medieval-text">
      {text || "Where your wallet determines your worth and digital nobility is just a payment away."}
    </p>
  );
};

export default HeroSubtitle;
