
import { useState, useEffect, useCallback } from 'react';
import { MockeryAction } from '@/types/mockery';
import { ShameAction } from '../utils/shameUtils';

export interface ShameEffect {
  action: ShameAction;
  timestamp: number;
  until: number;
}

export interface ShameEffectState {
  activeEffect: ShameEffect | null;
  history: ShameEffect[];
  applyEffect: (effect: ShameEffect) => void;
  clearEffect: () => void;
  hasActiveEffect: () => boolean;
  getTimeRemaining: () => number;
  getEffectPercentage: () => number;
  // Additional properties for PublicShamingFestival
  shameCooldown: Record<string | number, boolean>;
  shameEffects: Record<string | number, ShameAction[]>;
  shameCount: Record<string | number, number>;
  getShameCount: (userId?: string | number) => number;
  handleShame: (userId: string | number, username: string, action: ShameAction, amount?: number) => void;
}

interface UseShameEffectOptions {
  cooldownPeriod?: number;
}

const useShameEffect = (options?: UseShameEffectOptions): ShameEffectState => {
  const [activeEffect, setActiveEffect] = useState<ShameEffect | null>(null);
  const [history, setHistory] = useState<ShameEffect[]>([]);
  const [shameCooldown, setShameCooldown] = useState<Record<string | number, boolean>>({});
  const [shameEffects, setShameEffects] = useState<Record<string | number, ShameAction[]>>({});
  const [shameCount, setShameCount] = useState<Record<string | number, number>>({});
  
  const cooldownPeriod = options?.cooldownPeriod || 24 * 60 * 60 * 1000; // Default 24 hours

  // Load from localStorage on initial mount
  useEffect(() => {
    const storedEffect = localStorage.getItem('activeShameEffect');
    const storedHistory = localStorage.getItem('shameEffectHistory');
    const storedCooldowns = localStorage.getItem('shameCooldowns');
    const storedEffects = localStorage.getItem('shameEffects');
    const storedCounts = localStorage.getItem('shameCounts');
    
    if (storedEffect) {
      try {
        const parsedEffect = JSON.parse(storedEffect);
        // Check if effect is still active
        if (parsedEffect.until > Date.now()) {
          setActiveEffect(parsedEffect);
        } else {
          localStorage.removeItem('activeShameEffect');
        }
      } catch (error) {
        console.error('Error parsing active shame effect', error);
      }
    }
    
    if (storedHistory) {
      try {
        setHistory(JSON.parse(storedHistory));
      } catch (error) {
        console.error('Error parsing shame effect history', error);
      }
    }
    
    if (storedCooldowns) {
      try {
        setShameCooldown(JSON.parse(storedCooldowns));
      } catch (error) {
        console.error('Error parsing shame cooldowns', error);
      }
    }
    
    if (storedEffects) {
      try {
        setShameEffects(JSON.parse(storedEffects));
      } catch (error) {
        console.error('Error parsing shame effects', error);
      }
    }
    
    if (storedCounts) {
      try {
        setShameCount(JSON.parse(storedCounts));
      } catch (error) {
        console.error('Error parsing shame counts', error);
      }
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (activeEffect) {
      localStorage.setItem('activeShameEffect', JSON.stringify(activeEffect));
    } else {
      localStorage.removeItem('activeShameEffect');
    }
  }, [activeEffect]);

  useEffect(() => {
    localStorage.setItem('shameEffectHistory', JSON.stringify(history));
  }, [history]);
  
  useEffect(() => {
    localStorage.setItem('shameCooldowns', JSON.stringify(shameCooldown));
  }, [shameCooldown]);
  
  useEffect(() => {
    localStorage.setItem('shameEffects', JSON.stringify(shameEffects));
  }, [shameEffects]);
  
  useEffect(() => {
    localStorage.setItem('shameCounts', JSON.stringify(shameCount));
  }, [shameCount]);

  // Check if current effect has expired
  useEffect(() => {
    if (!activeEffect) return;
    
    const checkExpiryInterval = setInterval(() => {
      if (activeEffect.until <= Date.now()) {
        setActiveEffect(null);
      }
    }, 1000);
    
    return () => clearInterval(checkExpiryInterval);
  }, [activeEffect]);

  const applyEffect = (effect: ShameEffect) => {
    setActiveEffect(effect);
    setHistory(prev => [effect, ...prev]);
  };

  const clearEffect = () => {
    setActiveEffect(null);
  };

  const hasActiveEffect = () => {
    return activeEffect !== null && activeEffect.until > Date.now();
  };

  const getTimeRemaining = () => {
    if (!activeEffect) return 0;
    const remaining = activeEffect.until - Date.now();
    return Math.max(0, remaining);
  };

  const getEffectPercentage = () => {
    if (!activeEffect) return 0;
    const total = activeEffect.until - activeEffect.timestamp;
    const elapsed = Date.now() - activeEffect.timestamp;
    return Math.min(100, Math.max(0, (elapsed / total) * 100));
  };
  
  // Method to get shame count for a user
  const getShameCount = useCallback((userId?: string | number) => {
    if (!userId) return 0;
    return shameCount[userId] || 0;
  }, [shameCount]);
  
  // Method to handle shame action
  const handleShame = useCallback((userId: string | number, username: string, action: ShameAction, amount?: number) => {
    // Set cooldown for this user
    setShameCooldown(prev => ({
      ...prev,
      [userId]: true
    }));
    
    // Set timeout to remove cooldown
    setTimeout(() => {
      setShameCooldown(prev => ({
        ...prev,
        [userId]: false
      }));
    }, cooldownPeriod);
    
    // Add effect to user
    setShameEffects(prev => {
      const userEffects = prev[userId] || [];
      return {
        ...prev,
        [userId]: [...userEffects, action]
      };
    });
    
    // Increment shame count
    setShameCount(prev => ({
      ...prev,
      [userId]: (prev[userId] || 0) + 1
    }));
    
    // Apply effect to current user if it's the same
    if (window.localStorage.getItem('username') === username) {
      const now = Date.now();
      const duration = 24 * 60 * 60 * 1000; // 24 hours
      
      applyEffect({
        action: action,
        timestamp: now,
        until: now + duration
      });
    }
  }, [cooldownPeriod, applyEffect]);

  return {
    activeEffect,
    history,
    applyEffect,
    clearEffect,
    hasActiveEffect,
    getTimeRemaining,
    getEffectPercentage,
    shameCooldown,
    shameEffects,
    shameCount,
    getShameCount,
    handleShame
  };
};

export { useShameEffect };
export type { ShameAction };
export default useShameEffect;
