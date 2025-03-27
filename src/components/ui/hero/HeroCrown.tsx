
import React from 'react';
import { Crown, Sparkles } from 'lucide-react';

interface HeroCrownProps {
  onClick: () => void;
  className?: string;
}

const HeroCrown = ({ onClick, className = '' }: HeroCrownProps) => {
  return (
    <div 
      className={`relative mb-10 animate-crown-glow cursor-pointer transition-transform duration-500 hover:scale-125 ${className}`}
      onClick={onClick}
    >
      <div className="absolute -inset-10 bg-royal-gold/10 blur-xl rounded-full"></div>
      <Crown size={120} className="text-royal-gold animate-royal-pulse" />
      <Sparkles 
        size={30} 
        className="absolute -top-4 -right-4 text-royal-gold animate-sparkle" 
        style={{ animationDelay: '0.5s' }} 
      />
      <Sparkles 
        size={30} 
        className="absolute -bottom-4 -left-4 text-royal-gold animate-sparkle" 
        style={{ animationDelay: '1s' }} 
      />
      <Sparkles 
        size={20} 
        className="absolute top-1/4 -left-8 text-royal-gold animate-sparkle" 
        style={{ animationDelay: '1.5s' }} 
      />
      <Sparkles 
        size={20} 
        className="absolute bottom-1/4 -right-8 text-royal-gold animate-sparkle" 
        style={{ animationDelay: '2s' }} 
      />
    </div>
  );
};

export default HeroCrown;
