
import { useState, useEffect, useCallback } from 'react';
import { SoundType, UseSoundOptions, UseSoundReturn } from '@/types/sound-types';

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
  trumpet: '/sounds/trumpet.mp3',
  trumpets: '/sounds/trumpets.mp3',
  scroll: '/sounds/scroll.mp3',
  potion: '/sounds/potion.mp3',
  chatMessage: '/sounds/chat-message.mp3',
  unlock: '/sounds/unlock.mp3',
  achievement: '/sounds/achievement.mp3',
  coin: '/sounds/coin.mp3',
  boost: '/sounds/boost.mp3',
  advertisement: '/sounds/advertisement.mp3',
  pageTransition: '/sounds/page-transition.mp3',
  seal: '/sounds/seal.mp3',
  parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
  wish: '/sounds/wish.mp3',
  pageChange: '/sounds/page-change.mp3',
  medallion: '/sounds/medallion.mp3',
  noblesLaugh: '/sounds/nobles-laugh.mp3',
  inkScribble: '/sounds/ink-scribble.mp3',
  smoke: '/sounds/smoke.mp3',
  tab: '/sounds/tab.mp3',
  hover: '/sounds/hover.mp3'
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
  trumpet: 0.7,
  trumpets: 0.7,
  scroll: 0.4,
  potion: 0.5,
  chatMessage: 0.5,
  unlock: 0.6,
  achievement: 0.7,
  coin: 0.6,
  boost: 0.6,
  advertisement: 0.6,
  pageTransition: 0.5,
  seal: 0.6,
  parchmentUnfurl: 0.5,
  wish: 0.7,
  pageChange: 0.4,
  medallion: 0.7,
  noblesLaugh: 0.6,
  inkScribble: 0.5,
  smoke: 0.6,
  tab: 0.4,
  hover: 0.3
};

export const useSound = (options: UseSoundOptions = {}): UseSoundReturn => {
  const {
    baseVolume = 0.5,
    disableCache = false,
  } = options;

  const [audioElements, setAudioElements] = useState<Record<SoundType, HTMLAudioElement | null>>({} as any);
  const [loading, setLoading] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Preload audio files
  useEffect(() => {
    if (typeof window === 'undefined') {
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
        const audio = new Audio(path);
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
  }, [disableCache]);
  
  // Play function
  const play = useCallback((soundType: SoundType, volumeMultiplier = 1) => {
    if (!loaded) return;
    
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
      audio.volume = Math.min(baseVol * baseVolume * volumeMultiplier, 1);
      
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
  }, [audioElements, loaded, baseVolume]);
  
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

  return {
    play,
    playSound: play, // Making sure playSound alias is available
    playSuccess,
    playError,
    playNotification,
    playClick,
    loading,
    loaded,
    error,
  };
};

export default useSound;
