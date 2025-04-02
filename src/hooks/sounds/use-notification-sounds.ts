
import { useCallback } from 'react';
import { useSound } from './use-sound';
import { SoundType, SoundOptions, UseNotificationSoundsReturn } from '@/types/sound-types';

/**
 * Custom hook for notification sounds
 * @returns Methods to play notification sounds
 */
export const useNotificationSounds = (): UseNotificationSoundsReturn => {
  const sound = useSound();

  const playNotificationSound = useCallback((type: string = 'notification', options?: SoundOptions) => {
    const soundType = mapNotificationTypeToSound(type);
    sound.playSound(soundType, options);
  }, [sound]);

  // Maps notification types to sound types
  const mapNotificationTypeToSound = (type: string): SoundType => {
    switch (type) {
      case 'success':
        return 'success';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'achievement':
        return 'achievement';
      case 'purchase':
        return 'purchase';
      case 'message':
        return 'message';
      case 'royal':
        return 'royal';
      default:
        return 'notification';
    }
  };

  return {
    playSound: sound.playSound,
    playNotificationSound,
    playSoundForNotification: (type: string) => {
      playNotificationSound(type);
    },
    playNewNotificationSound: () => {
      sound.playSound('notification');
    },
    mute: sound.mute,
    unmute: sound.unmute,
    isMuted: sound.isMuted,
    toggleMuted: sound.toggleMuted,
    setVolume: sound.setVolume,
    currentVolume: sound.currentVolume
  };
};

export default useNotificationSounds;
