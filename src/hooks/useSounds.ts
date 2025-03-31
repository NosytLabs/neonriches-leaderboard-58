
import { useCallback } from 'react';
import { NotificationSoundOptions, SoundType } from '@/types/sound-types';
import getSoundPath from '@/utils/getSoundPath';

/**
 * Unified hook for playing sounds in the application
 */
export const useSounds = () => {
  /**
   * Play a sound with given options
   */
  const playSound = useCallback((soundType: SoundType | string, options: NotificationSoundOptions = {}) => {
    try {
      const soundPath = getSoundPath(soundType as SoundType);
      if (!soundPath) return null;
      
      const audio = new Audio(soundPath);
      
      // Apply volume if provided
      if (options.volume !== undefined) {
        audio.volume = Math.min(Math.max(options.volume, 0), 1);
      } else {
        audio.volume = 0.5; // Default volume
      }
      
      // Apply loop if provided
      if (options.loop !== undefined) {
        audio.loop = options.loop;
      }
      
      // Apply delay if provided or play immediately
      if (options.delay && options.delay > 0) {
        setTimeout(() => audio.play().catch(e => console.error('Error playing sound:', e)), options.delay);
      } else {
        audio.play().catch(e => console.error('Error playing sound:', e));
      }
      
      return audio;
    } catch (error) {
      console.error('Failed to play sound:', error);
      return null;
    }
  }, []);
  
  return { playSound };
};

// Legacy hooks that use our unified sound hook
export const useNotificationSound = useSounds;
export const useNotificationSounds = useSounds;

export default useSounds;
