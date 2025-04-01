import { useState, useCallback } from 'react';
import { SoundType, SoundOptions, UseSoundHook } from '@/hooks/sounds/types';
import { useSoundsConfig } from './useSoundsConfig';
import getSoundPath from '@/utils/getSoundPath';

/**
 * Custom hook for playing sound effects
 */
export const useSound = (): UseSoundHook => {
  const { soundConfig, toggleSounds, toggleMuted, setVolume } = useSoundsConfig();
  const [volume, setVolumeState] = useState(soundConfig.volume || 0.5);
  
  /**
   * Play a sound with options
   */
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    if (soundConfig.muted || !soundConfig.enabled) return;
    
    // Get the sound path
    const soundPath = getSoundPath(type);
    if (!soundPath) return;
    
    try {
      // Create a new audio element
      const audio = new Audio(soundPath);
      
      // Set volume
      audio.volume = options?.volume !== undefined ? options.volume : volume;
      
      // Set other options
      if (options?.playbackRate) {
        audio.playbackRate = options.playbackRate;
      }
      
      // Attach onend callback if provided
      if (options?.onEnd) {
        audio.onended = options.onEnd;
      }
      
      // Play the sound
      audio.play().catch(err => {
        console.warn(`Error playing sound (${type}):`, err);
      });
    } catch (err) {
      console.error(`Error setting up sound (${type}):`, err);
    }
  }, [soundConfig.muted, soundConfig.enabled, volume]);
  
  /**
   * Stop a sound (placeholder implementation)
   */
  const stopSound = useCallback((type?: SoundType) => {
    // Simple placeholder implementation
    console.log(`Stopping sound: ${type || 'all'}`);
  }, []);

  // Add a compatibility method for the play function that some components are using
  const play = useCallback((type: SoundType, options?: SoundOptions) => {
    playSound(type, options);
  }, [playSound]);
  
  // Make sure these return booleans as required in the interface
  const wrappedToggleSounds = useCallback((): boolean => {
    const result = toggleSounds();
    return !!result;
  }, [toggleSounds]);
  
  const wrappedToggleMuted = useCallback((): boolean => {
    const result = toggleMuted();
    return !!result;
  }, [toggleMuted]);
  
  const pauseSound = useCallback((type?: SoundType) => {
    console.log(`Pausing sound: ${type || 'all'}`);
  }, []);
  
  const resumeSound = useCallback((type?: SoundType) => {
    console.log(`Resuming sound: ${type || 'all'}`);
  }, []);
  
  const isPlaying = useCallback((type: SoundType): boolean => {
    return false; // Placeholder
  }, []);
  
  return {
    playSound,
    play,
    stopSound,
    pauseSound,
    resumeSound,
    isPlaying,
    isSoundEnabled: !soundConfig.muted && soundConfig.enabled,
    currentVolume: volume,
    toggleMuted: wrappedToggleMuted,
    toggleSounds: wrappedToggleSounds,
    setVolume
  };
};

export default useSound;
