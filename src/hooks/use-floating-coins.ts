
import { useState, useCallback } from 'react';

interface CoinParticle {
  id: string;
  x: number;
  y: number;
  size: number;
  angle: number;
  velocity: {
    x: number;
    y: number;
  };
  rotation: number;
  rotationSpeed: number;
}

const useFloatingCoins = () => {
  const [coins, setCoins] = useState<CoinParticle[]>([]);
  
  const createCoin = useCallback((x: number, y: number): CoinParticle => {
    const angle = Math.random() * Math.PI * 2;
    const velocity = 5 + Math.random() * 10;
    
    return {
      id: `coin-${Date.now()}-${Math.random()}`,
      x,
      y,
      size: 10 + Math.random() * 15,
      angle,
      velocity: {
        x: Math.cos(angle) * velocity,
        y: Math.sin(angle) * velocity - 10
      },
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 20
    };
  }, []);
  
  const createBurst = useCallback((count: number = 20, x?: number, y?: number) => {
    const centerX = x ?? window.innerWidth / 2;
    const centerY = y ?? window.innerHeight / 2;
    
    const newCoins: CoinParticle[] = [];
    for (let i = 0; i < count; i++) {
      newCoins.push(createCoin(centerX, centerY));
    }
    
    setCoins(prev => [...prev, ...newCoins]);
    
    // Clean up coins after animation
    setTimeout(() => {
      setCoins(prev => prev.filter(coin => !newCoins.includes(coin)));
    }, 3000);
  }, [createCoin]);
  
  return {
    coins,
    createCoin,
    createBurst
  };
};

export default useFloatingCoins;
