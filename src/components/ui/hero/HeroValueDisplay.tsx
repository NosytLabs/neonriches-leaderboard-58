
import React, { ReactNode } from 'react';
import { DollarSign } from 'lucide-react';

interface HeroValueDisplayProps {
  children: ReactNode;
  className?: string;
}

const HeroValueDisplay = ({ children, className = '' }: HeroValueDisplayProps) => {
  return (
    <div className={`glass-morphism border-royal-gold/30 rounded-xl px-8 py-5 mb-10 max-w-lg mx-auto royal-shine ${className}`}>
      <div className="flex items-center justify-center">
        <DollarSign size={36} className="text-royal-gold mr-4 animate-royal-pulse" />
        <span className="text-3xl font-royal text-royal-gold">{children}</span>
      </div>
    </div>
  );
};

export default HeroValueDisplay;
