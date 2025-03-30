
import { useCallback } from 'react';
import { useSound } from '@/hooks/sounds/use-sound';
import { SoundType } from '@/types/sound-types';

interface UseNotificationSoundsOptions {
  enabled?: boolean;
  volume?: number;
}

const useNotificationSounds = (options: UseNotificationSoundsOptions = {}) => {
  const { enabled = true, volume = 0.5 } = options;
  const { play } = useSound();
  
  // Play a notification sound
  const playSound = useCallback((type: SoundType) => {
    if (!enabled) return;
    
    play(type);
  }, [enabled, play]);
  
  // Helper methods for specific sounds
  const playNotification = useCallback(() => playSound('notification'), [playSound]);
  const playSuccess = useCallback(() => playSound('success'), [playSound]);
  const playError = useCallback(() => playSound('error'), [playSound]);
  const playPurchase = useCallback(() => playSound('purchase'), [playSound]);
  const playRankUp = useCallback(() => playSound('rankUp'), [playSound]);
  const playAchievement = useCallback(() => playSound('achievement'), [playSound]);
  const playCoins = useCallback(() => playSound('coins'), [playSound]);
  
  return {
    playSound,
    playNotification,
    playSuccess,
    playError,
    playPurchase,
    playRankUp,
    playAchievement,
    playCoins
  };
};

export { useNotificationSounds };
export default useNotificationSounds;
