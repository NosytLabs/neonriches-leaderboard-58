
import { useCallback } from 'react';
import useBaseSound from './sounds/use-sound';
import { SoundType, SoundOptions } from '@/types/sound-types';

export interface SoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  play: (type: SoundType, options?: SoundOptions) => void;
  isSoundEnabled: boolean;
  currentVolume: number;
}

export const useSound = (): SoundHook => {
  // Use the base sound hook
  const baseSound = useBaseSound();
  
  // Forward the methods
  return {
    playSound: baseSound.playSound,
    stopSound: baseSound.stopSound,
    play: baseSound.play,
    isSoundEnabled: baseSound.isSoundEnabled,
    currentVolume: baseSound.currentVolume
  };
};

// Also export default as a function that returns the hook result
const defaultUseSound = (): SoundHook => {
  return useSound();
};

export default defaultUseSound;
