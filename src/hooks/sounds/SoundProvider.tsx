
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SoundHook, SoundType, SoundOptions } from '../sound-types';
import { useLocalStorage } from '../useLocalStorage';

// Create the context
export const SoundContext = createContext<SoundHook | null>(null);

// Sound configuration defaults
const defaultSoundConfig = {
  enabled: true,
  volume: 0.5,
  muted: false
};

interface SoundProviderProps {
  children: ReactNode;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [soundConfig, setSoundConfig] = useLocalStorage('soundConfig', defaultSoundConfig);
  const [soundElements, setSoundElements] = useState<Record<string, HTMLAudioElement>>({});
  const [loadedSounds, setLoadedSounds] = useState<Set<string>>(new Set());

  // Load sound files
  useEffect(() => {
    const sounds: Record<string, string> = {
      click: '/sounds/click.mp3',
      success: '/sounds/success.mp3',
      error: '/sounds/error.mp3',
      notification: '/sounds/notification.mp3',
      achievement: '/sounds/achievement.mp3',
      purchase: '/sounds/purchase.mp3',
      coin: '/sounds/coin.mp3',
      level_up: '/sounds/level_up.mp3',
      boost: '/sounds/boost.mp3',
      royal: '/sounds/royal.mp3'
    };

    // Create audio elements for each sound
    const elements: Record<string, HTMLAudioElement> = {};
    Object.entries(sounds).forEach(([key, src]) => {
      if (!loadedSounds.has(key)) {
        const audio = new Audio(src);
        audio.volume = soundConfig.volume;
        audio.preload = 'auto';
        elements[key] = audio;
        loadedSounds.add(key);
      }
    });

    setSoundElements(prev => ({ ...prev, ...elements }));

    // Cleanup audio elements
    return () => {
      Object.values(elements).forEach(audio => {
        audio.pause();
        audio.src = '';
      });
    };
  }, [loadedSounds]);

  // Play a sound
  const playSound = (sound: SoundType, options?: SoundOptions) => {
    if (!soundConfig.enabled || soundConfig.muted) return;
    
    // Find the audio element
    const audio = soundElements[sound];
    if (!audio) return;
    
    // Configure the audio element
    audio.volume = options?.volume !== undefined ? options.volume : soundConfig.volume;
    audio.loop = options?.loop || false;
    
    // Play the sound
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.warn(`Failed to play sound: ${sound}`, error);
    });
    
    // Set up end callback if provided
    if (options?.onEnd) {
      audio.onended = options.onEnd;
    }
  };

  // Stop a specific sound or all sounds if none specified
  const stopSound = (sound?: SoundType) => {
    if (sound) {
      const audio = soundElements[sound];
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    } else {
      // Stop all sounds
      Object.values(soundElements).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  };

  // Pause a sound
  const pauseSound = (sound: SoundType) => {
    const audio = soundElements[sound];
    if (audio) {
      audio.pause();
    }
  };

  // Resume a sound
  const resumeSound = (sound: SoundType) => {
    if (!soundConfig.enabled || soundConfig.muted) return;
    
    const audio = soundElements[sound];
    if (audio) {
      audio.play().catch(error => {
        console.warn(`Failed to resume sound: ${sound}`, error);
      });
    }
  };

  // Toggle mute status
  const toggleMute = () => {
    setSoundConfig(prev => ({
      ...prev,
      muted: !prev.muted
    }));
  };

  // Set volume level (0.0 to 1.0)
  const setVolume = (volume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, volume));
    
    setSoundConfig(prev => ({
      ...prev,
      volume: clampedVolume
    }));
    
    // Update all sound elements
    Object.values(soundElements).forEach(audio => {
      audio.volume = clampedVolume;
    });
  };

  const getVolume = () => soundConfig.volume;

  // Toggle enabled status
  const toggleEnabled = () => {
    setSoundConfig(prev => ({
      ...prev,
      enabled: !prev.enabled
    }));
    
    // Stop all sounds if disabling
    if (soundConfig.enabled) {
      stopSound();
    }
  };

  const value: SoundHook = {
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    toggleMute,
    isMuted: soundConfig.muted,
    setVolume,
    getVolume,
    isEnabled: soundConfig.enabled,
    toggleEnabled
  };

  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
};

export default SoundProvider;
