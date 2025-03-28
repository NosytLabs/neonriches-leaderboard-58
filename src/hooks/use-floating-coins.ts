
import { useEffect, useRef } from 'react';

interface FloatingCoinsOptions {
  containerRef: React.RefObject<HTMLElement>;
  frequency?: number; // 0-1 probability of coin appearing
  duration?: number; // Animation duration in ms
  minDelay?: number; // Minimum delay between coins
  maxDelay?: number; // Maximum delay between coins
}

export const useFloatingCoins = ({
  containerRef,
  frequency = 0.3,
  duration = 3000,
  minDelay = 2000,
  maxDelay = 10000
}: FloatingCoinsOptions) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const createCoin = () => {
      if (!containerRef.current) return;
      
      // Random chance to create a coin based on frequency
      if (Math.random() > frequency) {
        scheduleNextCoin();
        return;
      }
      
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Create coin element
      const coin = document.createElement('div');
      coin.className = 'absolute text-royal-gold transition-all duration-500 pointer-events-none z-10';
      coin.textContent = '💰';
      coin.style.opacity = '0';
      coin.style.transform = 'scale(0.5)';
      
      // Position randomly within the container
      const xPos = Math.random() * (containerRect.width - 40);
      coin.style.left = `${xPos}px`;
      coin.style.bottom = '-20px';
      
      // Append to container
      containerRef.current.appendChild(coin);
      
      // Start animation after a small delay
      setTimeout(() => {
        coin.style.opacity = '1';
        coin.style.transform = 'scale(1)';
        
        const finalYPos = containerRect.height * (0.3 + Math.random() * 0.5);
        coin.style.bottom = `${finalYPos}px`;
      }, 10);
      
      // Remove coin after animation completes
      setTimeout(() => {
        coin.style.opacity = '0';
        setTimeout(() => {
          coin.remove();
        }, 500);
      }, duration);
      
      scheduleNextCoin();
    };
    
    const scheduleNextCoin = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      const nextDelay = minDelay + Math.random() * (maxDelay - minDelay);
      timeoutRef.current = setTimeout(createCoin, nextDelay);
    };
    
    scheduleNextCoin();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [containerRef, frequency, duration, minDelay, maxDelay]);
};
