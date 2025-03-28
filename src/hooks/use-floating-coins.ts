
import { useEffect, useRef } from 'react';

export interface FloatingCoinsConfig {
  count?: number;
  duration?: number;
  maxSize?: number;
  minSize?: number;
  maxDelay?: number;
  minDelay?: number;
  container?: HTMLElement | null;
  color?: string | string[];
}

export const useFloatingCoins = (config: FloatingCoinsConfig = {}) => {
  const {
    count = 15,
    duration = 2000,
    maxSize = 20,
    minSize = 8,
    maxDelay = 500,
    minDelay = 0,
    container = document.body,
    color = '#FFD700' // Default gold color
  } = config;

  const animationFrame = useRef(0);

  useEffect(() => {
    const createCoin = () => {
      if (!container) return;

      const coin = document.createElement('div');
      coin.className = 'floating-coin';
      container.appendChild(coin);

      // Set coin size
      const size = Math.random() * (maxSize - minSize) + minSize;
      coin.style.width = `${size}px`;
      coin.style.height = `${size}px`;

      // Set coin color (can be a single color or randomly chosen from an array)
      const coinColor = Array.isArray(color) 
        ? color[Math.floor(Math.random() * color.length)]
        : color;
      
      coin.style.backgroundColor = coinColor;
      coin.style.boxShadow = `0 0 10px ${coinColor}`;

      // Calculate starting position within container
      const startX = Math.random() * container.clientWidth;
      const startY = container.clientHeight;

      coin.style.left = `${startX}px`;
      coin.style.top = `${startY}px`;

      // Add random delay to stagger animations
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      coin.style.animationDelay = `-${delay}ms`;

      // Set animation duration
      const animationDuration = duration + delay;
      coin.style.animationDuration = `${animationDuration}ms`;

      // Calculate end position with some horizontal drift
      const endX = startX + (Math.random() * 100 - 50);
      coin.style.setProperty('--end-x', `${endX}px`);

      // Add random rotation for more realistic movement
      const rotation = Math.random() * 360;
      coin.style.setProperty('--rotation', `${rotation}deg`);

      // Clean up after animation
      coin.addEventListener('animationend', () => {
        if (container && coin.parentNode === container) {
          container.removeChild(coin);
        }
      });
    };

    // Function to create a batch of coins
    const createCoins = () => {
      for (let i = 0; i < count; i++) {
        setTimeout(createCoin, Math.random() * 1000); // Stagger creation
      }
    };

    // Create initial batch of coins
    createCoins();

    // Only continue animation if count > 0
    if (count > 0) {
      const animate = () => {
        animationFrame.current = requestAnimationFrame(animate);
        // Occasionally add more coins for continuous effect
        if (Math.random() < 0.05) {
          createCoin();
        }
      };
      
      animationFrame.current = requestAnimationFrame(animate);
    }

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrame.current);
      const coins = document.querySelectorAll('.floating-coin');
      coins.forEach(coin => coin.remove());
    };
  }, [count, duration, maxSize, minSize, maxDelay, minDelay, container, color]);
};

export default useFloatingCoins;
