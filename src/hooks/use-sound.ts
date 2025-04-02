
import { useCallback } from 'react';
import { SoundType, SoundOptions } from '@/types/sound-types';

// Create a function that will be returned by the hook
export type SoundFunction = (type: SoundType, options?: SoundOptions) => void;

// The main hook interface
export interface SoundHook {
  playSound: SoundFunction;
  stopSound: (type?: SoundType) => void;
  play: SoundFunction;
  isSoundEnabled: boolean;
  currentVolume: number;
  toggleMuted: () => boolean;
  soundConfig: {
    enabled: boolean;
    muted: boolean;
    volume: number;
  };
}

export const useSound = (): SoundHook => {
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    console.log(`Playing sound: ${type} with options:`, options);
    // Actual sound implementation would go here
  }, []);

  const stopSound = useCallback((type?: SoundType) => {
    console.log(`Stopping sound: ${type || 'all'}`);
    // Actual sound stopping implementation would go here
  }, []);

  const play = useCallback((type: SoundType, options?: SoundOptions) => {
    playSound(type, options);
  }, [playSound]);

  const toggleMuted = useCallback(() => {
    console.log('Toggling sound muted state');
    return false; // Mock implementation
  }, []);

  return {
    playSound,
    stopSound,
    play,
    isSoundEnabled: true,
    currentVolume: 1.0,
    toggleMuted,
    soundConfig: {
      enabled: true,
      muted: false,
      volume: 0.5
    }
  };
};

// Also export default as a function that returns the hook result
const defaultUseSound = (): SoundFunction => {
  const { play } = useSound();
  return play;
};

export default defaultUseSound;
