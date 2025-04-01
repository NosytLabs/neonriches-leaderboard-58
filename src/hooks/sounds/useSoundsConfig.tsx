
import { useState, useCallback, useEffect } from 'react';

interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
}

// Get initial sound settings from localStorage or use defaults
const getInitialSoundConfig = (): SoundConfig => {
  if (typeof window === 'undefined') {
    return {
      enabled: true,
      muted: false,
      volume: 0.5
    };
  }

  try {
    const storedConfig = localStorage.getItem('soundConfig');
    if (storedConfig) {
      return JSON.parse(storedConfig);
    }
  } catch (error) {
    console.error('Error parsing sound config from localStorage:', error);
  }

  return {
    enabled: true,
    muted: false,
    volume: 0.5
  };
};

// Save sound settings to localStorage
const saveSoundConfig = (config: SoundConfig): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('soundConfig', JSON.stringify(config));
    } catch (error) {
      console.error('Error saving sound config to localStorage:', error);
    }
  }
};

export const useSoundsConfig = () => {
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(getInitialSoundConfig);

  // Save settings whenever they change
  useEffect(() => {
    saveSoundConfig(soundConfig);
  }, [soundConfig]);

  // Toggle sound effects on/off
  const toggleSounds = useCallback((): boolean => {
    setSoundConfig(prev => ({ ...prev, enabled: !prev.enabled }));
    return !soundConfig.enabled;
  }, [soundConfig.enabled]);

  // Toggle muted state
  const toggleMuted = useCallback((): boolean => {
    setSoundConfig(prev => ({ ...prev, muted: !prev.muted }));
    return !soundConfig.muted;
  }, [soundConfig.muted]);

  // Set volume level
  const setVolume = useCallback((volume: number): void => {
    setSoundConfig(prev => ({ ...prev, volume: Math.min(1, Math.max(0, volume)) }));
  }, []);

  return {
    soundConfig,
    toggleSounds,
    toggleMuted,
    setVolume
  };
};

export default useSoundsConfig;
