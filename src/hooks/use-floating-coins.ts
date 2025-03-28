
import { useCallback } from 'react';

export interface FloatingCoinsConfig {
  container: HTMLElement;
  count?: number;
  size?: 'sm' | 'md' | 'lg';
  duration?: number;
  color?: 'gold' | 'silver' | 'copper';
}

const useFloatingCoins = () => {
  const addCoins = useCallback(({ 
    container, 
    count = 3, 
    size = 'md', 
    duration = 3000,
    color = 'gold'
  }: FloatingCoinsConfig) => {
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
        container.removeChild(coin);
      };
    }
  }, []);
  
  return { addCoins };
};

export default useFloatingCoins;
