
import { useEffect, useRef, useCallback, useState } from 'react';
import type { SoundType } from './sounds/types';
import { soundAssets, defaultVolumes } from './sounds/sound-assets';

const useNotificationSounds = () => {
  const sounds = useRef<Record<string, HTMLAudioElement>>({});
  const isMounted = useRef(true);
  const [isMuted, setIsMuted] = useState(false);

  // Initialize audio objects
  useEffect(() => {
    // Create audio objects for each sound
    Object.entries(soundAssets).forEach(([key, path]) => {
      try {
        sounds.current[key] = new Audio(path);
        sounds.current[key].preload = 'auto';
      } catch (error) {
        console.error(`Failed to load sound: ${key}`, error);
      }
    });

    return () => {
      // Clean up audio objects on unmount
      isMounted.current = false;
      Object.values(sounds.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
      sounds.current = {};
    };
  }, []);

  const playSound = useCallback((type: SoundType, volume = 0.5) => {
    if (isMuted) return;
    
    try {
      if (isMounted.current && sounds.current[type]) {
        const audio = sounds.current[type];
        // Use default volume or override with provided volume
        audio.volume = volume || defaultVolumes[type] || 0.5;
        audio.currentTime = 0;
        
        // Some browsers require user interaction before playing audio
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Auto-play was prevented, this is normal on some browsers
            console.log('Audio playback was prevented by the browser', error);
          });
        }
      }
    } catch (error) {
      console.error(`Error playing sound: ${type}`, error);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted(prevMuted => !prevMuted);
  }, []);

  const preloadSounds = useCallback(() => {
    console.log('Preloading sounds');
    const commonSounds: SoundType[] = ['click', 'success', 'notification'];
    
    commonSounds.forEach(type => {
      try {
        if (sounds.current[type]) {
          const audio = sounds.current[type];
          audio.load();
        }
      } catch (error) {
        console.error(`Error preloading sound ${type}:`, error);
      }
    });
  }, []);

  return { 
    playSound,
    isMuted,
    toggleMute,
    preloadSounds
  };
};

export default useNotificationSounds;
