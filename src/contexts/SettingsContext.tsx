
import React, { createContext, useState, useEffect, useContext } from 'react';
import { SoundConfig } from '@/types/sound-types';

interface SettingsContextType {
  theme: 'light' | 'dark' | 'system';
  isDarkTheme: boolean;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  userSettings: {
    theme: string;
    notifications: boolean;
    emailNotifications: boolean;
    soundEffects: boolean;
    profileVisibility: string;
    showBadges: boolean;
    showTeam: boolean;
    showSpending: boolean;
    showRank: boolean;
    allowProfileLinks: boolean;
    marketingEmails: boolean;
    showEmailOnProfile: boolean;
    rankChangeAlerts: boolean;
  };
  updateSettings: (settings: Partial<SettingsContextType['userSettings']>) => void;
  isLoading: boolean;
  soundConfig: SoundConfig;
  toggleSounds: () => void;
  toggleMuted: () => void;
  setVolume: (volume: number) => void;
  togglePremium: () => void;
  profileSettings: any;
  updateProfileSettings: (settings: any) => void;
  notifications: boolean;
  toggleNotifications: () => void;
}

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
    allowProfileLinks: true,
    marketingEmails: false,
    showEmailOnProfile: false,
    rankChangeAlerts: true
  },
  updateSettings: () => {},
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
  profileSettings: {},
  updateProfileSettings: () => {},
  notifications: true,
  toggleNotifications: () => {}
};

export const SettingsContext = createContext<SettingsContextType>(defaultSettings);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem('userSettings');
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings.userSettings;
  });
  
  const [theme, setThemeState] = useState<'light' | 'dark' | 'system'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as any) || 'system';
  });
  
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(() => {
    const savedConfig = localStorage.getItem('soundConfig');
    return savedConfig ? JSON.parse(savedConfig) : defaultSettings.soundConfig;
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const [profileSettings, setProfileSettings] = useState({
    visibility: 'public',
    allowLinks: true,
    showEmail: false
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
  
  const updateSettings = (newSettings: Partial<SettingsContextType['userSettings']>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
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
  
  const updateProfileSettings = (newSettings: any) => {
    setProfileSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  const toggleNotifications = () => {
    updateSettings({ notifications: !settings.notifications });
  };
  
  return (
    <SettingsContext.Provider
      value={{
        theme,
        isDarkTheme,
        setTheme,
        userSettings: settings,
        updateSettings,
        isLoading,
        soundConfig,
        toggleSounds,
        toggleMuted,
        setVolume,
        togglePremium,
        profileSettings,
        updateProfileSettings,
        notifications: settings.notifications,
        toggleNotifications
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

export default SettingsContext;
