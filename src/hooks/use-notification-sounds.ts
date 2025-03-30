
import { useCallback } from 'react';
import { SoundType } from '@/types/sound-types';
import useAudioLoader from '@/hooks/sounds/use-audio-loader';

interface NotificationSoundOptions {
  volume?: number;
}

export default function useNotificationSounds() {
  const { audio, isEnabled, volume } = useAudioLoader();
  
  const playSound = useCallback((sound: SoundType, options?: NotificationSoundOptions) => {
    if (!isEnabled || !audio) return;
    
    try {
      const soundElement = audio[sound];
      if (!soundElement) return;
      
      // Stop the sound if it's already playing
      soundElement.pause();
      soundElement.currentTime = 0;
      
      // Set volume
      soundElement.volume = (options?.volume !== undefined ? options.volume : volume);
      
      // Play the sound
      soundElement.play().catch(err => {
        console.error(`Error playing sound ${sound}:`, err);
      });
    } catch (error) {
      console.error(`Failed to play sound ${sound}:`, error);
    }
  }, [audio, isEnabled, volume]);
  
  return { playSound };
}
