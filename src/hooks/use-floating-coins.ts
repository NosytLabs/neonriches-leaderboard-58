
import { useState, useEffect, useCallback } from 'react';
import { useSound } from '@/hooks/use-sound';
import { SoundOptions } from '@/types/user-types';

interface FloatingCoinsOptions {
  duration?: number;
  count?: number;
  minVelocity?: number;
  maxVelocity?: number;
  soundEnabled?: boolean;
}

export const useFloatingCoins = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { playSound } = useSound();

  const createCoinElement = useCallback(() => {
    const coin = document.createElement('div');
    coin.classList.add('floating-coin');
    coin.innerHTML = '💰';
    coin.style.position = 'fixed';
    coin.style.zIndex = '9999';
    coin.style.fontSize = `${Math.random() * 20 + 20}px`;
    coin.style.userSelect = 'none';
    coin.style.pointerEvents = 'none';
    coin.style.opacity = '0';
    coin.style.transition = 'opacity 0.3s ease-in-out';
    return coin;
  }, []);

  const animateCoin = useCallback((
    coin: HTMLDivElement, 
    startX: number, 
    startY: number, 
    duration: number, 
    minVelocity: number, 
    maxVelocity: number
  ) => {
    // Position coin at the starting position
    coin.style.left = `${startX}px`;
    coin.style.top = `${startY}px`;
    
    // Make the coin visible
    setTimeout(() => {
      coin.style.opacity = '1';
    }, 10);
    
    // Calculate random velocity
    const velocityX = (Math.random() * (maxVelocity - minVelocity) + minVelocity) * (Math.random() > 0.5 ? 1 : -1);
    const velocityY = -1 * (Math.random() * (maxVelocity - minVelocity) + minVelocity);
    
    // Apply gravity and move the coin
    let posX = startX;
    let posY = startY;
    let currentVelocityY = velocityY;
    const gravity = 0.2;
    
    const moveInterval = setInterval(() => {
      posX += velocityX;
      posY += currentVelocityY;
      currentVelocityY += gravity;
      
      coin.style.left = `${posX}px`;
      coin.style.top = `${posY}px`;
      
      // Remove coin if it's out of the viewport
      if (
        posY > window.innerHeight + 100 ||
        posX < -100 ||
        posX > window.innerWidth + 100
      ) {
        clearInterval(moveInterval);
        document.body.removeChild(coin);
      }
    }, 16); // ~60fps
    
    // Set timeout to remove coin after duration
    setTimeout(() => {
      clearInterval(moveInterval);
      if (document.body.contains(coin)) {
        coin.style.opacity = '0';
        setTimeout(() => {
          if (document.body.contains(coin)) {
            document.body.removeChild(coin);
          }
        }, 300); // Wait for fade out
      }
    }, duration);
  }, []);

  const triggerCoins = useCallback((options: FloatingCoinsOptions = {}) => {
    const {
      duration = 2000,
      count = 15,
      minVelocity = 2,
      maxVelocity = 8,
      soundEnabled = true
    } = options;
    
    setIsAnimating(true);
    
    if (soundEnabled) {
      const soundOptions: SoundOptions = {
        volume: 0.35,
        playbackRate: 1
      };
      playSound('coin', soundOptions);
    }
    
    // Create and animate coins
    for (let i = 0; i < count; i++) {
      const coin = createCoinElement();
      document.body.appendChild(coin);
      
      // Determine starting position (bottom center of viewport)
      const startX = window.innerWidth / 2 + (Math.random() * 100 - 50);
      const startY = window.innerHeight - 100 + (Math.random() * 50);
      
      // Stagger the animation of each coin slightly
      setTimeout(() => {
        animateCoin(coin, startX, startY, duration, minVelocity, maxVelocity);
      }, i * 50);
      
      // Play a secondary coin sound for a richer effect on some coins
      if (i % 4 === 0 && soundEnabled) {
        setTimeout(() => {
          const secondarySoundOptions: SoundOptions = {
            volume: 0.35,
            playbackRate: 1.1
          };
          playSound('coinDrop', secondarySoundOptions);
        }, i * 80);
      }
    }
    
    // Reset animation state after all coins have finished
    setTimeout(() => {
      setIsAnimating(false);
    }, duration + count * 50);
  }, [createCoinElement, animateCoin, playSound]);

  return { triggerCoins, isAnimating };
};

export default useFloatingCoins;
