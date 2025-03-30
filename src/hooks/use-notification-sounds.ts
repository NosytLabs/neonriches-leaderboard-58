
import useSound from './sounds/use-sound';
import { SoundType } from './sounds/types';
import { useCallback } from 'react';

interface UseNotificationSoundsOptions {
  enabled?: boolean;
  volume?: number;
}

const useNotificationSounds = (options: UseNotificationSoundsOptions = {}) => {
  const { enabled = true, volume = 0.5 } = options;
  
  // Use the base sound hook
  const { play, loading, loaded, error } = useSound({
    enabled,
    volume,
    preload: true
  });
  
  // Wrapper functions for specific notification sounds
  const playSuccess = useCallback((volumeMultiplier = 1) => {
    play('success', volumeMultiplier);
  }, [play]);
  
  const playError = useCallback((volumeMultiplier = 1) => {
    play('error', volumeMultiplier);
  }, [play]);
  
  const playNotification = useCallback((volumeMultiplier = 1) => {
    play('notification', volumeMultiplier);
  }, [play]);
  
  const playClick = useCallback((volumeMultiplier = 1) => {
    play('click', volumeMultiplier);
  }, [play]);
  
  return {
    play,
    playSuccess,
    playError,
    playNotification,
    playClick,
    loading,
    loaded,
    error
  };
};

export default useNotificationSounds;
