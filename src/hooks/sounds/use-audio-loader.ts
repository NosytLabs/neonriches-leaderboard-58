
import { useState, useCallback, useRef, useEffect } from 'react';
import { AudioLoaderReturn, SoundMap } from './types';

const useAudioLoader = (): AudioLoaderReturn => {
  const [audioElements, setAudioElements] = useState<{[key: string]: HTMLAudioElement}>({});
  const [loadedSounds, setLoadedSounds] = useState<string[]>([]);
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);
  const preloadAttempted = useRef(false);
  const activeAudioElements = useRef<HTMLAudioElement[]>([]);
  
  // Clean up audio elements on unmount
  useEffect(() => {
    return () => {
      pauseAllSounds();
      
      // Remove event listeners and nullify src to help GC
      Object.values(audioElements).forEach(audio => {
        audio.oncanplaythrough = null;
        audio.onerror = null;
        audio.onload = null;
        audio.pause();
        audio.src = '';
      });
    };
  }, []);
  
  // Function to pause all playing sounds
  const pauseAllSounds = useCallback(() => {
    activeAudioElements.current.forEach(audio => {
      if (!audio.paused) {
        audio.pause();
      }
    });
    activeAudioElements.current = [];
  }, []);
  
  // Preload core sounds on initial load
  const preloadCoreSounds = useCallback((soundMap: SoundMap) => {
    // Skip if already attempted to prevent multiple preload calls
    if (preloadAttempted.current) return;
    preloadAttempted.current = true;
    
    try {
      const newAudioElements: {[key: string]: HTMLAudioElement} = {};
      let loadedCount = 0;
      const totalSounds = Object.keys(soundMap).length;
      
      // Track loading progress
      const checkLoadCompletion = () => {
        loadedCount++;
        if (loadedCount >= totalSounds) {
          setIsInitialLoadComplete(true);
        }
      };
      
      Object.entries(soundMap).forEach(([key, soundInfo]) => {
        const audio = new Audio();
        
        // Add load event to track when preloading is complete
        audio.addEventListener('canplaythrough', () => {
          setLoadedSounds(prev => {
            if (prev.includes(key)) return prev;
            return [...prev, key];
          });
          checkLoadCompletion();
        }, { once: true });
        
        // Add error handling
        audio.addEventListener('error', (e) => {
          console.warn(`Failed to preload sound "${key}":`, e);
          checkLoadCompletion();
        }, { once: true });
        
        audio.preload = 'auto';
        audio.src = soundInfo.src;
        newAudioElements[key] = audio;
      });
      
      setAudioElements(prev => ({...prev, ...newAudioElements}));
      
      // Fallback in case events don't fire
      setTimeout(() => {
        if (!isInitialLoadComplete) {
          console.warn('Sound preloading timed out, setting as loaded anyway');
          setIsInitialLoadComplete(true);
        }
      }, 5000);
    } catch (error) {
      console.error('Error initializing audio elements:', error);
      setIsInitialLoadComplete(true); // Set as loaded anyway to prevent blocking the app
    }
  }, [isInitialLoadComplete]);
  
  // Load a specific sound on demand with improved error handling
  const loadSound = useCallback(async (type: string, soundInfo: SoundMap[string]): Promise<HTMLAudioElement | null> => {
    // Return existing element if already loaded
    if (audioElements[type]) return audioElements[type];
    
    return new Promise<HTMLAudioElement | null>((resolve) => {
      try {
        const audio = new Audio();
        
        audio.addEventListener('canplaythrough', () => {
          setAudioElements(prev => ({ ...prev, [type]: audio }));
          setLoadedSounds(prev => {
            if (prev.includes(type)) return prev;
            return [...prev, type];
          });
          resolve(audio);
        }, { once: true });
        
        audio.addEventListener('error', (e) => {
          console.warn(`Failed to load sound "${type}":`, e);
          resolve(null); // Return null to indicate loading failed
        }, { once: true });
        
        audio.preload = 'auto';
        audio.src = soundInfo.src;
        
        // Set a timeout in case the events don't fire
        setTimeout(() => {
          if (!loadedSounds.includes(type)) {
            console.warn(`Loading sound "${type}" timed out, continuing anyway`);
            resolve(audio);
          }
        }, 3000);
      } catch (error) {
        console.error('Failed to load sound:', error);
        resolve(null);
      }
    });
  }, [audioElements, loadedSounds]);

  return {
    audioElements,
    loadedSounds,
    isInitialLoadComplete,
    preloadCoreSounds,
    loadSound,
    pauseAllSounds
  };
};

export default useAudioLoader;
