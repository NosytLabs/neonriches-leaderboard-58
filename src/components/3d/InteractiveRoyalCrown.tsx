
import React, { useState } from 'react';
import { Crown } from 'lucide-react';
import useFloatingCoins from '@/hooks/use-floating-coins';

interface InteractiveRoyalCrownProps {
  onCrownClick?: () => void;
  showCoins?: boolean;
  size?: 'small' | 'medium' | 'large';
}

// This is a fallback component that doesn't use Three.js
// We'll replace it with a proper 3D component once we resolve the issues
const InteractiveRoyalCrown: React.FC<InteractiveRoyalCrownProps> = ({ 
  onCrownClick, 
  showCoins = false,
  size = 'medium' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { createMultipleCoins } = useFloatingCoins();
  
  const handleClick = () => {
    if (onCrownClick) {
      onCrownClick();
      
      if (showCoins) {
        createMultipleCoins(10, { 
          x: window.innerWidth/2, 
          y: window.innerHeight/2 
        });
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
      className={`relative flex items-center justify-center cursor-pointer transition-transform duration-300 ${
        isHovered ? 'scale-110' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`absolute inset-0 bg-royal-gold/20 rounded-full filter blur-xl animate-pulse-slow ${getSizeClass()}`}></div>
      <Crown 
        className={`text-royal-gold animate-crown-glow z-10 ${getSizeClass()}`} 
      />
      {isHovered && (
        <div className="absolute inset-0 rounded-full border-2 border-royal-gold/50 animate-pulse-slow"></div>
      )}
    </div>
  );
};

export default InteractiveRoyalCrown;
