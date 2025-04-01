
import React, { createContext, useState, useEffect, useContext } from 'react';
import { SoundConfig, AccessibilitySettings, ThemeType, ProfileSettings, SettingsContextType } from '@/types/settings';

const defaultSettings: SettingsContextType = {
  theme: 'system',
  isDarkTheme: true,
  setTheme: () => {},
  userSettings: {
    theme: 'dark',
    notifications: true,
    emailNotifications: true,
    soundEffects: true,
    profileVisibility: 'public',
    showBadges: true,
    showTeam: true,
    showSpending: true,
    showRank: true,
    darkMode: true, // Added this required property
    allowProfileLinks: true,
    marketingEmails: false,
    showEmailOnProfile: false,
    rankChangeAlerts: true
  },
  updateSettings: () => {},
  resetSettings: () => {},
  isLoading: false,
  soundConfig: {
    enabled: true,
    volume: 0.5,
    music: false,
    musicVolume: 0.3,
    muted: false,
    premium: false
  },
  toggleSounds: () => {},
  toggleMuted: () => {},
  setVolume: () => {},
  togglePremium: () => {},
  profileSettings: {
    publicProfile: true,
    showRank: true,
    showTeam: true,
    showSpending: true,
    rankChangeAlerts: true,
    teamChangeAlerts: true,
    achievementAlerts: true,
    showEmailOnProfile: false
  },
  updateProfileSettings: () => {},
  notifications: true,
  toggleNotifications: () => {},
  accessibilitySettings: {
    textSize: 100,
    highContrast: false,
    reducedMotion: false,
    reducedTransparency: false
  },
  updateAccessibilitySettings: () => {}
};

export const SettingsContext = createContext<SettingsContextType>(defaultSettings);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem('userSettings');
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings.userSettings;
  });
  
  const [theme, setThemeState] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as ThemeType) || 'system';
  });
  
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(() => {
    const savedConfig = localStorage.getItem('soundConfig');
    return savedConfig ? JSON.parse(savedConfig) : defaultSettings.soundConfig;
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const [profileSettings, setProfileSettings] = useState<ProfileSettings>(() => {
    const savedProfileSettings = localStorage.getItem('profileSettings');
    return savedProfileSettings ? JSON.parse(savedProfileSettings) : defaultSettings.profileSettings;
  });

  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>(() => {
    const savedAccessibilitySettings = localStorage.getItem('accessibilitySettings');
    return savedAccessibilitySettings ? JSON.parse(savedAccessibilitySettings) : defaultSettings.accessibilitySettings;
  });

  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }, [settings]);
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Apply theme to document
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  useEffect(() => {
    localStorage.setItem('soundConfig', JSON.stringify(soundConfig));
  }, [soundConfig]);
  
  useEffect(() => {
    localStorage.setItem('profileSettings', JSON.stringify(profileSettings));
  }, [profileSettings]);

  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify(accessibilitySettings));
  }, [accessibilitySettings]);
  
  const updateSettings = (newSettings: Partial<SettingsContextType['userSettings']>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings.userSettings);
    setThemeState('system');
    setSoundConfig(defaultSettings.soundConfig);
    setProfileSettings(defaultSettings.profileSettings);
    setAccessibilitySettings(defaultSettings.accessibilitySettings);
  };
  
  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };
  
  const isDarkTheme = 
    theme === 'dark' || 
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
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
    setSoundConfig(prev => ({
      ...prev,
      volume: Math.max(0, Math.min(1, volume))
    }));
  };
  
  const togglePremium = () => {
    setSoundConfig(prev => ({
      ...prev,
      premium: !prev.premium
    }));
  };
  
  const updateProfileSettings = (newSettings: Partial<ProfileSettings>) => {
    setProfileSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  const toggleNotifications = () => {
    updateSettings({ notifications: !settings.notifications });
  };

  const updateAccessibilitySettings = (newSettings: Partial<AccessibilitySettings>) => {
    setAccessibilitySettings(prev => ({ ...prev, ...newSettings }));
  };
  
  return (
    <SettingsContext.Provider
      value={{
        theme,
        isDarkTheme,
        setTheme,
        userSettings: settings,
        updateSettings,
        resetSettings,
        isLoading,
        soundConfig,
        toggleSounds,
        toggleMuted,
        setVolume,
        togglePremium,
        profileSettings,
        updateProfileSettings,
        notifications: settings.notifications,
        toggleNotifications,
        accessibilitySettings,
        updateAccessibilitySettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

export default SettingsContext;
