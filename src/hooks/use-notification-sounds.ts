
import { useCallback } from 'react';
import useSound from '@/hooks/sounds/use-sound';
import { SoundType, NotificationSoundOptions } from '@/types/sound-types';

/**
 * A hook for playing notification sounds with default settings
 */
export const useNotificationSounds = () => {
  // Set up sounds with different volumes
  const { play: playNotification } = useSound('notification');
  const { play: playSuccess } = useSound('success');
  const { play: playError } = useSound('error');
  const { play: playCoins } = useSound('coins');
  const { play: playTrumpets } = useSound('trumpets');
  const { play: playRoyalSound } = useSound('royal');
  const { play: playAchievement } = useSound('achievement');

  // Generic function to play any sound
  const playSound = useCallback((sound: SoundType, options?: NotificationSoundOptions) => {
    let volumeSettings = {};
    
    if (options && typeof options.volume === 'number') {
      volumeSettings = { volume: options.volume };
    }
    
    // Handle string arguments (backward compatibility)
    if (typeof options === 'string') {
      switch (sound) {
        case 'notification':
          playNotification({ volume: 0.3 });
          break;
        case 'success':
          playSuccess({ volume: 0.4 });
          break;
        case 'error':
          playError({ volume: 0.3 });
          break;
        case 'coins':
          playCoins({ volume: 0.5 });
          break;
        case 'trumpets':
          playTrumpets({ volume: 0.4 });
          break;
        case 'royal':
          playRoyalSound({ volume: 0.4 });
          break;
        case 'achievement':
          playAchievement({ volume: 0.6 });
          break;
        default:
          // Use a default sound if the specific one isn't handled
          playNotification({ volume: 0.3 });
      }
      return;
    }
    
    // Normal flow with options
    switch (sound) {
      case 'notification':
        playNotification(volumeSettings);
        break;
      case 'success':
        playSuccess(volumeSettings);
        break;
      case 'error':
        playError(volumeSettings);
        break;
      case 'coins':
        playCoins(volumeSettings);
        break;
      case 'trumpets':
        playTrumpets(volumeSettings);
        break;
      case 'royal':
        playRoyalSound(volumeSettings);
        break;
      case 'achievement':
        playAchievement(volumeSettings);
        break;
      case 'shame':
      case 'click':
      case 'button':
      case 'hover':
      case 'coins_drop':
      case 'purchase':
      case 'rankUp':
      default:
        // For other sounds, just use notification as fallback
        playNotification(volumeSettings);
    }
  }, [playNotification, playSuccess, playError, playCoins, playTrumpets, playRoyalSound, playAchievement]);

  return { playSound };
};

export default useNotificationSounds;
