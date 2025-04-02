
// Add missing methods for compatibility
import { useState, useCallback } from 'react';
import { UseSoundHook, SoundType, SoundOptions } from '@/types/sound-types';

export const useSound = (): UseSoundHook => {
  const [muted, setMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const play = useCallback((sound: SoundType, options?: SoundOptions) => {
    if (muted) return;
    console.log(`Playing sound: ${sound} with options:`, options);
    setIsPlaying(true);
    
    // Simulate sound ending
    setTimeout(() => {
      setIsPlaying(false);
      options?.onEnd?.();
    }, 1000);
  }, [muted]);
  
  const stopSound = useCallback(() => {
    setIsPlaying(false);
  }, []);
  
  const toggleMuted = useCallback((): boolean => {
    setMuted(prev => !prev);
    return !muted;
  }, [muted]);
  
  return {
    playSound: play,
    play, // Add this alias method
    stopSound,
    isMuted: muted,
    currentVolume: volume,
    setVolume: setVolumeState,
    mute: () => setMuted(true),
    unmute: () => setMuted(false),
    toggleMuted,
    soundConfig: {
      muted,
      enabled: !muted,
      volume
    },
    isPlaying
  };
};

export default useSound;
