
import React from 'react';

interface HeroSubtitleProps {
  text: string;
  className?: string;
}

const HeroSubtitle = ({ text, className = '' }: HeroSubtitleProps) => {
  return (
    <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mb-8 font-serif leading-relaxed ${className}`}>
      {text}
    </p>
  );
};

export default HeroSubtitle;
