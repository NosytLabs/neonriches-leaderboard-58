
import React, { createContext, useContext, useState, useEffect } from 'react';
import { SoundConfig } from '@/types/sound-types';

// Define types for settings
export interface ProfileSettings {
  publicProfile: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  rankChangeAlerts: boolean;
  teamChangeAlerts: boolean;
  achievementAlerts: boolean;
  showEmailOnProfile: boolean;
}

export interface AccessibilitySettings {
  textSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  reducedTransparency: boolean;
}

export type ThemeType = 'light' | 'dark' | 'royal' | 'system';

export interface SettingsContextType {
  // Sound settings
  soundConfig: SoundConfig;
  toggleSounds: () => void;
  toggleMuted: () => void;
  setVolume: (volume: number) => void;
  togglePremium: () => void;
  
  // Theme settings
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isDarkTheme: boolean;
  
  // Notification settings
  notifications: boolean;
  toggleNotifications: () => void;
  
  // Profile settings
  profileSettings: ProfileSettings;
  updateProfileSettings: (settings: Partial<ProfileSettings>) => void;
  
  // Accessibility settings
  accessibilitySettings: AccessibilitySettings;
  updateAccessibilitySettings: (settings: Partial<AccessibilitySettings>) => void;
  
  // Loading state
  isLoading: boolean;
}

const defaultSoundConfig: SoundConfig = {
  enabled: true,
  volume: 0.5,
  effects: {},
  music: false,
  musicVolume: 0.3,
  muted: false,
  premium: false
};

const defaultProfileSettings: ProfileSettings = {
  publicProfile: true,
  showRank: true,
  showTeam: true,
  showSpending: true,
  rankChangeAlerts: false,
  teamChangeAlerts: false,
  achievementAlerts: false,
  showEmailOnProfile: false
};

const defaultAccessibilitySettings: AccessibilitySettings = {
  textSize: 100,
  highContrast: false,
  reducedMotion: false,
  reducedTransparency: false
};

const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(() => {
    // Try to load from localStorage
    try {
      const savedConfig = localStorage.getItem('soundConfig');
      return savedConfig ? JSON.parse(savedConfig) : defaultSoundConfig;
    } catch (error) {
      console.error('Error loading sound config:', error);
      return defaultSoundConfig;
    }
  });
  
  const [theme, setThemeState] = useState<ThemeType>(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      return (savedTheme as ThemeType) || 'dark';
    } catch (error) {
      return 'dark';
    }
  });
  
  const [notifications, setNotifications] = useState<boolean>(() => {
    try {
      const savedNotifications = localStorage.getItem('notifications');
      return savedNotifications ? JSON.parse(savedNotifications) : true;
    } catch (error) {
      return true;
    }
  });
  
  const [profileSettings, setProfileSettings] = useState<ProfileSettings>(() => {
    try {
      const savedSettings = localStorage.getItem('profileSettings');
      return savedSettings ? JSON.parse(savedSettings) : defaultProfileSettings;
    } catch (error) {
      return defaultProfileSettings;
    }
  });
  
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>(() => {
    try {
      const savedSettings = localStorage.getItem('accessibilitySettings');
      return savedSettings ? JSON.parse(savedSettings) : defaultAccessibilitySettings;
    } catch (error) {
      return defaultAccessibilitySettings;
    }
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  // Compute if dark theme is active
  const isDarkTheme = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  // Save to localStorage when settings change
  useEffect(() => {
    try {
      localStorage.setItem('soundConfig', JSON.stringify(soundConfig));
    } catch (error) {
      console.error('Error saving sound config:', error);
    }
  }, [soundConfig]);
  
  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Error saving theme setting:', error);
    }
  }, [theme]);
  
  useEffect(() => {
    try {
      localStorage.setItem('notifications', JSON.stringify(notifications));
    } catch (error) {
      console.error('Error saving notifications setting:', error);
    }
  }, [notifications]);
  
  useEffect(() => {
    try {
      localStorage.setItem('profileSettings', JSON.stringify(profileSettings));
    } catch (error) {
      console.error('Error saving profile settings:', error);
    }
  }, [profileSettings]);
  
  useEffect(() => {
    try {
      localStorage.setItem('accessibilitySettings', JSON.stringify(accessibilitySettings));
    } catch (error) {
      console.error('Error saving accessibility settings:', error);
    }
  }, [accessibilitySettings]);
  
  // Sound functions
  const toggleSounds = () => {
    setSoundConfig(prev => ({
      ...prev,
      enabled: !prev.enabled
    }));
  };

  const toggleMuted = () => {
    setSoundConfig(prev => ({
      ...prev,
      muted: !prev.muted
    }));
  };

  const setVolume = (volume: number) => {
    const clampedVolume = Math.min(Math.max(volume, 0), 1);
    setSoundConfig(prev => ({
      ...prev,
      volume: clampedVolume
    }));
  };

  const togglePremium = () => {
    setSoundConfig(prev => ({
      ...prev,
      premium: !prev.premium
    }));
  };
  
  // Theme function
  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };
  
  // Notification function
  const toggleNotifications = () => {
    setNotifications(prev => !prev);
  };
  
  // Profile settings function
  const updateProfileSettings = (updates: Partial<ProfileSettings>) => {
    setProfileSettings(prev => ({
      ...prev,
      ...updates
    }));
  };
  
  // Accessibility settings function
  const updateAccessibilitySettings = (updates: Partial<AccessibilitySettings>) => {
    setAccessibilitySettings(prev => ({
      ...prev,
      ...updates
    }));
  };

  return (
    <SettingsContext.Provider 
      value={{ 
        // Sound settings
        soundConfig, 
        toggleSounds, 
        toggleMuted, 
        setVolume,
        togglePremium,
        
        // Theme settings
        theme,
        setTheme,
        isDarkTheme,
        
        // Notification settings
        notifications,
        toggleNotifications,
        
        // Profile settings
        profileSettings,
        updateProfileSettings,
        
        // Accessibility settings
        accessibilitySettings,
        updateAccessibilitySettings,
        
        // Loading state
        isLoading
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

// Export the hook for using the settings context
export const useSettings = () => {
  const context = useContext(SettingsContext);
  
  if (!context) {
    console.error('useSettings must be used within a SettingsProvider');
    // Return default settings to prevent runtime errors
    return {
      // Sound settings
      soundConfig: defaultSoundConfig,
      toggleSounds: () => {},
      toggleMuted: () => {},
      setVolume: () => {},
      togglePremium: () => {},
      
      // Theme settings
      theme: 'dark' as ThemeType,
      setTheme: () => {},
      isDarkTheme: true,
      
      // Notification settings
      notifications: true,
      toggleNotifications: () => {},
      
      // Profile settings
      profileSettings: defaultProfileSettings,
      updateProfileSettings: () => {},
      
      // Accessibility settings
      accessibilitySettings: defaultAccessibilitySettings,
      updateAccessibilitySettings: () => {},
      
      // Loading state
      isLoading: false
    };
  }
  
  return context;
};

export default SettingsContext;
