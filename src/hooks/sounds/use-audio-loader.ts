import { useState, useEffect, useCallback } from 'react';
import { SoundType } from '@/types/sound-types';
import soundAssets from './sound-assets';

// Type for the return of our hook
export interface AudioLoaderReturn {
  sounds: Record<SoundType, HTMLAudioElement | null>;
  loadingComplete: boolean;
  loadingError: boolean;
  loading: boolean;
  loadSound: (type: SoundType) => Promise<HTMLAudioElement | null>;
}

// Load audio assets
export const useAudioLoader = (): AudioLoaderReturn => {
  const [sounds, setSounds] = useState<Record<SoundType, HTMLAudioElement | null>>({
    click: null,
    hover: null,
    success: null,
    error: null,
    notification: null,
    purchase: null,
    rankUp: null,
    coinDrop: null,
    achievement: null,
    trumpets: null,
    fanfare: null,
    shame: null,
    parchment: null,
    treasure: null,
    royal: null,
    crown: null,
    pageTransition: null,
    parchmentUnfurl: null,
    info: null
  });
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  
  // Load a single sound
  const loadSound = useCallback(async (type: SoundType): Promise<HTMLAudioElement | null> => {
    return new Promise((resolve, reject) => {
      if (!soundAssets[type]) {
        console.error(`Sound asset not found for type: ${type}`);
        return resolve(null);
      }
      
      const audio = new Audio(soundAssets[type]);
      
      audio.addEventListener('canplaythrough', () => {
        setSounds(prevSounds => ({ ...prevSounds, [type]: audio }));
        resolve(audio);
      });
      
      audio.addEventListener('error', (error) => {
        console.error(`Failed to load sound for type: ${type}`, error);
        reject(error);
        resolve(null);
      });
    });
  }, []);
  
  // Load all sounds on mount
  useEffect(() => {
    const loadAllSounds = async () => {
      try {
        const soundTypes = Object.keys(soundAssets) as SoundType[];
        
        // Load all sounds in parallel
        await Promise.all(soundTypes.map(type => loadSound(type)));
        
        setLoadingComplete(true);
      } catch (error) {
        console.error('Failed to load one or more sounds', error);
        setLoadingError(true);
      }
    };
    
    loadAllSounds();
  }, [loadSound]);

  return {
    sounds,
    loadingComplete,
    loadingError,
    loading: !loadingComplete && !loadingError,
    loadSound
  };
};
