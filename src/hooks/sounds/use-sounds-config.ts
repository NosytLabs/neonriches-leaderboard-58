
import { useContext } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import { SoundConfig } from '@/types/sound-types';

// Default sound configuration if no context is available
const defaultSoundConfig: SoundConfig = {
  enabled: true,
  volume: 0.5,
  pack: 'default',
  muted: false
};

/**
 * Hook for accessing sound configuration settings
 * @returns Sound configuration and methods to update it
 */
export const useSoundsConfig = () => {
  const settings = useSettings();
  
  // If settings context is not available, return defaults
  if (!settings) {
    console.warn('useSoundsConfig: SettingsContext not found, using defaults');
    
    return {
      soundConfig: defaultSoundConfig,
      toggleSounds: () => true,
      toggleMuted: () => false,
      setVolume: () => {},
      togglePremium: () => true
    };
  }
  
  // Extract sound settings from the settings context
  // Handle case where settings.sounds might not exist
  const soundConfig = settings.soundSettings || defaultSoundConfig;
  
  return {
    soundConfig,
    toggleSounds: settings.toggleSounds || (() => true),
    toggleMuted: settings.toggleMuted || (() => false),
    setVolume: settings.setVolume || (() => {}),
    togglePremium: settings.togglePremium || (() => true)
  };
};

export default useSoundsConfig;
