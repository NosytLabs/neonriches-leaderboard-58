
import { useState, useCallback, RefObject, useEffect } from 'react';

interface FloatingCoinsOptions {
  containerRef?: RefObject<HTMLElement>;
  frequency?: number;
  duration?: number;
  minDelay?: number;
  maxDelay?: number;
  coinCount?: number;
  coinSize?: 'small' | 'medium' | 'large';
}

interface CoinPosition {
  id: string;
  x: number;
  y: number;
  value: number;
  size: 'small' | 'medium' | 'large';
  color?: string;
}

const useFloatingCoins = (options: FloatingCoinsOptions = {}) => {
  const {
    containerRef,
    frequency = 0.3,
    duration = 3000,
    minDelay = 5000,
    maxDelay = 10000,
    coinCount = 5
  } = options;
  
  const [coins, setCoins] = useState<CoinPosition[]>([]);

  const createCoin = useCallback((x?: number, y?: number, value?: number) => {
    if (!containerRef?.current) return null;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Use provided coordinates or generate random ones
    const coinX = x ?? Math.random() * rect.width;
    const coinY = y ?? Math.random() * rect.height;
    const coinValue = value ?? Math.floor(Math.random() * 5) + 1;
    
    // Generate sizes with a bias towards smaller coins
    const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'small', 'medium', 'medium', 'large'];
    const coinSize = sizes[Math.floor(Math.random() * sizes.length)];
    
    // Generate coin colors based on value
    let coinColor;
    if (coinValue >= 10) {
      coinColor = 'linear-gradient(45deg, #D4AF37, #FFD700)'; // Gold
    } else if (coinValue >= 5) {
      coinColor = 'linear-gradient(45deg, #C0C0C0, #E5E4E2)'; // Silver
    } else if (coinValue >= 2) {
      coinColor = 'linear-gradient(45deg, #B87333, #CD7F32)'; // Bronze
    }
    
    const newCoin: CoinPosition = {
      id: `coin-${Date.now()}-${Math.random()}`,
      x: coinX,
      y: coinY,
      value: coinValue,
      size: coinSize,
      color: coinColor
    };
    
    setCoins(prev => [...prev, newCoin]);
    
    // Remove the coin after animation duration
    setTimeout(() => {
      setCoins(prev => prev.filter(coin => coin.id !== newCoin.id));
    }, duration);
    
    return newCoin;
  }, [containerRef, duration]);
  
  const createMultipleCoins = useCallback((count: number, position?: { x: number, y: number }) => {
    const createdCoins = [];
    
    for (let i = 0; i < count; i++) {
      // Add some random offset if position is provided
      const offsetX = position ? position.x + (Math.random() * 100 - 50) : undefined;
      const offsetY = position ? position.y + (Math.random() * 100 - 50) : undefined;
      
      // Stagger coin creation
      setTimeout(() => {
        const coin = createCoin(offsetX, offsetY);
        if (coin) createdCoins.push(coin);
      }, Math.random() * 500);
    }
    
    return createdCoins;
  }, [createCoin]);
  
  // Optional automatic coin creation
  useEffect(() => {
    if (!containerRef?.current || frequency <= 0) return;
    
    const createRandomCoin = () => {
      // Only create a coin if random number is less than frequency (0-1)
      if (Math.random() < frequency) {
        createCoin();
      }
      
      // Schedule next coin check
      const nextDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      timeout = setTimeout(createRandomCoin, nextDelay);
    };
    
    // Initial coin creation after a delay
    let timeout = setTimeout(createRandomCoin, minDelay);
    
    return () => {
      clearTimeout(timeout);
    };
  }, [containerRef, createCoin, frequency, maxDelay, minDelay]);
  
  return {
    coins,
    createCoin,
    createMultipleCoins
  };
};

export default useFloatingCoins;
