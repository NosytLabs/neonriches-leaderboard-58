
// Use 'export type' for TeamColor and UserTier to fix isolated modules issue
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze' | 'crimson';
export type UserTier = 
  | 'free'
  | 'basic'
  | 'pro'
  | 'premium'
  | 'royal'
  | 'founder'
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'vip'
  | 'whale'
  | 'shark'
  | 'dolphin'
  | 'noble'
  | 'standard'
  | 'elite'
  | 'legendary';

export type MockeryAction = 
  | 'tomato' 
  | 'egg' 
  | 'rotten_egg'
  | 'putridEgg'
  | 'shame' 
  | 'mock' 
  | 'challenge' 
  | 'joust' 
  | 'duel' 
  | 'flame'
  | 'jester'
  | 'crown'
  | 'stocks'
  | 'silence'
  | 'thumbs_down'
  | 'taunt'
  | 'heart'
  | 'skull';

export type Gender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

export interface MockeryTier {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string; 
  features: string[];
  popular?: boolean;
  image?: string;
  ctaLabel?: string;
}

export interface MockeryUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team: TeamColor;
  tier: UserTier;
  spendStreak?: number;
}

export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  timestamp: string;
  fromUserId: string;
  toUserId: string;
  fromUsername: string;
  toUsername: string;
  amount?: number;
  message?: string;
  publicDisplay: boolean;
}

export interface MockeryStats {
  totalMockeries: number;
  mostReceivedType: MockeryAction;
  mostSentType: MockeryAction;
  totalReceived: number;
  totalSent: number;
  lastMockedBy?: string;
  lastMockedAt?: string;
}

// Gender represents the user's chosen gender display
export interface UserProfile {
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  team?: TeamColor;
  tier?: UserTier;
  totalSpent?: number;
  rank?: number;
  spendStreak?: number;
  isProtected?: boolean;
  mockeryStats?: MockeryStats;
  gender?: Gender;
}

// Re-export types for convenience and backward compatibility
export type { TeamColor as TeamColorType };
export type { UserTier as UserTierType };
export type { Gender as GenderType };
