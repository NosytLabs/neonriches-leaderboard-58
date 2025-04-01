
import React, { createContext, useState, useEffect } from 'react';
import { SoundConfig } from '@/hooks/sounds/types';

interface UserSettings {
  theme: 'light' | 'dark' | 'royal' | 'system';
  soundEffects: boolean;
  showBadges: boolean;
  notifications: boolean;
  showRank: boolean;
  showSpending: boolean;
  showTeam: boolean;
  profileVisibility: 'public' | 'friends' | 'private';
  allowProfileLinks: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  darkMode: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
}

interface SettingsContextType {
  userSettings: UserSettings;
  updateSettings: (newSettings: UserSettings) => void;
  resetSettings: () => void;
  isDarkTheme: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  setTheme: (newTheme: 'light' | 'dark' | 'royal' | 'system') => void;
  soundConfig: SoundConfig;
  toggleSounds: () => void;
  toggleMuted: () => void;
  togglePremium: () => void;
  setVolume: (volume: number) => void;
}

const defaultSettings: UserSettings = {
  theme: 'dark',
  soundEffects: true,
  showBadges: true,
  notifications: true,
  showRank: true,
  showSpending: true,
  showTeam: true,
  profileVisibility: 'public',
  allowProfileLinks: true,
  emailNotifications: false,
  marketingEmails: false,
  darkMode: true,
  showEmailOnProfile: false,
  rankChangeAlerts: false,
};

const defaultSoundConfig: SoundConfig = {
  enabled: true,
  muted: false,
  volume: 0.5,
  premium: false
};

export const SettingsContext = createContext<SettingsContextType | null>(null);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userSettings, setUserSettings] = useState<UserSettings>(() => {
    const savedSettings = localStorage.getItem('userSettings');
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });
  
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(() => {
    const savedSoundConfig = localStorage.getItem('soundConfig');
    return savedSoundConfig ? JSON.parse(savedSoundConfig) : defaultSoundConfig;
  });
  
  // Update settings
  const updateSettings = (newSettings: UserSettings) => {
    setUserSettings(newSettings);
    localStorage.setItem('userSettings', JSON.stringify(newSettings));
  };
  
  // Reset settings to defaults
  const resetSettings = () => {
    setUserSettings(defaultSettings);
    localStorage.setItem('userSettings', JSON.stringify(defaultSettings));
  };
  
  // Theme settings
  const isDarkTheme = userSettings.theme === 'dark' || (userSettings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  const setTheme = (newTheme: 'light' | 'dark' | 'royal' | 'system') => {
    const updatedSettings = { ...userSettings, theme: newTheme };
    setUserSettings(updatedSettings);
    localStorage.setItem('userSettings', JSON.stringify(updatedSettings));
  };
  
  // Sound settings
  const toggleSounds = () => {
    const updatedConfig = { ...soundConfig, enabled: !soundConfig.enabled };
    setSoundConfig(updatedConfig);
    localStorage.setItem('soundConfig', JSON.stringify(updatedConfig));
  };
  
  const toggleMuted = () => {
    const updatedConfig = { ...soundConfig, muted: !soundConfig.muted };
    setSoundConfig(updatedConfig);
    localStorage.setItem('soundConfig', JSON.stringify(updatedConfig));
  };
  
  const togglePremium = () => {
    const updatedConfig = { ...soundConfig, premium: !soundConfig.premium };
    setSoundConfig(updatedConfig);
    localStorage.setItem('soundConfig', JSON.stringify(updatedConfig));
  };
  
  const setVolume = (volume: number) => {
    const updatedConfig = { ...soundConfig, volume };
    setSoundConfig(updatedConfig);
    localStorage.setItem('soundConfig', JSON.stringify(updatedConfig));
  };
  
  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
    document.documentElement.classList.toggle('royal', userSettings.theme === 'royal');
  }, [isDarkTheme, userSettings.theme]);
  
  const contextValue: SettingsContextType = {
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
    setVolume
  };
  
  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
