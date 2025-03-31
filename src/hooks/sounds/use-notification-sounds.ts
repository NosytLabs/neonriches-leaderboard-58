
import { useCallback } from 'react';
import { useSound } from '@/hooks/use-sound';
import { SoundType, AudioOptions } from '@/types/sound-types';

/**
 * Hook for playing notification sounds
 */
export function useNotificationSounds() {
  const sound = useSound();
  
  const playSound = useCallback((soundType: SoundType, options?: AudioOptions) => {
    sound.playSound(soundType, options);
  }, [sound]);
  
  return { 
    playSound,
    playNotification: () => sound.playSound('notification'),
    playSuccess: () => sound.playSound('success'),
    playError: () => sound.playSound('error'),
    playAchievement: () => sound.playSound('achievement')
  };
}

export type UseNotificationSoundsReturn = ReturnType<typeof useNotificationSounds>;

export default useNotificationSounds;
