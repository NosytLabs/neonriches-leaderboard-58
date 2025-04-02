
// Create this file to include the MockeryAction type with 'carrot' and 'confetti'
import { TeamColor, UserTier } from './user';

export type MockeryAction = 
  | 'tomato' 
  | 'egg' 
  | 'flower' 
  | 'gold_star' 
  | 'crown' 
  | 'torch' 
  | 'shame_bell'
  | 'carrot'  // Added for PublicShamingFeature.tsx
  | 'confetti'; // Added for mockeryUtils.ts

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'premium'; // Added for mockeryUtils.ts

export interface MockedUser {
  id: string;
  username: string;
  profileImage: string;
  totalSpent: number;
  rank: number;
  tier: UserTier;
  team: TeamColor;
  action?: MockeryAction; // Added for use-mockery.tsx
}

export interface MockeryEvent {
  id: string;
  actionType: MockeryAction;
  fromUserId: string;
  fromUsername: string;
  targetUserId: string;
  targetUsername: string;
  timestamp: string;
  message?: string;
  toUserId?: string; // Added for use-mockery.tsx
}

export interface LeaderboardUser {
  id: string;
  username: string;
  profileImage: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  spendStreak?: number;
  walletBalance?: number;
  isVerified?: boolean;
  isVIP?: boolean;
  displayName?: string;
  isProtected?: boolean;
  amountSpent?: number;
  userId?: string;
  spentAmount?: number; // Added for mockData.ts
}

export interface MockeryAction {
  id: string;
  type: string;
  cost: number;
  name: string;
  description: string;
  iconUrl: string;
  rarity: string;
  cooldown: number;
}

export interface MockeryResponse {
  success: boolean;
  message: string;
  actionId?: string;
  mockedUserId?: string;
  tier?: MockeryTier;
}
