
import { useState, useEffect, useRef } from 'react';

interface FloatingEffect {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
}

interface UseFloatingEffectsProps {
  containerRef: React.RefObject<HTMLElement>;
  enabled?: boolean;
  frequency?: number;
  density?: 'low' | 'medium' | 'high';
  colors?: string[];
  sizes?: number[];
}

const useFloatingEffects = ({
  containerRef,
  enabled = true,
  frequency = 0.5,
  density = 'medium',
  colors = ['#ffffff'],
  sizes = [3, 5, 8]
}: UseFloatingEffectsProps) => {
  const [effects, setEffects] = useState<FloatingEffect[]>([]);
  const timerRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!enabled) {
      setEffects([]);
      return;
    }
    
    const densityMap = {
      low: 1,
      medium: 2,
      high: 4
    };
    
    const particleCount = densityMap[density];
    
    const createParticle = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Create new effects
      const newEffects = [...Array(particleCount)].map(() => {
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return {
          id: `effect-${Date.now()}-${Math.random()}`,
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size,
          color,
          opacity: 0.3 + Math.random() * 0.5
        };
      });
      
      setEffects(prev => [...prev, ...newEffects]);
      
      // Clean up old effects
      setTimeout(() => {
        setEffects(prev => prev.filter(effect => !newEffects.includes(effect)));
      }, 3000);
    };
    
    // Set interval for creating particles
    timerRef.current = window.setInterval(createParticle, 1000 / frequency);
    
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, [enabled, containerRef, frequency, density, colors, sizes]);
  
  return {
    effects
  };
};

export default useFloatingEffects;
