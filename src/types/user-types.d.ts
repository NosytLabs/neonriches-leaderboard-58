
// Create a consolidated user types file to resolve reference issues
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'none'
  | 'purple'
  | 'silver'
  | 'bronze'
  | 'crimson'
  | 'neutral';

export interface UserProfile {
  id: string;
  username: string;
  displayName?: string;
  bio?: string;
  profileImage?: string;
  rank?: number;
  team?: TeamColor;
  tier?: UserTier;
  joinedDate: string;
  amountSpent: number;
  totalSpent?: number;
  settings?: UserSettings;
}

export interface UserSettings {
  notifications: boolean;
  privacy: {
    showProfile: boolean;
    showSpending: boolean;
  };
  appearance: {
    theme: string;
    fontSize: string;
  };
}

export type UserTier = 
  | 'basic' 
  | 'bronze' 
  | 'silver' 
  | 'gold' 
  | 'platinum' 
  | 'diamond' 
  | 'royal'
  | 'free'
  | 'premium'
  | 'founder';

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  title: string;
  enabled?: boolean;
}

export type TeamType = TeamColor;
