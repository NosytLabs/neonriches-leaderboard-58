
import { useState, useEffect, useRef, useCallback } from 'react';

interface FloatingCoinsConfig {
  containerRef: React.RefObject<HTMLElement>;
  enabled?: boolean;
  autoStart?: boolean;
  count?: number;
  frequency?: number; // 0-1, how often coins appear
  maxCoins?: number;
  minSize?: number;
  maxSize?: number;
  duration?: number; // in ms
  delay?: number; // in ms
}

interface Coin {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
}

export function useFloatingCoins({
  containerRef,
  enabled = true,
  autoStart = true,
  count = 10,
  frequency = 0.5,
  maxCoins = 50,
  minSize = 10,
  maxSize = 30,
  duration = 3000,
  delay = 0
}: FloatingCoinsConfig) {
  const [isActive, setIsActive] = useState(autoStart);
  const [coins, setCoins] = useState<Coin[]>([]);
  const intervalRef = useRef<number | null>(null);
  const coinIdCounter = useRef(0);

  const createCoin = useCallback(() => {
    if (!containerRef.current) return null;
    
    const rect = containerRef.current.getBoundingClientRect();
    const size = minSize + Math.random() * (maxSize - minSize);
    const x = Math.random() * (rect.width - size);
    const y = rect.height + size; // Start below the container
    const rotation = Math.random() * 360;
    const coinDuration = duration * (0.8 + Math.random() * 0.4); // Vary duration slightly
    const coinDelay = delay + Math.random() * 500; // Add some random delay
    
    return {
      id: coinIdCounter.current++,
      x,
      y,
      size,
      rotation,
      duration: coinDuration,
      delay: coinDelay
    };
  }, [containerRef, minSize, maxSize, duration, delay]);

  // Start generating coins
  const start = useCallback(() => {
    if (!enabled) return;
    setIsActive(true);
  }, [enabled]);

  // Stop generating coins
  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  // Manually add a batch of coins
  const addCoins = useCallback((amount: number = count) => {
    if (!containerRef.current || !enabled) return;
    
    const newCoins: Coin[] = [];
    for (let i = 0; i < amount; i++) {
      const coin = createCoin();
      if (coin) newCoins.push(coin);
    }
    
    setCoins(prevCoins => {
      const combinedCoins = [...prevCoins, ...newCoins];
      // Limit the total number of coins to avoid performance issues
      return combinedCoins.slice(-maxCoins);
    });
  }, [containerRef, enabled, count, createCoin, maxCoins]);

  // Clear all coins
  const clearCoins = useCallback(() => {
    setCoins([]);
  }, []);

  // Randomly add coins based on frequency
  useEffect(() => {
    if (!isActive || !enabled || !containerRef.current) return;
    
    const addRandomCoins = () => {
      if (Math.random() < frequency) {
        const coin = createCoin();
        if (coin) {
          setCoins(prevCoins => {
            const newCoins = [...prevCoins, coin];
            return newCoins.slice(-maxCoins);
          });
        }
      }
    };
    
    intervalRef.current = window.setInterval(addRandomCoins, 200);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, enabled, containerRef, frequency, createCoin, maxCoins]);

  // Remove coins after they've completed their animation
  useEffect(() => {
    if (coins.length === 0) return;
    
    const timers = coins.map(coin => {
      return setTimeout(() => {
        setCoins(prevCoins => prevCoins.filter(c => c.id !== coin.id));
      }, coin.duration + coin.delay + 100); // Add a little buffer to the timer
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [coins]);

  return {
    coins,
    isActive,
    start,
    stop,
    addCoins,
    clearCoins
  };
}

export default useFloatingCoins;
