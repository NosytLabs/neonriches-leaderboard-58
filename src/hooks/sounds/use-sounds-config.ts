
import { useState, useEffect } from 'react';

interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
}

export const useSoundsConfig = () => {
  // Default configuration
  const [config, setConfig] = useState<SoundConfig>({
    enabled: true,
    muted: false,
    volume: 0.7
  });

  // Load config from localStorage on mount
  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem('sound_config');
      if (savedConfig) {
        setConfig(JSON.parse(savedConfig));
      }
    } catch (error) {
      console.error('Error loading sound configuration:', error);
    }
  }, []);

  // Save config to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('sound_config', JSON.stringify(config));
    } catch (error) {
      console.error('Error saving sound configuration:', error);
    }
  }, [config]);

  // Toggle sound on/off
  const toggleEnabled = () => {
    setConfig(prev => ({ ...prev, enabled: !prev.enabled }));
  };

  // Toggle mute on/off
  const toggleMute = () => {
    setConfig(prev => ({ ...prev, muted: !prev.muted }));
  };

  // Set volume (0-1)
  const setVolume = (volume: number) => {
    setConfig(prev => ({ ...prev, volume: Math.min(Math.max(volume, 0), 1) }));
  };

  return {
    config,
    toggleEnabled,
    toggleMute,
    setVolume
  };
};
