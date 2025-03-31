
import { useState, useCallback, useEffect, useRef } from 'react';
import { useSoundsConfig } from './use-sounds-config';
import { SoundType, UseSoundOptions, UseSoundReturn } from '@/types/sound-types';
import { soundAssets, premiumSoundAssets, soundVolumes } from './sound-assets';

/**
 * Custom hook for playing sound effects
 * 
 * @param soundName Optional default sound name to play
 * @param defaultOptions Default options for the sound playback
 * @returns Sound control functions and state
 */
export const useSound = (
  soundName?: SoundType,
  defaultOptions: UseSoundOptions = {}
): UseSoundReturn => {
  const { config } = useSoundsConfig();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number>();
  
  // Create refs for audio elements
  const audioElements = useRef<Record<SoundType, HTMLAudioElement>>({} as Record<SoundType, HTMLAudioElement>);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize audio elements
  useEffect(() => {
    const sounds = Object.keys(config.premium ? premiumSoundAssets : soundAssets) as SoundType[];
    const elements: Record<SoundType, HTMLAudioElement> = {} as Record<SoundType, HTMLAudioElement>;
    
    sounds.forEach((sound) => {
      try {
        const assets = config.premium ? premiumSoundAssets : soundAssets;
        const path = assets[sound];
        if (path) {
          const audio = new Audio(path);
          audio.preload = 'auto';
          
          // Set volume based on sound type and global volume
          const baseVolume = soundVolumes[sound] || 0.5;
          audio.volume = baseVolume * config.volume;
          
          elements[sound] = audio;
        }
      } catch (error) {
        console.error(`Failed to load sound: ${sound}`, error);
      }
    });
    
    audioElements.current = elements;
    
    // If soundName is provided, set the currentAudioRef and duration
    if (soundName && elements[soundName]) {
      currentAudioRef.current = elements[soundName];
      elements[soundName].addEventListener('loadedmetadata', () => {
        setDuration(elements[soundName].duration);
      });
    }
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      Object.values(elements).forEach(audio => {
        try {
          audio.pause();
          audio.src = '';
        } catch (e) {
          // Ignore cleanup errors
        }
      });
    };
  }, [soundName, config.premium, config.volume]);

  // Update volume for all audio elements when volume changes
  useEffect(() => {
    Object.entries(audioElements.current).forEach(([key, audio]) => {
      try {
        const baseVolume = soundVolumes[key as SoundType] || 0.5;
        audio.volume = baseVolume * config.volume;
      } catch (error) {
        console.error(`Failed to update volume for sound: ${key}`, error);
      }
    });
  }, [config.volume]);

  // Stop the current sound
  const stop = useCallback(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  // Play a sound
  const play = useCallback((options?: UseSoundOptions | string) => {
    // Handle legacy string parameter (for backward compatibility)
    if (typeof options === 'string') {
      playSound(options as SoundType);
      return;
    }
    
    if (!soundName) {
      console.warn('No default sound name provided to useSound hook');
      return;
    }
    
    // Play the default sound with options
    playSound(soundName, options as UseSoundOptions);
  }, [soundName]);

  // Play a specific sound
  const playSound = useCallback((sound: SoundType, options: UseSoundOptions = {}) => {
    // If sounds are disabled or muted, don't play
    if (!config.enabled || config.muted) return;
    
    const audio = audioElements.current[sound];
    if (!audio) {
      console.warn(`Sound not found: ${sound}`);
      return;
    }
    
    const mergedOptions = { ...defaultOptions, ...options };
    const {
      interrupt = true,
      volume: customVolume,
      loop = false,
      onComplete
    } = mergedOptions;
    
    // If the sound is already playing and interrupt is false, don't restart it
    if (isPlaying && audio === currentAudioRef.current && !interrupt) return;
    
    // Stop current sound if any
    if (isPlaying && currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }
    
    // Set as current audio
    currentAudioRef.current = audio;
    
    // Set volume if provided, otherwise use the default
    if (customVolume !== undefined) {
      const baseVolume = soundVolumes[sound] || 0.5;
      audio.volume = Math.min(customVolume, 1);
    } else {
      const baseVolume = soundVolumes[sound] || 0.5;
      audio.volume = baseVolume * config.volume;
    }
    
    // Set loop
    audio.loop = loop;
    
    // Reset audio to start
    audio.currentTime = 0;
    
    // Play the sound
    const playPromise = audio.play();
    setIsPlaying(true);
    
    // Handle completion
    if (!loop && onComplete) {
      audio.onended = () => {
        setIsPlaying(false);
        onComplete();
      };
    } else {
      audio.onended = () => {
        setIsPlaying(false);
      };
    }
    
    // Handle play promise rejection
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Sound playback failed:', error);
        setIsPlaying(false);
      });
    }
  }, [config.enabled, config.muted, config.volume, defaultOptions, isPlaying]);
  
  // Convenience methods for common sounds
  const playSuccess = useCallback((options?: UseSoundOptions) => {
    playSound('success', options);
  }, [playSound]);
  
  const playError = useCallback((options?: UseSoundOptions) => {
    playSound('error', options);
  }, [playSound]);
  
  const playNotification = useCallback((options?: UseSoundOptions) => {
    playSound('notification', options);
  }, [playSound]);
  
  const playClick = useCallback((options?: UseSoundOptions) => {
    playSound('click', options);
  }, [playSound]);

  return {
    play,
    playSound,
    stop,
    isPlaying,
    duration,
    playSuccess,
    playError,
    playNotification,
    playClick
  };
};

export default useSound;
