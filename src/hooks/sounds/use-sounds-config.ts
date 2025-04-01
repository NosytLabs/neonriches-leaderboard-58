
import { useContext } from 'react';
import { SoundConfig } from '@/types/settings';
import SettingsContext from '@/contexts/SettingsContext';
import { useSettings } from '@/contexts/SettingsContext';

/**
 * A hook to access sound configuration from the settings context
 */
export const useSoundsConfig = () => {
  const {
    soundConfig,
    toggleSounds,
    toggleMuted,
    togglePremium,
    setVolume
  } = useSettings();
  
  return {
    soundConfig,
    toggleSounds,
    toggleMuted,
    togglePremium,
    setVolume
  };
};

export default useSoundsConfig;
