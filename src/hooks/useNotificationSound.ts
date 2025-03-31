
import { useCallback } from 'react';
import { NotificationSoundOptions } from '@/types/sound-types';
import getSoundPath from '@/utils/getSoundPath';

/**
 * Hook for playing notification sounds with configurable options
 */
const useNotificationSound = () => {
  /**
   * Play a notification sound with given options
   */
  const playSound = useCallback((soundName: string, options: NotificationSoundOptions = {}) => {
    try {
      const soundPath = getSoundPath(soundName);
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
      console.error('Failed to play notification sound:', error);
      return null;
    }
  }, []);
  
  return { playSound };
};

export default useNotificationSound;
