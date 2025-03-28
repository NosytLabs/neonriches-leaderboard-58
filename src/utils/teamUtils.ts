
import { TeamColor } from '@/types/teams';

export const teamData = {
  red: {
    id: 'red' as TeamColor,
    name: 'House of Crimson',
    description: 'The house of ambition and power, known for their fierce competitiveness.',
    icon: '🔥',
    color: '#e11d48',
    bgColor: 'rgba(225, 29, 72, 0.2)',
    members: 341,
    rank: 2
  },
  green: {
    id: 'green' as TeamColor,
    name: 'House of Emerald',
    description: 'The house of prosperity and growth, valuing creativity above all.',
    icon: '⚡',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.2)',
    members: 289,
    rank: 3
  },
  blue: {
    id: 'blue' as TeamColor,
    name: 'House of Sapphire',
    description: 'The house of wisdom and strategy, taking a calculated approach to success.',
    icon: '🌊',
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.2)',
    members: 412,
    rank: 1
  }
};

export const getTeamColor = (team?: string | null): string => {
  if (!team) return '';
  
  switch (team.toLowerCase()) {
    case 'red':
      return 'text-team-red';
    case 'green':
      return 'text-team-green';
    case 'blue':
      return 'text-team-blue';
    default:
      return '';
  }
};

export const getTeamBorderColor = (team?: string | null): string => {
  if (!team) return 'border-white/10';
  
  switch (team.toLowerCase()) {
    case 'red':
      return 'border-team-red';
    case 'green':
      return 'border-team-green';
    case 'blue':
      return 'border-team-blue';
    default:
      return 'border-white/10';
  }
};

export const getTeamName = (team?: string | null): string => {
  if (!team) return 'No Team';
  
  switch (team.toLowerCase()) {
    case 'red':
      return 'House of Crimson';
    case 'green':
      return 'House of Emerald';
    case 'blue':
      return 'House of Sapphire';
    default:
      return 'Unknown Team';
  }
};

export const getGenderTitle = (gender?: string | null): string => {
  if (!gender) return '';
  
  switch (gender.toLowerCase()) {
    case 'king':
      return 'His Majesty';
    case 'queen':
      return 'Her Majesty';
    case 'jester':
      return 'Court Jester';
    default:
      return '';
  }
};

export const getGenderEmoji = (gender?: string | null): string => {
  if (!gender) return '';
  
  switch (gender.toLowerCase()) {
    case 'king':
      return '👑';
    case 'queen':
      return '👸';
    case 'jester':
      return '🃏';
    default:
      return '';
  }
};

export const getInitials = (username: string): string => {
  if (!username) return '';
  
  return username
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
};
