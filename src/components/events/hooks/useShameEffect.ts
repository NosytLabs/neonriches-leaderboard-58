
import { useState, useEffect } from 'react';
import { MockeryAction } from '@/types/mockery';

// Redefine the ShameAction type to match MockeryAction for compatibility
export type ShameAction = MockeryAction;

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
}

const useShameEffect = (): ShameEffectState => {
  const [activeEffect, setActiveEffect] = useState<ShameEffect | null>(null);
  const [history, setHistory] = useState<ShameEffect[]>([]);

  // Load from localStorage on initial mount
  useEffect(() => {
    const storedEffect = localStorage.getItem('activeShameEffect');
    const storedHistory = localStorage.getItem('shameEffectHistory');
    
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

  return {
    activeEffect,
    history,
    applyEffect,
    clearEffect,
    hasActiveEffect,
    getTimeRemaining,
    getEffectPercentage
  };
};

export default useShameEffect;
