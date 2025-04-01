
import { useContext } from 'react';
import { SettingsContext } from '@/contexts/SettingsContext';

/**
 * A hook to access settings from the settings context
 */
export const useSettings = () => {
  const context = useContext(SettingsContext);
  
  if (!context) {
    console.error('useSettings must be used within a SettingsProvider');
    // Return a default settings to prevent runtime errors
    return {
      settings: {
        theme: 'dark',
        notifications: true,
        emailNotifications: false,
        soundEffects: true,
        profileVisibility: 'public',
        showBadges: true,
        // Add more default settings as needed
      },
      updateSettings: () => {},
      resetSettings: () => {}
    };
  }
  
  return context;
};

export default useSettings;
