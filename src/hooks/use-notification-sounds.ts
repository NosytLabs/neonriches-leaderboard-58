
import { useCallback, useEffect, useRef } from 'react';

export type SoundType = 'click' | 'notification' | 'success' | 'error' | 'purchase' | 'reward' | 'levelUp';

interface SoundMap {
  [key: string]: string;
}

const SOUND_URLS: SoundMap = {
  click: '/sounds/click.mp3',
  notification: '/sounds/notification.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  purchase: '/sounds/purchase.mp3',
  reward: '/sounds/reward.mp3',
  levelUp: '/sounds/level-up.mp3'
};

const useNotificationSounds = () => {
  const audioRefs = useRef<{[key: string]: HTMLAudioElement}>({});
  
  // Initialize audio elements
  useEffect(() => {
    Object.keys(SOUND_URLS).forEach(soundKey => {
      const audio = new Audio(SOUND_URLS[soundKey]);
      audio.preload = 'auto';
      audioRefs.current[soundKey] = audio;
    });
    
    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
      audioRefs.current = {};
    };
  }, []);
  
  const playSound = useCallback((soundType: SoundType, volume = 1.0) => {
    const audio = audioRefs.current[soundType];
    
    if (!audio) return;
    
    // Reset the audio to the beginning if it's already playing
    audio.pause();
    audio.currentTime = 0;
    
    // Set volume (between 0 and 1)
    audio.volume = Math.min(Math.max(volume, 0), 1);
    
    // Play the sound
    audio.play().catch(err => {
      console.error(`Error playing sound ${soundType}:`, err);
    });
  }, []);
  
  return { playSound };
};

export default useNotificationSounds;
