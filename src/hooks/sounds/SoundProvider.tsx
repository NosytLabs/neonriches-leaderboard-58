
import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode } from 'react';
import { Howl } from 'howler';
import { SoundType, SoundOptions, SoundHook, SoundConfig } from '../sound-types';

// Default sound configuration
const DEFAULT_SOUND_CONFIG: SoundConfig = {
  enabled: true,
  volume: 0.5,
  muted: false
};

// Create context
interface SoundContextType {
  soundConfig: SoundConfig;
  setSoundConfig: React.Dispatch<React.SetStateAction<SoundConfig>>;
  playSound: (sound: SoundType, options?: SoundOptions) => void;
  stopSound: (fade?: boolean) => void;
  pauseSound: () => void;
  resumeSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

// Provider Component
export const SoundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(DEFAULT_SOUND_CONFIG);
  const [activeSound, setActiveSound] = useState<Howl | null>(null);

  // Load sound config from localStorage on mount
  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem('soundConfig');
      if (savedConfig) {
        const parsedConfig = JSON.parse(savedConfig);
        setSoundConfig(prevConfig => ({
          ...prevConfig,
          ...parsedConfig
        }));
      }
    } catch (error) {
      console.error('Error loading sound configuration:', error);
    }
  }, []);

  // Save sound config to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('soundConfig', JSON.stringify(soundConfig));
    } catch (error) {
      console.error('Error saving sound configuration:', error);
    }
  }, [soundConfig]);

  // Play a sound
  const playSound = useCallback((sound: SoundType, options?: SoundOptions) => {
    if (!soundConfig.enabled || soundConfig.muted) return;

    // Stop the currently playing sound
    if (activeSound) {
      activeSound.stop();
    }

    // In a real implementation, this would use howler.js to play sounds
    console.log(`Playing sound: ${sound}`, options);

    // Handle onEnd callback if provided
    if (options?.onEnd) {
      setTimeout(options.onEnd, 1000); // Simulate sound duration
    }
  }, [soundConfig.enabled, soundConfig.muted, activeSound]);

  // Stop the current sound
  const stopSound = useCallback((fade?: boolean) => {
    if (activeSound) {
      if (fade) {
        // Implement fade out logic here
        activeSound.fade(soundConfig.volume, 0, 1000);
        setTimeout(() => {
          activeSound.stop();
        }, 1000);
      } else {
        activeSound.stop();
      }
      setActiveSound(null);
    }
  }, [activeSound, soundConfig.volume]);

  // Pause the current sound
  const pauseSound = useCallback(() => {
    if (activeSound) {
      activeSound.pause();
    }
  }, [activeSound]);

  // Resume the current sound
  const resumeSound = useCallback(() => {
    if (activeSound) {
      activeSound.play();
    }
  }, [activeSound]);

  return (
    <SoundContext.Provider
      value={{
        soundConfig,
        setSoundConfig,
        playSound,
        stopSound,
        pauseSound,
        resumeSound,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

// Hook to use the sound context
export const useSoundContext = (): SoundContextType => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  return context;
};

// Convenience hook that provides a simpler interface
export const useSoundSystem = (): SoundHook => {
  const { soundConfig, setSoundConfig, playSound, stopSound, pauseSound, resumeSound } = useSoundContext();

  const toggleMute = useCallback((): boolean => {
    setSoundConfig(prev => {
      const newConfig = { ...prev, muted: !prev.muted };
      return newConfig;
    });
    return !soundConfig.muted;
  }, [soundConfig.muted, setSoundConfig]);

  const setVolume = useCallback((volume: number) => {
    setSoundConfig(prev => {
      const newConfig = { ...prev, volume: Math.max(0, Math.min(1, volume)) };
      return newConfig;
    });
  }, [setSoundConfig]);

  const getVolume = useCallback(() => {
    return soundConfig.volume;
  }, [soundConfig.volume]);

  const toggleEnabled = useCallback(() => {
    setSoundConfig(prev => {
      const newConfig = { ...prev, enabled: !prev.enabled };
      return newConfig;
    });
  }, [setSoundConfig]);

  return {
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    toggleMute,
    isMuted: soundConfig.muted,
    setVolume,
    getVolume,
    isEnabled: soundConfig.enabled,
    toggleEnabled,
    // Compatibility properties
    toggleMuted: toggleMute,
    soundConfig,
    mute: () => setSoundConfig(prev => ({ ...prev, muted: true })),
    unmute: () => setSoundConfig(prev => ({ ...prev, muted: false })),
    currentVolume: soundConfig.volume
  };
};
