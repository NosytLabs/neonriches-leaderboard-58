
import { useNotificationSounds } from './sounds/use-notification-sounds';
import { SoundType } from '@/types/sound-types';

// Simple wrapper for backward compatibility
const useNotificationSound = () => {
  const { playSound } = useNotificationSounds();
  
  return { playSound };
};

export default useNotificationSound;
