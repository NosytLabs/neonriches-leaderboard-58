
import { useCallback } from 'react';

type CoinSize = 'sm' | 'md' | 'lg';

export interface FloatingCoinsConfig {
  container: HTMLElement;
  count?: number;
  size?: CoinSize;
  duration?: number;
}

const useFloatingCoins = () => {
  const addCoins = useCallback((config: FloatingCoinsConfig) => {
    const { 
      container, 
      count = 5, 
      size = 'md',
      duration = 2000 
    } = config;
    
    // Size values in pixels
    const sizeValues = {
      sm: 20,
      md: 30,
      lg: 40
    };
    
    const coinSize = sizeValues[size];
    
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const coin = document.createElement('div');
        
        // Set coin styles
        coin.style.position = 'absolute';
        coin.style.width = `${coinSize}px`;
        coin.style.height = `${coinSize}px`;
        coin.style.borderRadius = '50%';
        coin.style.backgroundColor = '#D4AF37';
        coin.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.7)';
        coin.style.zIndex = '10';
        
        // Set random starting position at the bottom of the container
        const containerWidth = container.offsetWidth;
        const randomX = Math.random() * (containerWidth - coinSize);
        
        coin.style.left = `${randomX}px`;
        coin.style.bottom = '0';
        
        // Add animation
        coin.style.animation = `coin-float ${duration}ms ease-out forwards`;
        
        // Add to container
        container.appendChild(coin);
        
        // Remove after animation completes
        setTimeout(() => {
          if (container.contains(coin)) {
            container.removeChild(coin);
          }
        }, duration + 100);
      }, i * 150);
    }
  }, []);
  
  return { addCoins };
};

export default useFloatingCoins;
