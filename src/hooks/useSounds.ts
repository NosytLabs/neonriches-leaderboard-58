
import { useCallback, useState, useEffect, useRef } from 'react';
import { SoundType, NotificationSoundOptions } from '@/types/sound-types';

// Default volume configuration
const DEFAULT_VOLUME = 0.5;

// Mapping sound types to their file paths
const getSoundPath = (soundType: SoundType): string => {
  const soundMap: Record<SoundType, string> = {
    achievement: '/sounds/achievement.mp3',
    boost: '/sounds/boost.mp3',
    button_click: '/sounds/button_click.mp3',
    challenge: '/sounds/challenge.mp3',
    coins_drop: '/sounds/coins_drop.mp3',
    coins_multiple: '/sounds/coins_multiple.mp3',
    deposit: '/sounds/deposit.mp3',
    error: '/sounds/error.mp3',
    level_up: '/sounds/level_up.mp3',
    message: '/sounds/message.mp3',
    mockery: '/sounds/mockery.mp3',
    notification: '/sounds/notification.mp3',
    purchase: '/sounds/purchase.mp3',
    rank_change: '/sounds/rank_change.mp3',
    rank_up: '/sounds/rank_up.mp3',
    shame: '/sounds/shame.mp3',
    success: '/sounds/success.mp3',
    team_join: '/sounds/team_join.mp3',
    transaction: '/sounds/transaction.mp3',
    upgrade: '/sounds/upgrade.mp3',
    wishingwell: '/sounds/wishingwell.mp3',
    parchment: '/sounds/parchment.mp3'
  };
  
  return soundMap[soundType] || '/sounds/notification.mp3';
};

// Get sound amplitude information for visualizations
const getAmplitudes = (soundType: SoundType): number => {
  const amplitudeMap: Record<SoundType, number> = {
    achievement: 0.7,
    boost: 0.6,
    button_click: 0.3,
    challenge: 0.8,
    coins_drop: 0.6,
    coins_multiple: 0.7,
    deposit: 0.8,
    error: 0.4,
    level_up: 0.8,
    message: 0.3,
    mockery: 0.5,
    notification: 0.5,
    purchase: 0.6,
    rank_change: 0.6,
    rank_up: 0.8,
    shame: 0.5,
    success: 0.6,
    team_join: 0.7,
    transaction: 0.5,
    upgrade: 0.8,
    wishingwell: 0.6,
    parchment: 0.4
  };
  
  return amplitudeMap[soundType] || 0.5;
};

interface UseSoundsReturn {
  playSound: (sound: SoundType, options?: NotificationSoundOptions) => HTMLAudioElement | undefined;
  isSoundEnabled: boolean;
  toggleSound: () => void;
  setSoundEnabled: (enabled: boolean) => void;
}

/**
 * Hook to manage and play sounds throughout the application
 */
export const useSounds = (): UseSoundsReturn => {
  const [isSoundEnabled, setSoundEnabled] = useState<boolean>(() => {
    const savedPreference = localStorage.getItem('soundEnabled');
    return savedPreference !== null ? savedPreference === 'true' : true;
  });
  
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map());
  
  // Update local storage when sound preference changes
  useEffect(() => {
    localStorage.setItem('soundEnabled', isSoundEnabled.toString());
  }, [isSoundEnabled]);
  
  // Toggle sound on/off
  const toggleSound = useCallback(() => {
    setSoundEnabled(prevState => !prevState);
  }, []);
  
  // Play a sound with optional configuration
  const playSound = useCallback((sound: SoundType, options?: NotificationSoundOptions): HTMLAudioElement | undefined => {
    if (!isSoundEnabled) return;
    
    // Default options
    const volume = options?.volume ?? DEFAULT_VOLUME;
    const loop = options?.loop ?? false;
    
    try {
      // Get or create audio element
      let audio = audioRefs.current.get(sound);
      
      if (!audio) {
        audio = new Audio(getSoundPath(sound));
        audioRefs.current.set(sound, audio);
      }
      
      // Reset audio if it's playing
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
      
      // Set audio properties
      audio.volume = volume;
      audio.loop = loop;
      
      // Play the sound
      audio.play().catch(error => {
        console.error(`Error playing sound ${sound}:`, error);
      });
      
      return audio;
    } catch (error) {
      console.error(`Error playing sound ${sound}:`, error);
      return undefined;
    }
  }, [isSoundEnabled]);
  
  return { 
    playSound, 
    isSoundEnabled, 
    toggleSound, 
    setSoundEnabled 
  };
};

export default useSounds;
