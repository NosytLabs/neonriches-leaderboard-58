
import { useState, useEffect, useCallback } from 'react';

type SoundType = 'notification' | 'achievement' | 'rank' | 'rankChange' | 'tab' | 'royal' | 'coin' | 'error' | 'success';

interface SoundMap {
  [key: string]: HTMLAudioElement;
}

const useNotificationSounds = () => {
  const [sounds, setSounds] = useState<SoundMap>({});
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const soundMap: SoundMap = {
      notification: new Audio('/sounds/notification.mp3'),
      achievement: new Audio('/sounds/achievement.mp3'),
      rank: new Audio('/sounds/rank.mp3'),
      rankChange: new Audio('/sounds/rank-change.mp3'),
      tab: new Audio('/sounds/tab.mp3'),
      royal: new Audio('/sounds/royal.mp3'),
      coin: new Audio('/sounds/coin.mp3'),
      error: new Audio('/sounds/error.mp3'),
      success: new Audio('/sounds/success.mp3')
    };
    
    // Preload sounds
    const loadSounds = async () => {
      const promises = Object.values(soundMap).map(audio => {
        return new Promise<void>((resolve) => {
          audio.addEventListener('canplaythrough', () => resolve(), { once: true });
          audio.load();
        });
      });
      
      try {
        await Promise.all(promises);
        setLoaded(true);
      } catch (error) {
        console.error('Error loading sounds:', error);
      }
    };
    
    loadSounds();
    setSounds(soundMap);
    
    // Cleanup on unmount
    return () => {
      Object.values(soundMap).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, []);
  
  const playSound = useCallback((type: SoundType, volume: number = 0.5) => {
    const sound = sounds[type];
    
    if (sound) {
      // Clone the audio to allow multiple sounds to play simultaneously
      const soundClone = sound.cloneNode() as HTMLAudioElement;
      soundClone.volume = volume;
      
      // Wait for user interaction before playing sound
      const playPromise = soundClone.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Auto-play was prevented, likely due to browser policy
          console.log('Audio playback was prevented:', error);
        });
      }
    }
  }, [sounds]);
  
  return { playSound, loaded };
};

export default useNotificationSounds;
