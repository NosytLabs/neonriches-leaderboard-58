
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
  const [volume, setVolume] = useState<number>(0.5);
  
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
  
  const toggleSounds = useCallback(() => {
    setSoundEnabled(prev => !prev);
    
    // If turning off sounds, stop all currently playing sounds
    if (isSoundEnabled) {
      stopSound();
    }
  }, [isSoundEnabled, stopSound]);
  
  // For backward compatibility
  const play = useCallback((type: SoundType, options?: SoundOptions) => {
    playSound(type, options);
  }, [playSound]);
  
  const value = {
    playSound,
    stopSound,
    toggleSounds,
    isSoundEnabled,
    setVolume,
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
