
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { SoundConfig, SoundHook, SoundOptions, SoundType } from '../sound-types';
import useLocalStorage from '@/hooks/useLocalStorage';

// Define the sound context
export const SoundContext = createContext<SoundHook | null>(null);

// Default sound configuration
const DEFAULT_SOUND_CONFIG: SoundConfig = {
  enabled: true,
  volume: 0.5,
  muted: false
};

// Map of sound files
const SOUND_FILES: Record<string, string> = {
  click: '/sounds/click.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  achievement: '/sounds/achievement.mp3',
  purchase: '/sounds/purchase.mp3',
  coin: '/sounds/coin.mp3',
  level_up: '/sounds/level_up.mp3',
  boost: '/sounds/boost.mp3',
  royal: '/sounds/royal.mp3',
  coinDrop: '/sounds/coin_drop.mp3'
};

// Active sound elements
const activeSounds: Record<string, HTMLAudioElement> = {};

interface SoundProviderProps {
  children: React.ReactNode;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [config, setConfig] = useLocalStorage<SoundConfig>('sound-config', DEFAULT_SOUND_CONFIG);
  
  const playSound = useCallback(
    (sound: SoundType, options?: SoundOptions) => {
      if (!config.enabled || config.muted) return;
      
      try {
        // Get sound file path
        const soundPath = SOUND_FILES[sound] || sound;
        if (!soundPath) return;
        
        // Create or reuse audio element
        let audio = activeSounds[sound];
        if (!audio) {
          audio = new Audio(soundPath);
          activeSounds[sound] = audio;
        }
        
        // Apply options
        audio.volume = (options?.volume !== undefined ? options.volume : config.volume);
        audio.loop = options?.loop || false;
        
        // Handle onEnd callback
        if (options?.onEnd) {
          audio.onended = options.onEnd;
        }
        
        // Play sound
        audio.currentTime = 0;
        audio.play().catch(err => {
          console.error(`Error playing sound ${sound}:`, err);
        });
      } catch (err) {
        console.error(`Error with sound ${sound}:`, err);
      }
    },
    [config.enabled, config.muted, config.volume]
  );
  
  const stopSound = useCallback((sound?: SoundType) => {
    if (sound) {
      // Stop specific sound
      const audio = activeSounds[sound];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    } else {
      // Stop all sounds
      Object.values(activeSounds).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  }, []);
  
  const pauseSound = useCallback((sound: SoundType) => {
    const audio = activeSounds[sound];
    if (audio) {
      audio.pause();
    }
  }, []);
  
  const resumeSound = useCallback((sound: SoundType) => {
    const audio = activeSounds[sound];
    if (audio && config.enabled && !config.muted) {
      audio.play().catch(err => {
        console.error(`Error resuming sound ${sound}:`, err);
      });
    }
  }, [config.enabled, config.muted]);
  
  const toggleMute = useCallback(() => {
    setConfig({
      ...config,
      muted: !config.muted
    });
    
    // Pause all playing sounds if muting
    if (!config.muted) {
      Object.values(activeSounds).forEach(audio => {
        audio.pause();
      });
    }
  }, [config, setConfig]);
  
  const setVolume = useCallback(
    (volume: number) => {
      // Ensure volume is between 0 and 1
      const normalizedVolume = Math.max(0, Math.min(1, volume));
      
      setConfig({
        ...config,
        volume: normalizedVolume
      });
      
      // Update volume for all active sounds
      Object.values(activeSounds).forEach(audio => {
        audio.volume = normalizedVolume;
      });
    },
    [config, setConfig]
  );
  
  const getVolume = useCallback(() => config.volume, [config.volume]);
  
  const toggleEnabled = useCallback(() => {
    const newEnabled = !config.enabled;
    
    setConfig({
      ...config,
      enabled: newEnabled
    });
    
    // Stop all sounds if disabling
    if (!newEnabled) {
      Object.values(activeSounds).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  }, [config, setConfig]);
  
  // Clean up audio elements when component unmounts
  useEffect(() => {
    return () => {
      Object.values(activeSounds).forEach(audio => {
        audio.pause();
        audio.onended = null;
      });
    };
  }, []);
  
  const soundContextValue: SoundHook = {
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    toggleMute,
    isMuted: config.muted,
    setVolume,
    getVolume,
    isEnabled: config.enabled,
    toggleEnabled
  };
  
  return (
    <SoundContext.Provider value={soundContextValue}>
      {children}
    </SoundContext.Provider>
  );
};

export default SoundProvider;
