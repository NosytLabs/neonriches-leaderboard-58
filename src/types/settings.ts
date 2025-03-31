
/**
 * Settings system type definitions
 */

export interface UserSettings {
  profileVisibility: 'public' | 'private' | 'friends';
  allowProfileLinks: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  notifications: boolean;
  emailNotifications: boolean;
  soundEffects: boolean;
  showEmailOnProfile: boolean;
  rankChangeAlerts: boolean;
  teamChangeAlerts: boolean;
  achievementAlerts: boolean;
  purchaseNotifications: boolean;
  depositNotifications: boolean;
  leaderboardUpdates: boolean;
  newFeatureAlerts: boolean;
  eventNotifications: boolean;
  marketingEmails: boolean; 
  showBadges: boolean;
  showAchievements: boolean;
  showSpendingAmount: boolean;
  showLastActive: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  publicProfile: boolean;
  allowMessages: boolean;
  language: string;
  darkMode?: boolean; // For backward compatibility
}

export interface SettingsContextType {
  userSettings: UserSettings;
  updateSettings: (settings: Partial<UserSettings>) => void;
  resetSettings: () => void;
  isDarkTheme: boolean;
  theme: 'light' | 'dark' | 'royal' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'royal' | 'system') => void;
  soundConfig: SoundConfig;
  toggleSounds: () => void;
  toggleMuted: () => void;
  togglePremium: () => void;
  setVolume: (volume: number) => void;
}

export interface SoundConfig {
  enabled: boolean;
  muted: boolean;
  volume: number;
  premium: boolean;
}
