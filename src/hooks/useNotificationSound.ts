
import { useEffect, useRef, useCallback } from 'react';
import { NotificationSoundOptions } from '@/types/mockery';

interface UseNotificationSoundResult {
  playSound: (sound: string, options?: NotificationSoundOptions) => void;
  stopSound: () => void;
}

export const useNotificationSound = (): UseNotificationSoundResult => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  const playSound = useCallback((sound: string, options?: NotificationSoundOptions) => {
    // First stop any current sound
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    
    try {
      // Create a new audio element
      const audio = new Audio(sound);
      audioRef.current = audio;
      
      // Set volume if provided
      if (options?.volume !== undefined) {
        audio.volume = Math.min(Math.max(options.volume, 0), 1); // Clamp between 0 and 1
      }
      
      // Set loop if provided
      if (options?.loop !== undefined) {
        audio.loop = options.loop;
      }
      
      // Handle delay if provided
      if (options?.delay && options.delay > 0) {
        setTimeout(() => {
          audio.play().catch(err => console.error('Error playing notification sound:', err));
        }, options.delay);
      } else {
        audio.play().catch(err => console.error('Error playing notification sound:', err));
      }
    } catch (error) {
      console.error('Error setting up notification sound:', error);
    }
  }, []);
  
  const stopSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  }, []);
  
  return { playSound, stopSound };
};

export default useNotificationSound;
