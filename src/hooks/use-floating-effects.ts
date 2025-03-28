
import { useCallback, useEffect, useState, useRef } from 'react';

interface FloatingEffect {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  duration: number;
}

interface UseFloatingEffectsOptions {
  containerRef: React.RefObject<HTMLElement>;
  enabled?: boolean;
  frequency?: number;
  density?: 'low' | 'medium' | 'high';
  animation?: 'float' | 'pulse' | 'fade';
  colors?: string[];
  sizes?: number[];
  duration?: number;
}

const useFloatingEffects = (options: UseFloatingEffectsOptions) => {
  const [effects, setEffects] = useState<FloatingEffect[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const effectIdRef = useRef(0);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  const getRandomColor = useCallback(() => {
    const colors = options.colors || ['#ffffff', '#f0f0f0', '#e0e0e0'];
    return colors[Math.floor(Math.random() * colors.length)];
  }, [options.colors]);
  
  const getRandomSize = useCallback(() => {
    const sizes = options.sizes || [3, 5, 8];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }, [options.sizes]);
  
  const createEffect = useCallback(() => {
    if (!options.containerRef.current) return null;
    
    const rect = options.containerRef.current.getBoundingClientRect();
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;
    
    const newEffect: FloatingEffect = {
      id: effectIdRef.current++,
      x,
      y,
      size: getRandomSize(),
      color: getRandomColor(),
      opacity: 0.1 + Math.random() * 0.5,
      duration: options.duration || 3000 + Math.random() * 2000,
    };
    
    setEffects(prev => [...prev, newEffect]);
    
    // Remove effect after duration
    setTimeout(() => {
      setEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
    }, newEffect.duration);
    
    return newEffect;
  }, [getRandomColor, getRandomSize, options.containerRef, options.duration]);
  
  // Create multiple effects based on density
  const createEffects = useCallback((count: number) => {
    for (let i = 0; i < count; i++) {
      createEffect();
    }
  }, [createEffect]);
  
  // Handle visibility detection
  useEffect(() => {
    if (!options.containerRef.current || options.enabled === false) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(options.containerRef.current);
    
    return () => {
      if (options.containerRef.current) {
        observer.unobserve(options.containerRef.current);
      }
    };
  }, [options.containerRef, options.enabled]);
  
  // Regular effect generation based on visibility
  useEffect(() => {
    if (!isVisible || options.enabled === false) return;
    
    const frequency = options.frequency || 0.5; // Default 50% chance
    const densityFactor = 
      options.density === 'high' ? 5 :
      options.density === 'medium' ? 3 : 1;
    
    const genInterval = setInterval(() => {
      if (Math.random() < frequency) {
        createEffects(densityFactor);
      }
    }, 500);
    
    return () => clearInterval(genInterval);
  }, [createEffects, isVisible, options.density, options.enabled, options.frequency]);
  
  return {
    effects,
    isVisible,
    createEffect,
    createEffects
  };
};

export default useFloatingEffects;
