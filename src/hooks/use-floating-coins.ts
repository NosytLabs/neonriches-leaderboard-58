
import { useCallback, useEffect, useRef, useState } from 'react';

export interface FloatingCoin {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
}

interface UseFloatingCoinsOptions {
  containerRef?: React.RefObject<HTMLElement>;
  frequency?: number;
  duration?: number;
  minDelay?: number;
  maxDelay?: number;
}

/**
 * A hook that creates floating coin animations
 */
const useFloatingCoins = (options?: UseFloatingCoinsOptions) => {
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

  // Add coins at random intervals if containerRef is provided
  useEffect(() => {
    if (!options?.containerRef) return;
    
    const frequency = options.frequency || 0.5; // 50% chance by default
    const minDelay = options.minDelay || 5000; // 5 seconds by default
    const maxDelay = options.maxDelay || 10000; // 10 seconds by default
    
    const addRandomCoin = () => {
      if (Math.random() < frequency && options.containerRef?.current) {
        const rect = options.containerRef.current.getBoundingClientRect();
        createFloatingCoin(
          rect.left + Math.random() * rect.width,
          rect.top + Math.random() * rect.height
        );
      }
      
      const nextDelay = minDelay + Math.random() * (maxDelay - minDelay);
      setTimeout(addRandomCoin, nextDelay);
    };
    
    const initialDelay = minDelay + Math.random() * (maxDelay - minDelay);
    const timer = setTimeout(addRandomCoin, initialDelay);
    
    return () => clearTimeout(timer);
  }, [options, createFloatingCoin]);

  // Add coins method for components to use
  const addCoins = useCallback(({ container, count = 3, size = 'sm' }: {
    container: HTMLElement;
    count?: number;
    size?: 'sm' | 'md' | 'lg';
  }) => {
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    
    for (let i = 0; i < count; i++) {
      const x = rect.left + Math.random() * rect.width;
      const y = rect.top + Math.random() * rect.height;
      createFloatingCoin(x, y);
    }
  }, [createFloatingCoin]);

  return {
    coins,
    createFloatingCoin,
    createMultipleCoins,
    removeCoin,
    addCoins
  };
};

export default useFloatingCoins;
export { useFloatingCoins };
