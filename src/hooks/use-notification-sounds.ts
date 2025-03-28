
import { useEffect, useRef } from 'react';

type SoundType = 'notification' | 'success' | 'error' | 'shame' | 'purchase' | 'levelUp' | 'swordClash';

interface SoundMap {
  [key: string]: HTMLAudioElement;
}

const useNotificationSounds = () => {
  const sounds = useRef<SoundMap>({});
  const isMounted = useRef(true);

  // Initialize audio objects
  useEffect(() => {
    // Sound paths - in a real app, these would be actual sound files
    const soundPaths: Record<SoundType, string> = {
      notification: '/sounds/notification.mp3',
      success: '/sounds/success.mp3',
      error: '/sounds/error.mp3',
      shame: '/sounds/shame.mp3',
      purchase: '/sounds/purchase.mp3',
      levelUp: '/sounds/level-up.mp3',
      swordClash: '/sounds/sword-clash.mp3'
    };

    // Create audio objects for each sound
    Object.entries(soundPaths).forEach(([key, path]) => {
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

  const playSound = (type: SoundType, volume = 0.5) => {
    try {
      if (isMounted.current && sounds.current[type]) {
        const audio = sounds.current[type];
        audio.volume = volume;
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
  };

  return { playSound };
};

export default useNotificationSounds;
