
import { useCallback } from 'react';
import { useSound } from './use-sound';
import { SoundOptions } from '@/types/sound-types';

/**
 * Hook for playing notification sounds in the application
 */
const useNotificationSounds = () => {
  const sound = useSound();

  // Play notification sound
  const playNotification = useCallback((options?: SoundOptions) => {
    sound.playSound('notification', options);
  }, [sound]);

  // Play success sound
  const playSuccess = useCallback((options?: SoundOptions) => {
    sound.playSound('success', options);
  }, [sound]);

  // Play error sound
  const playError = useCallback((options?: SoundOptions) => {
    sound.playSound('error', options);
  }, [sound]);

  // Play achievement sound
  const playAchievement = useCallback((options?: SoundOptions) => {
    sound.playSound('achievement', options);
  }, [sound]);

  // Play mockery sound
  const playMockery = useCallback((options?: SoundOptions) => {
    sound.playSound('mockery', options);
  }, [sound]);

  // Play click sound
  const playClick = useCallback((options?: SoundOptions) => {
    sound.playSound('click', options);
  }, [sound]);

  // Play fanfare sound
  const playFanfare = useCallback((options?: SoundOptions) => {
    sound.playSound('fanfare', options);
  }, [sound]);

  // Play level up sound
  const playLevelUp = useCallback((options?: SoundOptions) => {
    sound.playSound('levelUp', options);
  }, [sound]);

  // Play shame sound
  const playShame = useCallback((options?: SoundOptions) => {
    sound.playSound('shame', options);
  }, [sound]);

  // For backward compatibility
  const playSound = useCallback((type: string, options?: SoundOptions) => {
    sound.playSound(type as any, options);
  }, [sound]);

  return {
    playNotification,
    playSuccess,
    playError,
    playAchievement,
    playMockery,
    playClick,
    playFanfare,
    playLevelUp,
    playShame,
    playSound, // Add the direct playSound method for backward compatibility
    // Pass through the sound utility
    toggleSounds: sound.toggleSounds,
    isSoundEnabled: sound.isSoundEnabled
  };
};

export default useNotificationSounds;
