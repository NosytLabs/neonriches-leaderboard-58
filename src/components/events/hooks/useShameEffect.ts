import { useState, useEffect, useCallback } from 'react';
import { AnimationConfig } from '@/types/animations';
import { useSound } from '@/hooks/sounds/use-sound';
import { SoundType } from '@/types/sound-types';
import { MockeryAction } from '@/types/mockery';

// Export MockeryAction as ShameAction for compatibility
export type ShameAction = MockeryAction;

// Define a state type for our shame effect
type ShameEffectState = {
  isActive: boolean;
  action: ShameAction | null;
  target: string | null;
  source: string | null;
  animationConfig: AnimationConfig | null;
  duration: number;
  shameCooldown: Record<number, number>;
  shameEffects: Record<number, { action: ShameAction; timestamp: number; until: number }>;
  shameCount: Record<number, number>;
};

const DEFAULT_DURATION = 8000; // 8 seconds

export const useShameEffect = (options = { cooldownPeriod: 24 * 60 * 60 * 1000 }) => {
  const [state, setState] = useState<ShameEffectState>({
    isActive: false,
    action: null,
    target: null,
    source: null,
    animationConfig: null,
    duration: DEFAULT_DURATION,
    shameCooldown: {},
    shameEffects: {},
    shameCount: {}
  });
  
  const { play: playSound } = useSound();
  
  // Clear the effect after duration
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (state.isActive) {
      timer = setTimeout(() => {
        clearShameEffect();
      }, state.duration);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [state.isActive, state.duration]);
  
  // Play sound when effect starts
  useEffect(() => {
    if (state.isActive && state.action) {
      playShameEffectSound(state.action);
    }
    
    return () => {
      // No cleanup needed
    };
  }, [state.isActive, state.action]);
  
  // Show shame effect
  const showShameEffect = useCallback((action: ShameAction, target: string, source: string, customDuration?: number) => {
    const config = getAnimationConfig(action);
    
    setState(prev => ({
      ...prev,
      isActive: true,
      action,
      target,
      source,
      animationConfig: config,
      duration: customDuration || DEFAULT_DURATION,
    }));
  }, []);
  
  // Handle shame action (with cooldown)
  const handleShame = useCallback((userId: number, username: string, action: ShameAction, amount: number) => {
    setState(prev => {
      // Check if user is on cooldown
      const now = Date.now();
      if (prev.shameCooldown[userId] && prev.shameCooldown[userId] > now) {
        return prev; // Still on cooldown
      }
      
      // Apply the effect and set cooldown
      const effectDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      
      return {
        ...prev,
        shameCooldown: {
          ...prev.shameCooldown,
          [userId]: now + options.cooldownPeriod
        },
        shameEffects: {
          ...prev.shameEffects,
          [userId]: {
            action,
            timestamp: now,
            until: now + effectDuration
          }
        },
        shameCount: {
          ...prev.shameCount,
          [userId]: (prev.shameCount[userId] || 0) + 1
        }
      };
    });
    
    // Show the effect visually
    showShameEffect(action, username, 'You');
    
    return true;
  }, [options.cooldownPeriod, showShameEffect]);
  
  // Get shame count for a user
  const getShameCount = useCallback((userId: number) => {
    return state.shameCount[userId] || 0;
  }, [state.shameCount]);
  
  // Clear shame effect
  const clearShameEffect = useCallback(() => {
    setState(prev => ({
      ...prev,
      isActive: false,
    }));
  }, []);
  
  // Get animation config based on action
  const getAnimationConfig = useCallback((action: ShameAction): AnimationConfig => {
    switch (action) {
      case 'tomatoes':
        return {
          type: 'particles',
          particleImage: '/assets/tomato.png',
          particleCount: 20,
          duration: 5000,
        };
      case 'eggs':
        return {
          type: 'particles',
          particleImage: '/assets/egg.png',
          particleCount: 15,
          duration: 4000,
        };
      case 'putridEggs':
        return {
          type: 'overlay',
          overlayImage: '/assets/putrid-splash.png',
          duration: 6000,
        };
      case 'stocks':
        return {
          type: 'container',
          containerImage: '/assets/stocks.png',
          duration: 10000,
        };
      case 'dunce':
        return {
          type: 'accessory',
          accessoryImage: '/assets/dunce-hat.png',
          position: 'top',
          duration: 8000,
        };
      case 'shame':
        return {
          type: 'particles',
          particleImage: '/assets/shame.png',
          particleCount: 10,
          duration: 4000,
        };
      case 'taunt':
        return {
          type: 'particles',
          particleImage: '/assets/taunt.png',
          particleCount: 12,
          duration: 4000,
        };
      case 'jester':
        return {
          type: 'accessory',
          accessoryImage: '/assets/jester-hat.png',
          position: 'top',
          duration: 7000,
        };
      default:
        return {
          type: 'particles',
          particleImage: '/assets/shame.png',
          particleCount: 10,
          duration: 4000,
        };
    }
  }, []);
  
  // Play appropriate sound for the effect
  const playShameEffectSound = (action: ShameAction) => {
    switch (action) {
      case 'tomatoes':
        playSound('shame');
        break;
      case 'eggs':
        playSound('notification');
        break;
      case 'putridEggs':
        playSound('error');
        break;
      case 'stocks':
        playSound('notification');
        break;
      case 'dunce':
        playSound('trumpets');
        break;
      case 'shame':
        playSound('shame');
        break;
      case 'jester':
        playSound('notification');
        break;
      default:
        playSound('notification');
    }
  };
  
  return {
    ...state,
    showShameEffect,
    clearShameEffect,
    handleShame,
    getShameCount
  };
};
