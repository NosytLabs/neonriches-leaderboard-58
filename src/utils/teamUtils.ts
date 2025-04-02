
import { TeamColor } from '@/types/mockery-types';

export const getTeamColor = (color: string): string => {
  switch (color) {
    case 'red':
      return 'text-red-500';
    case 'blue':
      return 'text-blue-500';
    case 'green':
      return 'text-green-500';
    case 'gold':
      return 'text-yellow-500';
    case 'purple':
      return 'text-purple-500';
    case 'silver':
      return 'text-gray-400';
    case 'bronze':
      return 'text-amber-700';
    case 'crimson':
      return 'text-rose-600';
    default:
      return 'text-white';
  }
};

export const getTeamName = (color: string): string => {
  switch (color) {
    case 'red':
      return 'Red Crown';
    case 'blue':
      return 'Blue Legion';
    case 'green':
      return 'Green Order';
    case 'gold':
      return 'Gold Dynasty';
    case 'purple':
      return 'Purple Realm';
    case 'silver':
      return 'Silver Alliance';
    case 'bronze':
      return 'Bronze Brigade';
    case 'crimson':
      return 'Crimson Court';
    default:
      return 'Neutral';
  }
};

export const getTeamTailwindBgColor = (color: string): string => {
  switch (color) {
    case 'red':
      return 'bg-red-500';
    case 'blue':
      return 'bg-blue-500';
    case 'green':
      return 'bg-green-500';
    case 'gold':
      return 'bg-yellow-500';
    case 'purple':
      return 'bg-purple-500';
    case 'silver':
      return 'bg-gray-400';
    case 'bronze':
      return 'bg-amber-700';
    case 'crimson':
      return 'bg-rose-600';
    default:
      return 'bg-gray-700';
  }
};

export const createTeamData = (
  color: TeamColor, 
  name: string, 
  description: string, 
  memberCount: number,
  totalSpent: number,
  rank: number
) => {
  return {
    id: color,
    name,
    description,
    color,
    memberCount,
    totalSpent,
    rank,
    logo: `/assets/teams/${color}.svg`,
    previousRank: rank + 1,
    totalContribution: totalSpent
  };
};
