
import React from 'react';

export interface HeroStatusTagProps {
  children?: React.ReactNode;
}

const HeroStatusTag: React.FC<HeroStatusTagProps> = ({ children }) => {
  return (
    <div className="inline-block px-3 py-1 bg-royal-gold/20 border border-royal-gold/30 rounded-full text-royal-gold text-xs font-medium tracking-wide animate-pulse-slow">
      {children || "THE ULTIMATE PAY-TO-WIN EXPERIENCE"}
    </div>
  );
};

export default HeroStatusTag;
