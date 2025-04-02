
import { useState, useEffect, useCallback } from 'react';
import { useSettings } from '@/hooks/useSettings';
import { SoundConfig } from '@/types/sound-types';

interface UseSoundsConfigReturn {
  soundConfig: SoundConfig;
  toggleSounds: () => void;
  toggleMuted: () => void;
  togglePremium: () => void;
  setVolume: (volume: number) => void;
  setSoundPack: (packId: string) => void;
}

const defaultSoundConfig: SoundConfig = {
  enabled: true,
  muted: false,
  volume: 0.5,
  premium: false,
  theme: 'standard'
};

export const useSoundsConfig = (): UseSoundsConfigReturn => {
  const { userSettings, updateSettings } = useSettings();
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(defaultSoundConfig);

  // Initialize sound config from user settings
  useEffect(() => {
    if (userSettings) {
      // If the settings include sound settings, use those
      if (userSettings.soundEffects !== undefined) {
        setSoundConfig(prevConfig => ({
          ...prevConfig,
          enabled: userSettings.soundEffects
        }));
      }
    }
  }, [userSettings]);

  // Toggle sounds on/off
  const toggleSounds = useCallback(() => {
    setSoundConfig(prevConfig => {
      const newEnabled = !prevConfig.enabled;
      
      // Update user settings
      if (updateSettings && userSettings) {
        updateSettings({
          ...userSettings,
          soundEffects: newEnabled
        });
      }
      
      return {
        ...prevConfig,
        enabled: newEnabled
      };
    });
  }, [updateSettings, userSettings]);

  // Toggle muted state
  const toggleMuted = useCallback(() => {
    setSoundConfig(prevConfig => ({
      ...prevConfig,
      muted: !prevConfig.muted
    }));
  }, []);

  // Toggle premium sounds
  const togglePremium = useCallback(() => {
    setSoundConfig(prevConfig => ({
      ...prevConfig,
      premium: !prevConfig.premium
    }));
  }, []);

  // Set volume
  const setVolume = useCallback((volume: number) => {
    setSoundConfig(prevConfig => ({
      ...prevConfig,
      volume: Math.max(0, Math.min(1, volume))
    }));
  }, []);

  // Set sound pack
  const setSoundPack = useCallback((packId: string) => {
    setSoundConfig(prevConfig => ({
      ...prevConfig,
      pack: packId
    }));
  }, []);

  return {
    soundConfig,
    toggleSounds,
    toggleMuted,
    togglePremium,
    setVolume,
    setSoundPack
  };
};

export default useSoundsConfig;
