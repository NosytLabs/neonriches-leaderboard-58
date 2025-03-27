
import React, { ReactNode } from 'react';

interface HeroStatusTagProps {
  children: ReactNode;
  className?: string;
}

const HeroStatusTag = ({ children, className = '' }: HeroStatusTagProps) => {
  return (
    <div className="inline-block animate-bounce-subtle">
      <div className={`glass-morphism backdrop-blur-xl border border-royal-gold/20 rounded-full py-2 px-6 mb-6 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default HeroStatusTag;
