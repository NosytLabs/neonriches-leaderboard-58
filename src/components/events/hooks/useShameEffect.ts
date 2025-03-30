
import { useState, useCallback } from 'react';
import { MockeryAction } from '@/types/mockery';

export type ShameAction = MockeryAction;

export interface MockeryActionInfo {
  action: ShameAction | MockeryAction;
  timestamp: number;
  until: number;
}

const useShameEffect = () => {
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
  
  const getActiveMockery = useCallback((userId: number): MockeryActionInfo => {
    const action = shameEffects[userId];
    if (action) {
      return {
        action,
        timestamp: Date.now(),
        until: Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
      };
    }
    return {
      action: 'tomatoes',
      timestamp: 0,
      until: 0
    };
  }, [shameEffects]);
  
  return {
    shameEffects,
    shameCooldown,
    shameCount,
    getShameCount,
    handleShame,
    getActiveMockery
  };
};

export default useShameEffect;
export type { ShameAction, MockeryActionInfo };
