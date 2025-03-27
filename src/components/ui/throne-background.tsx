
import React from 'react';

interface ThroneBackgroundProps {
  variant?: 'default' | 'purple' | 'gold' | 'blue';
  density?: 'low' | 'medium' | 'high';
  animate?: boolean;
}

const ThroneBackground = ({ 
  variant = 'default', 
  density = 'medium',
  animate = true 
}: ThroneBackgroundProps) => {
  const getColor = () => {
    switch (variant) {
      case 'purple': return 'royal-purple';
      case 'gold': return 'royal-gold';
      case 'blue': return 'royal-blue';
      default: return '';
    }
  };
  
  const getElementCount = () => {
    switch (density) {
      case 'low': return 3;
      case 'high': return 10;
      default: return 5;
    }
  };
  
  const color = getColor();
  const elements = getElementCount();
  
  const renderElements = () => {
    const backgroundElements = [];
    
    for (let i = 0; i < elements; i++) {
      const size = Math.floor(Math.random() * 200) + 100;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const delay = Math.floor(Math.random() * 5);
      
      backgroundElements.push(
        <div 
          key={i}
          className={`absolute rounded-full ${color ? `bg-${color}/10` : 'bg-gradient-to-br from-royal-purple/10 via-royal-gold/10 to-royal-blue/10'} filter blur-[80px] ${animate ? 'animate-pulse-slow' : ''}`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            opacity: Math.random() * 0.3 + 0.1
          }}
        />
      );
    }
    
    return backgroundElements;
  };
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {renderElements()}
      <div className="absolute inset-0 bg-background/50"></div>
    </div>
  );
};

export default ThroneBackground;
