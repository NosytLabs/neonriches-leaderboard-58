
import { useState, useEffect, useCallback } from 'react';
import { AnimationConfig } from '@/types/animations';
import { useSound } from '@/hooks/sounds/use-sound';
import { SoundType } from '@/types/sound';
import { MockeryAction } from '@/types/mockery';

// Define ShameAction type if not exported from mockery
type ShameAction = 
  | 'tomatoes'
  | 'eggs'
  | 'putridEggs'
  | 'stocks'
  | 'dunce'
  | 'silence'
  | 'courtJester'
  | 'shame'
  | 'protection'
  | 'taunt'
  | 'ridicule'
  | 'jester';

type ShameEffectState = {
  isActive: boolean;
  action: ShameAction | null;
  target: string | null;
  source: string | null;
  animationConfig: AnimationConfig | null;
  duration: number;
};

const DEFAULT_DURATION = 8000; // 8 seconds

export const useShameEffect = () => {
  const [state, setState] = useState<ShameEffectState>({
    isActive: false,
    action: null,
    target: null,
    source: null,
    animationConfig: null,
    duration: DEFAULT_DURATION,
  });
  
  const { playSound, stopSound } = useSound();
  
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
      // Stop effect sounds on cleanup
      stopSound();
    };
  }, [state.isActive, state.action]);
  
  // Show shame effect
  const showShameEffect = useCallback((action: ShameAction, target: string, source: string, customDuration?: number) => {
    const config = getAnimationConfig(action);
    
    setState({
      isActive: true,
      action,
      target,
      source,
      animationConfig: config,
      duration: customDuration || DEFAULT_DURATION,
    });
  }, []);
  
  // Clear shame effect
  const clearShameEffect = useCallback(() => {
    setState(prev => ({
      ...prev,
      isActive: false,
    }));
    
    stopSound();
  }, [stopSound]);
  
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
        playSound('splat');
        break;
      case 'eggs':
        playSound('crack');
        break;
      case 'putridEggs':
        playSound('stink');
        break;
      case 'stocks':
        playSound('lock');
        break;
      case 'dunce':
        playSound('trumpet');
        break;
      case 'shame':
        playSound('shame');
        break;
      case 'jester':
        playSound('jingle');
        break;
      default:
        playSound('notification');
    }
  };
  
  return {
    ...state,
    showShameEffect,
    clearShameEffect,
  };
};

export type { ShameAction };
