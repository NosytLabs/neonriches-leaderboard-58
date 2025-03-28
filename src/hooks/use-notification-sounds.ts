
import { useState, useEffect, useRef, useCallback } from 'react';
import { SoundType } from './sounds/types';
import { soundAssets, defaultVolumes } from './sounds/sound-assets';

// Hook for managing notification sounds
export default function useNotificationSounds() {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [soundsLoaded, setSoundsLoaded] = useState<boolean>(false);
  const [loadedSoundTypes, setLoadedSoundTypes] = useState<string[]>([]);
  
  // Using refs to store audio objects
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  
  // Initialize audio elements on mount
  useEffect(() => {
    // Create audio elements for each sound type
    const audioElements: Record<string, HTMLAudioElement> = {};
    
    Object.entries(soundAssets).forEach(([type, url]) => {
      audioElements[type] = new Audio(url);
      // Set common properties
      audioElements[type].preload = 'auto';
      audioElements[type].volume = defaultVolumes[type as keyof typeof defaultVolumes] || 0.5;
    });
    
    // Store in refs
    audioRefs.current = audioElements;
    
    // Cleanup function
    return () => {
      // Pause and nullify all audio elements
      Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);
  
  // Function to play a specific sound
  const playSound = useCallback((type: SoundType, volumeMultiplier: number = 1) => {
    if (isMuted) return;
    
    const audio = audioRefs.current[type];
    if (audio) {
      const baseVolume = defaultVolumes[type as keyof typeof defaultVolumes] || 0.5;
      audio.volume = baseVolume * volumeMultiplier;
      // Reset audio to beginning if already playing
      audio.currentTime = 0;
      audio.play().catch(err => {
        // Browser might block autoplay, handle gracefully
        console.log('Audio playback blocked or error:', err);
      });
    }
  }, [isMuted]);
  
  // Preload all sound assets
  const preloadSounds = useCallback(() => {
    const loadingPromises: Promise<void>[] = [];
    const loadedTypes: string[] = [];
    
    Object.entries(soundAssets).forEach(([type, url]) => {
      const audio = audioRefs.current[type];
      if (audio) {
        const loadPromise = new Promise<void>((resolve) => {
          audio.addEventListener('canplaythrough', () => {
            loadedTypes.push(type);
            resolve();
          }, { once: true });
          
          audio.addEventListener('error', () => {
            console.error(`Failed to load sound: ${type}`);
            resolve(); // Resolve anyway to not block other sounds
          }, { once: true });
          
          // Force load
          audio.load();
        });
        
        loadingPromises.push(loadPromise);
      }
    });
    
    Promise.all(loadingPromises).then(() => {
      setSoundsLoaded(true);
      setLoadedSoundTypes(loadedTypes);
    });
  }, []);
  
  // Pause all sounds
  const pauseAllSounds = useCallback(() => {
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) {
        audio.pause();
      }
    });
  }, []);
  
  // Toggle mute state
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);
  
  return { 
    playSound, 
    preloadSounds, 
    pauseAllSounds, 
    soundsLoaded, 
    loadedSoundTypes,
    isMuted,
    toggleMute
  };
}
