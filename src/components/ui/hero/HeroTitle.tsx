
import React, { ReactNode } from 'react';

interface HeroTitleProps {
  children: ReactNode;
  className?: string;
}

const HeroTitle = ({ children, className = '' }: HeroTitleProps) => {
  return (
    <h1 className={`relative text-5xl md:text-7xl font-royal tracking-tight mb-6 group ${className}`}>
      {children}
      <div className="absolute -inset-x-8 -inset-y-4 bg-royal-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </h1>
  );
};

export default HeroTitle;
