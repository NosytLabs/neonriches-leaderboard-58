
// Let's extend or create the user types

export interface UserCosmetics {
  borders: string[];
  colors: string[];
  fonts: string[];
  emojis: string[];
  titles: string[];
  backgrounds: string[];
  effects: string[];
  badges: string[];
  themes: string[];
  foundersPass?: boolean;
  activeBorder?: string;
  activeColor?: string;
  activeFont?: string;
  activeEmoji?: string;
  activeBadge?: string;
  activeTheme?: string;
}

export interface ProfileBoost {
  id: string;
  effectId: string;
  startTime: number;
  endTime: number;
}

export interface AnalyticsData {
  views: number;
  clicks: number;
  follows: number;
  shareCount: number;
  sources: Record<string, number>;
  referrers: Record<string, number>;
  history: Array<{
    type: string;
    timestamp: Date;
    source?: string;
    referrer?: string;
  }>;
  viewsOverTime: Array<{
    date: string;
    count: number;
  }>;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  displayName?: string;
  bio?: string;
  avatar?: string;
  banner?: string;
  team?: 'red' | 'green' | 'blue' | null;
  spentAmount: number;
  rank: number;
  joinedAt: string;
  lastActive?: string;
  isVerified?: boolean;
  activeTitle?: string;
  profileBoosts?: ProfileBoost[];
  cosmetics?: UserCosmetics;
  settings?: {
    theme: 'dark' | 'light' | 'system';
    notifications: boolean;
    visibility: 'public' | 'private' | 'friends';
    marketingConsent: boolean;
    accountVisibility: 'public' | 'anonymous';
    linkSharing: boolean;
    analyticsSharing: boolean;
  };
}
