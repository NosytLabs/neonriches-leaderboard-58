
import React, { createContext, useState, useEffect } from 'react';
import { SoundConfig, UserSettings, ProfileSettings, AccessibilitySettings, SettingsContextType } from '@/types/settings';
import { useSound } from '@/hooks/sounds/use-sound';

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

const defaultSoundConfig: SoundConfig = {
  enabled: true,
  muted: false,
  volume: 0.5,
  premium: false
};

// Create the context with default values
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
  setVolume: () => {},
  accessibilitySettings: defaultAccessibilitySettings,
  updateAccessibilitySettings: () => {},
  profileSettings: defaultProfileSettings,
  updateProfileSettings: () => {},
  notifications: true,
  toggleNotifications: () => {},
  isLoading: false
});

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userSettings, setUserSettings] = useState<UserSettings>(() => {
    try {
      const savedSettings = localStorage.getItem('userSettings');
      return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
    } catch (e) {
      console.error('Error loading settings from localStorage:', e);
      return defaultSettings;
    }
  });
  
  const [profileSettings, setProfileSettings] = useState<ProfileSettings>(() => {
    try {
      const savedSettings = localStorage.getItem('profileSettings');
      return savedSettings ? JSON.parse(savedSettings) : defaultProfileSettings;
    } catch (e) {
      console.error('Error loading profile settings from localStorage:', e);
      return defaultProfileSettings;
    }
  });
  
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>(() => {
    try {
      const savedSettings = localStorage.getItem('accessibilitySettings');
      return savedSettings ? JSON.parse(savedSettings) : defaultAccessibilitySettings;
    } catch (e) {
      console.error('Error loading accessibility settings from localStorage:', e);
      return defaultAccessibilitySettings;
    }
  });
  
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(() => {
    try {
      const savedConfig = localStorage.getItem('soundConfig');
      return savedConfig ? JSON.parse(savedConfig) : defaultSoundConfig;
    } catch (e) {
      console.error('Error loading sound config from localStorage:', e);
      return defaultSoundConfig;
    }
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const soundHook = useSound();
  
  // Update settings
  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setUserSettings(prev => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem('userSettings', JSON.stringify(updated));
      return updated;
    });
  };
  
  // Reset settings to defaults
  const resetSettings = () => {
    setUserSettings(defaultSettings);
    setProfileSettings(defaultProfileSettings);
    setAccessibilitySettings(defaultAccessibilitySettings);
    setSoundConfig(defaultSoundConfig);
    localStorage.setItem('userSettings', JSON.stringify(defaultSettings));
    localStorage.setItem('profileSettings', JSON.stringify(defaultProfileSettings));
    localStorage.setItem('accessibilitySettings', JSON.stringify(defaultAccessibilitySettings));
    localStorage.setItem('soundConfig', JSON.stringify(defaultSoundConfig));
  };
  
  // Update profile settings
  const updateProfileSettings = (settings: Partial<ProfileSettings>) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setProfileSettings(prev => {
        const updated = { ...prev, ...settings };
        localStorage.setItem('profileSettings', JSON.stringify(updated));
        return updated;
      });
      setIsLoading(false);
    }, 500);
  };
  
  // Update accessibility settings
  const updateAccessibilitySettings = (settings: Partial<AccessibilitySettings>) => {
    setAccessibilitySettings(prev => {
      const updated = { ...prev, ...settings };
      localStorage.setItem('accessibilitySettings', JSON.stringify(updated));
      return updated;
    });
  };
  
  // Theme settings
  const isDarkTheme = userSettings.theme === 'dark' || 
    (userSettings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  const setTheme = (newTheme: 'light' | 'dark' | 'royal' | 'system') => {
    updateSettings({ theme: newTheme });
  };
  
  // Sound settings
  const toggleSounds = () => {
    setSoundConfig(prev => {
      const updated = { ...prev, enabled: !prev.enabled };
      localStorage.setItem('soundConfig', JSON.stringify(updated));
      return updated;
    });
  };
  
  const toggleMuted = () => {
    setSoundConfig(prev => {
      const updated = { ...prev, muted: !prev.muted };
      localStorage.setItem('soundConfig', JSON.stringify(updated));
      return updated;
    });
  };
  
  const togglePremium = () => {
    setSoundConfig(prev => {
      const updated = { ...prev, premium: !prev.premium };
      localStorage.setItem('soundConfig', JSON.stringify(updated));
      return updated;
    });
    
    // Play a sound to demonstrate premium
    if (!soundConfig.premium) {
      soundHook.playSound('achievement');
    }
  };
  
  const setVolume = (volume: number) => {
    setSoundConfig(prev => {
      const updated = { ...prev, volume: Math.max(0, Math.min(1, volume)) };
      localStorage.setItem('soundConfig', JSON.stringify(updated));
      return updated;
    });
  };
  
  // Notification settings
  const toggleNotifications = () => {
    updateSettings({ notifications: !userSettings.notifications });
  };
  
  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkTheme);
    document.documentElement.classList.toggle('royal', userSettings.theme === 'royal');
  }, [isDarkTheme, userSettings.theme]);
  
  // Apply accessibility settings
  useEffect(() => {
    if (accessibilitySettings.textSize !== 100) {
      document.documentElement.style.fontSize = `${accessibilitySettings.textSize}%`;
    } else {
      document.documentElement.style.fontSize = '';
    }
    
    document.documentElement.classList.toggle('high-contrast', accessibilitySettings.highContrast);
    document.documentElement.classList.toggle('reduced-motion', accessibilitySettings.reducedMotion);
    document.documentElement.classList.toggle('reduced-transparency', accessibilitySettings.reducedTransparency);
  }, [accessibilitySettings]);
  
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
    setVolume,
    accessibilitySettings,
    updateAccessibilitySettings,
    profileSettings,
    updateProfileSettings,
    notifications: userSettings.notifications,
    toggleNotifications,
    isLoading
  };
  
  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
