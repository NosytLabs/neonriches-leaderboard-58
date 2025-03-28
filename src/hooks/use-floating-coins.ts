
import { useCallback, useEffect, useRef, useState } from 'react';

interface FloatingCoin {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
}

/**
 * A hook that creates floating coin animations
 */
const useFloatingCoins = () => {
  const [coins, setCoins] = useState<FloatingCoin[]>([]);
  const coinIdRef = useRef(0);

  // Clear a specific coin after its animation
  const removeCoin = useCallback((id: number) => {
    setCoins(prevCoins => prevCoins.filter(coin => coin.id !== id));
  }, []);

  // Create a new floating coin animation
  const createFloatingCoin = useCallback((x?: number, y?: number) => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Use provided coordinates or random position
    const coinX = x ?? Math.random() * screenWidth;
    const coinY = y ?? Math.random() * (screenHeight / 2);
    
    const newCoin: FloatingCoin = {
      id: coinIdRef.current++,
      x: coinX,
      y: coinY,
      size: 10 + Math.random() * 10,
      rotation: Math.random() * 360,
      duration: 2000 + Math.random() * 1000,
    };
    
    setCoins(prevCoins => [...prevCoins, newCoin]);
    
    // Clean up this coin after animation completes
    setTimeout(() => {
      removeCoin(newCoin.id);
    }, newCoin.duration);
    
    return newCoin;
  }, [removeCoin]);

  // Create multiple floating coins
  const createMultipleCoins = useCallback((count: number = 10, origin?: { x: number, y: number }) => {
    for (let i = 0; i < count; i++) {
      // If origin is provided, create coins in that area with some spread
      if (origin) {
        const spread = 100; // pixels of random spread
        const x = origin.x + (Math.random() * spread - spread/2);
        const y = origin.y + (Math.random() * spread - spread/2);
        createFloatingCoin(x, y);
      } else {
        createFloatingCoin();
      }
    }
  }, [createFloatingCoin]);

  return {
    coins,
    createFloatingCoin,
    createMultipleCoins,
    removeCoin,
  };
};

export default useFloatingCoins;
