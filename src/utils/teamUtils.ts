
import { TeamColor, TeamData } from '@/types/team';

/**
 * Convert a string to a valid TeamColor, defaulting to 'none' if not valid
 */
export const toTeamColor = (color?: string | null): TeamColor => {
  if (!color) return 'none';
  
  const validColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze', 'crimson'];
  return validColors.includes(color as TeamColor) ? (color as TeamColor) : 'none';
};

// Alias for toTeamColor for backward compatibility
export const asTeamColor = toTeamColor;

/**
 * Get team name from team color
 */
export const getTeamName = (team: TeamColor | string): string => {
  const teamNames: Record<string, string> = {
    'red': 'The Red Order',
    'blue': 'The Blue Guardians',
    'green': 'The Green Sentinels',
    'gold': 'The Gold Dynasty',
    'purple': 'The Purple Reign',
    'none': 'No Team',
    'neutral': 'Neutral',
    'silver': 'Silver League',
    'bronze': 'Bronze Division',
    'crimson': 'Crimson Knights'
  };
  
  return teamNames[team as string] || 'Unknown Team';
};

/**
 * Get team color for UI elements
 */
export const getTeamColor = (team: TeamColor | string): string => {
  const colorMap: Record<string, string> = {
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'gold': 'text-amber-400',
    'purple': 'text-purple-500',
    'none': 'text-gray-500',
    'neutral': 'text-gray-500',
    'silver': 'text-gray-300',
    'bronze': 'text-amber-600',
    'crimson': 'text-red-700'
  };
  
  return colorMap[team as string] || 'text-gray-500';
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
    none: 'bg-gray-500',
    neutral: 'bg-gray-500',
    silver: 'bg-gray-300',
    bronze: 'bg-amber-600',
    crimson: 'bg-red-700'
  };
  
  return colorMap[team as string] || 'bg-gray-500';
};

// Alias for getTeamTailwindBgColor
export const getTeamTailwindColor = getTeamTailwindBgColor;

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
    none: 'text-gray-500',
    neutral: 'text-gray-500',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    crimson: 'text-red-700'
  };
  
  return colorMap[team as string] || 'text-gray-500';
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
    none: 'border-gray-500',
    neutral: 'border-gray-500',
    silver: 'border-gray-300',
    bronze: 'border-amber-600',
    crimson: 'border-red-700'
  };
  
  return colorMap[team as string] || 'border-gray-500';
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
    none: '#6b7280', // gray-500
    neutral: '#6b7280', // gray-500
    silver: '#d1d5db', // gray-300
    bronze: '#d97706', // amber-600
    crimson: '#b91c1c' // red-700
  };
  
  return colorMap[team as string] || '#6b7280';
};

/**
 * Create mock team data
 */
export const createTeamData = (
  id: TeamColor | string,
  name: string,
  description: string,
  memberCount: number = 0,
  totalSpent: number = 0,
  rank: number = 0
): TeamData => {
  return {
    id: id.toString(),
    name,
    description,
    color: id as TeamColor,
    memberCount,
    members: memberCount,
    totalSpent,
    totalContribution: totalSpent,
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
