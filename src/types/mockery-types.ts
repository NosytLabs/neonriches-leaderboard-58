export type MockeryAction =
  | 'tomato'
  | 'tomatoes' // Add alias for backward compatibility
  | 'egg'
  | 'eggs'     // Add alias for backward compatibility
  | 'crown'
  | 'stocks'
  | 'jester'
  | 'shame'
  | 'protection'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'putridEggs'
  | 'taunt'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'thumbsDown'
  | 'carrot'
  | 'target';

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal'     // Add royal tier
  | 'standard'  // Add standard tier
  | 'premium';  // Add premium tier

export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple'
  | 'none'
  | 'neutral'
  | 'silver'
  | 'bronze'
  | 'crimson';

// Re-export for module compatibility
export type { TeamColor as TeamType };

export interface TeamData {
  color: TeamColor;
  name: string;
  description: string;
  members: number;
  id: string;
  logoUrl: string;
  totalContribution: number;
  rank: number;
  previousRank: number;
  benefits: string[];
}

export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'premium' 
  | 'pro' 
  | 'royal' 
  | 'legendary';

export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  rank: number;
  previousRank: number;
  tier: UserTier | string;
  totalSpent: number;
  amountSpent?: number;
  team: TeamColor;
  walletBalance?: number;
  rankChange?: number;
  spendChange?: number;
  spentAmount?: number;
}

export interface LeaderboardFilter {
  timeframe: string;
  team?: string;
  limit: number;
}

// Use export type for type-only exports
export type { LeaderboardUser, LeaderboardFilter };
