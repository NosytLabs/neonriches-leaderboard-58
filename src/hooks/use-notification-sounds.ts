
import { useCallback } from 'react';
import { useSound } from './sounds/use-sound';
import { SoundType } from '@/types/sound-types';

interface UseNotificationSoundsReturn {
  playSound: (type: SoundType) => void;
  playNotification: () => void;
  playSuccess: () => void;
  playError: () => void;
  playAlert: () => void;
  playAchievement: () => void;
  playPurchase: () => void;
}

const useNotificationSounds = (): UseNotificationSoundsReturn => {
  const { play } = useSound();
  
  // Sound map for notification types
  const soundMap: Record<string, SoundType> = {
    notification: 'notification',
    success: 'success',
    error: 'error',
    alert: 'warning',
    achievement: 'achievement',
    purchase: 'purchase',
    message: 'notification',
    rank: 'rankUp',
    deposit: 'coinDrop',
    click: 'click',
    hover: 'hover',
    info: 'info',
    coins: 'coinDrop'
  };
  
  // Play a sound by type
  const playSound = useCallback((type: SoundType) => {
    play(type);
  }, [play]);
  
  // Convenience methods for common sounds
  const playNotification = useCallback(() => play('notification'), [play]);
  const playSuccess = useCallback(() => play('success'), [play]);
  const playError = useCallback(() => play('error'), [play]);
  const playAlert = useCallback(() => play('warning'), [play]);
  const playAchievement = useCallback(() => play('achievement'), [play]);
  const playPurchase = useCallback(() => play('purchase'), [play]);
  
  return {
    playSound,
    playNotification,
    playSuccess,
    playError,
    playAlert,
    playAchievement,
    playPurchase,
  };
};

export default useNotificationSounds;
