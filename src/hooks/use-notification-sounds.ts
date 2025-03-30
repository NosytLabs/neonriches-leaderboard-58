
import { useSound } from '@/hooks/sounds/use-sound';
import { SoundType } from '@/types/sound-types';

const useNotificationSounds = () => {
  const { play } = useSound();

  const playSound = (soundType: SoundType, volume = 0.5) => {
    play(soundType, volume);
  };

  return {
    playSound
  };
};

export default useNotificationSounds;
