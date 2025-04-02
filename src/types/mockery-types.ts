
import { TeamColor, UserTier } from "./user-types";
import { LeaderboardUser } from "./leaderboard";

// Add or update the action type
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'pie'
  | 'fish'
  | 'carrot'
  | 'flowers'
  | 'gold'
  | 'jester'
  | 'crown'
  | 'stocks'
  | 'shame'
  | 'protection'
  | 'mock'
  | 'denounce'
  | 'taunt'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'; 

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

export interface MockeryOptions {
  userId: string;
  action: MockeryAction;
  amount?: number;
  message?: string;
  anonymous?: boolean;
}

export interface MockeryResult {
  success: boolean;
  message: string;
  transaction?: MockeryTransaction;
  error?: string;
}

export interface MockeryTransaction {
  id: string;
  fromUserId: string;
  toUserId: string;
  action: MockeryAction;
  amount: number;
  timestamp: string;
  message?: string;
  anonymous: boolean;
}

export interface MockeryStats {
  totalReceived: {
    [key in MockeryAction]?: number;
  };
  totalSent: {
    [key in MockeryAction]?: number;
  };
  mostReceivedFrom: string[];
  mostSentTo: string[];
  rank?: number;
}

export interface MockeryLeaderboardEntry {
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  totalReceived: number;
  totalSent: number;
  mostReceivedAction?: MockeryAction;
  stats: {
    [key in MockeryAction]?: number;
  };
}

export interface TeamMockeryStats {
  teamId: string;
  teamName: string;
  teamColor: TeamColor;
  totalReceived: number;
  totalSent: number;
  memberCount: number;
  perMemberAverage: number;
  stats: {
    [key in MockeryAction]?: number;
  };
}

// Export TeamData type for compatibility with other code
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  logoUrl: string;
  members: number;
  totalContribution: number;
  rank?: number;
  previousRank?: number;
  description?: string;
}

// Re-export LeaderboardUser to avoid confusion
export type { LeaderboardUser };
