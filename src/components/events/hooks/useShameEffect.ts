
import { useState, useCallback } from 'react';
import { User } from '@/types/user';
import { MockeryActionType, NotificationSoundOptions } from '@/types/mockery';
import useNotificationSound from '@/hooks/useNotificationSound';

interface ShameEffectOptions {
  duration?: number;
  soundVolume?: number;
  immediate?: boolean;
}

export interface ShameEffectResult {
  applyEffect: (username: string, action: MockeryActionType) => void;
  clearEffect: () => void;
  isActive: boolean;
  currentEffect: MockeryActionType | null;
  targetUser: string | null;
}

const useShameEffect = (options?: ShameEffectOptions): ShameEffectResult => {
  const [isActive, setIsActive] = useState(false);
  const [currentEffect, setCurrentEffect] = useState<MockeryActionType | null>(null);
  const [targetUser, setTargetUser] = useState<string | null>(null);
  const { playSound } = useNotificationSound();
  
  const defaultDuration = options?.duration || 3000; // 3 seconds default
  
  // Function to apply shame effect to a user
  const applyEffect = useCallback((username: string, action: MockeryActionType) => {
    setTargetUser(username);
    setCurrentEffect(action);
    setIsActive(true);
    
    // Play the appropriate sound effect based on the action
    const soundType = getSoundTypeForAction(action);
    playSound(soundType, { 
      volume: options?.soundVolume || 0.5 
    });
    
    // Automatically clear the effect after duration
    setTimeout(() => {
      setIsActive(false);
      setCurrentEffect(null);
      setTargetUser(null);
    }, defaultDuration);
  }, [defaultDuration, options, playSound]);
  
  // Function to manually clear the shame effect
  const clearEffect = useCallback(() => {
    setIsActive(false);
    setCurrentEffect(null);
    setTargetUser(null);
  }, []);
  
  // Helper to map shame actions to sound types
  const getSoundTypeForAction = (action: MockeryActionType): 'shame' => {
    // We would ideally have different sounds for different actions,
    // but for simplicity, we'll just use 'shame' for all
    return 'shame';
  };
  
  return {
    applyEffect,
    clearEffect,
    isActive,
    currentEffect,
    targetUser
  };
};

