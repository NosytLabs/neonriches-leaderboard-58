import { useEffect, useRef } from 'react';

export interface FloatingCoinsConfig {
  count?: number;
  duration?: number;
  maxSize?: number;
  minSize?: number;
  maxDelay?: number;
  container?: HTMLElement | null;
}

export const useFloatingCoins = (config: FloatingCoinsConfig = {}) => {
  const {
    count = 15,
    duration = 2000,
    maxSize = 20,
    minSize = 8,
    maxDelay = 500,
    container = document.body,
  } = config;

  const animationFrame = useRef(0);

  useEffect(() => {
    const createCoin = () => {
      if (!container) return;

      const coin = document.createElement('div');
      coin.className = 'floating-coin';
      container.appendChild(coin);

      const size = Math.random() * (maxSize - minSize) + minSize;
      coin.style.width = `${size}px`;
      coin.style.height = `${size}px`;

      const startX = Math.random() * container.clientWidth;
      const startY = container.clientHeight;

      coin.style.left = `${startX}px`;
      coin.style.top = `${startY}px`;

      const delay = Math.random() * maxDelay;
      coin.style.animationDelay = `-${delay}ms`;

      const animationDuration = duration + delay;
      coin.style.animationDuration = `${animationDuration}ms`;

      const endX = startX + (Math.random() * 100 - 50);
      coin.style.setProperty('--end-x', `${endX}px`);

      coin.addEventListener('animationend', () => {
        if (container && coin.parentNode === container) {
          container.removeChild(coin);
        }
      });
    };

    const animate = () => {
      for (let i = 0; i < count; i++) {
        createCoin();
      }
      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame.current);
      const coins = document.querySelectorAll('.floating-coin');
      coins.forEach(coin => coin.remove());
    };
  }, [count, duration, maxSize, minSize, maxDelay, container]);
};

export default useFloatingCoins;
