
import { useCallback, useState } from 'react';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { UserProfile } from '@/types/user';

interface ShameEffectOptions {
  duration?: number;
  displayName?: string;
}

// Dictionary of shame action information
const actionInfo: Record<string, { 
  icon: string;
  title: string;
  description: string;
  tier: MockeryTier;
  price: number;
  duration: number; 
}> = {
  tomatoes: {
    icon: '🍅',
    title: 'Tomato Pelting',
    description: 'Pelt the target with virtual tomatoes, leaving them red-faced and embarrassed.',
    tier: 'basic',
    price: 5,
    duration: 86400 // 1 day in seconds
  },
  eggs: {
    icon: '🥚',
    title: 'Egg Barrage',
    description: 'Throw rotten eggs at the target\'s profile, creating a stinky mess.',
    tier: 'basic',
    price: 5,
    duration: 86400
  },
  shame: {
    icon: '🔔',
    title: 'Bell of Shame',
    description: 'Ring the shame bell, notifying everyone of the user\'s disgrace.',
    tier: 'basic',
    price: 10,
    duration: 172800 // 2 days
  },
  dungeons: {
    icon: '🏰',
    title: 'Dungeon Detention',
    description: 'Lock them in the virtual dungeons for all to see.',
    tier: 'premium',
    price: 30,
    duration: 259200 // 3 days
  },
  immune: {
    icon: '🛡️',
    title: 'Royal Immunity',
    description: 'Gain temporary immunity from mockery (not an attack).',
    tier: 'royal',
    price: 100,
    duration: 604800 // 7 days
  },
  stocks: {
    icon: '🪵',
    title: 'Stocks Punishment',
    description: 'Place the target in medieval stocks for public ridicule.',
    tier: 'basic',
    price: 15,
    duration: 86400
  },
  target: {
    icon: '🎯',
    title: 'Target Practice',
    description: 'Mark the user as a target for others to mock.',
    tier: 'basic',
    price: 10,
    duration: 86400
  },
  challenge: {
    icon: '⚔️',
    title: 'Royal Challenge',
    description: 'Challenge the user to a spending duel.',
    tier: 'premium',
    price: 25,
    duration: 172800
  }
};

// Hook for handling shame effects
export const useShameEffect = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentEffect, setCurrentEffect] = useState<MockeryAction | null>(null);
  const [shameEffects, setShameEffects] = useState<Record<number, ShameAction>>({});
  const [shameCooldown, setShameCooldown] = useState<Record<number, boolean>>({});
  const [shameCount, setShameCount] = useState<Record<number, number>>({});
  
  const applyShameEffect = useCallback((targetId: string, action: MockeryAction, options?: ShameEffectOptions) => {
    setIsLoading(true);
    setCurrentEffect(action);
    
    // Simulate applying the effect
    setTimeout(() => {
      setIsLoading(false);
      setCurrentEffect(null);
      console.log(`Applied ${action} to user ${targetId} for ${options?.duration || actionInfo[action]?.duration || 86400} seconds`);
    }, 1500);
    
    return true;
  }, []);
  
  const removeShameEffect = useCallback((targetId: string) => {
    console.log(`Removed shame effect from user ${targetId}`);
    return true;
  }, []);
  
  const handleShame = useCallback((userId: number, username: string, type: MockeryAction) => {
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
  
  const getActiveMockery = useCallback((userId: number) => {
    const action = shameEffects[userId];
    if (action) {
      return {
        action,
        timestamp: Date.now(),
        until: Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
      };
    }
    return {
      action: 'tomatoes' as MockeryAction,
      timestamp: 0,
      until: 0
    };
  }, [shameEffects]);
  
  return {
    applyShameEffect,
    removeShameEffect,
    isLoading,
    currentEffect,
    shameEffects,
    shameCooldown,
    shameCount,
    getShameCount,
    handleShame,
    getActiveMockery
  };
};

export type { ShameEffectOptions };
export type ShameAction = MockeryAction;
export const mockeryActionInfo = actionInfo; // Export the renamed variable
