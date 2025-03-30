
import React from 'react';
import { motion } from 'framer-motion';

export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';
export type ShameEffectType = ShameAction;

export interface ShameEffectProps {
  type: ShameEffectType;
  duration?: number; // in milliseconds
  intensity?: 'light' | 'medium' | 'heavy';
}

export const ShameEffect: React.FC<ShameEffectProps> = ({ 
  type,
  duration = 3000,
  intensity = 'medium'
}) => {
  const [elements, setElements] = React.useState<React.ReactNode[]>([]);
  
  React.useEffect(() => {
    const count = intensity === 'light' ? 5 : intensity === 'medium' ? 10 : 20;
    const newElements = [];
    
    for (let i = 0; i < count; i++) {
      const delay = Math.random() * 1000;
      const xPosition = Math.random() * 100;
      const rotation = Math.random() * 360;
      const scale = 0.5 + Math.random() * 1;
      
      const emoji = type === 'tomatoes' ? '🍅' : type === 'eggs' ? '🥚' : '🪵';
      
      newElements.push(
        <motion.div
          key={`shame-${type}-${i}`}
          initial={{ 
            opacity: 0, 
            y: -100, 
            x: `${xPosition}vw`,
            rotate: rotation,
            scale
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: ['0vh', '100vh'],
            rotate: [rotation, rotation + 360]
          }}
          transition={{ 
            duration: 3,
            delay: delay / 1000,
            times: [0, 0.1, 0.9, 1]
          }}
          className="fixed z-50 text-4xl pointer-events-none"
        >
          {emoji}
        </motion.div>
      );
    }
    
    setElements(newElements);
    
    // Clean up
    const timer = setTimeout(() => {
      setElements([]);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [type, duration, intensity]);
  
  return <>{elements}</>;
};

export const useShameEffect = () => {
  const [shameConfig, setShameConfig] = React.useState<ShameEffectProps | null>(null);
  
  const triggerShame = (type: ShameEffectType, intensity?: 'light' | 'medium' | 'heavy', duration?: number) => {
    setShameConfig({
      type,
      intensity,
      duration
    });
    
    // Auto-clear after duration
    if (duration) {
      setTimeout(() => {
        setShameConfig(null);
      }, duration);
    }
  };
  
  const clearShame = () => {
    setShameConfig(null);
  };
  
  const ShameEffectComponent = () => {
    if (!shameConfig) return null;
    return <ShameEffect {...shameConfig} />;
  };
  
  return {
    triggerShame,
    clearShame,
    ShameEffectComponent,
    shameConfig
  };
};

export default useShameEffect;

