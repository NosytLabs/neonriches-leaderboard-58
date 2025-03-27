
import { useState, useCallback, useEffect, useRef } from 'react';

type SoundType = 'shame' | 'reward' | 'notification' | 'rankUp' | 'rankDown' | 'potion' | 'swordClash' | 'royalAnnouncement' | 'purchase';

interface SoundMap {
  [key: string]: {
    src: string;
    description: string;
    volume: number;
  };
}

const soundsMap: SoundMap = {
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
  notification: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3',
    description: 'Soft notification',
    volume: 0.2
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
  },
  royalAnnouncement: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-fairy-arcade-sparkle-866.mp3',
    description: 'Royal announcement chime',
    volume: 0.2
  },
  purchase: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3',
    description: 'Purchase confirmation',
    volume: 0.3
  }
};

const useNotificationSounds = () => {
  const [audioElements, setAudioElements] = useState<{[key: string]: HTMLAudioElement}>({});
  const [loaded, setLoaded] = useState(false);
  const preloadAttempted = useRef(false);
  
  // Preload all sounds
  const preloadAllSounds = useCallback(() => {
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
          if (loadedCount === totalSounds) {
            setLoaded(true);
          }
        }, { once: true });
        
        // Add error handling
        audio.addEventListener('error', (e) => {
          console.warn(`Failed to preload sound "${key}":`, e);
          loadedCount++;
          if (loadedCount === totalSounds) {
            setLoaded(true);
          }
        }, { once: true });
        
        audio.preload = 'auto';
        audio.src = src;
        newAudioElements[key] = audio;
      });
      
      setAudioElements(newAudioElements);
      
      // Fallback in case events don't fire
      setTimeout(() => {
        if (!loaded) {
          console.warn('Sound preloading timed out, setting as loaded anyway');
          setLoaded(true);
        }
      }, 5000);
    } catch (error) {
      console.error('Error initializing audio elements:', error);
      setLoaded(true); // Set as loaded anyway to prevent blocking the app
    }
  }, [loaded]);
  
  // Play a specific sound with custom volume
  const playSound = useCallback((type: SoundType, volumeMultiplier = 1) => {
    // Skip if sound doesn't exist
    if (!audioElements[type]) {
      console.warn(`Sound "${type}" not found`);
      return;
    }
    
    try {
      // Create a clone to allow for overlapping sounds
      const sound = audioElements[type].cloneNode() as HTMLAudioElement;
      
      // Set volume (capped at 1.0)
      const baseVolume = soundsMap[type]?.volume || 0.3;
      sound.volume = Math.min(baseVolume * volumeMultiplier, 1.0);
      
      // Play the sound
      sound.play().catch(e => {
        // Most browsers require user interaction before playing audio
        console.log('Audio playback error:', e);
      });
    } catch (error) {
      console.error('Failed to play sound:', error);
    }
  }, [audioElements]);
  
  return {
    playSound,
    preloadAllSounds,
    soundsLoaded: loaded
  };
};

export default useNotificationSounds;
