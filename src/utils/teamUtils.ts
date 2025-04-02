
import { TeamData, TeamColor } from '@/types/team';
import { TeamColor as TeamColorType } from '@/types/mockery-types';

/**
 * Convert a string to a valid TeamColor, defaulting to 'none' if not valid
 */
export const toTeamColor = (color?: string | null): TeamColor => {
  if (!color) return 'none';
  
  const validColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none'];
  return validColors.includes(color as TeamColor) ? (color as TeamColor) : 'none';
};

/**
 * Get tailwind background color class for a team
 */
export const getTeamTailwindBgColor = (team: TeamColor | string): string => {
  const colorMap: Record<string, string> = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    gold: 'bg-amber-400',
    purple: 'bg-purple-500',
    none: 'bg-gray-500'
  };
  
  return colorMap[team] || 'bg-gray-500';
};

/**
 * Get tailwind text color class for a team
 */
export const getTeamTailwindTextColor = (team: TeamColor | string): string => {
  const colorMap: Record<string, string> = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    gold: 'text-amber-400',
    purple: 'text-purple-500',
    none: 'text-gray-500'
  };
  
  return colorMap[team] || 'text-gray-500';
};

/**
 * Get border color class for a team
 */
export const getTeamBorderColor = (team: TeamColor | string): string => {
  const colorMap: Record<string, string> = {
    red: 'border-red-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    gold: 'border-amber-400',
    purple: 'border-purple-500',
    none: 'border-gray-500'
  };
  
  return colorMap[team] || 'border-gray-500';
};

/**
 * Get CSS color value for a team
 */
export const getTeamCssColor = (team: TeamColor | string): string => {
  const colorMap: Record<string, string> = {
    red: '#ef4444', // red-500
    blue: '#3b82f6', // blue-500
    green: '#22c55e', // green-500
    gold: '#f59e0b', // amber-500
    purple: '#a855f7', // purple-500
    none: '#6b7280' // gray-500
  };
  
  return colorMap[team] || '#6b7280';
};

/**
 * Create mock team data
 */
export const createTeamData = (
  id: TeamColor,
  name: string,
  description: string,
  memberCount: number,
  totalSpent: number,
  rank: number
): TeamData => {
  return {
    id: id,
    name,
    description,
    color: id,
    memberCount,
    members: memberCount,
    totalSpent,
    rank,
    logo: `/images/teams/${id}-logo.png`,
    icon: id === 'red' ? 'fire' : id === 'blue' ? 'shield' : id === 'green' ? 'leaf' : 'crown',
    motto: id === 'red' ? 'Burn Brightest' : id === 'blue' ? 'Stand United' : id === 'green' ? 'Grow Together' : 'Rule Supreme',
    leaderUsername: id === 'red' ? 'LordInferno' : id === 'blue' ? 'LadyAzure' : id === 'green' ? 'EmeraldKing' : 'GoldMonarch',
  };
};

/**
 * Add team ID if missing (useful for legacy data)
 */
export const addTeamId = (team: TeamData): TeamData => {
  if (!team.id && team.color) {
    return {
      ...team,
      id: team.color
    };
  }
  return team;
};
