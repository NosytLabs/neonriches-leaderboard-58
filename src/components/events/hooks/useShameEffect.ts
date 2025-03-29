
import { useState, useCallback, useEffect } from 'react';

export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

interface ShameEffect {
  action: ShameAction;
  timestamp: number;
  until: number;
}

interface UseShameEffectOptions {
  cooldownPeriod?: number; // milliseconds
}

interface UseShameEffectResult {
  shameCooldown: Record<number, boolean>;
  shameEffects: Record<number, ShameEffect | null>;
  shameCount: Record<number, number>;
  handleShame: (userId: number, username: string, action: ShameAction, amount: number) => boolean;
  isUserShamed: (userId: number) => boolean;
  getShameCount: (userId: number) => number;
  getShameEffect: (userId: number) => ShameEffect | null;
}

export const useShameEffect = (options: UseShameEffectOptions = {}): UseShameEffectResult => {
  const { cooldownPeriod = 3600000 } = options; // Default: 1 hour
  
  const [shameCooldown, setShameCooldown] = useState<Record<number, boolean>>({});
  const [shameEffects, setShameEffects] = useState<Record<number, ShameEffect | null>>({});
  const [shameCount, setShameCount] = useState<Record<number, number>>({});
  
  // Load shame data from localStorage on mount
  useEffect(() => {
    try {
      const storedEffects = localStorage.getItem('shameEffects');
      const storedCooldowns = localStorage.getItem('shameCooldowns');
      const storedCounts = localStorage.getItem('shameCounts');
      
      if (storedEffects) setShameEffects(JSON.parse(storedEffects));
      if (storedCooldowns) setShameCooldown(JSON.parse(storedCooldowns));
      if (storedCounts) setShameCount(JSON.parse(storedCounts));
    } catch (error) {
      console.error('Error loading shame data:', error);
    }
  }, []);
  
  // Save shame data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('shameEffects', JSON.stringify(shameEffects));
      localStorage.setItem('shameCooldowns', JSON.stringify(shameCooldown));
      localStorage.setItem('shameCounts', JSON.stringify(shameCount));
    } catch (error) {
      console.error('Error saving shame data:', error);
    }
  }, [shameEffects, shameCooldown, shameCount]);
  
  // Clean up expired effects and cooldowns
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      
      // Clean up expired effects
      const newEffects = { ...shameEffects };
      let effectsChanged = false;
      
      Object.keys(newEffects).forEach(key => {
        const userId = Number(key);
        const effect = newEffects[userId];
        
        if (effect && effect.until < now) {
          newEffects[userId] = null;
          effectsChanged = true;
        }
      });
      
      if (effectsChanged) {
        setShameEffects(newEffects);
      }
      
      // Clean up expired cooldowns
      const newCooldowns = { ...shameCooldown };
      let cooldownsChanged = false;
      
      Object.keys(newCooldowns).forEach(key => {
        const userId = Number(key);
        const effect = shameEffects[userId];
        
        // If there's no effect and the cooldown should be expired, remove it
        if (!effect && newCooldowns[userId]) {
          newCooldowns[userId] = false;
          cooldownsChanged = true;
        }
      });
      
      if (cooldownsChanged) {
        setShameCooldown(newCooldowns);
      }
    }, 60000); // Check every minute
    
    return () => clearInterval(cleanupInterval);
  }, [shameEffects, shameCooldown]);
  
  const handleShame = useCallback((userId: number, username: string, action: ShameAction, amount: number): boolean => {
    // Check if user is already shamed
    if (shameEffects[userId]) {
      return false;
    }
    
    // Get duration based on action
    let duration = 0;
    switch (action) {
      case 'tomatoes':
        duration = 24 * 60 * 60 * 1000; // 24 hours
        break;
      case 'eggs':
        duration = 48 * 60 * 60 * 1000; // 48 hours
        break;
      case 'stocks':
        duration = 72 * 60 * 60 * 1000; // 72 hours
        break;
      default:
        duration = 24 * 60 * 60 * 1000; // Default: 24 hours
    }
    
    const now = Date.now();
    
    // Apply shame effect
    setShameEffects(prev => ({
      ...prev,
      [userId]: {
        action,
        timestamp: now,
        until: now + duration
      }
    }));
    
    // Apply cooldown
    setShameCooldown(prev => ({
      ...prev,
      [userId]: true
    }));
    
    // Increment shame count
    setShameCount(prev => ({
      ...prev,
      [userId]: (prev[userId] || 0) + 1
    }));
    
    // Log shame action
    console.log(`${username} has been shamed with ${action} for ${duration / (60 * 60 * 1000)} hours`);
    
    return true;
  }, [shameEffects]);
  
  const isUserShamed = useCallback((userId: number): boolean => {
    return !!shameEffects[userId];
  }, [shameEffects]);
  
  const getShameCount = useCallback((userId: number): number => {
    return shameCount[userId] || 0;
  }, [shameCount]);
  
  const getShameEffect = useCallback((userId: number): ShameEffect | null => {
    return shameEffects[userId] || null;
  }, [shameEffects]);
  
  return {
    shameCooldown,
    shameEffects,
    shameCount,
    handleShame,
    isUserShamed,
    getShameCount,
    getShameEffect
  };
};
