
// Define the available team colors
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

// Define the available mockery actions
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'confetti'
  | 'flowers'
  | 'shame'
  | 'crown'
  | 'mock'
  | 'jester'
  | 'praise'
  | 'thumbsDown';

// Define the mockery tiers
export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal'
  | 'basic'
  | 'premium'
  | 'standard'
  | 'silver'
  | 'bronze';

// Define user tiers
export type UserTier = 
  | 'free'
  | 'basic'
  | 'premium'
  | 'elite'
  | 'royal'
  | 'founder';

// Define team data interface
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  members: number;
  totalSpent: number;
  totalContribution?: number;
  rank: number;
  previousRank: number;
  icon: string;
  logoUrl?: string;
  description: string;
}

// Define user interfaces for mockery system
export interface MockedUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  team: TeamColor;
  tier: UserTier;
}

export interface MockeryEvent {
  id: string;
  actionType: MockeryAction;
  fromUserId: string;
  toUserId: string;
  timestamp: string;
  seen: boolean;
}
