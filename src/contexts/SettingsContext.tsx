
import React, { createContext, useState, useContext, useEffect } from 'react';
import { 
  SettingsContextType, 
  UserSettings, 
  SoundConfig, 
  ProfileSettings, 
  AccessibilitySettings 
} from '@/types/settings';

// Create the context with a default value
const SettingsContext = createContext<SettingsContextType | null>(null);

// Default settings
const defaultUserSettings: UserSettings = {
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
};

const defaultSoundConfig: SoundConfig = {
  enabled: true,
  muted: false,
  volume: 0.5,
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

export const SettingsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // State for all settings
  const [userSettings, setUserSettings] = useState<UserSettings>(defaultUserSettings);
  const [soundConfig, setSoundConfig] = useState<SoundConfig>(defaultSoundConfig);
  const [profileSettings, setProfileSettings] = useState<ProfileSettings>(defaultProfileSettings);
  const [accessibilitySettings, setAccessibilitySettings] = useState<AccessibilitySettings>(defaultAccessibilitySettings);
  const [isLoading, setIsLoading] = useState(false);
  
  // Theme-specific state
  const [theme, setThemeState] = useState<'light' | 'dark'>('dark');
  const isDarkTheme = theme === 'dark';
  
  // Load settings from localStorage on component mount
  useEffect(() => {
    const loadSettings = () => {
      try {
        setIsLoading(true);
        
        // Load user settings
        const savedUserSettings = localStorage.getItem('userSettings');
        if (savedUserSettings) {
          setUserSettings(JSON.parse(savedUserSettings));
        }
        
        // Load sound config
        const savedSoundConfig = localStorage.getItem('soundConfig');
        if (savedSoundConfig) {
          setSoundConfig(JSON.parse(savedSoundConfig));
        }
        
        // Load profile settings
        const savedProfileSettings = localStorage.getItem('profileSettings');
        if (savedProfileSettings) {
          setProfileSettings(JSON.parse(savedProfileSettings));
        }
        
        // Load accessibility settings
        const savedAccessibilitySettings = localStorage.getItem('accessibilitySettings');
        if (savedAccessibilitySettings) {
          setAccessibilitySettings(JSON.parse(savedAccessibilitySettings));
        }
        
        // Load theme
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (savedTheme) {
          setThemeState(savedTheme);
        }
      } catch (error) {
        console.error('Failed to load settings:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadSettings();
  }, []);
  
  // Save settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(userSettings));
  }, [userSettings]);
  
  useEffect(() => {
    localStorage.setItem('soundConfig', JSON.stringify(soundConfig));
  }, [soundConfig]);
  
  useEffect(() => {
    localStorage.setItem('profileSettings', JSON.stringify(profileSettings));
  }, [profileSettings]);
  
  useEffect(() => {
    localStorage.setItem('accessibilitySettings', JSON.stringify(accessibilitySettings));
  }, [accessibilitySettings]);
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  // Update settings functions
  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setUserSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  const resetSettings = () => {
    setUserSettings(defaultUserSettings);
    setSoundConfig(defaultSoundConfig);
    setProfileSettings(defaultProfileSettings);
    setAccessibilitySettings(defaultAccessibilitySettings);
    setThemeState('dark');
  };
  
  // Theme toggling functions
  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
  };
  
  // Sound functions
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
  
  // Profile settings functions
  const updateProfileSettings = (newSettings: Partial<ProfileSettings>) => {
    setProfileSettings(prev => ({ ...prev, ...newSettings }));
  };
  
  // Notifications toggle
  const toggleNotifications = () => {
    setUserSettings(prev => ({ ...prev, notifications: !prev.notifications }));
  };
  
  // Accessibility settings
  const updateAccessibilitySettings = (newSettings: Partial<AccessibilitySettings>) => {
    setAccessibilitySettings(prev => ({ ...prev, ...newSettings }));
  };
  
  // Context value
  const value: SettingsContextType = {
    userSettings,
    updateSettings,
    resetSettings,
    
    theme,
    isDarkTheme,
    setTheme,
    
    soundConfig,
    toggleSounds,
    toggleMuted,
    togglePremium,
    setVolume,
    
    profileSettings,
    updateProfileSettings,
    
    notifications: userSettings.notifications,
    toggleNotifications,
    
    accessibilitySettings,
    updateAccessibilitySettings,
    
    isLoading
  };
  
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

// Create a custom hook to access settings context
export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  
  if (!context) {
    console.error('useSettings must be used within a SettingsProvider');
    // Return default settings to prevent runtime errors
    return {
      // Basic settings
      userSettings: defaultUserSettings,
      updateSettings: () => {},
      resetSettings: () => {},
      
      // Theme settings
      theme: 'dark',
      isDarkTheme: true,
      setTheme: () => {},
      
      // Sound settings
      soundConfig: defaultSoundConfig,
      toggleSounds: () => {},
      toggleMuted: () => {},
      togglePremium: () => {},
      setVolume: () => {},
      
      // Profile settings
      profileSettings: defaultProfileSettings,
      updateProfileSettings: () => {},
      
      // Notification settings
      notifications: true,
      toggleNotifications: () => {},
      
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
