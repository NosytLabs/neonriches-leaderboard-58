
import React, { useRef } from 'react';
import useFloatingCoins from '@/hooks/use-floating-coins';

interface HeroContentProps {
  children: React.ReactNode;
  showCoins?: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ children, showCoins = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { coins, addCoins } = useFloatingCoins({
    containerRef,
    enabled: showCoins,
    autoStart: true,
    count: 5,
    frequency: 0.3
  });
  
  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {children}
      
      {showCoins && coins.map(coin => (
        <div
          key={coin.id}
          className="absolute z-10 coin-floating pointer-events-none"
          style={{
            left: `${coin.x}px`,
            top: `${coin.y}px`,
            width: `${coin.size}px`,
            height: `${coin.size}px`,
            transform: `rotate(${coin.rotation}deg)`,
            animationDuration: `${coin.duration}ms`,
            animationDelay: `${coin.delay}ms`,
          }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-royal-gold">
            💰
          </span>
        </div>
      ))}
    </div>
  );
};

export default HeroContent;
