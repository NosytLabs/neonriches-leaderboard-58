
import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserSettings, SettingsContextType, SoundConfig } from '@/types/settings';

// Default settings
const defaultSettings: UserSettings = {
  profileVisibility: 'public',
  allowProfileLinks: true,
  theme: 'royal',
  notifications: true,
  emailNotifications: false,
  soundEffects: true,
  showEmailOnProfile: false,
  rankChangeAlerts: true,
  teamChangeAlerts: true,
  achievementAlerts: true,
  purchaseNotifications: true,
  depositNotifications: true,
  leaderboardUpdates: true,
  newFeatureAlerts: true,
  eventNotifications: true,
  marketingEmails: false,
  showBadges: true,
  showAchievements: true,
  showSpendingAmount: true,
  showLastActive: true,
  showRank: true,
  showTeam: true,
  showSpending: true,
  publicProfile: true,
  allowMessages: true,
  language: 'en'
};

// Default sound config
const defaultSoundConfig: SoundConfig = {
  enabled: true,
  muted: false,
  volume: 0.7,
  premium: false
};

const SettingsContext = createContext<SettingsContextType>({
  userSettings: defaultSettings,
  updateSettings: () => {},
  resetSettings: () => {},
  isDarkTheme: true,
  theme: 'dark',
  setTheme: () => {},
  soundConfig: defaultSoundConfig,
  toggleSounds: () => {},
  toggleMuted: () => {},
  togglePremium: () => {},
  setVolume: () => {}
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved settings from localStorage
  const [userSettings, setUserSettings] = useState<UserSettings>(() => {
    const savedSettings = localStorage.getItem('user-settings');
    return savedSettings ? { ...defaultSettings, ...JSON.parse(savedSettings) } : defaultSettings;
  });
  
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark' | 'royal' | 'system'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'royal' | 'system';
    return savedTheme || defaultSettings.theme;
  });
  
  // Sound configuration
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(() => {
    const savedConfig = localStorage.getItem('sound-settings');
    return savedConfig ? { ...defaultSoundConfig, ...JSON.parse(savedConfig) } : defaultSoundConfig;
  });
  
  // Calculate if theme is dark
  const isDarkTheme = React.useMemo(() => {
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return theme === 'royal'; // Royal theme is dark by default
  }, [theme]);
  
  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('user-settings', JSON.stringify(userSettings));
  }, [userSettings]);
  
  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Apply theme class to document
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'royal');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);
  
  // Save sound config to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('sound-settings', JSON.stringify(soundConfig));
  }, [soundConfig]);
  
  // Update settings
  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setUserSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  // Reset settings to defaults
  const resetSettings = () => {
    setUserSettings(defaultSettings);
    setTheme(defaultSettings.theme);
  };
  
  // Toggle sound effects
  const toggleSounds = () => {
    setSoundConfig(prev => ({ ...prev, enabled: !prev.enabled }));
  };
  
  // Toggle mute
  const toggleMuted = () => {
    setSoundConfig(prev => ({ ...prev, muted: !prev.muted }));
  };
  
  // Toggle premium sounds
  const togglePremium = () => {
    setSoundConfig(prev => ({ ...prev, premium: !prev.premium }));
  };
  
  // Set volume level
  const setVolume = (volume: number) => {
    setSoundConfig(prev => ({ ...prev, volume: Math.min(Math.max(volume, 0), 1) }));
  };
  
  // Update theme
  const handleThemeChange = (newTheme: 'light' | 'dark' | 'royal' | 'system') => {
    setTheme(newTheme);
  };
  
  const value = {
    userSettings,
    updateSettings,
    resetSettings,
    isDarkTheme,
    theme,
    setTheme: handleThemeChange,
    soundConfig,
    toggleSounds,
    toggleMuted,
    togglePremium,
    setVolume
  };
  
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
