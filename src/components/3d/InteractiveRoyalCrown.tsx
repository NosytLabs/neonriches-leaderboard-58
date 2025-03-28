
import React, { useState, useRef } from 'react';
import { Crown } from 'lucide-react';
import useFloatingCoins from '@/hooks/use-floating-coins';
import useFloatingEffects from '@/hooks/use-floating-effects';

interface InteractiveRoyalCrownProps {
  onCrownClick?: () => void;
  showCoins?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  animated?: boolean;
}

// This is a fallback component that doesn't use Three.js
// We'll replace it with a proper 3D component once we resolve the issues
const InteractiveRoyalCrown: React.FC<InteractiveRoyalCrownProps> = ({ 
  onCrownClick, 
  showCoins = false,
  size = 'medium',
  color = '#D4AF37',
  animated = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { createBurst } = useFloatingCoins();
  
  const { effects } = useFloatingEffects({
    containerRef,
    enabled: animated && isHovered,
    frequency: 0.5,
    density: 'low',
    colors: ['#D4AF37', '#FFD700', '#FFC125'],
    sizes: [3, 4, 5]
  });
  
  const handleClick = () => {
    if (onCrownClick) {
      onCrownClick();
      
      if (showCoins && containerRef.current) {
        createBurst(10);
      }
    }
  };
  
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'h-16 w-16';
      case 'large':
        return 'h-32 w-32';
      case 'medium':
      default:
        return 'h-24 w-24';
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className={`relative flex items-center justify-center cursor-pointer transition-transform duration-300 ${
        isHovered ? 'scale-110' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`absolute inset-0 bg-royal-gold/20 rounded-full filter blur-xl animate-pulse-slow ${getSizeClass()}`}></div>
      
      {effects.map((effect) => (
        <div
          key={effect.id}
          className="absolute rounded-full floating-particle animate-float"
          style={{
            left: `${effect.x}px`,
            top: `${effect.y}px`,
            width: `${effect.size}px`,
            height: `${effect.size}px`,
            backgroundColor: effect.color,
            opacity: effect.opacity,
          }}
        />
      ))}
      
      <Crown 
        className={`text-royal-gold animate-crown-glow z-10 ${getSizeClass()}`} 
        style={{ color }}
      />
      
      {isHovered && (
        <div className="absolute inset-0 rounded-full border-2 border-royal-gold/50 animate-pulse-slow"></div>
      )}
    </div>
  );
};

export default InteractiveRoyalCrown;
