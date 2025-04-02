
import { useCallback } from 'react';
import { SoundType, SoundOptions } from '@/types/sound-types';
import { useSoundsConfig } from './use-sounds-config';
import getSoundPath from '@/utils/getSoundPath';

/**
 * Custom hook for playing sound effects
 */
export const useSound = () => {
  const { soundConfig, toggleSounds, toggleMuted, setVolume } = useSoundsConfig();
  
  /**
   * Play a sound with options
   */
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    if (soundConfig.muted || !soundConfig.enabled) return;
    
    // Get the sound path
    const soundPath = getSoundPath(type);
    if (!soundPath) {
      console.warn(`Sound path for type ${type} not found`);
      return;
    }
    
    try {
      // Create a new audio element
      const audio = new Audio(soundPath);
      
      // Set volume
      audio.volume = options?.volume !== undefined ? options.volume : soundConfig.volume;
      
      // Set other options
      if (options?.playbackRate) {
        audio.playbackRate = options.playbackRate;
      }
      
      // Set loop option
      audio.loop = options?.loop || false;
      
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
  }, [soundConfig.muted, soundConfig.enabled, soundConfig.volume]);
  
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
    const newState = toggleSounds();
    return !!newState;
  }, [toggleSounds]);
  
  const wrappedToggleMuted = useCallback((): boolean => {
    const newState = toggleMuted();
    return !!newState;
  }, [toggleMuted]);
  
  const pauseSound = useCallback((type?: SoundType): void => {
    console.log(`Pausing sound: ${type || 'all'}`);
  }, []);
  
  const resumeSound = useCallback((type?: SoundType): void => {
    console.log(`Resuming sound: ${type || 'all'}`);
  }, []);
  
  const isPlaying = useCallback((type: SoundType): boolean => {
    return false; // Placeholder implementation
  }, []);
  
  return {
    playSound,
    play,
    stopSound,
    pauseSound,
    resumeSound,
    isPlaying,
    isSoundEnabled: !soundConfig.muted && soundConfig.enabled,
    currentVolume: soundConfig.volume,
    toggleMuted: wrappedToggleMuted,
    toggleSounds: wrappedToggleSounds,
    setVolume
  };
};

export default useSound;
