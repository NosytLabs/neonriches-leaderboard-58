
import { useState, useCallback, useEffect, useRef } from 'react';

type SoundType = 'shame' | 'reward' | 'notification' | 'rankUp' | 'rankDown' | 'potion' | 'swordClash' | 'royalAnnouncement' | 'purchase';

interface SoundMap {
  [key: string]: {
    src: string;
    description: string;
    volume: number;
  };
}

// Only include essential sounds to reduce initial load
const soundsMap: SoundMap = {
  notification: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3',
    description: 'Soft notification',
    volume: 0.2
  },
  purchase: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3',
    description: 'Purchase confirmation',
    volume: 0.3
  },
  royalAnnouncement: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-fairy-arcade-sparkle-866.mp3',
    description: 'Royal announcement chime',
    volume: 0.2
  }
};

// Additional sounds that will be loaded on demand
const additionalSounds: SoundMap = {
  shame: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-cartoon-toy-whistle-616.mp3',
    description: 'Playful shame whistle',
    volume: 0.4
  },
  reward: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-coins-handling-1939.mp3',
    description: 'Coins dropping',
    volume: 0.3
  },
  rankUp: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3',
    description: 'Ascending rank notification',
    volume: 0.3
  },
  rankDown: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-losing-bleeps-2026.mp3',
    description: 'Descending rank notification',
    volume: 0.3
  },
  potion: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3',
    description: 'Magical potion or effect',
    volume: 0.3
  },
  swordClash: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-sword-slides-2793.mp3',
    description: 'Sword draw or clash',
    volume: 0.3
  }
};

const useNotificationSounds = () => {
  const [audioElements, setAudioElements] = useState<{[key: string]: HTMLAudioElement}>({});
  const [loadedSounds, setLoadedSounds] = useState<string[]>([]);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const preloadAttempted = useRef(false);
  
  // Preload only essential sounds on initial load
  const preloadSounds = useCallback(() => {
    // Skip if already attempted to prevent multiple preload calls
    if (preloadAttempted.current) return;
    preloadAttempted.current = true;
    
    try {
      const newAudioElements: {[key: string]: HTMLAudioElement} = {};
      let loadedCount = 0;
      const totalSounds = Object.keys(soundsMap).length;
      
      Object.entries(soundsMap).forEach(([key, { src }]) => {
        const audio = new Audio();
        
        // Add load event to track when preloading is complete
        audio.addEventListener('canplaythrough', () => {
          loadedCount++;
          setLoadedSounds(prev => [...prev, key]);
          if (loadedCount === totalSounds) {
            setInitialLoadComplete(true);
          }
        }, { once: true });
        
        // Add error handling
        audio.addEventListener('error', (e) => {
          console.warn(`Failed to preload sound "${key}":`, e);
          loadedCount++;
          if (loadedCount === totalSounds) {
            setInitialLoadComplete(true);
          }
        }, { once: true });
        
        audio.preload = 'auto';
        audio.src = src;
        newAudioElements[key] = audio;
      });
      
      setAudioElements(newAudioElements);
      
      // Fallback in case events don't fire
      setTimeout(() => {
        if (!initialLoadComplete) {
          console.warn('Sound preloading timed out, setting as loaded anyway');
          setInitialLoadComplete(true);
        }
      }, 3000);
    } catch (error) {
      console.error('Error initializing audio elements:', error);
      setInitialLoadComplete(true); // Set as loaded anyway to prevent blocking the app
    }
  }, [initialLoadComplete]);
  
  // Lazily load a specific sound when needed
  const loadSound = useCallback((type: SoundType) => {
    // Skip if already loaded
    if (audioElements[type]) return Promise.resolve();
    
    // Skip if sound doesn't exist in maps
    if (!additionalSounds[type] && !soundsMap[type]) {
      console.warn(`Sound "${type}" not defined`);
      return Promise.resolve();
    }
    
    return new Promise<void>((resolve) => {
      try {
        const soundInfo = additionalSounds[type] || soundsMap[type];
        const audio = new Audio();
        
        audio.addEventListener('canplaythrough', () => {
          setAudioElements(prev => ({ ...prev, [type]: audio }));
          setLoadedSounds(prev => [...prev, type]);
          resolve();
        }, { once: true });
        
        audio.addEventListener('error', (e) => {
          console.warn(`Failed to load sound "${type}":`, e);
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
  
  // Play a specific sound with custom volume
  const playSound = useCallback(async (type: SoundType, volumeMultiplier = 1) => {
    // Load sound if not already loaded
    if (!audioElements[type]) {
      await loadSound(type);
    }
    
    // Skip if sound doesn't exist after attempting to load
    if (!audioElements[type]) {
      return;
    }
    
    try {
      // Create a clone to allow for overlapping sounds
      const sound = audioElements[type].cloneNode() as HTMLAudioElement;
      
      // Set volume (capped at 1.0)
      const baseVolume = (additionalSounds[type] || soundsMap[type])?.volume || 0.3;
      sound.volume = Math.min(baseVolume * volumeMultiplier, 1.0);
      
      // Play the sound
      sound.play().catch(e => {
        // Most browsers require user interaction before playing audio
        console.log('Audio playback error (likely needs user interaction):', e);
      });
    } catch (error) {
      console.error('Failed to play sound:', error);
    }
  }, [audioElements, loadSound]);
  
  return {
    playSound,
    preloadSounds,
    soundsLoaded: initialLoadComplete,
    loadedSoundTypes: loadedSounds
  };
};

export default useNotificationSounds;
