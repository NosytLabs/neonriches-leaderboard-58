
import { useState, useCallback, useEffect, useRef } from 'react';
import { SoundType, UseSoundOptions, UseSoundReturn } from '@/types/sound-types';
import { getSoundPath, getAmplitudes } from '@/utils/getSoundPath';
import { useSoundsConfig } from './use-sounds-config';

const useSound = (
  soundType?: SoundType,
  options: UseSoundOptions = {}
): UseSoundReturn => {
  const { 
    volume: optionVolume, 
    loop = false, 
    interrupt = true,
    onEnd,
    baseVolume = 0.5,
    disableCache = false
  } = options;
  
  const { config } = useSoundsConfig();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Cleanup function
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Calculate effective volume based on configuration and options
  const getEffectiveVolume = useCallback((sound: SoundType): number => {
    if (!config.enabled || config.muted) return 0;
    
    // Get the base volume for the sound type (normalized to 0-1)
    const baseAmp = getAmplitudes(sound);
    
    // Combine the configuration volume with options volume
    const configVolume = config.volume;
    const finalVolume = (optionVolume !== undefined ? optionVolume : baseVolume) * configVolume * baseAmp;
    
    // Ensure it's within 0-1 range
    return Math.min(Math.max(finalVolume, 0), 1);
  }, [config, optionVolume, baseVolume]);

  // Play a sound
  const play = useCallback((soundOptions?: UseSoundOptions): void => {
    const soundToPlay = soundType;
    if (!soundToPlay || !config.enabled || config.muted) return;
    
    // Adjust volume based on sound type and configuration
    const volume = getEffectiveVolume(soundToPlay);
    
    // Create or reuse an audio element
    if (audioRef.current && interrupt) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else if (audioRef.current && !interrupt && audioRef.current.paused === false) {
      // Skip playing if already playing and interrupt is false
      return;
    }
    
    try {
      const soundPath = getSoundPath(soundToPlay);
      
      if (!soundPath) {
        console.warn(`Sound path not found for sound type: ${soundToPlay}`);
        return;
      }
      
      if (disableCache || !audioRef.current) {
        audioRef.current = new Audio(soundPath);
      } else {
        audioRef.current.src = soundPath;
      }
      
      audioRef.current.volume = volume;
      audioRef.current.loop = loop;
      
      if (onEnd) {
        audioRef.current.onended = onEnd;
      }
      
      // Play the sound
      const playPromise = audioRef.current.play();
      setIsPlaying(true);
      
      if (playPromise) {
        playPromise.catch((error) => {
          console.warn('Error playing sound:', error);
          setIsPlaying(false);
        });
      }
    } catch (error) {
      console.error('Failed to play sound:', error);
      setIsPlaying(false);
    }
  }, [soundType, config, getEffectiveVolume, interrupt, loop, onEnd, disableCache]);

  // Stop the sound
  const stop = useCallback((): void => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  return {
    play,
    stop,
    isPlaying
  };
};

export { useSound };
export default useSound;
