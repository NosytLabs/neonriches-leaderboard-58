
import React, { useState, useCallback, useContext, createContext } from 'react';
import { SoundType, SoundOptions, UseSoundHook } from '@/types/sound-types';

interface SoundProviderProps {
  children: React.ReactNode;
}

const SoundContext = createContext<UseSoundHook>({
  playSound: () => {},
  stopSound: () => {},
  toggleSounds: () => {},
  isSoundEnabled: true,
  setVolume: () => {},
});

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [isSoundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [volume, setVolumeState] = useState<number>(0.5);
  
  // Map to store currently playing sounds
  const audioMap = React.useRef<Map<SoundType, HTMLAudioElement>>(new Map());
  
  const playSound = useCallback((type: SoundType, options?: SoundOptions) => {
    if (!isSoundEnabled) return;

    try {
      // Stop any existing sound of this type
      if (audioMap.current.has(type)) {
        const existingAudio = audioMap.current.get(type);
        if (existingAudio) {
          existingAudio.pause();
          existingAudio.currentTime = 0;
        }
      }
      
      // Create a new audio element
      const audio = new Audio(`/sounds/${type}.mp3`);
      audio.volume = options?.volume !== undefined ? options.volume : volume;
      
      if (options?.loop) {
        audio.loop = true;
      }
      
      if (options?.playbackRate) {
        audio.playbackRate = options.playbackRate;
      }
      
      if (options?.onEnd) {
        audio.onended = options.onEnd;
      }
      
      // Store reference to this audio element
      audioMap.current.set(type, audio);
      
      // Play the sound
      audio.play().catch(e => {
        console.warn(`Failed to play sound: ${type}`, e);
      });
    } catch (error) {
      console.warn(`Error playing sound: ${type}`, error);
    }
  }, [isSoundEnabled, volume]);
  
  const stopSound = useCallback((type?: SoundType) => {
    if (type) {
      // Stop specific sound
      const audio = audioMap.current.get(type);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audioMap.current.delete(type);
      }
    } else {
      // Stop all sounds
      audioMap.current.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      audioMap.current.clear();
    }
  }, []);
  
  const pauseSound = useCallback((type?: SoundType) => {
    if (type) {
      // Pause specific sound
      const audio = audioMap.current.get(type);
      if (audio) {
        audio.pause();
      }
    } else {
      // Pause all sounds
      audioMap.current.forEach((audio) => {
        audio.pause();
      });
    }
  }, []);
  
  const resumeSound = useCallback((type?: SoundType) => {
    if (!isSoundEnabled) return;

    if (type) {
      // Resume specific sound
      const audio = audioMap.current.get(type);
      if (audio) {
        audio.play().catch(err => {
          console.warn(`Error resuming sound (${type}):`, err);
        });
      }
    } else {
      // Resume all sounds
      audioMap.current.forEach(audio => {
        audio.play().catch(err => {
          console.warn(`Error resuming sound:`, err);
        });
      });
    }
  }, [isSoundEnabled]);
  
  const isPlaying = useCallback((type: SoundType): boolean => {
    const audio = audioMap.current.get(type);
    return !!(audio && !audio.paused);
  }, []);
  
  const toggleSounds = useCallback(() => {
    setSoundEnabled(prev => !prev);
    
    // If turning off sounds, stop all currently playing sounds
    if (isSoundEnabled) {
      stopSound();
    }
  }, [isSoundEnabled, stopSound]);
  
  const setVolume = useCallback((newVolume: number) => {
    setVolumeState(prev => {
      const clampedVolume = Math.min(Math.max(newVolume, 0), 1);
      
      // Update volume for all currently loaded audio instances
      audioMap.current.forEach(audio => {
        audio.volume = clampedVolume;
      });
      
      return clampedVolume;
    });
  }, []);
  
  // For backward compatibility
  const play = useCallback((type: SoundType, options?: SoundOptions) => {
    playSound(type, options);
  }, [playSound]);
  
  const value = {
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    isPlaying,
    toggleSounds,
    isSoundEnabled,
    setVolume,
    currentVolume: volume,
    play,
  };
  
  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = (): UseSoundHook => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};
