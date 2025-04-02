
import { TeamColor } from '@/types/mockery-types';

/**
 * Get the display name for a team
 */
export const getTeamName = (team: TeamColor | string): string => {
  const teamNames: Record<string, string> = {
    'red': 'Red Kingdom',
    'blue': 'Blue Dynasty',
    'green': 'Green Republic',
    'gold': 'Gold Empire',
    'purple': 'Purple Monarchy',
    'silver': 'Silver Legion',
    'bronze': 'Bronze Guild',
    'crimson': 'Crimson Court',
    'none': 'Neutral',
    'neutral': 'Independent'
  };
  
  return teamNames[team as string] || 'Unknown Team';
};

/**
 * Get the primary color for a team as a CSS color value
 */
export const getTeamColor = (team: TeamColor | string): string => {
  const teamColors: Record<string, string> = {
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'gold': 'text-yellow-500',
    'purple': 'text-purple-500',
    'silver': 'text-gray-400',
    'bronze': 'text-amber-700',
    'crimson': 'text-red-800',
    'none': 'text-gray-500',
    'neutral': 'text-gray-400'
  };
  
  return teamColors[team as string] || 'text-gray-500';
};

/**
 * Get the background color for a team as a Tailwind class
 */
export const getTeamBgColor = (team: TeamColor | string): string => {
  const bgColors: Record<string, string> = {
    'red': 'bg-red-500',
    'blue': 'bg-blue-500',
    'green': 'bg-green-500',
    'gold': 'bg-yellow-500',
    'purple': 'bg-purple-500',
    'silver': 'bg-gray-400',
    'bronze': 'bg-amber-700',
    'crimson': 'bg-red-800',
    'none': 'bg-gray-500',
    'neutral': 'bg-gray-400'
  };
  
  return bgColors[team as string] || 'bg-gray-500';
};

/**
 * Get the Tailwind border color for a team
 */
export const getTeamBorderColor = (team: TeamColor | string): string => {
  const borderColors: Record<string, string> = {
    'red': 'border-red-500',
    'blue': 'border-blue-500',
    'green': 'border-green-500',
    'gold': 'border-yellow-500',
    'purple': 'border-purple-500',
    'silver': 'border-gray-400',
    'bronze': 'border-amber-700',
    'crimson': 'border-red-800',
    'none': 'border-gray-500',
    'neutral': 'border-gray-400'
  };
  
  return borderColors[team as string] || 'border-gray-500';
};

/**
 * Get the Tailwind background color for a team
 */
export const getTeamTailwindBgColor = (team: TeamColor | string): string => {
  const bgColors: Record<string, string> = {
    'red': 'border-red-500/50',
    'blue': 'border-blue-500/50',
    'green': 'border-green-500/50',
    'gold': 'border-yellow-500/50',
    'purple': 'border-purple-500/50',
    'silver': 'border-gray-400/50',
    'bronze': 'border-amber-700/50',
    'crimson': 'border-red-800/50',
    'none': 'border-gray-500/50',
    'neutral': 'border-gray-400/50'
  };
  
  return bgColors[team as string] || 'border-gray-500/50';
};
