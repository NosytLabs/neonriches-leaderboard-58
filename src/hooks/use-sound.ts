
import { useCallback } from 'react';
import { SoundType, SoundOptions, UseSoundHook } from '@/types/sound-types';
import { useSoundsConfig } from './sounds/use-sounds-config';

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
const defaultUseSound = (): UseSoundHook => {
  return useSound();
};

export default defaultUseSound;
