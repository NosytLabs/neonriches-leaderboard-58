
export interface UserProfile {
  id: string;
  email: string;
  profileImage?: string;
  bio?: string;
  rank?: number;
  tier?: 'basic' | 'premium' | 'royal';
  profileViews?: number;
  profileClicks?: number;
  followers?: any[];
  links?: Array<{
    title: string;
    url: string;
    clicks?: number;
  }>;
  settings?: {
    profileVisibility?: 'public' | 'private' | 'followers' | 'friends';
    allowProfileLinks?: boolean;
    theme?: string;
    notifications?: boolean;
    emailNotifications?: boolean;
    marketingEmails?: boolean;
    showRank?: boolean;
    darkMode?: boolean;
    soundEffects?: boolean;
    showBadges?: boolean;
    showEmailOnProfile?: boolean;
    rankChangeAlerts?: boolean;
    showTeam?: boolean;
    showSpending?: boolean;
    newFollowerAlerts?: boolean;
    teamNotifications?: boolean;
  };
}
