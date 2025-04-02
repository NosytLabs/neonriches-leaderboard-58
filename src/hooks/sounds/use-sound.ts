
import { useCallback } from 'react';

interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
}

interface UseSoundReturn {
  play: (options?: SoundOptions) => void;
  stop: () => void;
  pause: () => void;
  isPlaying: boolean;
  duration: number;
}

/**
 * Hook for playing sounds
 * @param url URL of the sound file to play
 * @param options Sound playback options
 */
export const useSound = (
  url: string,
  options: SoundOptions = {}
): UseSoundReturn => {
  // Mock implementation
  const play = useCallback((options?: SoundOptions) => {
    console.log(`Playing sound: ${url}`, options);
    // In a real implementation, we would play the sound here
  }, [url]);
  
  const stop = useCallback(() => {
    console.log(`Stopping sound: ${url}`);
    // In a real implementation, we would stop the sound here
  }, [url]);
  
  const pause = useCallback(() => {
    console.log(`Pausing sound: ${url}`);
    // In a real implementation, we would pause the sound here
  }, [url]);
  
  return {
    play,
    stop,
    pause,
    isPlaying: false,
    duration: 0
  };
};
