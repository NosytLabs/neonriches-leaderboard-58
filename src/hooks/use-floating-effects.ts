
import { useRef, useState, useEffect, RefObject } from 'react';

interface FloatingEffect {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
}

interface UseFloatingEffectsOptions {
  containerRef: RefObject<HTMLElement>;
  enabled?: boolean;
  frequency?: number;
  density?: 'low' | 'medium' | 'high';
  colors?: string[];
  sizes?: number[];
}

export const useFloatingEffects = (options: UseFloatingEffectsOptions) => {
  const {
    containerRef,
    enabled = true,
    frequency = 0.5,
    density = 'medium',
    colors = ['#ffffff', '#f0f0f0', '#e0e0e0'],
    sizes = [3, 4, 5]
  } = options;
  
  const [effects, setEffects] = useState<FloatingEffect[]>([]);
  const intervalRef = useRef<number | null>(null);
  
  const getEffectCount = () => {
    const densityMap = {
      'low': 5,
      'medium': 10,
      'high': 20
    };
    return densityMap[density];
  };
  
  useEffect(() => {
    if (!enabled || !containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const maxEffects = getEffectCount();
    
    // Initialize effects
    const initialEffects: FloatingEffect[] = [];
    for (let i = 0; i < maxEffects; i++) {
      initialEffects.push({
        id: `effect-${i}`,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.3 + Math.random() * 0.5
      });
    }
    setEffects(initialEffects);
    
    // Create new effects periodically
    const handleInterval = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      setEffects(prev => {
        const updated = [...prev];
        const indexToUpdate = Math.floor(Math.random() * maxEffects);
        
        // Update a random effect
        updated[indexToUpdate] = {
          ...updated[indexToUpdate],
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size: sizes[Math.floor(Math.random() * sizes.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.3 + Math.random() * 0.5
        };
        
        return updated;
      });
    };
    
    const intervalTime = 1000 / frequency;
    intervalRef.current = window.setInterval(handleInterval, intervalTime);
    
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [enabled, containerRef, density, frequency, colors, sizes]);
  
  return {
    effects
  };
};

export default useFloatingEffects;
