
import { TeamColor } from '@/types/mockery-types';

/**
 * Get the CSS text color class for a team color
 */
export const getTeamColor = (team: TeamColor): string => {
  const colorMap: Record<TeamColor, string> = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    gold: 'text-yellow-400',
    purple: 'text-purple-500',
    none: 'text-gray-400',
    neutral: 'text-slate-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    crimson: 'text-red-700'
  };
  
  return colorMap[team] || 'text-gray-400';
};

/**
 * Get the display name for a team color
 */
export const getTeamName = (team: TeamColor): string => {
  const nameMap: Record<TeamColor, string> = {
    red: 'Red Team',
    blue: 'Blue Team',
    green: 'Green Team',
    gold: 'Gold Team',
    purple: 'Purple Team',
    none: 'No Team',
    neutral: 'Neutral',
    silver: 'Silver Team',
    bronze: 'Bronze Team',
    crimson: 'Crimson Team'
  };
  
  return nameMap[team] || 'Unknown Team';
};

/**
 * Get the Tailwind background color class for a team color
 */
export const getTeamTailwindBgColor = (team: TeamColor): string => {
  const bgColorMap: Record<TeamColor, string> = {
    red: 'border-red-500',
    blue: 'border-blue-500',
    green: 'border-green-500',
    gold: 'border-yellow-400',
    purple: 'border-purple-500',
    none: 'border-gray-400',
    neutral: 'border-slate-400',
    silver: 'border-gray-300',
    bronze: 'border-amber-600',
    crimson: 'border-red-700'
  };
  
  return bgColorMap[team] || 'border-gray-400';
};

export default {
  getTeamColor,
  getTeamName,
  getTeamTailwindBgColor
};
