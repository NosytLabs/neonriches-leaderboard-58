
import { useState, useCallback, useEffect, useRef } from 'react';
import { useAudioLoader } from './use-audio-loader';
import { SoundType, UseSoundOptions, UseSoundReturn } from '@/types/sound-types';

/**
 * Custom hook for playing sound effects
 * 
 * @param soundName The name of the sound to play
 * @param defaultOptions Default options for the sound playback
 * @returns Sound control functions and state
 */
export const useSound = (
  soundName: SoundType,
  defaultOptions: UseSoundOptions = {}
): UseSoundReturn => {
  const { audio, isEnabled, volume } = useAudioLoader();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number>();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get the audio element for the specified sound
  useEffect(() => {
    if (audio && audio[soundName]) {
      audioRef.current = audio[soundName];
      setDuration(audioRef.current.duration);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [audio, soundName]);

  // Stop the currently playing sound
  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  // Play the sound with the specified options
  const play = useCallback((options?: UseSoundOptions | string) => {
    // If options is a string, it means it's a legacy call with a sound name
    // This provides backward compatibility
    if (typeof options === 'string') {
      console.warn('Deprecated use of play(string). Please use playSound(sound) instead');
      return;
    }
    
    const mergedOptions = { ...defaultOptions, ...options };
    const {
      interrupt = true,
      soundEnabled = isEnabled,
      volume: customVolume,
      onComplete,
      loop = false,
    } = mergedOptions;

    if (!soundEnabled || !audioRef.current) return;

    if (isPlaying && !interrupt) return;

    if (isPlaying) {
      stop();
    }

    // Set volume if provided
    if (customVolume !== undefined) {
      audioRef.current.volume = customVolume;
    } else {
      // Use global volume
      audioRef.current.volume = volume;
    }

    // Set loop
    audioRef.current.loop = loop;

    // Play the sound
    const playPromise = audioRef.current.play();
    setIsPlaying(true);

    // Handle completion
    if (!loop && onComplete) {
      audioRef.current.onended = () => {
        setIsPlaying(false);
        onComplete();
      };
    }

    // Handle play promise rejection (e.g., user hasn't interacted with page)
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error('Sound playback failed:', error);
        setIsPlaying(false);
      });
    }
  }, [defaultOptions, isEnabled, isPlaying, stop, volume]);

  // Function to play a specific sound (convenience method)
  const playSound = useCallback((sound: SoundType) => {
    if (audio && audio[sound]) {
      const audioElement = audio[sound];
      audioElement.currentTime = 0;
      audioElement.volume = volume;
      audioElement.play().catch(err => {
        console.error(`Failed to play sound: ${sound}`, err);
      });
    }
  }, [audio, volume]);

  // Function to play success sound (convenience method)
  const playSuccess = useCallback((sound: SoundType = 'success') => {
    playSound(sound);
  }, [playSound]);

  return {
    play,
    stop,
    isPlaying,
    duration,
    playSound,
    playSuccess
  };
};

export default useSound;
