
import { TeamColor } from '@/types/teams';

// Team color utilities
export const getTeamColor = (team: string | null): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'text-team-red text-royal-crimson';
    case 'green': return 'text-team-green text-royal-gold';
    case 'blue': return 'text-team-blue text-royal-navy';
    default: return 'text-white/70';
  }
};

export const getTeamBgColor = (team: string | null): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'bg-team-red bg-royal-crimson/20';
    case 'green': return 'bg-team-green bg-royal-gold/20';
    case 'blue': return 'bg-team-blue bg-royal-navy/20';
    default: return 'bg-white/10';
  }
};

export const getTeamBorderColor = (team: string | null): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'border-team-red border-royal-crimson';
    case 'green': return 'border-team-green border-royal-gold';
    case 'blue': return 'border-team-blue border-royal-navy';
    default: return 'border-white/20';
  }
};

export const getTeamShadowColor = (team: string | null): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'shadow-team-red/20 shadow-royal-crimson/20';
    case 'green': return 'shadow-team-green/20 shadow-royal-gold/20';
    case 'blue': return 'shadow-team-blue/20 shadow-royal-navy/20';
    default: return 'shadow-white/20';
  }
};

export const getTeamName = (team: string | null): string => {
  switch (team?.toLowerCase()) {
    case 'red': return 'Crimson Court';
    case 'green': return 'Golden Order';
    case 'blue': return 'Royal Navy';
    default: return 'Noble House';
  }
};

// Team data constant
export const teamData = {
  red: {
    id: 'red' as TeamColor,
    name: 'Red Team',
    description: 'The fiery warriors of the neon flame',
    icon: '🔥',
    color: '#FF4560',
    bgColor: 'rgba(255, 69, 96, 0.2)',
    members: 1205,
    rank: 2
  },
  green: {
    id: 'green' as TeamColor,
    name: 'Green Team',
    description: 'The electrifying force of the lime zap',
    icon: '⚡',
    color: '#00E396',
    bgColor: 'rgba(0, 227, 150, 0.2)',
    members: 983,
    rank: 3
  },
  blue: {
    id: 'blue' as TeamColor,
    name: 'Blue Team',
    description: 'The mesmerizing flow of the cool pulse',
    icon: '💧',
    color: '#008FFB',
    bgColor: 'rgba(0, 143, 251, 0.2)',
    members: 1347,
    rank: 1
  }
};

// Gender/rank title utilities
export const getGenderTitle = (gender: string | null): string => {
  switch (gender) {
    case 'king': return 'His Majesty';
    case 'queen': return 'Her Majesty';
    case 'jester': return 'Court Jester';
    default: return 'Noble';
  }
};

export const getGenderEmoji = (gender: string | null): string => {
  switch (gender) {
    case 'king': return '👑';
    case 'queen': return '👸';
    case 'jester': return '🃏';
    default: return '⚜️';
  }
};

export const getInitials = (name: string): string => {
  return name.slice(0, 2).toUpperCase();
};

// Rank utilities
export const getRankIcon = (rank: number) => {
  if (rank === 1) return { icon: 'crown', color: 'text-royal-gold' };
  if (rank === 2) return { icon: 'award', color: 'text-[#C0C0C0]' };
  if (rank === 3) return { icon: 'award', color: 'text-[#CD7F32]' };
  return null;
};
