
import React, { createContext, useContext, useState, useEffect } from 'react';
import { SoundConfig } from '@/types/sound-types';

interface SettingsContextType {
  soundConfig: SoundConfig;
  toggleSounds: () => void;
  toggleMuted: () => void;
  setVolume: (volume: number) => void;
  togglePremium: () => void;
}

const defaultSoundConfig: SoundConfig = {
  enabled: true,
  volume: 0.5,
  effects: {},
  music: false,
  musicVolume: 0.3,
  muted: false,
  premium: false
};

const SettingsContext = createContext<SettingsContextType>({
  soundConfig: defaultSoundConfig,
  toggleSounds: () => {},
  toggleMuted: () => {},
  setVolume: () => {},
  togglePremium: () => {}
});

export const SettingsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(() => {
    // Try to load from localStorage
    try {
      const savedConfig = localStorage.getItem('soundConfig');
      return savedConfig ? JSON.parse(savedConfig) : defaultSoundConfig;
    } catch (error) {
      console.error('Error loading sound config:', error);
      return defaultSoundConfig;
    }
  });

  // Save to localStorage when settings change
  useEffect(() => {
    try {
      localStorage.setItem('soundConfig', JSON.stringify(soundConfig));
    } catch (error) {
      console.error('Error saving sound config:', error);
    }
  }, [soundConfig]);

  const toggleSounds = () => {
    setSoundConfig(prev => ({
      ...prev,
      enabled: !prev.enabled
    }));
  };

  const toggleMuted = () => {
    setSoundConfig(prev => ({
      ...prev,
      muted: !prev.muted
    }));
  };

  const setVolume = (volume: number) => {
    const clampedVolume = Math.min(Math.max(volume, 0), 1);
    setSoundConfig(prev => ({
      ...prev,
      volume: clampedVolume
    }));
  };

  const togglePremium = () => {
    setSoundConfig(prev => ({
      ...prev,
      premium: !prev.premium
    }));
  };

  return (
    <SettingsContext.Provider 
      value={{ 
        soundConfig, 
        toggleSounds, 
        toggleMuted, 
        setVolume,
        togglePremium
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSoundsConfig = () => useContext(SettingsContext);

export default SettingsContext;
