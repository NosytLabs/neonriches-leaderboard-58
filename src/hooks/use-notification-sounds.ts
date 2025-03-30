
import { useCallback } from 'react';
import useSound from '@/hooks/sounds/use-sound';
import { SoundType } from '@/types/sound-types';

const useNotificationSounds = () => {
  const { play, stop } = useSound();

  const playSound = useCallback((sound: SoundType, volume?: number) => {
    if (volume !== undefined) {
      play(sound);
    } else {
      play(sound);
    }
  }, [play]);

  return {
    playSound,
    stopSound: stop
  };
};

export default useNotificationSounds;
