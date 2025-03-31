
import { useState, useCallback, useEffect } from 'react';
import { SoundType } from '@/types/sound-types';
import useAudioLoader from './sounds/use-audio-loader';

export interface UseSoundsReturn {
  playSound: (sound: SoundType, options?: { volume?: number; interrupt?: boolean }) => void;
  stopSound: (sound: SoundType) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  soundVolume: number;
  setSoundVolume: (volume: number) => void;
}

/**
 * Custom hook for playing sound effects
 */
export function useSounds(): UseSoundsReturn {
  const { 
    audio, 
    isEnabled, 
    setEnabled, 
    volume, 
    setVolume, 
    isLoaded 
  } = useAudioLoader();
  
  const [playingAudio, setPlayingAudio] = useState<Record<string, HTMLAudioElement>>({});

  // Cleanup function for when component unmounts
  useEffect(() => {
    return () => {
      Object.values(playingAudio).forEach(audio => {
        try {
          audio.pause();
        } catch (e) {
          // Ignore errors when cleaning up
        }
      });
    };
  }, [playingAudio]);

  // Play a sound with options
  const playSound = useCallback((
    sound: SoundType, 
    options?: { volume?: number; interrupt?: boolean }
  ) => {
    if (!isEnabled || !isLoaded || !audio[sound]) return;

    try {
      // Stop the sound if it's already playing and interrupt is true
      if (playingAudio[sound] && options?.interrupt) {
        playingAudio[sound].pause();
        playingAudio[sound].currentTime = 0;
      }

      // Create a new audio element to allow overlapping sounds
      const soundElement = audio[sound].cloneNode() as HTMLAudioElement;
      
      // Set volume if provided, otherwise use default
      if (options?.volume !== undefined) {
        soundElement.volume = options.volume;
      }

      // Play the sound
      soundElement.play().catch(error => {
        console.error(`Error playing sound ${sound}:`, error);
      });

      // Add sound to playing audio
      setPlayingAudio(prev => ({
        ...prev,
        [sound]: soundElement
      }));

      // Remove from playing audio when finished
      soundElement.onended = () => {
        setPlayingAudio(prev => {
          const updated = { ...prev };
          delete updated[sound];
          return updated;
        });
      };
    } catch (error) {
      console.error(`Error in playSound for ${sound}:`, error);
    }
  }, [isEnabled, isLoaded, audio, playingAudio]);

  // Stop a specific sound
  const stopSound = useCallback((sound: SoundType) => {
    if (playingAudio[sound]) {
      playingAudio[sound].pause();
      playingAudio[sound].currentTime = 0;
      
      setPlayingAudio(prev => {
        const updated = { ...prev };
        delete updated[sound];
        return updated;
      });
    }
  }, [playingAudio]);

  return {
    playSound,
    stopSound,
    soundEnabled: isEnabled,
    setSoundEnabled: setEnabled,
    soundVolume: volume,
    setSoundVolume: setVolume
  };
}

export default useSounds;
