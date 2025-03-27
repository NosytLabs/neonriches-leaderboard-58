
import React, { useEffect, useState } from 'react';

interface WishingCoinProps {
  x: number;
  y: number;
}

const WishingCoin: React.FC<WishingCoinProps> = ({ x, y }) => {
  const [position, setPosition] = useState({ x, y: -20 });
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Initial animation
    const animationTimer = setTimeout(() => {
      setPosition({ x, y: y + 60 });
      setScale(0.7);
      
      // Rotate as the coin falls
      const rotateInterval = setInterval(() => {
        setRotation(prev => prev + 45); // Rotate 45 degrees at a time
      }, 100);
      
      return () => clearInterval(rotateInterval);
    }, 10);
    
    // Clean up animation
    return () => clearTimeout(animationTimer);
  }, [x, y]);

  return (
    <div
      className="absolute w-8 h-8 bg-royal-gold rounded-full z-20 transition-all duration-1000"
      style={{
        left: position.x - 16, // center the coin (half width)
        top: position.y - 16,  // center the coin (half height)
        transform: `rotate(${rotation}deg) scale(${scale})`,
        boxShadow: '0 0 10px rgba(212, 175, 55, 0.7)'
      }}
    >
      {/* Coin details */}
      <div className="w-full h-full flex items-center justify-center text-black font-bold">
        <span className="text-xs">$</span>
      </div>
    </div>
  );
};

export default WishingCoin;
