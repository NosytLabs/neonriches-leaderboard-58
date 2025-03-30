
import { useState, useEffect } from 'react';
import { SoundType, AudioLoaderReturn } from '@/types/sound-types';

// Mapping of sound types to their file paths
// We're using MP3s for better browser compatibility
const SOUND_PATHS: Record<SoundType, string> = {
  coinDrop: '/sounds/coin-drop.mp3',
  reward: '/sounds/reward.mp3',
  notification: '/sounds/notification.mp3',
  click: '/sounds/click.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  royalAnnouncement: '/sounds/royal-announcement.mp3',
  levelUp: '/sounds/level-up.mp3',
  purchase: '/sounds/purchase.mp3',
  shame: '/sounds/shame.mp3', 
  swordClash: '/sounds/sword-clash.mp3',
  pageTransition: '/sounds/page-transition.mp3',
  wish: '/sounds/wish.mp3',
  pageChange: '/sounds/page-change.mp3',
  parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
  medallion: '/sounds/medallion.mp3',
  seal: '/sounds/seal.mp3', 
  trumpet: '/sounds/trumpet.mp3',
  noblesLaugh: '/sounds/nobles-laugh.mp3',
  inkScribble: '/sounds/ink-scribble.mp3',
  hover: '/sounds/hover.mp3',
  advertisement: '/sounds/advertisement.mp3',
  achievement: '/sounds/achievement.mp3',
  potion: '/sounds/potion.mp3',
  chatMessage: '/sounds/chat-message.mp3',
  unlock: '/sounds/unlock.mp3',
  win: '/sounds/win.mp3',
  message: '/sounds/message.mp3',
  trumpets: '/sounds/trumpets.mp3',
  scroll: '/sounds/scroll.mp3',
  coin: '/sounds/coin.mp3',
  boost: '/sounds/boost.mp3'
};

// Sound categories for different user preferences
export const SOUND_CATEGORIES = {
  UI: ['click', 'notification', 'pageTransition', 'pageChange', 'hover'],
  FEEDBACK: ['success', 'error', 'reward', 'levelUp', 'purchase'],
  AMBIENT: ['coinDrop', 'royalAnnouncement', 'wish', 'trumpet'],
  SPECIAL: ['swordClash', 'shame', 'parchmentUnfurl', 'medallion', 'seal', 'noblesLaugh', 'inkScribble']
};

/**
 * Custom hook to preload and manage audio files
 * @param soundsToPreload - Optional array of sound types to preload
 * @returns The preloaded audio elements and loading state
 */
export const useAudioLoader = (
  soundsToPreload?: SoundType[]
): AudioLoaderReturn => {
  const [loadedSounds, setLoadedSounds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [audioElements, setAudioElements] = useState<Record<string, HTMLAudioElement>>({});
  
  // Load all sounds if no specific sounds are provided
  useEffect(() => {
    const soundsToLoad = soundsToPreload || Object.keys(SOUND_PATHS) as SoundType[];
    
    if (soundsToLoad.length === 0) {
      return;
    }
    
    setLoading(true);
    const loadedAudioElements: Record<string, HTMLAudioElement> = {};
    const newLoadedSounds: string[] = [];
    
    Promise.all(
      soundsToLoad.map((soundType) => {
        return new Promise<void>((resolve, reject) => {
          try {
            const audio = new Audio();
            audio.preload = 'auto';
            
            audio.addEventListener('canplaythrough', () => {
              newLoadedSounds.push(soundType);
              loadedAudioElements[soundType] = audio;
              resolve();
            }, { once: true });
            
            audio.addEventListener('error', (e) => {
              console.error(`Error loading sound: ${soundType}`, e);
              reject(new Error(`Failed to load ${soundType} sound`));
            }, { once: true });
            
            audio.src = SOUND_PATHS[soundType];
            audio.load();
            
          } catch (err) {
            console.error(`Error creating audio element for ${soundType}:`, err);
            reject(err);
          }
        });
      })
    )
    .then(() => {
      setLoadedSounds(newLoadedSounds);
      setAudioElements(loadedAudioElements);
      setLoading(false);
      setLoaded(true);
    })
    .catch((err) => {
      console.error('Error loading audio files:', err);
      setError(err instanceof Error ? err : new Error(String(err)));
      setLoading(false);
    });
    
    // Cleanup audio elements on unmount
    return () => {
      Object.values(loadedAudioElements).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, [soundsToPreload]);
  
  const playSound = (type: SoundType, volumeMultiplier = 1) => {
    if (audioElements[type]) {
      try {
        const audio = audioElements[type];
        audio.volume = Math.min(1, volumeMultiplier);
        audio.currentTime = 0;
        audio.play().catch(e => console.error('Error playing sound:', e));
      } catch (e) {
        console.error('Error playing sound:', e);
      }
    }
  };
  
  return {
    loading,
    loaded,
    error,
    sounds: audioElements,
    audioElements,
    loadedSounds,
    play: playSound
  };
};

export default useAudioLoader;
