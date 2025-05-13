
import { useState, useEffect } from 'react';

export interface SoundConfig {
  muted: boolean;
  volume: number;
  effects: boolean;
  music: boolean;
  ambient: boolean;
}

// Default configuration
const defaultSoundConfig: SoundConfig = {
  muted: false,
  volume: 0.8,
  effects: true,
  music: true,
  ambient: true
};

// Local storage key
const SOUND_CONFIG_KEY = 'spendthrone-sound-config';

export function useSoundsConfig() {
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(defaultSoundConfig);

  // Load configuration from localStorage on component mount
  useEffect(() => {
    try {
      const storedConfig = localStorage.getItem(SOUND_CONFIG_KEY);
      if (storedConfig) {
        setSoundConfig(JSON.parse(storedConfig));
      }
    } catch (error) {
      console.error('Failed to load sound configuration:', error);
    }
  }, []);

  // Save configuration to localStorage whenever it changes
  const updateConfig = (newConfig: Partial<SoundConfig>) => {
    try {
      const updatedConfig = { ...soundConfig, ...newConfig };
      setSoundConfig(updatedConfig);
      localStorage.setItem(SOUND_CONFIG_KEY, JSON.stringify(updatedConfig));
    } catch (error) {
      console.error('Failed to save sound configuration:', error);
    }
  };

  // Helper functions
  const setVolume = (volume: number) => updateConfig({ volume });
  const toggleMuted = () => updateConfig({ muted: !soundConfig.muted });
  const toggleEffects = () => updateConfig({ effects: !soundConfig.effects });
  const toggleMusic = () => updateConfig({ music: !soundConfig.music });
  const toggleAmbient = () => updateConfig({ ambient: !soundConfig.ambient });
  const resetToDefaults = () => updateConfig(defaultSoundConfig);

  return {
    soundConfig,
    setVolume,
    toggleMuted,
    toggleEffects,
    toggleMusic,
    toggleAmbient,
    resetToDefaults,
    updateConfig
  };
}
