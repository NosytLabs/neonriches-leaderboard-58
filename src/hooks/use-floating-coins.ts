
import { useState, useEffect } from 'react';

export interface FloatingCoin {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
  opacity: number;
}

const useFloatingCoins = () => {
  const [coins, setCoins] = useState<FloatingCoin[]>([]);

  // Create a single floating coin
  const createFloatingCoin = (x: number = window.innerWidth / 2, y: number = window.innerHeight / 2): FloatingCoin => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    const size = 20 + Math.random() * 20;
    const speed = 1 + Math.random() * 2;
    const rotation = Math.random() * 360;
    const opacity = 0.7 + Math.random() * 0.3;

    const coin: FloatingCoin = {
      id,
      x,
      y,
      size,
      rotation,
      speed,
      opacity
    };

    setCoins(prev => [...prev, coin]);
    
    // Remove coin after animation
    setTimeout(() => {
      setCoins(prev => prev.filter(c => c.id !== id));
    }, 3000);

    return coin;
  };

  // Create multiple coins at once
  const createMultipleCoins = (count: number = 10, origin?: { x: number, y: number }) => {
    const originX = origin?.x || window.innerWidth / 2;
    const originY = origin?.y || window.innerHeight / 2;
    
    const spread = 100;

    for (let i = 0; i < count; i++) {
      // Add some randomness to the origin
      const x = originX + (Math.random() - 0.5) * spread;
      const y = originY + (Math.random() - 0.5) * spread;
      
      setTimeout(() => {
        createFloatingCoin(x, y);
      }, i * 50); // Stagger the creation
    }
  };

  // Remove a specific coin
  const removeCoin = (id: number) => {
    setCoins(prev => prev.filter(coin => coin.id !== id));
  };

  return {
    coins,
    createFloatingCoin,
    createMultipleCoins,
    removeCoin
  };
};

export default useFloatingCoins;
