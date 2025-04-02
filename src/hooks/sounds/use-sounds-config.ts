
import { useState, useCallback, useEffect } from 'react';
import { SoundConfig } from '@/types/sound-types';

// Default sound configuration
const defaultSoundConfig: SoundConfig = {
  enabled: true,
  muted: false,
  volume: 0.5,
  premium: false,
  theme: 'standard'
};

/**
 * Hook to manage sound configuration settings
 * @returns Sound configuration and control functions
 */
export const useSoundsConfig = () => {
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(defaultSoundConfig);
  
  // Load saved configuration from localStorage on mount
  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem('soundConfig');
      if (savedConfig) {
        setSoundConfig(JSON.parse(savedConfig));
      }
    } catch (error) {
      console.warn('Error loading sound config:', error);
    }
  }, []);
  
  // Save configuration changes to localStorage
  const saveSoundConfig = useCallback((config: SoundConfig) => {
    try {
      localStorage.setItem('soundConfig', JSON.stringify(config));
      setSoundConfig(config);
    } catch (error) {
      console.warn('Error saving sound config:', error);
    }
  }, []);
  
  // Toggle sounds enabled/disabled
  const toggleSounds = useCallback(() => {
    const newConfig = {
      ...soundConfig,
      enabled: !soundConfig.enabled
    };
    saveSoundConfig(newConfig);
  }, [soundConfig, saveSoundConfig]);
  
  // Toggle muted state
  const toggleMuted = useCallback(() => {
    const newConfig = {
      ...soundConfig,
      muted: !soundConfig.muted
    };
    saveSoundConfig(newConfig);
  }, [soundConfig, saveSoundConfig]);
  
  // Set volume level
  const setVolume = useCallback((volume: number) => {
    const newConfig = {
      ...soundConfig,
      volume: Math.max(0, Math.min(1, volume)) // Clamp between 0 and 1
    };
    saveSoundConfig(newConfig);
  }, [soundConfig, saveSoundConfig]);
  
  // Set premium status
  const setPremium = useCallback((premium: boolean) => {
    const newConfig = {
      ...soundConfig,
      premium
    };
    saveSoundConfig(newConfig);
  }, [soundConfig, saveSoundConfig]);
  
  // Set sound theme
  const setTheme = useCallback((theme: 'royal' | 'standard' | 'minimal' | 'epic') => {
    const newConfig = {
      ...soundConfig,
      theme
    };
    saveSoundConfig(newConfig);
  }, [soundConfig, saveSoundConfig]);
  
  return {
    soundConfig,
    toggleSounds,
    toggleMuted,
    setVolume,
    setPremium,
    setTheme
  };
};

export default useSoundsConfig;