// Helper data for shame effects
export const shameEffectsData: Record<MockeryActionType, {
  icon: string;
  title: string;
  description: string;
  tier: 'basic' | 'premium' | 'royal' | 'silver' | 'legendary';
  price: number;
  duration: number;
}> = {
  'tomatoes': {
    icon: '🍅',
    title: 'Throw Tomatoes',
    description: 'Pelt this user with virtual rotten tomatoes',
    tier: 'basic',
    price: 0.99,
    duration: 24
  },
  'eggs': {
    icon: '🥚',
    title: 'Throw Eggs',
    description: 'Shower this user with virtual rotten eggs',
    tier: 'basic',
    price: 1.49,
    duration: 24
  },
  'stocks': {
    icon: '🪵',
    title: 'Place in Stocks',
    description: 'Lock this user in the public stocks for ridicule',
    tier: 'premium',
    price: 2.99,
    duration: 48
  },
  'shame': {
    icon: '🔔',
    title: 'Public Shame',
    description: 'Ring the shame bell to mock this user publicly',
    tier: 'basic',
    price: 0.99,
    duration: 24
  },
  'dungeons': {
    icon: '⛓️',
    title: 'Send to Dungeons',
    description: 'Lock this user in the royal dungeons',
    tier: 'premium',
    price: 3.99,
    duration: 48
  },
  'immune': {
    icon: '🛡️',
    title: 'Grant Immunity',
    description: 'Protect this user from mockery (positive effect)',
    tier: 'royal',
    price: 9.99,
    duration: 72
  },
  'crown': {
    icon: '👑',
    title: 'Fake Crown',
    description: 'Brand this user with a mock crown',
    tier: 'premium',
    price: 4.99,
    duration: 48
  },
  'dunce': {
    icon: '🎭',
    title: 'Dunce Cap',
    description: 'Make this user wear a dunce cap',
    tier: 'basic',
    price: 1.99,
    duration: 24
  },
  'jester': {
    icon: '🃏',
    title: 'Court Jester',
    description: 'Turn this user into the court jester',
    tier: 'premium',
    price: 3.99,
    duration: 48
  },
  'troll': {
    icon: '👹',
    title: 'Label as Troll',
    description: 'Mark this user as a bridge troll',
    tier: 'basic',
    price: 1.99,
    duration: 24
  },
  'peasant': {
    icon: '👨‍🌾',
    title: 'Demote to Peasant',
    description: 'Reduce this user to a lowly peasant',
    tier: 'premium',
    price: 2.99,
    duration: 48
  },
  'rat': {
    icon: '🐀',
    title: 'Plague Rat',
    description: 'Turn this user into a plague rat',
    tier: 'basic',
    price: 1.99,
    duration: 24
  },
  'ghost': {
    icon: '👻',
    title: 'Ghostify',
    description: 'Make this user appear as a ghost',
    tier: 'premium',
    price: 3.99,
    duration: 48
  },
  'skeleton': {
    icon: '💀',
    title: 'Skeletonize',
    description: 'Turn this user into a skeleton',
    tier: 'premium',
    price: 3.99,
    duration: 48
  },
  'zombie': {
    icon: '🧟',
    title: 'Zombify',
    description: 'Turn this user into a zombie',
    tier: 'royal',
    price: 5.99,
    duration: 72
  },
  'witch': {
    icon: '🧙',
    title: 'Label as Witch',
    description: 'Accuse this user of witchcraft',
    tier: 'premium',
    price: 3.99,
    duration: 48
  },
  'monster': {
    icon: '👾',
    title: 'Monsterize',
    description: 'Turn this user into a monster',
    tier: 'royal',
    price: 5.99,
    duration: 72
  },
  'demon': {
    icon: '😈',
    title: 'Demonize',
    description: 'Mark this user as possessed',
    tier: 'royal',
    price: 5.99,
    duration: 72
  },
  'dragon': {
    icon: '🐉',
    title: 'Dragonify',
    description: 'Turn this user into a dragon',
    tier: 'legendary',
    price: 9.99,
    duration: 96
  },
  'king': {
    icon: '🤴',
    title: 'False King',
    description: 'Crown this user as a false king',
    tier: 'royal',
    price: 7.99,
    duration: 72
  },
  'queen': {
    icon: '👸',
    title: 'False Queen',
    description: 'Crown this user as a false queen',
    tier: 'royal',
    price: 7.99,
    duration: 72
  },
  'knight': {
    icon: '🐴',
    title: 'Rusty Knight',
    description: 'Dub this user a rusty knight',
    tier: 'premium',
    price: 4.99,
    duration: 48
  },
  'bishop': {
    icon: '♗',
    title: 'Corrupt Bishop',
    description: 'Label this user a corrupt bishop',
    tier: 'royal',
    price: 6.99,
    duration: 72
  },
  'rook': {
    icon: '♖',
    title: 'Crumbling Rook',
    description: 'Turn this user into a crumbling rook',
    tier: 'premium',
    price: 4.99,
    duration: 48
  },
  'pawn': {
    icon: '♟️',
    title: 'Mere Pawn',
    description: 'Expose this user as a mere pawn',
    tier: 'basic',
    price: 1.99,
    duration: 24
  },
  'target': {
    icon: '🎯',
    title: 'Make Target',
    description: 'Make this user a royal target',
    tier: 'premium',
    price: 3.99,
    duration: 48
  },
  'challenge': {
    icon: '⚔️',
    title: 'Royal Challenge',
    description: 'Issue a royal challenge to this user',
    tier: 'royal',
    price: 6.99,
    duration: 72
  }
};

export default useShameEffect;
