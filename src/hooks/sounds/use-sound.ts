
import { useCallback, useState } from 'react';
import { SoundType, SoundOptions, SoundConfig, UseSoundHook } from '@/types/sound-types';

/**
 * Hook for playing sounds in the application
 * @returns Sound control methods and state
 */
export const useSound = (): UseSoundHook => {
  const [soundConfig, setSoundConfig] = useState<SoundConfig>({
    enabled: true,
    muted: false,
    volume: 0.5,
    effects: {
      notification: true,
      success: true,
      error: true
    },
    premium: false,
    theme: 'default'
  });
  
  const [currentSound, setCurrentSound] = useState<SoundType | undefined>(undefined);
  
  // Play a sound with options
  const playSound = useCallback((type: SoundType, options: SoundOptions = {}) => {
    if (!soundConfig.enabled || soundConfig.muted) return;
    
    // Apply volume from config and options
    const volume = options.volume !== undefined ? options.volume : soundConfig.volume;
    
    console.log(`Playing sound: ${type} with volume ${volume}`);
    // In a real implementation, this would play the actual sound
    
    setCurrentSound(type);
    
    // Simulate sound ending after a delay
    if (options.onEnd) {
      const duration = 1000; // Simulate 1-second sound
      setTimeout(options.onEnd, duration);
    }
  }, [soundConfig]);
  
  // Stop a sound or all sounds
  const stopSound = useCallback((type?: SoundType) => {
    console.log(`Stopping sound: ${type || 'all'}`);
    
    if (!type || type === currentSound) {
      setCurrentSound(undefined);
    }
  }, [currentSound]);
  
  // Pause a sound
  const pauseSound = useCallback((type?: SoundType) => {
    console.log(`Pausing sound: ${type || 'all'}`);
    // Actual implementation would pause the sound
  }, []);
  
  // Resume a paused sound
  const resumeSound = useCallback((type?: SoundType) => {
    console.log(`Resuming sound: ${type || 'all'}`);
    // Actual implementation would resume the sound
  }, []);
  
  // Check if a sound is currently playing
  const isPlaying = useCallback((type: SoundType): boolean => {
    return currentSound === type;
  }, [currentSound]);
  
  // Toggle sounds on/off
  const toggleSounds = useCallback(() => {
    setSoundConfig(prev => ({
      ...prev,
      enabled: !prev.enabled
    }));
  }, []);
  
  // Toggle mute/unmute
  const toggleMuted = useCallback(() => {
    setSoundConfig(prev => ({
      ...prev,
      muted: !prev.muted
    }));
  }, []);
  
  // Set volume
  const setVolume = useCallback((volume: number) => {
    setSoundConfig(prev => ({
      ...prev,
      volume: Math.max(0, Math.min(1, volume))
    }));
  }, []);
  
  // Alias for playSound
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
    toggleSounds,
    toggleMuted,
    setVolume,
    isSoundEnabled: soundConfig.enabled && !soundConfig.muted,
    currentVolume: soundConfig.volume,
    currentSound,
    soundConfig
  };
};

export default useSound;
