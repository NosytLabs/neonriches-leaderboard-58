
import { useState, useEffect, useCallback } from 'react';

interface UseFloatingEffectsProps {
  containerRef: React.RefObject<HTMLDivElement>;
  enabled?: boolean;
  frequency?: number; // 0-1, how often effects appear
  density?: 'low' | 'medium' | 'high';
  colors?: string[];
  sizes?: number[];
}

interface Effect {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
}

const useFloatingEffects = ({
  containerRef,
  enabled = true,
  frequency = 0.5,
  density = 'medium',
  colors = ['#ffffff'],
  sizes = [3, 5, 8]
}: UseFloatingEffectsProps) => {
  const [effects, setEffects] = useState<Effect[]>([]);

  // Maps density to actual number of particles
  const densityMap = {
    low: 5,
    medium: 12,
    high: 20
  };

  const createEffect = useCallback(() => {
    if (!enabled || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const maxWidth = rect.width;
    const maxHeight = rect.height;

    const newEffects: Effect[] = [];
    const particleCount = densityMap[density];

    for (let i = 0; i < particleCount; i++) {
      if (Math.random() > frequency) continue;

      newEffects.push({
        id: `effect-${Date.now()}-${i}`,
        x: Math.random() * maxWidth,
        y: Math.random() * maxHeight,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.7 + 0.3, // 0.3 to 1.0
      });
    }

    setEffects(prev => [...prev, ...newEffects]);

    // Clean up old effects
    setTimeout(() => {
      setEffects(prev => prev.filter(effect => !newEffects.includes(effect)));
    }, 3000);
  }, [containerRef, enabled, frequency, density, colors, sizes]);

  useEffect(() => {
    if (!enabled) {
      setEffects([]);
      return;
    }

    // Create initial effects
    createEffect();

    // Set up interval for continuous effects
    const interval = setInterval(createEffect, 500);

    return () => clearInterval(interval);
  }, [createEffect, enabled]);

  return { effects };
};

export default useFloatingEffects;
