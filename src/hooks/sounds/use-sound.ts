
import { useCallback } from 'react';
import { useSoundContext } from './SoundProvider';
import { SoundType, SoundOptions, SoundHook } from '@/types/sound-types';

/**
 * Custom hook for sound functionality
 * Provides methods to play, control, and configure sounds in the application
 * @returns Sound control methods and state
 */
export const useSound = (): SoundHook => {
  const soundContext = useSoundContext();

  // Normalize methods to match the SoundHook interface
  const toggleMuted = useCallback((): boolean => {
    return soundContext.toggleMute();
  }, [soundContext]);

  const isMuted = soundContext.isMuted;

  const mute = useCallback(() => {
    soundContext.mute();
  }, [soundContext]);

  const unmute = useCallback(() => {
    soundContext.unmute();
  }, [soundContext]);

  const setVolume = useCallback((volume: number) => {
    soundContext.setVolume(volume);
  }, [soundContext]);

  const currentVolume = soundContext.currentVolume;

  const soundConfig: SoundHook["soundConfig"] = {
    enabled: soundContext.isEnabled,
    volume: soundContext.currentVolume,
    muted: soundContext.isMuted
  };

  // Return a properly formatted SoundHook object
  return {
    ...soundContext,
    toggleMuted,
    isMuted,
    mute,
    unmute,
    setVolume,
    currentVolume,
    soundConfig,
    getVolume: soundContext.getVolume,
    isEnabled: soundContext.isEnabled,
    toggleEnabled: soundContext.toggleEnabled
  };
};

export default useSound;
