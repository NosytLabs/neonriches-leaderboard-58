
import { useSettings } from '@/contexts/SettingsContext';

/**
 * A simplified hook to access sound configuration from the settings context
 */
export const useSoundsConfig = () => {
  const { soundConfig, toggleSounds, toggleMuted, togglePremium, setVolume } = useSettings();
  
  return {
    soundConfig,
    toggleSounds,
    toggleMuted,
    togglePremium,
    setVolume
  };
};

export default useSoundsConfig;
