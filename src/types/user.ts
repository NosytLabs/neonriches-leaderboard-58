
export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  profileImage?: string;
  bio?: string;
  totalSpent: number;
  rank: number;
  team?: 'red' | 'green' | 'blue';
  joinedAt: string;
  links?: UserProfileLink[];
  boosts?: UserBoost[];
  mockeryHistory?: UserMockeryHistory[];
  mockeryProtection?: boolean;
  subscriptionTier?: 'free' | 'pro' | 'royal';
}

export interface UserProfileLink {
  id: string;
  url: string;
  title: string;
  icon?: string;
  clicks: number;
}

export interface UserBoost {
  id: string;
  boostId: string; // References a boost type
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface UserMockeryHistory {
  id: string;
  type: string;
  targetId?: string; // If user initiated mockery
  sourceId?: string; // If user was targeted
  date: string;
  status: 'active' | 'expired' | 'removed';
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  displayName: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team?: 'red' | 'green' | 'blue';
  hasRoyalStatus: boolean;
}
