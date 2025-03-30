
import { useState, useCallback } from 'react';
import { MockeryAction, ShameAction, ShameEffectOptions, MockeryTier } from '@/types/mockery';

// Define mockery action info
export const mockeryActionsInfo: Record<MockeryAction, { 
  icon: string; 
  title: string; 
  description: string; 
  tier: "basic" | "premium" | "royal" | "legendary" | "silver";
  price: number; 
  duration: number; 
}> = {
  tomatoes: {
    icon: '🍅',
    title: 'Rotten Tomatoes',
    description: 'Pelt the user with rotten tomatoes, a classic form of public ridicule.',
    tier: 'basic',
    price: 0.25,
    duration: 24 * 60 * 60 * 1000, // 24 hours
  },
  eggs: {
    icon: '🥚',
    title: 'Rotten Eggs',
    description: 'Throw rotten eggs at the user, leaving them with a smelly reputation.',
    tier: 'basic',
    price: 0.50,
    duration: 24 * 60 * 60 * 1000, // 24 hours
  },
  shame: {
    icon: '🔔',
    title: 'Bell of Shame',
    description: 'Ring the bell of shame at the user, announcing their disgrace to all.',
    tier: 'basic',
    price: 0.75,
    duration: 24 * 60 * 60 * 1000, // 24 hours
  },
  dungeons: {
    icon: '⛓️',
    title: 'Royal Dungeons',
    description: 'Send the user to the royal dungeons for a time-out from society.',
    tier: 'premium',
    price: 1.0,
    duration: 24 * 60 * 60 * 1000, // 24 hours
  },
  immune: {
    icon: '🛡️',
    title: 'Royal Immunity',
    description: 'Grant royal immunity, protecting from mockery for a period.',
    tier: 'royal',
    price: 5.0,
    duration: 7 * 24 * 60 * 60 * 1000, // 7 days
  },
  crown: {
    icon: '👑',
    title: 'Mock Crown',
    description: 'Place a mockery crown on their head, marking them as a pretender.',
    tier: 'premium',
    price: 1.5,
    duration: 24 * 60 * 60 * 1000,
  },
  stocks: {
    icon: '🪵',
    title: 'In Stocks',
    description: 'Place them in the stocks for public viewing and ridicule.',
    tier: 'premium',
    price: 1.25,
    duration: 24 * 60 * 60 * 1000,
  },
  dunce: { icon: '🎭', title: 'Dunce', description: 'Dunce cap', tier: 'basic', price: 0.5, duration: 24 * 60 * 60 * 1000 },
  jester: { icon: '🃏', title: 'Jester', description: 'Court jester', tier: 'premium', price: 1.0, duration: 24 * 60 * 60 * 1000 },
  fool: { icon: '😵', title: 'Fool', description: 'Village fool', tier: 'basic', price: 0.5, duration: 24 * 60 * 60 * 1000 },
  troll: { icon: '👹', title: 'Troll', description: 'Bridge troll', tier: 'premium', price: 1.0, duration: 24 * 60 * 60 * 1000 },
  peasant: { icon: '👨‍🌾', title: 'Peasant', description: 'Lowly peasant', tier: 'basic', price: 0.5, duration: 24 * 60 * 60 * 1000 },
  rat: { icon: '🐀', title: 'Rat', description: 'Plague rat', tier: 'basic', price: 0.75, duration: 24 * 60 * 60 * 1000 },
  ghost: { icon: '👻', title: 'Ghost', description: 'Ghost', tier: 'premium', price: 1.0, duration: 24 * 60 * 60 * 1000 },
  skeleton: { icon: '💀', title: 'Skeleton', description: 'Skeleton', tier: 'premium', price: 1.25, duration: 24 * 60 * 60 * 1000 },
  zombie: { icon: '🧟', title: 'Zombie', description: 'Zombie', tier: 'premium', price: 1.5, duration: 24 * 60 * 60 * 1000 },
  witch: { icon: '🧙', title: 'Witch', description: 'Witch', tier: 'premium', price: 1.75, duration: 24 * 60 * 60 * 1000 },
  monster: { icon: '👾', title: 'Monster', description: 'Monster', tier: 'royal', price: 2.0, duration: 24 * 60 * 60 * 1000 },
  demon: { icon: '😈', title: 'Demon', description: 'Demon', tier: 'royal', price: 2.5, duration: 24 * 60 * 60 * 1000 },
  dragon: { icon: '🐉', title: 'Dragon', description: 'Dragon', tier: 'legendary', price: 3.0, duration: 24 * 60 * 60 * 1000 },
  king: { icon: '🤴', title: 'King', description: 'False king', tier: 'royal', price: 3.5, duration: 24 * 60 * 60 * 1000 },
  queen: { icon: '👸', title: 'Queen', description: 'False queen', tier: 'royal', price: 3.5, duration: 24 * 60 * 60 * 1000 },
  knight: { icon: '🐴', title: 'Knight', description: 'Rusty knight', tier: 'premium', price: 2.0, duration: 24 * 60 * 60 * 1000 },
  bishop: { icon: '♗', title: 'Bishop', description: 'Corrupt bishop', tier: 'premium', price: 2.25, duration: 24 * 60 * 60 * 1000 },
  rook: { icon: '♖', title: 'Rook', description: 'Crumbling rook', tier: 'premium', price: 1.75, duration: 24 * 60 * 60 * 1000 },
  pawn: { icon: '♟️', title: 'Pawn', description: 'Mere pawn', tier: 'basic', price: 0.25, duration: 24 * 60 * 60 * 1000 },
  target: { icon: '🎯', title: 'Target', description: 'Target practice', tier: 'basic', price: 0.5, duration: 24 * 60 * 60 * 1000 },
  challenge: { icon: '⚔️', title: 'Challenge', description: 'Royal challenge', tier: 'royal', price: 5.0, duration: 24 * 60 * 60 * 1000 }
};

