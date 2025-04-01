
export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  marketingEmails: boolean;
  showRank: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  showBadges: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showEmailOnProfile?: boolean;
  rankChangeAlerts?: boolean;
  newFollowerAlerts?: boolean;
  teamNotifications?: boolean;
}

export interface AccessibilitySettings {
  textSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  reducedTransparency: boolean;
}

export interface ProfileSettings {
  publicProfile: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  rankChangeAlerts?: boolean;
  teamChangeAlerts?: boolean;
  achievementAlerts?: boolean;
  showEmailOnProfile?: boolean;
}

export interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
  premium: boolean;
}

export interface SettingsContextType {
  userSettings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => void;
  resetSettings: () => void;
  isDarkTheme: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'royal' | 'system') => void;
  soundConfig: SoundConfig;
  toggleSounds: () => void;
  toggleMuted: () => void;
  togglePremium: () => void;
  setVolume: (volume: number) => void;

  // Added properties for settings components
  accessibilitySettings: AccessibilitySettings;
  updateAccessibilitySettings: (settings: Partial<AccessibilitySettings>) => void;
  profileSettings: ProfileSettings;
  updateProfileSettings: (settings: Partial<ProfileSettings>) => void;
  notifications: boolean;
  toggleNotifications: () => void;
  isLoading: boolean;
}
