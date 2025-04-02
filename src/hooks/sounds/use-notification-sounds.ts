
import { useSound } from './use-sound';
import { SoundOptions } from '@/types/sound-types';

// Define a local SoundType to avoid import conflicts
type HookSoundType = 
  | 'click'
  | 'success'
  | 'error'
  | 'notification'
  | 'achievement'
  | 'message'
  | 'reward'
  | 'chime'
  | 'levelUp'
  | 'fanfare'
  | 'rank_up';

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
        sound.playSound('achievement' as HookSoundType, soundOptions);
        break;
      case 'message':
        sound.playSound('notification' as HookSoundType, soundOptions);
        break;
      case 'alert':
        sound.playSound('notification' as HookSoundType, soundOptions);
        break;
      case 'success':
        sound.playSound('success' as HookSoundType, soundOptions);
        break;
      case 'error':
        sound.playSound('error' as HookSoundType, soundOptions);
        break;
      case 'reward':
        sound.playSound('notification' as HookSoundType, soundOptions);
        break;
      default:
        sound.playSound('notification' as HookSoundType, soundOptions);
        break;
    }
  };

  // Fixed direct call to sound.playSound
  const playSound = (type: HookSoundType, options?: SoundOptions) => {
    sound.playSound(type, options);
  };

  const playClick = () => {
    sound.playSound('click' as HookSoundType, { volume: 0.4 });
  };

  return { 
    playNotificationSound,
    playSound,
    playClick
  };
};

export default useNotificationSounds;
