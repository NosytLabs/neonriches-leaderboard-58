
import { useCallback } from 'react';
import { useSoundsConfig } from './sounds/use-sounds-config';

interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  loop?: boolean;
  forcePlay?: boolean;
}

export const useSound = () => {
  const { soundConfig } = useSoundsConfig();
  
  const playSound = useCallback((
    soundName: string, 
    options: SoundOptions = {}
  ) => {
    // Check if sound is muted globally
    if (soundConfig?.muted && !options.forcePlay) {
      return;
    }

    try {
      const audio = new Audio(`/sounds/${soundName}.mp3`);
      
      // Apply options
      if (options.volume !== undefined) {
        audio.volume = options.volume;
      }
      
      if (options.playbackRate !== undefined) {
        audio.playbackRate = options.playbackRate;
      }
      
      if (options.loop) {
        audio.loop = true;
      }
      
      audio.play().catch(error => {
        console.error(`Error playing sound "${soundName}":`, error);
      });
      
      return audio;
    } catch (error) {
      console.error(`Failed to load sound "${soundName}":`, error);
      return null;
    }
  }, [soundConfig?.muted]);

  const stopSound = useCallback((audio: HTMLAudioElement | null) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, []);

  return {
    playSound,
    stopSound
  };
};

export default useSound;
