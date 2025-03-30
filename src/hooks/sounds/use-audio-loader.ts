
import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { SoundType, AudioLoaderReturn } from '@/types/sound-types';
import { soundAssets, soundVolumes, premiumSoundAssets } from './sound-assets';

export const useAudioLoader = (): AudioLoaderReturn => {
  const [audio, setAudio] = useState<Record<SoundType, HTMLAudioElement>>({} as Record<SoundType, HTMLAudioElement>);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEnabled, setEnabled] = useLocalStorage('sound-enabled', true);
  const [isPremium, setPremium] = useLocalStorage('premium-sound-pack', false);
  const [volume, setVolume] = useLocalStorage('sound-volume', 0.5);
  
  // Load audio files
  useEffect(() => {
    const audioElements: Record<SoundType, HTMLAudioElement> = {} as Record<SoundType, HTMLAudioElement>;
    const assets = isPremium ? premiumSoundAssets : soundAssets;
    
    // For each sound type, create an audio element and set its source
    Object.entries(assets).forEach(([key, path]) => {
      try {
        const audio = new Audio(path as string);
        audio.preload = 'auto';
        audio.volume = (soundVolumes[key as SoundType] || 0.5) * volume;
        audioElements[key as SoundType] = audio;
      } catch (error) {
        console.error(`Failed to load sound: ${key}`, error);
      }
    });
    
    setAudio(audioElements);
    setIsLoaded(true);
    
    // Cleanup function to release audio resources
    return () => {
      Object.values(audioElements).forEach(audio => {
        try {
          audio.pause();
          audio.src = '';
        } catch (e) {
          // Ignore cleanup errors
        }
      });
    };
  }, [isPremium, volume]);
  
  // Update volume for all audio elements when volume changes
  useEffect(() => {
    if (!isLoaded) return;
    
    Object.entries(audio).forEach(([key, audioElement]) => {
      try {
        audioElement.volume = (soundVolumes[key as SoundType] || 0.5) * volume;
      } catch (error) {
        console.error(`Failed to update volume for sound: ${key}`, error);
      }
    });
  }, [audio, isLoaded, volume]);
  
  return {
    audio,
    volume,
    setVolume,
    isEnabled,
    setEnabled,
    isPremium,
    setPremium,
    isLoaded
  };
};

export default useAudioLoader;
