
import { useContext } from 'react';
import { SettingsContext } from '@/contexts/SettingsContext';

/**
 * A hook to access sound configuration from the settings context
 */
export const useSoundsConfig = () => {
  const context = useContext(SettingsContext);
  
  if (!context) {
    console.error('useSoundsConfig must be used within a SettingsProvider');
    // Return a default config to prevent runtime errors
    return {
      soundConfig: {
        enabled: true,
        muted: false,
        volume: 0.5,
        premium: false
      },
      toggleSounds: () => {},
      toggleMuted: () => {},
      togglePremium: () => {},
      setVolume: () => {}
    };
  }
  
  return {
    soundConfig: context.soundConfig,
    toggleSounds: context.toggleSounds,
    toggleMuted: context.toggleMuted,
    togglePremium: context.togglePremium,
    setVolume: context.setVolume
  };
};

export default useSoundsConfig;
