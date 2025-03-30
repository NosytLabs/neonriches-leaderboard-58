
import { useState, useEffect, useCallback } from 'react';

// Define sound type
export type SoundType = 
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'coinDrop'
  | 'reward'
  | 'royalAnnouncement'
  | 'levelUp'
  | 'purchase'
  | 'shame'
  | 'swordClash'
  | 'message'
  | 'win';

export interface UseSoundOptions {
  baseUrl?: string;
  volume?: number;
  disabled?: boolean;
}

export interface UseSoundReturn {
  play: (soundType: SoundType, volumeMultiplier?: number) => void;
  playSuccess: (volumeMultiplier?: number) => void;
  playError: (volumeMultiplier?: number) => void;
  playNotification: (volumeMultiplier?: number) => void;
  playClick: (volumeMultiplier?: number) => void;
  playSound: (soundType: SoundType, volumeMultiplier?: number) => void;
  loading: boolean;
  loaded: boolean;
  error: Error | null;
}

// Default sound file paths
const defaultSoundMap: Record<SoundType, string> = {
  click: '/sounds/click.mp3',
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
};

// Sound volume levels
const volumeLevels: Record<SoundType, number> = {
  click: 0.5,
  success: 0.7,
  error: 0.6,
  notification: 0.7,
  coinDrop: 0.8,
  reward: 0.8,
  royalAnnouncement: 0.6,
  levelUp: 0.8,
  purchase: 0.7,
  shame: 0.7,
  swordClash: 0.7,
  message: 0.6,
  win: 0.8,
};

export const useSound = (options: UseSoundOptions = {}): UseSoundReturn => {
  const {
    baseUrl = '',
    volume = 0.7,
    disabled = false,
  } = options;

  const [audioElements, setAudioElements] = useState<Record<SoundType, HTMLAudioElement | null>>({} as any);
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

    let loadedCount = 0;
    const totalSounds = Object.keys(defaultSoundMap).length;
    const newAudioElements: Record<SoundType, HTMLAudioElement> = {} as any;
    
    // Check if sounds are already available in localStorage
    const soundsEnabled = localStorage.getItem('soundsEnabled');
    if (soundsEnabled === 'false') {
      setLoading(false);
      setLoaded(true);
      return;
    }

    // Create audio elements for each sound
    Object.entries(defaultSoundMap).forEach(([key, path]) => {
      try {
        const soundType = key as SoundType;
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
        
        newAudioElements[soundType] = audio;
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
  const play = useCallback((soundType: SoundType, volumeMultiplier = 1) => {
    if (disabled || !loaded) return;
    
    const soundsEnabled = localStorage.getItem('soundsEnabled');
    if (soundsEnabled === 'false') return;
    
    const audio = audioElements[soundType];
    if (!audio) return;
    
    try {
      // Reset audio to start
      audio.pause();
      audio.currentTime = 0;
      
      // Set volume
      const baseVol = volumeLevels[soundType] || 0.7;
      audio.volume = Math.min(baseVol * volume * volumeMultiplier, 1);
      
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
  const playSuccess = useCallback((volumeMultiplier = 1) => {
    play('success', volumeMultiplier);
  }, [play]);
  
  const playError = useCallback((volumeMultiplier = 1) => {
    play('error', volumeMultiplier);
  }, [play]);
  
  const playNotification = useCallback((volumeMultiplier = 1) => {
    play('notification', volumeMultiplier);
  }, [play]);
  
  const playClick = useCallback((volumeMultiplier = 1) => {
    play('click', volumeMultiplier);
  }, [play]);

  // For backward compatibility
  const playSound = play;
  
  return {
    play,
    playSuccess,
    playError,
    playNotification,
    playClick,
    playSound, // alias for play for backward compatibility
    loading,
    loaded,
    error,
  };
};

export default useSound;
