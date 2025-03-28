
import { useState, useEffect, useCallback, useRef } from 'react';

interface CoinParticle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  rotation: number;
  rotationSpeed: number;
  emoji?: string;
  element?: HTMLDivElement;
}

interface UseFloatingCoinsOptions {
  containerRef?: React.RefObject<HTMLElement>;
  count?: number;
  duration?: number;
  emojis?: string[];
  enabled?: boolean;
}

export default function useFloatingCoins({
  containerRef,
  count = 20,
  duration = 3000,
  emojis = ['💰', '💎', '💵'],
  enabled = true
}: UseFloatingCoinsOptions = {}) {
  const [isActive, setIsActive] = useState(enabled);
  const particlesRef = useRef<CoinParticle[]>([]);
  const containerElementRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const createCoin = useCallback((x?: number, y?: number): CoinParticle => {
    const container = containerElementRef.current;
    if (!container) return {} as CoinParticle;

    const containerRect = container.getBoundingClientRect();
    
    const startX = x ?? Math.random() * containerRect.width;
    const startY = y ?? containerRect.height + 20;
    
    return {
      id: Math.random().toString(36).substring(2, 9),
      x: startX,
      y: startY,
      size: Math.random() * 20 + 20,
      color: `hsl(${Math.random() * 60 + 40}, 100%, 50%)`,
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: -Math.random() * 5 - 2
      },
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    };
  }, [emojis]);

  const createBurst = useCallback((burstCount = 20) => {
    const container = containerElementRef.current;
    if (!container || !isActive) return;

    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    
    const newParticles: CoinParticle[] = [];
    
    for (let i = 0; i < burstCount; i++) {
      const angle = (i / burstCount) * Math.PI * 2;
      const distance = Math.random() * 100 + 50;
      
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      const coin = createCoin(x, y);
      coin.velocity = {
        x: Math.cos(angle) * (Math.random() * 3 + 2),
        y: Math.sin(angle) * (Math.random() * 3 + 2)
      };
      
      newParticles.push(coin);
    }
    
    particlesRef.current = [...particlesRef.current, ...newParticles];
    renderCoins();
  }, [createCoin, isActive]);

  const toggle = useCallback((state?: boolean) => {
    setIsActive(prev => typeof state !== 'undefined' ? state : !prev);
  }, []);

  const createCoinElement = useCallback((coin: CoinParticle) => {
    const container = containerElementRef.current;
    if (!container) return;

    const element = document.createElement('div');
    element.className = 'absolute pointer-events-none select-none';
    element.style.left = `${coin.x}px`;
    element.style.top = `${coin.y}px`;
    element.style.transform = `rotate(${coin.rotation}deg)`;
    element.style.width = `${coin.size}px`;
    element.style.height = `${coin.size}px`;
    element.style.fontSize = `${coin.size}px`;
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.justifyContent = 'center';
    element.style.zIndex = '50';
    element.textContent = coin.emoji;
    
    container.appendChild(element);
    
    return element;
  }, []);

  const updateCoin = useCallback((coin: CoinParticle) => {
    if (!coin.element) return;
    
    coin.x += coin.velocity.x;
    coin.y += coin.velocity.y;
    coin.velocity.y += 0.1; // gravity
    coin.rotation += coin.rotationSpeed;
    
    coin.element.style.left = `${coin.x}px`;
    coin.element.style.top = `${coin.y}px`;
    coin.element.style.transform = `rotate(${coin.rotation}deg)`;
  }, []);

  const renderCoins = useCallback(() => {
    const container = containerElementRef.current;
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    
    // Create elements for new particles
    particlesRef.current.forEach(coin => {
      if (!coin.element) {
        coin.element = createCoinElement(coin);
      }
    });
    
    // Update positions
    particlesRef.current.forEach(updateCoin);
    
    // Remove particles that are off screen
    particlesRef.current = particlesRef.current.filter(coin => {
      if (
        coin.y > containerRect.height + 100 ||
        coin.x < -100 ||
        coin.x > containerRect.width + 100
      ) {
        if (coin.element) {
          coin.element.remove();
        }
        return false;
      }
      return true;
    });
    
    if (particlesRef.current.length > 0) {
      animationFrameRef.current = requestAnimationFrame(renderCoins);
    } else {
      animationFrameRef.current = null;
    }
  }, [createCoinElement, updateCoin]);

  // Initialize and setup
  useEffect(() => {
    if (containerRef?.current) {
      containerElementRef.current = containerRef.current;
    } else {
      // If no container provided, use document.body
      containerElementRef.current = document.body;
    }
    
    return () => cleanup();
  }, [containerRef]);

  // Handle active state changes
  useEffect(() => {
    if (isActive) {
      const newParticles: CoinParticle[] = [];
      for (let i = 0; i < count; i++) {
        newParticles.push(createCoin());
      }
      particlesRef.current = [...particlesRef.current, ...newParticles];
      
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(renderCoins);
      }
      
      // Auto-disable after duration
      const timer = setTimeout(() => {
        setIsActive(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, count, createCoin, duration, renderCoins]);

  const cleanup = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    particlesRef.current.forEach(coin => {
      if (coin.element) {
        coin.element.remove();
      }
    });
    
    particlesRef.current = [];
  }, []);

  return { isActive, toggle, createBurst, cleanup };
}
