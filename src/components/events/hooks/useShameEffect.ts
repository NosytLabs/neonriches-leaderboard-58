
import { useCallback, useState } from 'react';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { UserProfile } from '@/types/user';

interface ShameEffectOptions {
  duration?: number;
  displayName?: string;
}

// Dictionary of shame action information
export const mockeryActionInfo: Record<MockeryAction, { 
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
  // ... Add more action info for other MockeryAction types
  shame: {
    icon: '🔔',
    title: 'Bell of Shame',
    description: 'Ring the shame bell, notifying everyone of the user\'s disgrace.',
    tier: 'basic',
    price: 10,
    duration: 172800 // 2 days
  },
  // ... Add remaining actions with their details
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
  }
};

// Hook for handling shame effects
export const useShameEffect = (user: UserProfile | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentEffect, setCurrentEffect] = useState<MockeryAction | null>(null);
  
  const applyShameEffect = useCallback((targetId: string, action: MockeryAction, options?: ShameEffectOptions) => {
    setIsLoading(true);
    setCurrentEffect(action);
    
    // Simulate applying the effect
    setTimeout(() => {
      setIsLoading(false);
      setCurrentEffect(null);
      console.log(`Applied ${action} to user ${targetId} for ${options?.duration || mockeryActionInfo[action]?.duration || 86400} seconds`);
    }, 1500);
    
    return true;
  }, []);
  
  const removeShameEffect = useCallback((targetId: string) => {
    console.log(`Removed shame effect from user ${targetId}`);
    return true;
  }, []);
  
  return {
    applyShameEffect,
    removeShameEffect,
    isLoading,
    currentEffect
  };
};

export type { ShameEffectOptions };
export type ShameAction = MockeryAction;
export { mockeryActionInfo };
