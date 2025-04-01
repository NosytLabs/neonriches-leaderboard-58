
import { useContext } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import { SoundConfig } from '@/types/settings';

// This hook is a wrapper around the sound settings portion of useSettings
// for compatibility with existing components
export const useSoundsConfig = () => {
  const settings = useSettings();
  
  if (!settings) {
    throw new Error('useSoundsConfig must be used within a SettingsProvider');
  }
  
  return {
    soundConfig: settings.soundConfig,
    toggleSounds: settings.toggleSounds,
    toggleMuted: settings.toggleMuted,
    setVolume: settings.setVolume,
    togglePremium: settings.togglePremium
  };
};

export default useSoundsConfig;
