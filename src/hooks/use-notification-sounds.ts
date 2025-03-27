
import { useState, useCallback, useEffect, useRef } from 'react';
import { SoundNames, soundAssets, defaultVolumes } from './sounds/sound-assets';

interface Sound {
  url: string;
  volume: number;
  audio?: HTMLAudioElement;
}

// Create a sound map based on the assets and volumes defined in sound-assets.ts
const createSoundMap = (): Record<SoundNames, Sound> => {
  const map: Record<SoundNames, Sound> = {} as Record<SoundNames, Sound>;
  
  (Object.keys(soundAssets) as SoundNames[]).forEach(key => {
    map[key] = {
      url: soundAssets[key],
      volume: defaultVolumes[key]
    };
  });
  
  return map;
};

// Check for stored user preference or default to unmuted
const getInitialMuteState = (): boolean => {
  const stored = localStorage.getItem('p2w-sounds-muted');
  return stored ? JSON.parse(stored) : false;
};

export default function useNotificationSounds() {
  const [isMuted, setIsMuted] = useState<boolean>(getInitialMuteState);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const soundsRef = useRef<Record<SoundNames, Sound>>(createSoundMap());
  
  // Load all sounds
  const preloadSounds = useCallback(() => {
    Object.keys(soundsRef.current).forEach((key) => {
      const soundName = key as SoundNames;
      const sound = soundsRef.current[soundName];
      
      if (!sound.audio) {
        sound.audio = new Audio(sound.url);
        sound.audio.volume = sound.volume;
        sound.audio.preload = 'auto';
      }
    });
    
    setIsLoaded(true);
  }, []);
  
  // Save mute preference to localStorage
  useEffect(() => {
    localStorage.setItem('p2w-sounds-muted', JSON.stringify(isMuted));
  }, [isMuted]);
  
  // Toggle mute state
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);
  
  // Play a sound if not muted
  const playSound = useCallback((name: SoundNames, volumeMultiplier: number = 1) => {
    if (isMuted || !isLoaded) return;
    
    const sound = soundsRef.current[name];
    if (sound && sound.audio) {
      try {
        // Reset audio to start and adjust volume
        sound.audio.currentTime = 0;
        sound.audio.volume = sound.volume * volumeMultiplier;
        
        // Play the sound
        const playPromise = sound.audio.play();
        
        // Handle play promise (might reject if user hasn't interacted with the page)
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.warn(`Sound playback prevented: ${error}`);
          });
        }
      } catch (error) {
        console.error(`Error playing sound ${name}:`, error);
      }
    }
  }, [isMuted, isLoaded]);
  
  return {
    playSound,
    toggleMute,
    isMuted,
    preloadSounds,
    isLoaded
  };
}
