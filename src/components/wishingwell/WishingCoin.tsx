
import React, { useEffect, useState } from 'react';

interface WishingCoinProps {
  x: number;
  y: number;
  value?: number;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const WishingCoin: React.FC<WishingCoinProps> = ({ 
  x, 
  y, 
  value = 1, 
  size = 'medium',
  color
}) => {
  const [animate, setAnimate] = useState(false);
  const [rotateAngle] = useState(() => Math.random() * 360);
  
  useEffect(() => {
    // Start the animation after a brief delay
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, []);
  
  const getSizeInPx = () => {
    switch (size) {
      case 'small': return 16;
      case 'large': return 24;
      case 'medium':
      default: return 20;
    }
  };
  
  const sizeInPx = getSizeInPx();
  
  // Generate a random color based on value if not provided
  const getCoinColor = () => {
    if (color) return color;
    
    if (value >= 10) {
      return 'linear-gradient(45deg, #D4AF37, #FFD700)'; // Gold
    } else if (value >= 5) {
      return 'linear-gradient(45deg, #C0C0C0, #E5E4E2)'; // Silver
    } else if (value >= 2) {
      return 'linear-gradient(45deg, #B87333, #CD7F32)'; // Bronze
    } else {
      return 'linear-gradient(45deg, #9B87F5, #B8A5FF)'; // Purple
    }
  };
  
  return (
    <div 
      className={`absolute z-10 ${animate ? 'animate-coin-drop' : ''}`}
      style={{ 
        left: `${x}px`, 
        top: `${y}px`,
        width: `${sizeInPx}px`,
        height: `${sizeInPx}px`,
        borderRadius: '50%',
        background: getCoinColor(),
        boxShadow: `0 0 10px rgba(155, 135, 245, 0.8)`,
        opacity: animate ? 1 : 0,
        transform: `rotate(${rotateAngle}deg)`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
        ${value}
      </div>
      <div className="absolute inset-0 rounded-full border border-white/20"></div>
    </div>
  );
};

export default WishingCoin;
