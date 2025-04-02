
import { useCallback } from 'react';
import { SoundType, SoundOptions } from '@/types/sound-types';
import { useSoundsConfig } from './use-sounds-config';

export interface UseSoundHook {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  stopSound: (type?: SoundType) => void;
  pauseSound: (type?: SoundType) => void;
  resumeSound: (type?: SoundType) => void;
  isPlaying: (type: SoundType) => boolean;
  play: (type: SoundType, options?: SoundOptions) => void;
  isSoundEnabled: boolean;
  currentVolume: number;
  toggleSounds?: () => void;
  toggleMuted?: () => void;
  setVolume?: (volume: number) => void;
  soundConfig?: any;
}

export const useSound = (): UseSoundHook => {
  const { soundConfig, toggleSounds, toggleMuted, setVolume } = useSoundsConfig();

  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    console.log(`Playing sound: ${type} with options:`, options);
    // Actual sound implementation would go here
  }, []);

  const stopSound = useCallback((type?: SoundType) => {
    console.log(`Stopping sound: ${type || 'all'}`);
    // Actual sound stopping implementation would go here
  }, []);

  const pauseSound = useCallback((type?: SoundType) => {
    console.log(`Pausing sound: ${type || 'all'}`);
    // Pause implementation
  }, []);

  const resumeSound = useCallback((type?: SoundType) => {
    console.log(`Resuming sound: ${type || 'all'}`);
    // Resume implementation
  }, []);

  const isPlaying = useCallback((type: SoundType) => {
    // Mock implementation
    return false;
  }, []);

  const play = useCallback((type: SoundType, options?: SoundOptions) => {
    playSound(type, options);
  }, [playSound]);

  return {
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    isPlaying,
    play,
    isSoundEnabled: soundConfig?.enabled || true,
    currentVolume: soundConfig?.volume || 1.0,
    toggleSounds,
    toggleMuted,
    setVolume,
    soundConfig
  };
};

// Also export default as a function that returns the hook result
export default useSound;
