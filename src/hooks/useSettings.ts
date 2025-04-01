
import { useContext } from 'react';
import SettingsContext from '@/contexts/SettingsContext';
import { SettingsContextType, UserSettings, SoundConfig, ProfileSettings, AccessibilitySettings } from '@/types/settings';

/**
 * Enhanced hook to access application settings
 */
export const useSettings = () => {
  const context = useContext(SettingsContext);
  
  if (!context) {
    console.error('useSettings must be used within a SettingsProvider');
    // Return default settings to prevent runtime errors
    return {
      // Basic settings
      userSettings: {
        theme: 'dark',
        notifications: true,
        emailNotifications: false,
        soundEffects: true,
        profileVisibility: 'public',
        showBadges: true,
        showRank: true,
        darkMode: true,
        showTeam: true,
        showSpending: true,
        allowProfileLinks: true,
        marketingEmails: false,
        showEmailOnProfile: false,
        rankChangeAlerts: false
      },
      updateSettings: () => {},
      resetSettings: () => {},
      
      // Theme settings
      theme: 'dark' as const,
      isDarkTheme: true,
      setTheme: () => {},
      
      // Sound settings
      soundConfig: {
        enabled: true,
        muted: false,
        volume: 0.5,
        premium: false
      },
      toggleSounds: () => {},
      toggleMuted: () => {},
      togglePremium: () => {},
      setVolume: () => {},
      
      // Profile settings
      profileSettings: {
        publicProfile: true,
        showRank: true,
        showTeam: true,
        showSpending: true,
        rankChangeAlerts: false,
        teamChangeAlerts: false,
        achievementAlerts: false,
        showEmailOnProfile: false
      },
      updateProfileSettings: () => {},
      
      // Notification settings
      notifications: true,
      toggleNotifications: () => {},
      
      // Accessibility settings
      accessibilitySettings: {
        textSize: 100,
        highContrast: false,
        reducedMotion: false,
        reducedTransparency: false
      },
      updateAccessibilitySettings: () => {},
      
      // Loading state
      isLoading: false
    };
  }
  
  return context;
};

export default useSettings;
