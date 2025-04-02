
import { useState, useCallback } from 'react';
import { UseSoundHook, SoundType, SoundOptions } from '@/types/sound-types';

export const useSound = (): UseSoundHook => {
  const [muted, setMuted] = useState(false);
  const [volume, setVolumeState] = useState(0.5);
  const [enabled, setEnabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const play = useCallback((sound: SoundType, options?: SoundOptions) => {
    if (muted || !enabled) return;
    console.log(`Playing sound: ${sound} with options:`, options);
    setIsPlaying(true);
    
    // Simulate sound ending
    setTimeout(() => {
      setIsPlaying(false);
      options?.onEnd?.();
    }, 1000);
  }, [muted, enabled]);
  
  const playSound = play;
  
  const stopSound = useCallback((fade?: boolean) => {
    setIsPlaying(false);
    console.log(`Stopping sound${fade ? ' with fade' : ''}`);
  }, []);
  
  const pauseSound = useCallback(() => {
    if (isPlaying) {
      console.log('Pausing sound');
      setIsPlaying(false);
    }
  }, [isPlaying]);
  
  const resumeSound = useCallback(() => {
    if (!isPlaying && !muted && enabled) {
      console.log('Resuming sound');
      setIsPlaying(true);
    }
  }, [isPlaying, muted, enabled]);
  
  const toggleMute = useCallback((): boolean => {
    setMuted(prev => !prev);
    return !muted;
  }, [muted]);
  
  const toggleMuted = toggleMute;
  
  const toggleEnabled = useCallback((): void => {
    setEnabled(prev => !prev);
  }, []);
  
  const getVolume = useCallback((): number => {
    return volume;
  }, [volume]);
  
  return {
    playSound,
    play,
    stopSound,
    pauseSound,
    resumeSound,
    isMuted: muted,
    toggleMute,
    setVolume: setVolumeState,
    getVolume,
    isEnabled: enabled,
    toggleEnabled,
    currentVolume: volume,
    mute: () => setMuted(true),
    unmute: () => setMuted(false),
    toggleMuted,
    soundConfig: {
      muted,
      enabled,
      volume
    }
  };
};

export default useSound;
