
import { TeamColor } from '@/types/team';

/**
 * Get the display name for a team color
 */
export const getTeamName = (teamColor: TeamColor | string | null | undefined): string => {
  if (!teamColor) return 'No Team';
  
  const teamNames: Record<string, string> = {
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
  
  return teamNames[teamColor.toLowerCase()] || 'Unknown Team';
};

/**
 * Get the CSS color class for a team color
 */
export const getTeamColor = (teamColor: TeamColor | string | null | undefined): string => {
  if (!teamColor) return 'text-gray-400';
  
  const colorClasses: Record<string, string> = {
    red: 'text-red-500',
    blue: 'text-blue-500',
    green: 'text-green-500',
    gold: 'text-yellow-500',
    purple: 'text-purple-500',
    none: 'text-gray-400',
    neutral: 'text-gray-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-700',
    crimson: 'text-red-800'
  };
  
  return colorClasses[teamColor.toLowerCase()] || 'text-gray-400';
};

/**
 * Get the CSS background color class for a team color
 */
export const getTeamBgColor = (teamColor: TeamColor | string | null | undefined): string => {
  if (!teamColor) return 'bg-gray-800';
  
  const bgClasses: Record<string, string> = {
    red: 'bg-red-900/20',
    blue: 'bg-blue-900/20',
    green: 'bg-green-900/20',
    gold: 'bg-yellow-900/20',
    purple: 'bg-purple-900/20',
    none: 'bg-gray-800',
    neutral: 'bg-gray-800',
    silver: 'bg-gray-700',
    bronze: 'bg-amber-900/20',
    crimson: 'bg-red-950/30'
  };
  
  return bgClasses[teamColor.toLowerCase()] || 'bg-gray-800';
};

/**
 * Get the CSS border color class for a team color
 */
export const getTeamBorderColor = (teamColor: TeamColor | string | null | undefined): string => {
  if (!teamColor) return 'border-gray-700';
  
  const borderClasses: Record<string, string> = {
    red: 'border-red-500/30',
    blue: 'border-blue-500/30',
    green: 'border-green-500/30',
    gold: 'border-yellow-500/30',
    purple: 'border-purple-500/30',
    none: 'border-gray-700',
    neutral: 'border-gray-700',
    silver: 'border-gray-500',
    bronze: 'border-amber-700/30',
    crimson: 'border-red-800/30'
  };
  
  return borderClasses[teamColor.toLowerCase()] || 'border-gray-700';
};

export default {
  getTeamName,
  getTeamColor,
  getTeamBgColor,
  getTeamBorderColor
};
