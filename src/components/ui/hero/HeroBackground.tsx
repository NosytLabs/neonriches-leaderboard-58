
import React from 'react';
import ThroneBackground from '@/components/ui/throne-background';

interface HeroBackgroundProps {
  isVisible?: boolean;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ isVisible = true }) => {
  return (
    <>
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-royal-crimson/10 filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-royal-gold/10 filter blur-[120px]"></div>
        <div className="absolute top-2/3 left-2/3 w-72 h-72 rounded-full bg-royal-navy/10 filter blur-[80px]"></div>
      </div>
      
      <ThroneBackground variant="default" density="low" animate={isVisible} particles={isVisible} />
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </>
  );
};

export default HeroBackground;
