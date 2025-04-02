
import { useState, useEffect, useRef, useCallback } from 'react';
import { SoundType, SoundOptions } from '@/types/sound-types';
import getSoundPath from '@/utils/getSoundPath';

/**
 * Hook for playing sounds
 * @returns Sound control functions
 */
export const useSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState<SoundType | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Cleanup function to stop sound when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);
  
  /**
   * Play a sound
   * @param type Sound type
   * @param options Sound options
   */
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    const soundPath = getSoundPath(type);
    
    if (!soundPath) {
      console.warn(`Sound path not found for type: ${type}`);
      return;
    }
    
    // Stop any currently playing sound
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    // Create a new audio element
    const audio = new Audio(soundPath);
    audioRef.current = audio;
    
    // Apply options
    if (options) {
      if (options.volume !== undefined) {
        audio.volume = options.volume;
      }
      
      if (options.loop !== undefined) {
        audio.loop = options.loop;
      }
      
      if (options.playbackRate !== undefined) {
        audio.playbackRate = options.playbackRate;
      }
    }
    
    // Set up event listeners
    audio.onplay = () => {
      setIsPlaying(true);
      setCurrentSound(type);
    };
    
    audio.onended = () => {
      setIsPlaying(false);
      setCurrentSound(null);
      if (options?.onEnd) {
        options.onEnd();
      }
    };
    
    // Play the sound and handle any errors
    try {
      audio.play();
    } catch (error) {
      console.error('Error playing sound:', error);
      setIsPlaying(false);
      setCurrentSound(null);
    }
  }, []);
  
  /**
   * Stop the current sound
   */
  const stopSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentSound(null);
    }
  }, []);
  
  return {
    playSound,
    play: playSound,
    stopSound,
    isPlaying,
    currentSound
  };
};

// Default export for backwards compatibility
export default useSound;
