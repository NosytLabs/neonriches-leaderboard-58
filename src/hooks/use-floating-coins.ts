
import { useState, useCallback } from 'react';
import { useSound } from '@/hooks/use-sound';
import { SoundOptions } from '@/types/user-types';

export interface FloatingCoinsOptions {
  count?: number;
  duration?: number;
  size?: number;
  gold?: boolean;
  velocity?: number;
  offsetX?: number;
  offsetY?: number;
  fromBottom?: boolean;
  fromTop?: boolean;
  fromLeft?: boolean;
  fromRight?: boolean;
  containerId?: string;
  onComplete?: () => void;
  playSounds?: boolean;
}

const useFloatingCoins = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const { playSound } = useSound();

  const createCoin = useCallback((container: HTMLElement, options: FloatingCoinsOptions) => {
    const coin = document.createElement('div');
    const size = options.size || Math.random() * 30 + 20;
    const isGold = options.gold || Math.random() > 0.5;
    
    coin.innerHTML = isGold ? '🪙' : '💰';
    coin.style.position = 'absolute';
    coin.style.fontSize = `${size}px`;
    coin.style.userSelect = 'none';
    coin.style.pointerEvents = 'none';
    coin.style.zIndex = '9999';
    coin.style.filter = 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))';
    
    // Position calculations
    const startX = options.fromLeft ? 0 : options.fromRight ? container.clientWidth : Math.random() * container.clientWidth;
    const startY = options.fromTop ? 0 : options.fromBottom ? container.clientHeight : Math.random() * container.clientHeight;
    
    coin.style.left = `${startX}px`;
    coin.style.top = `${startY}px`;
    
    // Random rotation and movement
    const rotation = Math.random() * 360;
    const rotationSpeed = (Math.random() - 0.5) * 10;
    const xVelocity = (Math.random() - 0.5) * (options.velocity || 5);
    const yVelocity = -Math.random() * (options.velocity || 5) - 2;
    
    container.appendChild(coin);
    
    let x = startX;
    let y = startY;
    let rotationAngle = rotation;
    
    const duration = options.duration || 2000;
    const startTime = performance.now();
    
    const animateCoin = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = elapsed / duration;
      
      if (progress < 1) {
        x += xVelocity;
        y += yVelocity + progress * 9.8; // Apply gravity effect
        rotationAngle += rotationSpeed;
        
        coin.style.transform = `translate(${x - startX}px, ${y - startY}px) rotate(${rotationAngle}deg)`;
        coin.style.opacity = (1 - progress).toString();
        
        requestAnimationFrame(animateCoin);
      } else {
        if (container.contains(coin)) {
          container.removeChild(coin);
        }
      }
    };
    
    requestAnimationFrame(animateCoin);
  }, []);

  const triggerCoins = useCallback((options: FloatingCoinsOptions = {}) => {
    setIsAnimating(true);
    
    // Get target container
    const containerId = options.containerId || 'root';
    const container = document.getElementById(containerId) || document.body;
    
    // Set container position if not already set
    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative';
    }
    
    const count = options.count || 10;
    
    // Play coin sound
    if (options.playSounds !== false) {
      const soundOptions: SoundOptions = { volume: 0.35 };
      playSound('coin', soundOptions);
    }
    
    // Create coins
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        createCoin(container, options);
        
        // Additional sound for bigger bursts
        if (i === Math.floor(count / 2) && count > 15 && options.playSounds !== false) {
          const soundOptions: SoundOptions = { volume: 0.35 };
          playSound('coinDrop', soundOptions);
        }
      }, i * 50);
    }
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
      if (options.onComplete) options.onComplete();
    }, count * 50 + 2000);
  }, [createCoin, playSound]);

  // Add the createBurst method to fix the errors
  const createBurst = useCallback((count: number = 5) => {
    triggerCoins({
      count,
      velocity: 8,
      gold: true,
      playSounds: true
    });
  }, [triggerCoins]);

  return {
    triggerCoins,
    createBurst,
    isAnimating
  };
};

export default useFloatingCoins;
