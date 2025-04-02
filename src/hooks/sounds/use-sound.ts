
import { useCallback, useContext } from 'react';
import { SoundType, SoundOptions } from '@/types/sound-types';
import { SoundContext, SoundContextType } from '@/contexts/sound';

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  play: (type: SoundType, options?: SoundOptions) => void;
  isMuted: boolean;
  setMuted: (muted: boolean) => void;
  volume: number;
  setVolume: (volume: number) => void;
  isPremium: boolean;
  setPremium: (premium: boolean) => void;
  isEnabled: boolean;
  setEnabled: (enabled: boolean) => void;
}

// Main hook implementation
export const useSound = (): UseSoundHook => {
  const context = useContext(SoundContext);

  // Provide fallback if context is not available
  if (!context) {
    console.warn('SoundContext not found. Using fallback sound implementation.');
    
    const noopFn = () => {};
    
    return {
      playSound: (type, options) => {
        console.log(`[Sound Fallback] Playing sound: ${type}`, options);
      },
      stopSound: noopFn,
      pauseSound: noopFn,
      resumeSound: noopFn,
      play: (type, options) => {
        console.log(`[Sound Fallback] Playing sound: ${type}`, options);
      },
      isMuted: false,
      setMuted: noopFn,
      volume: 0.5,
      setVolume: noopFn,
      isPremium: false,
      setPremium: noopFn,
      isEnabled: true,
      setEnabled: noopFn
    };
  }

  // Add the play alias for playSound
  const play = useCallback((type: SoundType, options?: SoundOptions) => {
    context.playSound(type, options);
  }, [context]);

  return {
    ...context,
    play
  };
};

// Default export as a function that returns just the play function
export default function useDefaultSound(): (type: SoundType, options?: SoundOptions) => void {
  const { play } = useSound();
  return play;
}
