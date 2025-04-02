
import { useCallback } from 'react';
import { useSound } from './useSound';
import { UseNotificationSoundsReturn, SoundType } from '@/types/sound-types';

/**
 * A hook for playing notification sounds
 */
export const useNotificationSounds = (): UseNotificationSoundsReturn => {
  const sound = useSound();

  /**
   * Play a sound based on the notification type
   */
  const playSoundForNotification = useCallback((type: string) => {
    switch (type) {
      case 'achievement':
        sound.playSound('achievement');
        break;
      case 'rank':
        sound.playSound('rank_up');
        break;
      case 'spending':
        sound.playSound('purchase');
        break;
      case 'team':
        sound.playSound('team');
        break;
      case 'mockery':
        sound.playSound('mockery');
        break;
      case 'level':
        sound.playSound('level_up');
        break;
      case 'message':
        sound.playSound('message');
        break;
      default:
        sound.playSound('notification');
    }
  }, [sound]);

  /**
   * Play the new notification sound
   */
  const playNewNotificationSound = useCallback(() => {
    sound.playSound('notification');
  }, [sound]);

  // Return a complete UseNotificationSoundsReturn object
  return {
    playSoundForNotification,
    playNewNotificationSound,
    playSound: sound.playSound,
    playNotificationSound: (type?: string, options?: any) => {
      if (type) {
        playSoundForNotification(type);
      } else {
        playNewNotificationSound();
      }
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
