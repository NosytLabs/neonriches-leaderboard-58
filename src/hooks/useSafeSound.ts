
import { useSound } from './sounds/use-sound';
import { SoundType, SoundOptions } from '@/types/sound-types';

/**
 * A wrapper around useSound that ensures the sound hook
 * is used safely, even if the sound context is not available
 */
export const useSafeSound = () => {
  const sound = useSound();

  const playSafeSound = (type: SoundType, options?: SoundOptions) => {
    if (sound && typeof sound.playSound === 'function') {
      sound.playSound(type, options);
    }
  };

  const toggleMuteSafe = () => {
    if (sound && typeof sound.toggleMuted === 'function') {
      return sound.toggleMuted();
    }
    return false;
  };

  return {
    playSound: playSafeSound,
    toggleMuted: toggleMuteSafe,
    isMuted: sound?.isMuted || false,
    volume: sound?.currentVolume || 0.5,
    setVolume: sound?.setVolume || (() => {}),
    isEnabled: sound?.isEnabled || false,
    soundConfig: sound?.soundConfig || { enabled: false, volume: 0.5, muted: false }
  };
};

export default useSafeSound;
