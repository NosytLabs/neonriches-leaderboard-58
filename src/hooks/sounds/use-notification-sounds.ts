
import { useCallback } from 'react';
import { useSound } from '@/hooks/sounds/use-sound';
import { SoundOptions } from '@/types/sound-types';

/**
 * Hook that provides specialized sound functions for notifications and UI interactions
 */
export const useNotificationSounds = () => {
  const sound = useSound();
  const { isSoundEnabled } = sound;

  const playNotification = useCallback((options?: SoundOptions) => {
    sound.playSound('notification', options);
  }, [sound]);

  const playSuccess = useCallback((options?: SoundOptions) => {
    sound.playSound('success', options);
  }, [sound]);

  const playError = useCallback((options?: SoundOptions) => {
    sound.playSound('error', options);
  }, [sound]);

  const playClick = useCallback((options?: SoundOptions) => {
    sound.playSound('click', options);
  }, [sound]);

  const playAchievement = useCallback((options?: SoundOptions) => {
    sound.playSound('achievement', options);
  }, [sound]);

  const playPurchase = useCallback((options?: SoundOptions) => {
    sound.playSound('purchase', options);
  }, [sound]);

  const playMockery = useCallback((options?: SoundOptions) => {
    sound.playSound('mockery', options);
  }, [sound]);

  const playMessage = useCallback((options?: SoundOptions) => {
    sound.playSound('message', options);
  }, [sound]);

  // This is a proxy to the original playSound for backward compatibility
  const playSound = useCallback((type: string, options?: SoundOptions) => {
    sound.playSound(type as any, options);
  }, [sound]);

  return {
    playNotification,
    playSuccess,
    playError,
    playClick,
    playAchievement,
    playPurchase,
    playMockery,
    playMessage,
    playSound,
    isSoundEnabled
  };
};

export default useNotificationSounds;
