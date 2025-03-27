
import { useState, useCallback, useRef } from 'react';
import { SoundMap } from './types';

interface UseAudioLoaderReturn {
  audioElements: {[key: string]: HTMLAudioElement};
  loadedSounds: string[];
  isInitialLoadComplete: boolean;
  preloadCoreSounds: (soundMap: SoundMap) => void;
  loadSound: (type: string, soundInfo: SoundMap[string]) => Promise<void>;
}

const useAudioLoader = (): UseAudioLoaderReturn => {
  const [audioElements, setAudioElements] = useState<{[key: string]: HTMLAudioElement}>({});
  const [loadedSounds, setLoadedSounds] = useState<string[]>([]);
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const preloadAttempted = useRef(false);
  
  // Preload core sounds on initial load
  const preloadCoreSounds = useCallback((soundMap: SoundMap) => {
    // Skip if already attempted to prevent multiple preload calls
    if (preloadAttempted.current) return;
    preloadAttempted.current = true;
    
    try {
      const newAudioElements: {[key: string]: HTMLAudioElement} = {};
      let loadedCount = 0;
      const totalSounds = Object.keys(soundMap).length;
      
      Object.entries(soundMap).forEach(([key, soundInfo]) => {
        const audio = new Audio();
        
        // Add load event to track when preloading is complete
        audio.addEventListener('canplaythrough', () => {
          loadedCount++;
          setLoadedSounds(prev => [...prev, key]);
          
          if (loadedCount === totalSounds) {
            setIsInitialLoadComplete(true);
          }
        }, { once: true });
        
        // Add error handling
        audio.addEventListener('error', () => {
          console.warn(`Failed to preload sound "${key}"`);
          loadedCount++;
          
          if (loadedCount === totalSounds) {
            setIsInitialLoadComplete(true);
          }
        }, { once: true });
        
        audio.preload = 'auto';
        audio.src = soundInfo.src;
        newAudioElements[key] = audio;
      });
      
      setAudioElements(newAudioElements);
      
      // Fallback in case events don't fire
      setTimeout(() => {
        if (!isInitialLoadComplete) {
          console.warn('Sound preloading timed out, setting as loaded anyway');
          setIsInitialLoadComplete(true);
        }
      }, 3000);
    } catch (error) {
      console.error('Error initializing audio elements:', error);
      setIsInitialLoadComplete(true); // Set as loaded anyway to prevent blocking the app
    }
  }, [isInitialLoadComplete]);
  
  // Load a specific sound on demand
  const loadSound = useCallback((type: string, soundInfo: SoundMap[string]): Promise<void> => {
    // Skip if already loaded
    if (audioElements[type]) return Promise.resolve();
    
    return new Promise<void>((resolve) => {
      try {
        const audio = new Audio();
        
        audio.addEventListener('canplaythrough', () => {
          setAudioElements(prev => ({ ...prev, [type]: audio }));
          setLoadedSounds(prev => [...prev, type]);
          resolve();
        }, { once: true });
        
        audio.addEventListener('error', () => {
          console.warn(`Failed to load sound "${type}"`);
          resolve();
        }, { once: true });
        
        audio.preload = 'auto';
        audio.src = soundInfo.src;
        
        // Set a timeout in case the events don't fire
        setTimeout(resolve, 2000);
      } catch (error) {
        console.error('Failed to load sound:', error);
        resolve();
      }
    });
  }, [audioElements]);

  return {
    audioElements,
    loadedSounds,
    isInitialLoadComplete,
    preloadCoreSounds,
    loadSound
  };
};

export default useAudioLoader;
