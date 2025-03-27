
import React from 'react';

interface HeroFooterProps {
  text: string;
  className?: string;
}

const HeroFooter = ({ text, className = '' }: HeroFooterProps) => {
  return (
    <div className={`mt-20 text-center ${className}`}>
      <p className="text-xs text-white/60 italic max-w-md mx-auto">
        {text}
      </p>
    </div>
  );
};

export default HeroFooter;
