
import { Crown, Award } from 'lucide-react';

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

export const getTeamColor = (team: string | null) => {
  switch (team) {
    case 'red': return 'text-royal-crimson';
    case 'green': return 'text-royal-gold';
    case 'blue': return 'text-royal-navy';
    default: return 'text-white/70';
  }
};

export const getTeamBorderColor = (team: string | null) => {
  switch (team) {
    case 'red': return 'border-royal-crimson';
    case 'green': return 'border-royal-gold';
    case 'blue': return 'border-royal-navy';
    default: return 'border-white/20';
  }
};

export const getTeamName = (team: string | null) => {
  switch (team) {
    case 'red': return 'Crimson Court';
    case 'green': return 'Golden Order';
    case 'blue': return 'Royal Navy';
    default: return 'Noble House';
  }
};

export const getGenderTitle = (gender: string | null) => {
  switch (gender) {
    case 'king': return 'His Majesty';
    case 'queen': return 'Her Majesty';
    case 'jester': return 'Court Jester';
    default: return 'Noble';
  }
};

export const getGenderEmoji = (gender: string | null) => {
  switch (gender) {
    case 'king': return '👑';
    case 'queen': return '👸';
    case 'jester': return '🃏';
    default: return '⚜️';
  }
};

export const getInitials = (name: string) => {
  return name.slice(0, 2).toUpperCase();
};

export const getRankIcon = (rank: number) => {
  if (rank === 1) return <Crown size={16} className="text-royal-gold" />;
  if (rank === 2) return <Award size={16} className="text-[#C0C0C0]" />;
  if (rank === 3) return <Award size={16} className="text-[#CD7F32]" />;
  return null;
};
