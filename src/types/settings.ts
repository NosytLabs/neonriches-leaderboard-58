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
