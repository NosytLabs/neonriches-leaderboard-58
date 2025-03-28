
import { useCallback, RefObject, useEffect } from 'react';

export interface FloatingCoinsConfig {
  container: HTMLElement;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  duration?: number;
  color?: 'gold' | 'silver' | 'copper';
}

export interface AutoFloatingCoinsConfig {
  containerRef: RefObject<HTMLElement>;
  frequency?: number; // 0-1 probability of spawning a coin on each interval
  minDelay?: number;
  maxDelay?: number;
  duration?: number;
  maxSize?: number;
  minSize?: number;
}

// Main hook for direct coin generation
const useFloatingCoins = () => {
  const addCoins = useCallback(({ 
    container, 
    count = 3, 
    size = 'md', 
    duration = 3000,
    color = 'gold'
  }: FloatingCoinsConfig) => {
    if (!container) return;
    
    const sizeMap = {
      sm: { width: '20px', height: '20px' },
      md: { width: '30px', height: '30px' },
      lg: { width: '40px', height: '40px' },
    };
    
    const colorMap = {
      gold: '#FFD700',
      silver: '#C0C0C0',
      copper: '#B87333',
    };
    
    const containerRect = container.getBoundingClientRect();
    
    for (let i = 0; i < count; i++) {
      // Create a new coin element
      const coin = document.createElement('div');
      coin.className = 'coin-float';
      
      // Set styling
      coin.style.position = 'absolute';
      coin.style.width = sizeMap[size].width;
      coin.style.height = sizeMap[size].height;
      coin.style.backgroundColor = colorMap[color];
      coin.style.borderRadius = '50%';
      coin.style.opacity = '0.8';
      coin.style.boxShadow = `0 0 10px ${colorMap[color]}`;
      coin.style.zIndex = '1000';
      
      // Set initial position (random within container)
      const startX = Math.random() * containerRect.width;
      const startY = Math.random() * containerRect.height;
      coin.style.left = `${startX}px`;
      coin.style.top = `${startY}px`;
      
      // Add to container
      container.appendChild(coin);
      
      // Animate
      const keyframes = [
        { 
          transform: `translate(0, 0) rotate(0deg)`,
          opacity: 0.8,
        },
        { 
          transform: `translate(${Math.random() * 100 - 50}px, -${100 + Math.random() * 100}px) rotate(${Math.random() * 360}deg)`,
          opacity: 0,
        }
      ];
      
      const animation = coin.animate(keyframes, {
        duration,
        easing: 'ease-out',
        fill: 'forwards'
      });
      
      // Clean up after animation
      animation.onfinish = () => {
        if (container.contains(coin)) {
          container.removeChild(coin);
        }
      };
    }
  }, []);
  
  return { addCoins };
};

// Automated floating coins hook
export const useFloatingCoins = ({ 
  containerRef, 
  frequency = 0.2, // 20% chance of spawning a coin on each interval
  minDelay = 2000,
  maxDelay = 5000,
  duration = 3000,
  maxSize = 40,
  minSize = 20
}: AutoFloatingCoinsConfig) => {
  useEffect(() => {
    if (!containerRef?.current) return;
    
    const container = containerRef.current;
    let timeoutId: NodeJS.Timeout;
    
    const spawnRandomCoin = () => {
      // Only spawn a coin based on frequency
      if (Math.random() < frequency && container) {
        const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
        const containerRect = container.getBoundingClientRect();
        
        // Create coin element
        const coin = document.createElement('div');
        coin.style.position = 'absolute';
        coin.style.width = `${size}px`;
        coin.style.height = `${size}px`;
        coin.style.borderRadius = '50%';
        coin.style.backgroundColor = '#FFD700'; // Gold color
        coin.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.7)';
        coin.style.zIndex = '100';
        
        // Random position
        const x = Math.random() * (containerRect.width - size);
        const y = Math.random() * (containerRect.height - size);
        coin.style.left = `${x}px`;
        coin.style.top = `${y}px`;
        
        container.appendChild(coin);
        
        // Animate floating up
        const keyframes = [
          { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
          { transform: `translateY(-${50 + Math.random() * 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ];
        
        const animation = coin.animate(keyframes, {
          duration,
          easing: 'ease-out',
          fill: 'forwards'
        });
        
        animation.onfinish = () => {
          if (container.contains(coin)) {
            container.removeChild(coin);
          }
        };
      }
      
      // Schedule next coin spawn
      const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
      timeoutId = setTimeout(spawnRandomCoin, delay);
    };
    
    // Start the coin spawning process
    timeoutId = setTimeout(spawnRandomCoin, minDelay);
    
    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, [containerRef, frequency, minDelay, maxDelay, duration, maxSize, minSize]);
};

export default useFloatingCoins;
