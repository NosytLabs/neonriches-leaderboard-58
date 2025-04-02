
import { useSound } from './use-sound';
import { SoundOptions, SoundType } from '@/types/sound-types';

export const useNotificationSounds = () => {
  const sound = useSound();

  const playNotificationSound = (type: string = 'notification', options?: SoundOptions) => {
    const soundOptions: SoundOptions = {
      volume: 0.5,
      ...options
    };

    // Convert string type to SoundType and play appropriate sound
    switch (type) {
      case 'achievement':
        sound.playSound('achievement' as SoundType, soundOptions);
        break;
      case 'message':
        sound.playSound('notification' as SoundType, soundOptions);
        break;
      case 'alert':
        sound.playSound('notification' as SoundType, soundOptions);
        break;
      case 'success':
        sound.playSound('success' as SoundType, soundOptions);
        break;
      case 'error':
        sound.playSound('error' as SoundType, soundOptions);
        break;
      case 'reward':
        sound.playSound('notification' as SoundType, soundOptions); // Fallback to notification for now
        break;
      default:
        sound.playSound('notification' as SoundType, soundOptions);
        break;
    }
  };

  // Fixed direct call to sound.playSound
  const playSound = (type: SoundType, options?: SoundOptions) => {
    sound.playSound(type, options);
  };

  const playClick = () => {
    sound.playSound('click', { volume: 0.4 });
  };

  return { 
    playNotificationSound,
    playSound,
    playClick
  };
};

export default useNotificationSounds;
