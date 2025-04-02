
import { useState, useCallback } from 'react';
import { SoundType, SoundOptions, SoundHook } from '@/types/sound-types';

/**
 * Hook for playing sounds without the context
 */
export const useSound = (): SoundHook => {
  const [muted, setMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  const playSound = useCallback((sound: SoundType, options?: SoundOptions) => {
    if (!isEnabled || muted) return;
    
    console.log(`Playing sound: ${sound}`);
    
    // For mock purposes, we just log the sound instead of playing it
    setIsPlaying(true);
    
    // Simulate ending after a short time
    setTimeout(() => {
      setIsPlaying(false);
      options?.onEnd?.();
    }, 1000);
  }, [isEnabled, muted]);
  
  // Alias for compatibility
  const play = playSound;
  
  const stopSound = useCallback((fade?: boolean) => {
    console.log(`Stopping sound${fade ? ' with fade' : ''}`);
    setIsPlaying(false);
  }, []);
  
  const pauseSound = useCallback(() => {
    console.log('Pausing sound');
    setIsPlaying(false);
  }, []);
  
  const resumeSound = useCallback(() => {
    if (!isEnabled || muted) return;
    console.log('Resuming sound');
    setIsPlaying(true);
  }, [isEnabled, muted]);
  
  const toggleMute = useCallback(() => {
    setMuted(prev => !prev);
    return !muted;
  }, [muted]);
  
  // Alias for compatibility
  const toggleMuted = toggleMute;
  
  const setVolumeLevel = useCallback((newVolume: number) => {
    setVolume(newVolume);
  }, []);
  
  const getVolumeLevel = useCallback(() => {
    return volume;
  }, [volume]);
  
  const toggleSoundEnabled = useCallback(() => {
    setIsEnabled(prev => !prev);
  }, []);
  
  return {
    playSound,
    play,
    stopSound,
    pauseSound,
    resumeSound,
    toggleMute,
    isMuted: muted,
    setVolume: setVolumeLevel,
    getVolume: getVolumeLevel,
    isEnabled,
    toggleEnabled: toggleSoundEnabled,
    mute: () => setMuted(true),
    unmute: () => setMuted(false),
    toggleMuted,
    currentVolume: volume,
    soundConfig: {
      enabled: isEnabled,
      volume,
      muted
    },
    isPlaying,
    isSoundEnabled: isEnabled && !muted
  };
};

export default useSound;
