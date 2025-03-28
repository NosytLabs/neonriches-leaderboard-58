
import { useEffect, useRef, useState } from 'react';

interface FloatingCoinsOptions {
  containerRef?: React.RefObject<HTMLElement>;
  count?: number;
  duration?: number;
  size?: number;
  glowIntensity?: number;
  emojis?: string[];
  enabled?: boolean;
}

interface PositionCoordinates {
  x: number;
  y: number;
}

const useFloatingCoins = (options: FloatingCoinsOptions = {}) => {
  const {
    containerRef,
    count = 10,
    duration = 5000,
    size = 24,
    glowIntensity = 0.5,
    emojis = ['💰', '👑', '💎', '💵', '🏆', '✨'],
    enabled = true
  } = options;
  
  const [isActive, setIsActive] = useState(enabled);
  const animationFrameId = useRef<number | null>(null);
  const createdElements = useRef<HTMLElement[]>([]);
  
  // Cleanup function to remove all created elements
  const cleanup = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
    
    createdElements.current.forEach(element => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });
    createdElements.current = [];
  };
  
  // Create a single floating coin/emoji element
  const createFloatingElement = (container: HTMLElement, position?: PositionCoordinates) => {
    if (!container) return;
    
    const element = document.createElement('div');
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Use provided position or random position within container
    const containerRect = container.getBoundingClientRect();
    const randomX = position ? position.x - containerRect.left : Math.random() * containerRect.width;
    const randomY = position ? position.y - containerRect.top : Math.random() * containerRect.height;
    
    // Set element styles
    Object.assign(element.style, {
      position: 'absolute',
      left: `${randomX}px`,
      top: `${randomY}px`,
      fontSize: `${size}px`,
      textShadow: `0 0 ${5 * glowIntensity}px rgba(212, 175, 55, ${glowIntensity})`,
      pointerEvents: 'none',
      zIndex: '100',
      opacity: '0',
      transform: 'translateY(0) rotate(0deg)',
      animation: `float-up ${duration / 1000}s ease-out forwards`,
    });
    
    element.textContent = emoji;
    element.className = 'floating-coin';
    
    container.appendChild(element);
    createdElements.current.push(element);
    
    // Remove element after animation completes
    setTimeout(() => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
        createdElements.current = createdElements.current.filter(el => el !== element);
      }
    }, duration);
  };
  
  // Animation loop
  const animate = () => {
    if (!isActive || !containerRef?.current) return;
    
    const chance = Math.random();
    
    // Only create new element occasionally for a more natural effect
    if (chance < 0.05 && createdElements.current.length < count) {
      createFloatingElement(containerRef.current);
    }
    
    animationFrameId.current = requestAnimationFrame(animate);
  };
  
  // Toggle the animation on/off
  const toggle = (state?: boolean) => {
    setIsActive(prev => {
      const newState = state !== undefined ? state : !prev;
      
      if (!newState) {
        cleanup();
      }
      
      return newState;
    });
  };
  
  // Create a burst of elements all at once
  const createBurst = (burstCount = 15) => {
    if (!containerRef?.current) return;
    
    for (let i = 0; i < burstCount; i++) {
      setTimeout(() => {
        createFloatingElement(containerRef.current!);
      }, i * 100);
    }
  };
  
  // Create multiple coins at a specific position
  const createMultipleCoins = (numberOfCoins: number = 10, position?: PositionCoordinates) => {
    if (!containerRef?.current) return;
    
    for (let i = 0; i < numberOfCoins; i++) {
      setTimeout(() => {
        createFloatingElement(containerRef.current!, position);
      }, i * 100);
    }
  };
  
  // Start animation
  useEffect(() => {
    if (isActive && containerRef?.current) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
    
    return cleanup;
  }, [isActive, containerRef?.current]);
  
  return {
    isActive,
    toggle,
    createBurst,
    createMultipleCoins,
    cleanup
  };
};

// For backwards compatibility with files using the hook without options
const useFloatingCoinsWithoutRef = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return {
    ...useFloatingCoins({ containerRef }),
    containerRef
  };
};

export default useFloatingCoinsWithoutRef;
