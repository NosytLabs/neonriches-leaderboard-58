
import { useRef, useEffect } from 'react';

interface FloatingCoinOptions {
  frequency?: number;
  duration?: number;
  minDelay?: number;
  maxDelay?: number;
  minSize?: number;
  maxSize?: number;
}

// Hook version for component use
export function useFloatingCoins({
  containerRef,
  frequency = 0.5,
  duration = 3000,
  minDelay = 0,
  maxDelay = 1000,
  minSize = 15,
  maxSize = 30
}: {
  containerRef: React.RefObject<HTMLElement>;
  frequency?: number;
  duration?: number;
  minDelay?: number;
  maxDelay?: number;
  minSize?: number;
  maxSize?: number;
}) {
  const intervalRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const createCoins = () => {
      if (Math.random() < frequency) {
        createCoin(container, { duration, minSize, maxSize });
      }
    };
    
    // Initial creation
    createCoins();
    
    // Setup interval
    intervalRef.current = window.setInterval(createCoins, 
      Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay
    );
    
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [containerRef, frequency, duration, minDelay, maxDelay, minSize, maxSize]);
}

// Function version for imperative use
export function createFloatingCoins(
  container: HTMLElement, 
  options: FloatingCoinOptions = {}
) {
  const {
    frequency = 0.8,
    duration = 3000,
    minSize = 15,
    maxSize = 30
  } = options;
  
  // Create multiple coins based on frequency
  for (let i = 0; i < 5; i++) {
    if (Math.random() < frequency) {
      createCoin(container, { duration, minSize, maxSize });
    }
  }
}

// Helper function to create a single coin
function createCoin(
  container: HTMLElement, 
  { duration = 3000, minSize = 15, maxSize = 30 }: Partial<FloatingCoinOptions> = {}
) {
  const coin = document.createElement('div');
  const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
  
  // Position randomly at the bottom of the container
  const containerRect = container.getBoundingClientRect();
  const startX = Math.random() * containerRect.width;
  
  // Apply styles
  Object.assign(coin.style, {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    bottom: '0px',
    left: `${startX}px`,
    backgroundImage: 'url("/throne-assets/coin-gold.svg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    zIndex: '10',
    opacity: '0.8',
    pointerEvents: 'none'
  });
  
  coin.classList.add('floating-particle');
  
  // Apply animation
  coin.animate(
    [
      { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
      { transform: `translateY(-${containerRect.height * 0.6}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ],
    {
      duration,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      fill: 'forwards'
    }
  );
  
  // Add to container and remove after animation
  container.appendChild(coin);
  setTimeout(() => {
    container.removeChild(coin);
  }, duration + 100);
}
