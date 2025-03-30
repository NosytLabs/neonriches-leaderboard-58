
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ShameAction } from '@/types/mockery';

export interface ShameEffectProps {
  type: ShameAction;
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
  const [shameEffects, setShameEffects] = useState<Record<number, ShameAction>>({});
  const [shameCooldown, setShameCooldown] = useState<Record<number, boolean>>({});
  const [shameCount, setShameCount] = useState<Record<number, number>>({});
  
  const handleShame = useCallback((userId: number, username: string, type: ShameAction) => {
    // Apply the shame effect
    setShameEffects(prev => ({ ...prev, [userId]: type }));
    setShameCooldown(prev => ({ ...prev, [userId]: true }));
    setShameCount(prev => ({ ...prev, [userId]: (prev[userId] || 0) + 1 }));
    
    // Clear the shame effect after 24 hours (in a real app)
    // For demo, we'll clear it after 5 seconds
    setTimeout(() => {
      setShameEffects(prev => {
        const newEffects = { ...prev };
        delete newEffects[userId];
        return newEffects;
      });
    }, 5000);
    
    // Clear the cooldown after 60 seconds
    setTimeout(() => {
      setShameCooldown(prev => {
        const newCooldown = { ...prev };
        delete newCooldown[userId];
        return newCooldown;
      });
    }, 60000);
    
    console.log(`Applied ${type} shame to ${username}`);
    return true;
  }, []);
  
  const getShameCount = useCallback((userId: number) => {
    return shameCount[userId] || 0;
  }, [shameCount]);
  
  return {
    shameEffects,
    shameCooldown,
    shameCount,
    getShameCount,
    handleShame
  };
};

export default useShameEffect;
