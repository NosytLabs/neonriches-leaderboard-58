
import { useEffect, useState } from 'react';
import { SoundType } from '@/types/sound-types';
import { getSoundPath } from './sound-assets';

const useAudioLoader = () => {
  const [audioElements, setAudioElements] = useState<Record<SoundType, HTMLAudioElement | null>>({
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
    crown: null,
    royal: null,
    medallion: null,
    pageTransition: null,
    parchmentUnfurl: null,
    pageChange: null,
    info: null,
    warning: null,
    seal: null,
    deposit: null,
    reward: null,
    unlock: null,
    team: null,
    applause: null,
    levelUp: null,
    boost: null,
    curse: null,
    laugh: null,
    magic: null,
    celebration: null,
    message: null,
    treasure: null,
    bell: null,
    royalAnnouncement: null,
    swordClash: null,
    coins: null,
    trumpet: null,
    coin: null,
    medieval: null,
    award: null
  });
  
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  
  // Load all audio elements
  useEffect(() => {
    const loadAudio = async () => {
      // Create new object for immutability
      const newAudioElements: Record<SoundType, HTMLAudioElement> = {} as Record<SoundType, HTMLAudioElement>;
      const totalSounds = Object.keys(audioElements).length;
      let loadedSounds = 0;
      
      // Create promises for all audio elements
      const loadPromises = Object.keys(audioElements).map((key) => {
        return new Promise<void>((resolve) => {
          try {
            const soundType = key as SoundType;
            const soundPath = getSoundPath(soundType);
            
            if (!soundPath) {
              console.warn(`No path for sound: ${soundType}`);
              loadedSounds++;
              setLoadProgress(Math.floor((loadedSounds / totalSounds) * 100));
              resolve();
              return;
            }
            
            const audio = new Audio(soundPath);
            
            // Handle when audio metadata is loaded
            audio.addEventListener('loadedmetadata', () => {
              loadedSounds++;
              setLoadProgress(Math.floor((loadedSounds / totalSounds) * 100));
              resolve();
            });
            
            // Handle errors
            audio.addEventListener('error', () => {
              console.warn(`Error loading audio: ${soundType}`);
              loadedSounds++;
              setLoadProgress(Math.floor((loadedSounds / totalSounds) * 100));
              resolve();
            });
            
            // Set properties
            audio.preload = 'auto';
            
            // Add to new elements
            newAudioElements[soundType] = audio;
            
            // Start loading
            audio.load();
          } catch (error) {
            console.error(`Error creating audio element for key: ${key}`, error);
            loadedSounds++;
            setLoadProgress(Math.floor((loadedSounds / totalSounds) * 100));
            resolve();
          }
        });
      });
      
      // Wait for all audio to load
      await Promise.all(loadPromises);
      
      // Update state
      setAudioElements(newAudioElements);
      setIsLoaded(true);
      setLoadProgress(100);
    };
    
    loadAudio();
    
    // Cleanup
    return () => {
      Object.values(audioElements).forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
    };
  }, []);
  
  return {
    audioElements,
    isLoaded,
    loadProgress
  };
};

export default useAudioLoader;
