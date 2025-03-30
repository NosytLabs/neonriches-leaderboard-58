
import { Crown, Award } from 'lucide-react';
import { 
  getTeamColor, 
  getTeamBorderColor, 
  getTeamName, 
  getGenderTitle, 
  getGenderEmoji, 
  getInitials 
} from '@/utils/teamUtils';
import React from 'react';
import { TeamType, UserTier } from '@/types/user';

export interface LeaderboardUser {
  id: string;
  username: string;
  amountSpent: number;
  rank: number;
  team: TeamType | null;
  tier?: UserTier;
  spentAmount?: number;
  profileImage?: string;
  gender?: 'king' | 'queen' | 'jester' | null;
  displayName?: string;
  previousRank?: number;
  walletBalance?: number;
  totalSpent?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  avatarUrl?: string;
}

export const mockLeaderboardData: LeaderboardUser[] = [
  { id: '1', username: 'RoyalOverlord', amountSpent: 2500, rank: 1, team: 'red', tier: 'royal', profileImage: 'https://i.pravatar.cc/150?img=11', gender: 'king' },
  { id: '2', username: 'GoldenThrone', amountSpent: 2200, rank: 2, team: 'green', tier: 'premium', profileImage: 'https://i.pravatar.cc/150?img=12', gender: 'queen' },
  { id: '3', username: 'WealthyNoble', amountSpent: 1900, rank: 3, team: 'blue', tier: 'premium', profileImage: 'https://i.pravatar.cc/150?img=13', gender: 'jester' },
  { id: '4', username: 'RegalSpender', amountSpent: 1650, rank: 4, team: 'red', tier: 'basic', profileImage: 'https://i.pravatar.cc/150?img=14', gender: 'king' },
  { id: '5', username: 'PurpleDuke', amountSpent: 1480, rank: 5, team: 'green', tier: 'free', profileImage: 'https://i.pravatar.cc/150?img=15', gender: 'jester' },
];

// Function to get rank icon as a React element - fixing the ReactNode issue
export const getRankIcon = (rank: number): React.ReactNode => {
  if (rank === 1) return <Crown className="h-4 w-4 text-royal-gold" />;
  if (rank === 2) return <Award className="h-4 w-4 text-[#C0C0C0]" />;
  if (rank === 3) return <Award className="h-4 w-4 text-[#CD7F32]" />;
  return null;
};

// Re-export the utilities for backward compatibility and easier imports
export { 
  getTeamColor, 
  getTeamBorderColor, 
  getTeamName, 
  getGenderTitle, 
  getGenderEmoji, 
  getInitials
};
