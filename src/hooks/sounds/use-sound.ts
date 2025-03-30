
import { useState, useCallback, useEffect, useRef } from 'react';
import { SoundType, UseSoundOptions, UseSoundReturn } from '@/types/sound-types';
import { getSoundPath, getAmplitudes } from './sound-assets';
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
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContext = useRef<AudioContext | null>(null);
  
  // Use the base amplitudes for each sound type
  const amplitudes = {
    click: 0.5,
    hover: 0.3,
    success: 0.7,
    error: 0.6,
    notification: 0.8,
    purchase: 0.7,
    rankUp: 1.0,
    coinDrop: 0.8,
    achievement: 0.9,
    trumpets: 0.9,
    fanfare: 1.0,
    shame: 0.7,
    parchment: 0.6,
    treasure: 0.7,
    royal: 0.9,
    crown: 0.8,
    pageTransition: 0.5,
    parchmentUnfurl: 0.7,
    info: 0.6,
    seal: 0.7,
    deposit: 0.7,
    reward: 0.8,
    unlock: 0.7,
    team: 0.7,
    applause: 0.8,
    levelUp: 0.9,
    boost: 0.8,
    curse: 0.7,
    laugh: 0.7,
    magic: 0.8,
    celebration: 0.9,
    message: 0.6,
    pageChange: 0.5,
    swordClash: 0.8,
    coins: 0.7,
    trumpet: 0.8,
    medallion: 0.7,
    coin: 0.7,
    warning: 0.6,
    bell: 0.7,
    royalAnnouncement: 1.0
  };

  // Cleanup function
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      
      if (audioContext.current) {
        audioContext.current.close();
        audioContext.current = null;
      }
    };
  }, []);

  // Calculate effective volume based on configuration and options
  const getEffectiveVolume = useCallback((sound: SoundType): number => {
    if (!config.enabled || config.muted) return 0;
    
    // Get the base volume for the sound type (normalized to 0-1)
    const baseAmp = amplitudes[sound as keyof typeof amplitudes] || 0.7;
    
    // Combine the configuration volume with options volume
    const configVolume = config.volume;
    const finalVolume = (optionVolume !== undefined ? optionVolume : baseVolume) * configVolume * baseAmp;
    
    // Ensure it's within 0-1 range
    return Math.min(Math.max(finalVolume, 0), 1);
  }, [config, optionVolume, baseVolume, amplitudes]);

  // Play a sound
  const play = useCallback((sound?: SoundType): void => {
    const soundToPlay = sound || soundType;
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
      
      audioRef.current.onloadedmetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
        }
      };
      
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

  // For backward compatibility
  const playSound = (sound: SoundType) => play(sound);

  return {
    play,
    stop,
    isPlaying,
    duration,
    playSound
  };
};

export { useSound };
export default useSound;
