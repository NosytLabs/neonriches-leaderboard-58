
import { useState, useEffect, useCallback } from 'react';
import { SoundType } from '@/types/sound-types';

interface UseSoundOptions {
  baseUrl?: string;
  volume?: number;
  disabled?: boolean;
}

// Map of sound types to file paths
const soundMap: Record<string, string> = {
  click: '/sounds/click.mp3',
  hover: '/sounds/hover.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  coinDrop: '/sounds/coin-drop.mp3',
  reward: '/sounds/reward.mp3',
  royalAnnouncement: '/sounds/royal-announcement.mp3',
  levelUp: '/sounds/level-up.mp3',
  purchase: '/sounds/purchase.mp3',
  shame: '/sounds/shame.mp3',
  swordClash: '/sounds/sword-clash.mp3',
  message: '/sounds/message.mp3',
  win: '/sounds/win.mp3',
  trumpet: '/sounds/trumpet.mp3',
  scroll: '/sounds/scroll.mp3',
  seal: '/sounds/seal.mp3',
  deposit: '/sounds/deposit.mp3',
  wish: '/sounds/wish.mp3',
  pageChange: '/sounds/page-change.mp3'
};

// Default volume levels for different sound types
const volumeLevels: Record<string, number> = {
  click: 0.5,
  hover: 0.3,
  success: 0.7,
  error: 0.6,
  notification: 0.7,
  coinDrop: 0.8,
  reward: 0.8,
  royalAnnouncement: 0.7,
  levelUp: 0.8,
  purchase: 0.7,
  shame: 0.7,
  swordClash: 0.7,
  message: 0.6,
  win: 0.8,
  trumpet: 0.7,
  scroll: 0.5,
  seal: 0.7,
  deposit: 0.7,
  wish: 0.6,
  pageChange: 0.5
};

export const useSound = (options: UseSoundOptions = {}) => {
  const {
    baseUrl = '',
    volume = 0.7,
    disabled = false
  } = options;

  const [audioElements, setAudioElements] = useState<Record<string, HTMLAudioElement | null>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Preload audio files
  useEffect(() => {
    if (disabled || typeof window === 'undefined') {
      setLoading(false);
      setLoaded(true);
      return;
    }

    // Check if sounds are disabled in local storage
    const soundsEnabled = localStorage.getItem('soundsEnabled');
    if (soundsEnabled === 'false') {
      setLoading(false);
      setLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalSounds = Object.keys(soundMap).length;
    const newAudioElements: Record<string, HTMLAudioElement> = {};
    
    // Create audio elements for each sound
    Object.entries(soundMap).forEach(([key, path]) => {
      try {
        const audio = new Audio(baseUrl + path);
        audio.preload = 'auto';
        
        audio.addEventListener('canplaythrough', () => {
          loadedCount++;
          if (loadedCount === totalSounds) {
            setLoaded(true);
            setLoading(false);
          }
        });
        
        audio.addEventListener('error', (err) => {
          console.error(`Error loading sound: ${path}`, err);
          loadedCount++;
          if (loadedCount === totalSounds) {
            setLoaded(true);
            setLoading(false);
          }
        });
        
        newAudioElements[key] = audio;
      } catch (err) {
        console.error(`Error creating audio element for ${key}:`, err);
        setError(err instanceof Error ? err : new Error(String(err)));
      }
    });
    
    setAudioElements(newAudioElements);
    
    // Cleanup
    return () => {
      Object.values(newAudioElements).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
    };
  }, [baseUrl, disabled]);
  
  // Play function
  const play = useCallback((soundType: SoundType) => {
    if (disabled || !loaded) return;
    
    const soundsEnabled = localStorage.getItem('soundsEnabled');
    if (soundsEnabled === 'false') return;
    
    const audio = audioElements[soundType];
    if (!audio) {
      console.warn(`Sound not found: ${soundType}`);
      return;
    }
    
    try {
      // Reset audio to start
      audio.pause();
      audio.currentTime = 0;
      
      // Set volume
      const baseVol = volumeLevels[soundType] || 0.7;
      audio.volume = Math.min(baseVol * volume, 1);
      
      // Play the sound
      const playPromise = audio.play();
      
      // Handle potential play() Promise rejection
      if (playPromise !== undefined) {
        playPromise.catch(e => {
          console.warn('Audio playback was prevented:', e);
        });
      }
    } catch (err) {
      console.error(`Error playing sound ${soundType}:`, err);
    }
  }, [audioElements, disabled, loaded, volume]);
  
  // Convenience methods for common sounds
  const playSuccess = useCallback(() => {
    play('success');
  }, [play]);
  
  const playError = useCallback(() => {
    play('error');
  }, [play]);
  
  const playNotification = useCallback(() => {
    play('notification');
  }, [play]);
  
  const playClick = useCallback(() => {
    play('click');
  }, [play]);

  return {
    play,
    playSuccess,
    playError,
    playNotification,
    playClick,
    loading,
    loaded,
    error
  };
};

export type UseSoundReturn = ReturnType<typeof useSound>;

export default useSound;
