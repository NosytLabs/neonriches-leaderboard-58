
import { useEffect, useCallback } from 'react';
import { SoundType } from '@/types/sound';
import useSound from './sounds/use-sound';

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
  const playCoins = useCallback(() => playSound('coinDrop'), [playSound]);
  
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

export default useNotificationSounds;
