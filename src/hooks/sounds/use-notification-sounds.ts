
import { useSound } from './use-sound';
import { SoundOptions, SoundType } from '@/types/sound-types';

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

  // Add missing methods that components are trying to use
  const playSound = (type: SoundType, options?: SoundOptions) => {
    return playSound(type, options);
  };

  const playClick = () => {
    playSound('click', { volume: 0.4 });
  };

  return { 
    playNotificationSound,
    playSound,
    playClick
  };
};

export default useNotificationSounds;