export function useShameEffect() {
  const [shameEffects, setShameEffects] = useState<Record<string, { action: MockeryAction; timestamp: number; until: number; }>>({});
  const [shameCooldown, setShameCooldown] = useState<Record<string, number>>({});
  const [shameCount, setShameCount] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentEffect, setCurrentEffect] = useState<MockeryAction>('tomatoes');

  const applyShameEffect = useCallback((targetId: string, action: MockeryAction, options?: ShameEffectOptions): true => {
    const now = Date.now();
    const duration = options?.duration || 24 * 60 * 60 * 1000; // Default: 24 hours
    
    setShameEffects(prev => ({
      ...prev,
      [targetId]: {
        action,
        timestamp: now,
        until: now + duration
      }
    }));
    
    // Set cooldown for the user applying shame
    setShameCooldown(prev => ({
      ...prev,
      [targetId]: now + 30 * 60 * 1000 // 30 min cooldown
    }));
    
    // Increment shame count
    setShameCount(prev => ({
      ...prev,
      [targetId]: (prev[targetId] || 0) + 1
    }));
    
    setCurrentEffect(action);
    
    return true;
  }, []);
  
  const removeShameEffect = useCallback((targetId: string): true => {
    setShameEffects(prev => {
      const newEffects = { ...prev };
      delete newEffects[targetId];
      return newEffects;
    });
    
    return true;
  }, []);
  
  const getShameCount = useCallback((userId: string | number): number => {
    const id = userId.toString();
    return shameCount[id] || 0;
  }, [shameCount]);
  
  const handleShame = useCallback((userId: number, username: string, action: MockeryAction) => {
    applyShameEffect(userId.toString(), action);
    return true;
  }, [applyShameEffect]);
  
  const getActiveMockery = useCallback((userId: string | number) => {
    const id = userId.toString();
    if (shameEffects[id] && shameEffects[id].until > Date.now()) {
      return shameEffects[id];
    }
    return null;
  }, [shameEffects]);

  return {
    shameCooldown,
    shameEffects,
    shameCount,
    getShameCount,
    handleShame,
    getActiveMockery,
    applyShameEffect,
    removeShameEffect,
    isLoading,
    currentEffect
  };
}

export default useShameEffect;
