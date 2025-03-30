
import { useState, useEffect, useCallback } from 'react';
import { useSettingsStore } from '@/stores/settingsStore';

// Define the types of sounds available in the application
export type SoundType = 
  | 'hover' 
  | 'click' 
  | 'success' 
  | 'error' 
  | 'notification' 
  | 'purchase' 
  | 'levelUp' 
  | 'achievement' 
  | 'reward'
  | 'coinDrop'
  | 'royalAnnouncement'
  | 'shame'
  | 'swordClash'
  | 'trumpets'
  | 'scroll'
  | 'potion'
  | 'chatMessage'
  | 'unlock'
  | 'win'
  | 'message'
  | 'trumpet'
  | 'coin'
  | 'boost'
  | 'advertisement';

// Base URLs for sounds
const SOUND_BASE_URL = '/sounds/';

// Mapping of sound types to file paths
const soundFiles: Record<SoundType, string> = {
  hover: 'ui/hover.mp3',
  click: 'ui/click.mp3',
  success: 'ui/success.mp3',
  error: 'ui/error.mp3',
  notification: 'ui/notification.mp3',
  purchase: 'transactions/purchase.mp3',
  levelUp: 'achievements/level-up.mp3',
  achievement: 'achievements/achievement.mp3',
  reward: 'achievements/reward.mp3',
  coinDrop: 'transactions/coin-drop.mp3',
  royalAnnouncement: 'royal/announcement.mp3',
  shame: 'royal/shame.mp3',
  swordClash: 'royal/sword-clash.mp3',
  trumpets: 'royal/trumpets.mp3',
  scroll: 'ui/scroll.mp3',
  potion: 'items/potion.mp3',
  chatMessage: 'ui/chat-message.mp3',
  unlock: 'ui/unlock.mp3',
  win: 'achievements/win.mp3',
  message: 'ui/message.mp3',
  trumpet: 'royal/trumpet.mp3',
  coin: 'transactions/coin.mp3',
  boost: 'items/boost.mp3',
  advertisement: 'marketing/advertisement.mp3'
};

// Volume levels for different sound types
const volumeLevels: Record<SoundType, number> = {
  hover: 0.3,
  click: 0.4,
  success: 0.5,
  error: 0.5,
  notification: 0.6,
  purchase: 0.7,
  levelUp: 0.8,
  achievement: 0.7,
  reward: 0.8,
  coinDrop: 0.6,
  royalAnnouncement: 0.8,
  shame: 0.7,
  swordClash: 0.7,
  trumpets: 0.8,
  scroll: 0.4,
  potion: 0.5,
  chatMessage: 0.5,
  unlock: 0.6,
  win: 0.7,
  message: 0.5,
  trumpet: 0.7,
  coin: 0.6,
  boost: 0.6,
  advertisement: 0.6
};

// Cache audio elements to avoid recreating them
const audioCache: Record<string, HTMLAudioElement> = {};

interface UseSoundOptions {
  baseVolume?: number;
  disableCache?: boolean;
  volume?: number;
}

interface UseSoundReturn {
  play: (soundType: SoundType, volumeMultiplier?: number) => void;
  playSuccess: (volumeMultiplier?: number) => void;
  playError: (volumeMultiplier?: number) => void;
  playNotification: (volumeMultiplier?: number) => void;
  playClick: (volumeMultiplier?: number) => void;
  loading: boolean;
  loaded: boolean;
  error: Error | null;
}

/**
 * Custom hook for playing sound effects
 */
export const useSound = (options: UseSoundOptions = {}): UseSoundReturn => {
  const { baseVolume = 0.5, disableCache = false } = options;
  const [loading, setLoading] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  
  // Get sound settings from the global store
  const soundEnabled = useSettingsStore(state => state.soundEffects);
  const globalVolume = useSettingsStore(state => state.volume);
  
  // Preload the most common sound effects
  useEffect(() => {
    const commonSounds: SoundType[] = ['click', 'success', 'error', 'notification'];
    
    if (!disableCache) {
      commonSounds.forEach(soundType => {
        const soundPath = SOUND_BASE_URL + soundFiles[soundType];
        if (!audioCache[soundPath]) {
          const audio = new Audio(soundPath);
          audio.preload = 'auto';
          audioCache[soundPath] = audio;
        }
      });
    }
    
    setLoading(false);
    setLoaded(true);
  }, [disableCache]);
  
  const play = useCallback((soundType: SoundType, volumeMultiplier = 1.0) => {
    if (!soundEnabled || !soundType || !soundFiles[soundType]) {
      return;
    }
    
    try {
      const soundPath = SOUND_BASE_URL + soundFiles[soundType];
      
      // Calculate final volume (base * type-specific * multiplier * global)
      const typeVolume = volumeLevels[soundType] || 0.5;
      const finalVolume = Math.min(
        baseVolume * typeVolume * volumeMultiplier * (globalVolume || 1.0),
        1.0
      );
      
      let audio: HTMLAudioElement;
      
      if (!disableCache && audioCache[soundPath]) {
        audio = audioCache[soundPath];
      } else {
        audio = new Audio(soundPath);
        if (!disableCache) {
          audioCache[soundPath] = audio;
        }
      }
      
      // Reset audio to ensure it plays from the beginning
      audio.currentTime = 0;
      audio.volume = finalVolume;
      
      // Play the sound
      audio.play().catch(err => {
        console.error('Error playing sound:', err);
        setError(err);
      });
    } catch (err) {
      console.error('Error in play function:', err);
      setError(err instanceof Error ? err : new Error(String(err)));
    }
  }, [soundEnabled, baseVolume, globalVolume, disableCache]);
  
  // Convenience methods for common sounds
  const playSuccess = useCallback((volumeMultiplier = 1.0) => {
    play('success', volumeMultiplier);
  }, [play]);
  
  const playError = useCallback((volumeMultiplier = 1.0) => {
    play('error', volumeMultiplier);
  }, [play]);
  
  const playNotification = useCallback((volumeMultiplier = 1.0) => {
    play('notification', volumeMultiplier);
  }, [play]);
  
  const playClick = useCallback((volumeMultiplier = 1.0) => {
    play('click', volumeMultiplier);
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

export default useSound;
