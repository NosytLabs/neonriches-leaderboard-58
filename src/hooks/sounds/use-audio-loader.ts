
import { useState, useEffect } from 'react';
import { AudioLoaderReturn, SoundType } from './types';

// Mapping of sound types to their file paths
// We're using MP3s for better browser compatibility
const SOUND_PATHS: Record<SoundType, string> = {
  coinDrop: '/sounds/coin-drop.mp3',
  reward: '/sounds/reward.mp3',
  notification: '/sounds/notification.mp3',
  click: '/sounds/click.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  royalAnnouncement: '/sounds/royal-announcement.mp3',
  levelUp: '/sounds/level-up.mp3',
  purchase: '/sounds/purchase.mp3',
  shame: '/sounds/shame.mp3', 
  swordClash: '/sounds/sword-clash.mp3',
  pageTransition: '/sounds/page-transition.mp3',
  wish: '/sounds/wish.mp3',
  pageChange: '/sounds/page-change.mp3',
  parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
  medallion: '/sounds/medallion.mp3',
  seal: '/sounds/seal.mp3', 
  trumpet: '/sounds/trumpet.mp3',
  noblesLaugh: '/sounds/nobles-laugh.mp3',
  inkScribble: '/sounds/ink-scribble.mp3'
};

// Sound categories for different user preferences
export const SOUND_CATEGORIES = {
  UI: ['click', 'notification', 'pageTransition', 'pageChange'],
  FEEDBACK: ['success', 'error', 'reward', 'levelUp', 'purchase'],
  AMBIENT: ['coinDrop', 'royalAnnouncement', 'wish', 'trumpet'],
  SPECIAL: ['swordClash', 'shame', 'parchmentUnfurl', 'medallion', 'seal', 'noblesLaugh', 'inkScribble']
};

/**
 * Custom hook to preload and manage audio files
 * @param soundsToPreload - Optional array of sound types to preload
 * @returns The preloaded audio elements and loading state
 */
export const useAudioLoader = (
  soundsToPreload?: SoundType[]
): AudioLoaderReturn => {
  const [loadedSounds, setLoadedSounds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [audioElements, setAudioElements] = useState<Record<string, HTMLAudioElement>>({});
  
  // Load all sounds if no specific sounds are provided
  useEffect(() => {
    const soundsToLoad = soundsToPreload || Object.keys(SOUND_PATHS) as SoundType[];
    
    if (soundsToLoad.length === 0) {
      return;
    }
    
    setIsLoading(true);
    const loadedAudioElements: Record<string, HTMLAudioElement> = {};
    const newLoadedSounds: string[] = [];
    
    Promise.all(
      soundsToLoad.map((soundType) => {
        return new Promise<void>((resolve, reject) => {
          try {
            const audio = new Audio();
            audio.preload = 'auto';
            
            audio.addEventListener('canplaythrough', () => {
              newLoadedSounds.push(soundType);
              loadedAudioElements[soundType] = audio;
              resolve();
            }, { once: true });
            
            audio.addEventListener('error', (e) => {
              console.error(`Error loading sound: ${soundType}`, e);
              reject(new Error(`Failed to load ${soundType} sound`));
            }, { once: true });
            
            audio.src = SOUND_PATHS[soundType];
            audio.load();
            
          } catch (err) {
            console.error(`Error creating audio element for ${soundType}:`, err);
            reject(err);
          }
        });
      })
    )
    .then(() => {
      setLoadedSounds(newLoadedSounds);
      setAudioElements(loadedAudioElements);
      setIsLoading(false);
    })
    .catch((err) => {
      console.error('Error loading audio files:', err);
      setError(err instanceof Error ? err : new Error(String(err)));
      setIsLoading(false);
    });
    
    // Cleanup audio elements on unmount
    return () => {
      Object.values(loadedAudioElements).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, [soundsToPreload]);
  
  return {
    loadedSounds,
    isLoading,
    error,
    audioElements
  };
};
