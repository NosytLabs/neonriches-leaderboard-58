
import { useCallback } from 'react';

interface UseNotificationSoundsReturn {
  playSound: (sound: string, volume?: number) => void;
}

export const useNotificationSounds = (): UseNotificationSoundsReturn => {
  const playSound = useCallback((sound: string, volume: number = 0.5) => {
    console.log(`Playing sound: ${sound} at volume ${volume}`);
    
    // In a real implementation, this would play actual sounds
    // through the browser's Audio API
  }, []);

  return {
    playSound
  };
};

export default useNotificationSounds;
