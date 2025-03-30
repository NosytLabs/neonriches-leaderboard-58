
import { useState, useEffect, useRef } from 'react';
import { SoundType, AudioLoaderReturn } from '@/types/sound-types';
import { soundAssets, premiumSoundAssets } from './sound-assets';

export function useAudioLoader(): AudioLoaderReturn {
  const [volume, setVolume] = useState<number>(0.5);
  const [isEnabled, setEnabled] = useState<boolean>(true);
  const [isPremium, setPremium] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  // Create audio elements with proper paths
  const createAudioElements = (): Record<SoundType, HTMLAudioElement> => {
    const audioElements: Partial<Record<SoundType, HTMLAudioElement>> = {};
    
    // Standard sounds
    Object.entries(soundAssets.paths).forEach(([key, path]) => {
      const audioElement = new Audio(path);
      audioElement.preload = 'auto';
      audioElements[key as SoundType] = audioElement;
    });
    
    // Add compatibility for special sounds
    audioElements.coinDrop = audioElements.coins_drop;
    
    return audioElements as Record<SoundType, HTMLAudioElement>;
  };
  
  const audioRef = useRef<Record<SoundType, HTMLAudioElement>>(createAudioElements());
  
  // Update volume for all audio elements when it changes
  useEffect(() => {
    if (!audioRef.current) return;
    
    Object.values(audioRef.current).forEach(audio => {
      audio.volume = volume;
    });
  }, [volume]);
  
  // Load premium sounds if premium status changes
  useEffect(() => {
    if (!isPremium || !audioRef.current) return;
    
    // Add premium sounds to audio elements
    Object.entries(premiumSoundAssets.paths).forEach(([key, path]) => {
      if (!audioRef.current[key as SoundType]) {
        const audioElement = new Audio(path);
        audioElement.preload = 'auto';
        audioElement.volume = volume;
        audioRef.current[key as SoundType] = audioElement;
      }
    });
    
    setIsLoaded(true);
  }, [isPremium, volume]);
  
  useEffect(() => {
    // Mark as loaded once initial sounds are ready
    setIsLoaded(true);
    
    // Cleanup on unmount
    return () => {
      Object.values(audioRef.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);
  
  return {
    audio: audioRef.current,
    volume,
    setVolume,
    isEnabled,
    setEnabled,
    isPremium,
    setPremium,
    isLoaded
  };
}

export default useAudioLoader;
