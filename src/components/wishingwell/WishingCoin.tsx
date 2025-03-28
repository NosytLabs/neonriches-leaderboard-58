
import React, { useEffect, useState } from 'react';

interface WishingCoinProps {
  x: number;
  y: number;
}

const WishingCoin: React.FC<WishingCoinProps> = ({ x, y }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Start the animation after a brief delay
    const timer = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={`absolute z-10 ${animate ? 'coin-drop' : ''}`}
      style={{ 
        left: `${x}px`, 
        top: `${y}px`,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #9B87F5, #B8A5FF)',
        boxShadow: '0 0 10px rgba(155, 135, 245, 0.8)',
        opacity: animate ? 1 : 0,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
        $
      </div>
    </div>
  );
};

export default WishingCoin;
