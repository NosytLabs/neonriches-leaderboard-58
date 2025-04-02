
import { useSound } from './sounds/use-sound';
import { SoundType, SoundOptions } from '@/types/sound-types';

export const useNotificationSounds = () => {
  const { playSound } = useSound();

  const playNotificationSound = (type: string = 'notification', options?: SoundOptions) => {
    const soundOptions: SoundOptions = {
      volume: 0.5,
      ...options
    };

    // Map common notification types to valid sound types
    const soundTypeMap: Record<string, SoundType> = {
      notification: 'notification',
      achievement: 'achievement',
      message: 'message',
      alert: 'alert',
      success: 'success',
      error: 'error',
      reward: 'reward',
      chime: 'chime',
      badge: 'badge',
      toggle: 'toggle',
      upgrade: 'upgrade',
      down: 'down',
      up: 'up',
      withdraw: 'withdraw'
    };

    // Use the mapped sound type or fallback to notification
    const soundType = soundTypeMap[type] || 'notification';

    playSound(soundType, soundOptions);
  };

  return { playNotificationSound };
};

export default useNotificationSounds;
