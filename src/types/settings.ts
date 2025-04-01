
// User Settings Interface
export interface UserSettings {
  theme: string;
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  profileVisibility: 'public' | 'friends' | 'private';
  showBadges: boolean;
  showRank: boolean;
  darkMode: boolean;
  showTeam: boolean;
  showSpending: boolean;
  allowProfileLinks: boolean;
  marketingEmails: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
}

// Sound Configuration
export interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
  premium: boolean;
}

// Profile Settings
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

// Accessibility Settings
export interface AccessibilitySettings {
  textSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  reducedTransparency: boolean;
}

// Theme type
export type ThemeType = 'light' | 'dark' | 'royal' | 'system';

// All Settings Context Type
export interface SettingsContextType {
  // Basic settings
  userSettings: UserSettings;
  updateSettings: (settings: Partial<UserSettings>) => void;
  resetSettings: () => void;
  
  // Theme settings
  theme: ThemeType;
  isDarkTheme: boolean;
  setTheme: (theme: ThemeType) => void;
  
  // Sound settings
  soundConfig: SoundConfig;
  toggleSounds: () => void;
  toggleMuted: () => void;
  togglePremium: () => void;
  setVolume: (volume: number) => void;
  
  // Profile settings
  profileSettings: ProfileSettings;
  updateProfileSettings: (settings: Partial<ProfileSettings>) => void;
  
  // Notification settings
  notifications: boolean;
  toggleNotifications: () => void;
  
  // Accessibility settings
  accessibilitySettings: AccessibilitySettings;
  updateAccessibilitySettings: (settings: Partial<AccessibilitySettings>) => void;
  
  // Loading state
  isLoading: boolean;
}
