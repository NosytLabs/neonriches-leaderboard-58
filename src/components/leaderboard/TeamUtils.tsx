
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

export interface LeaderboardUser {
  id: string;
  username: string;
  amountSpent: number;
  rank: number;
  team: 'red' | 'green' | 'blue' | null;
  profileImage?: string;
  gender?: 'king' | 'queen' | 'jester' | null;
}

export const mockLeaderboardData: LeaderboardUser[] = [
  { id: '1', username: 'RoyalOverlord', amountSpent: 2500, rank: 1, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=11', gender: 'king' },
  { id: '2', username: 'GoldenThrone', amountSpent: 2200, rank: 2, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=12', gender: 'queen' },
  { id: '3', username: 'WealthyNoble', amountSpent: 1900, rank: 3, team: 'blue', profileImage: 'https://i.pravatar.cc/150?img=13', gender: 'jester' },
  { id: '4', username: 'RegalSpender', amountSpent: 1650, rank: 4, team: 'red', profileImage: 'https://i.pravatar.cc/150?img=14', gender: 'king' },
  { id: '5', username: 'PurpleDuke', amountSpent: 1480, rank: 5, team: 'green', profileImage: 'https://i.pravatar.cc/150?img=15', gender: 'jester' },
];

// Function to get rank icon as a React element - fixing the ReactNode issue
export const getRankIcon = (rank: number): React.ReactNode => {
  if (rank === 1) return <Crown className="h-4 w-4 text-royal-gold" />;
  if (rank === 2) return <Award className="h-4 w-4 text-[#C0C0C0]" />;
  if (rank === 3) return <Award className="h-4 w-4 text-[#CD7F32]" />;
  return null;
};

// Get team short name (for abbreviations)
export const getTeamShortName = (team: string): string => {
  switch (team) {
    case 'red': return 'RORS';
    case 'green': return 'EEC';
    case 'blue': return 'CCC';
    default: return '';
  }
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
