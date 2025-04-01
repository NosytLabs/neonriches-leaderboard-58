
import { useSettings } from '@/contexts/SettingsContext';

// This hook is a wrapper around the sound settings portion of useSettings
// for compatibility with existing components
export const useSoundsConfig = () => {
  const { 
    soundConfig,
    toggleSounds,
    toggleMuted,
    setVolume,
    togglePremium
  } = useSettings();
  
  return {
    soundConfig,
    toggleSounds,
    toggleMuted,
    setVolume,
    togglePremium
  };
};

export default useSoundsConfig;
