
import { useEffect, useRef } from 'react';

interface UseFloatingCoinsOptions {
  containerRef: React.RefObject<HTMLElement>;
  enabled?: boolean;
  frequency?: number;
  duration?: number;
  minDelay?: number;
  maxDelay?: number;
}

/**
 * Hook to add floating coin animations to a container
 */
const useFloatingCoins = ({
  containerRef,
  enabled = true,
  frequency = 0.7, // Probability threshold (0.7 means 30% chance)
  duration = 8000, // Animation duration in ms
  minDelay = 2000, // Minimum delay between animations
  maxDelay = 5000, // Maximum delay between animations
}: UseFloatingCoinsOptions) => {
  const animationFrameId = useRef<number | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (!containerRef.current || !enabled) return;
    
    const createCoin = () => {
      if (Math.random() > frequency && containerRef.current) {
        // Create a document fragment for better performance
        const fragment = document.createDocumentFragment();
        
        const coin = document.createElement('div');
        coin.className = 'absolute';
        coin.innerHTML = `<div class="flex items-center justify-center w-8 h-8 rounded-full bg-royal-gold/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-royal-gold">
            <circle cx="12" cy="12" r="10"/>
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
            <path d="M12 18V6"/>
          </svg>
        </div>`;
        
        // Set styles before adding to DOM to avoid reflows
        coin.style.left = `${Math.random() * 80 + 10}%`;
        coin.style.top = `${Math.random() * 80 + 10}%`;
        coin.style.animation = `float ${duration / 1000}s ease-in forwards`;
        coin.style.willChange = 'transform, opacity';
        
        fragment.appendChild(coin);
        containerRef.current.appendChild(fragment);
        
        // Remove coin after animation completes
        setTimeout(() => {
          if (coin.parentNode) {
            coin.remove();
          }
        }, duration);
      }
      
      // Schedule next coin
      timeoutId.current = setTimeout(createCoin, 
        Math.floor(Math.random() * (maxDelay - minDelay) + minDelay));
    };
    
    // Start the animation cycle
    createCoin();
    
    return () => {
      // Clean up properly
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [containerRef, enabled, frequency, duration, minDelay, maxDelay]);
};

export default useFloatingCoins;
