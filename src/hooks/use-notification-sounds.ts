
import { useCallback } from 'react';
import { SoundType, NotificationSoundOptions } from '@/types/sound-types';
import getSoundPath from '@/utils/getSoundPath';

/**
 * Hook for playing notification sounds
 */
const useNotificationSounds = () => {
  /**
   * Play a notification sound
   */
  const playSound = useCallback((soundType: SoundType | string, options: NotificationSoundOptions = {}) => {
    try {
      const soundPath = getSoundPath(soundType as SoundType);
      if (!soundPath) return null;
      
      const audio = new Audio(soundPath);
      
      if (options.volume !== undefined) {
        audio.volume = Math.min(Math.max(options.volume, 0), 1);
      } else {
        audio.volume = 0.5; // Default volume
      }
      
      if (options.loop !== undefined) {
        audio.loop = options.loop;
      }
      
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

export default useNotificationSounds;
