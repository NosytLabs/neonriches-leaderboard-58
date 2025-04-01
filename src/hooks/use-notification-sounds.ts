
import { useSound } from './use-sound';
import { SoundOptions } from '@/types/user-types';

export const useNotificationSounds = () => {
  const { playSound } = useSound();

  const playNotificationSound = (type: string = 'notification', options?: SoundOptions) => {
    const soundOptions: SoundOptions = {
      volume: 0.5,
      ...options
    };

    switch (type) {
      case 'achievement':
        playSound('achievement', soundOptions);
        break;
      case 'message':
        playSound('message', soundOptions);
        break;
      case 'alert':
        playSound('notification', soundOptions);
        break;
      case 'success':
        playSound('success', soundOptions);
        break;
      case 'error':
        playSound('error', soundOptions);
        break;
      case 'reward':
        playSound('reward', soundOptions);
        break;
      default:
        playSound('notification', soundOptions);
        break;
    }
  };

  return { playNotificationSound };
};

export default useNotificationSounds;
