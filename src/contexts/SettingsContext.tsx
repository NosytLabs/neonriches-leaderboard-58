
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserSettings, SettingsContextType, AccessibilitySettings, ProfileSettings, SoundConfig } from '@/types/settings';

// Default settings
const defaultUserSettings: UserSettings = {
  profileVisibility: 'public',
  allowProfileLinks: true,
  theme: 'dark',
  notifications: true,
  emailNotifications: false,
  marketingEmails: false,
  showRank: true,
  darkMode: true,
  soundEffects: true,
  showBadges: true,
  showTeam: true,
  showSpending: true,
  showEmailOnProfile: false,
  rankChangeAlerts: false,
  newFollowerAlerts: false,
  teamNotifications: false
};

const defaultAccessibilitySettings: AccessibilitySettings = {
  textSize: 16,
  highContrast: false,
  reducedMotion: false,
  reducedTransparency: false
};

const defaultProfileSettings: ProfileSettings = {
  publicProfile: true,
  showRank: true,
  showTeam: true,
  showSpending: true,
  rankChangeAlerts: true,
  teamChangeAlerts: true,
  achievementAlerts: true,
  showEmailOnProfile: false
};

const defaultSoundConfig: SoundConfig = {
  enabled: true,
  muted: false,
  volume: 0.5,
  premium: false
};

// Create the SettingsContext
const SettingsContext = createContext<SettingsContextType>({
  userSettings: defaultUserSettings,
  updateSettings: () => {},
  resetSettings: () => {},
  isDarkTheme: true,
  theme: 'dark',
  setTheme: () => {},
  soundConfig: defaultSoundConfig,
  toggleSounds: () => {},
  toggleMuted: () => {},
  togglePremium: () => {},
  setVolume: () => {},
  // Add the missing properties
  accessibilitySettings: defaultAccessibilitySettings,
  updateAccessibilitySettings: () => {},
  profileSettings: defaultProfileSettings,
  updateProfileSettings: () => {},
  notifications: true,
  toggleNotifications: () => {},
  isLoading: false
});

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userSettings, setUserSettings] = useState<UserSettings>(defaultUserSettings);
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>(defaultAccessibilitySettings);
  const [profileSettings, setProfileSettings] = useState<ProfileSettings>(defaultProfileSettings);
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(defaultSoundConfig);
  
  // Load settings from localStorage on component mount
  useEffect(() => {
    const loadSettings = () => {
      try {
        const storedSettings = localStorage.getItem('userSettings');
        const storedAccessibility = localStorage.getItem('accessibilitySettings');
        const storedProfile = localStorage.getItem('profileSettings');
        const storedSound = localStorage.getItem('soundConfig');
        
        if (storedSettings) {
          setUserSettings(JSON.parse(storedSettings));
        }
        
        if (storedAccessibility) {
          setAccessibilitySettings(JSON.parse(storedAccessibility));
        }
        
        if (storedProfile) {
          setProfileSettings(JSON.parse(storedProfile));
        }
        
        if (storedSound) {
          setSoundConfig(JSON.parse(storedSound));
        }
      } catch (error) {
        console.error('Error loading settings:', error);
        // Fallback to defaults
        setUserSettings(defaultUserSettings);
        setAccessibilitySettings(defaultAccessibilitySettings);
        setProfileSettings(defaultProfileSettings);
        setSoundConfig(defaultSoundConfig);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSettings();
  }, []);
  
  // Save settings to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('userSettings', JSON.stringify(userSettings));
      localStorage.setItem('accessibilitySettings', JSON.stringify(accessibilitySettings));
      localStorage.setItem('profileSettings', JSON.stringify(profileSettings));
      localStorage.setItem('soundConfig', JSON.stringify(soundConfig));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  }, [userSettings, accessibilitySettings, profileSettings, soundConfig]);
  
  // Update user settings
  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setUserSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  // Update accessibility settings
  const updateAccessibilitySettings = (newSettings: Partial<AccessibilitySettings>) => {
    setAccessibilitySettings(prev => ({ ...prev, ...newSettings }));
  };
  
  // Update profile settings
  const updateProfileSettings = (newSettings: Partial<ProfileSettings>) => {
    setProfileSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  // Reset settings to defaults
  const resetSettings = () => {
    setUserSettings(defaultUserSettings);
    setAccessibilitySettings(defaultAccessibilitySettings);
    setProfileSettings(defaultProfileSettings);
    setSoundConfig(defaultSoundConfig);
  };
  
  // Theme utilities
  const isDarkTheme = userSettings.theme === 'dark' || 
    (userSettings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  const setTheme = (newTheme: 'light' | 'dark' | 'royal' | 'system') => {
    updateSettings({ theme: newTheme });
  };
  
  // Sound utilities
  const toggleSounds = () => {
    setSoundConfig(prev => ({ ...prev, enabled: !prev.enabled }));
  };
  
  const toggleMuted = () => {
    setSoundConfig(prev => ({ ...prev, muted: !prev.muted }));
  };
  
  const togglePremium = () => {
    setSoundConfig(prev => ({ ...prev, premium: !prev.premium }));
  };
  
  const setVolume = (volume: number) => {
    setSoundConfig(prev => ({ ...prev, volume }));
  };
  
  // Notification utilities
  const toggleNotifications = () => {
    updateSettings({ notifications: !userSettings.notifications });
  };
  
  return (
    <SettingsContext.Provider value={{
      userSettings,
      updateSettings,
      resetSettings,
      isDarkTheme,
      theme: userSettings.theme,
      setTheme,
      soundConfig,
      toggleSounds,
      toggleMuted,
      togglePremium,
      setVolume,
      // Add the missing properties
      accessibilitySettings,
      updateAccessibilitySettings,
      profileSettings,
      updateProfileSettings,
      notifications: userSettings.notifications,
      toggleNotifications,
      isLoading
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

export default SettingsContext;
