
import { TeamType, TeamColor } from '@/types/user';

/**
 * Gets the display name for a team
 */
export const getTeamName = (team?: TeamType | null): string => {
  if (!team) return 'No Team';
  
  switch (team) {
    case 'red': return 'Red Knights';
    case 'blue': return 'Blue Mages';
    case 'green': return 'Green Rangers';
    case 'gold': return 'Gold Monarchs';
    case 'purple': return 'Purple Assassins';
    default: return `Team ${team.charAt(0).toUpperCase() + team.slice(1)}`;
  }
};

/**
 * Gets the color class for a team
 */
export const getTeamColor = (team?: TeamType | TeamColor | null): string => {
  if (!team) return 'text-gray-400';
  
  switch (team) {
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'green': return 'text-green-500';
    case 'gold': return 'text-royal-gold';
    case 'purple': return 'text-purple-500';
    default: return 'text-gray-400';
  }
};

/**
 * Gets the background color class for a team
 */
export const getTeamBgColor = (team?: TeamType | TeamColor | null): string => {
  if (!team) return 'bg-gray-800/50';
  
  switch (team) {
    case 'red': return 'bg-red-500/20';
    case 'blue': return 'bg-blue-500/20';
    case 'green': return 'bg-green-500/20';
    case 'gold': return 'bg-amber-500/20';
    case 'purple': return 'bg-purple-500/20';
    default: return 'bg-gray-800/50';
  }
};

/**
 * Gets the border color class for a team
 */
export const getTeamBorderColor = (team?: TeamType | TeamColor | null): string => {
  if (!team) return 'border-gray-700';
  
  switch (team) {
    case 'red': return 'border-red-500/70';
    case 'blue': return 'border-blue-500/70';
    case 'green': return 'border-green-500/70';
    case 'gold': return 'border-amber-500/70';
    case 'purple': return 'border-purple-500/70';
    default: return 'border-gray-700';
  }
};

/**
 * Gets the team icon name
 */
export const getTeamIcon = (team?: TeamType | TeamColor | null): string => {
  if (!team) return 'users';
  
  switch (team) {
    case 'red': return 'sword';
    case 'blue': return 'wand';
    case 'green': return 'bow-arrow';
    case 'gold': return 'crown';
    case 'purple': return 'dagger';
    default: return 'users';
  }
};

// For backward compatibility
export const getTeamColorClass = getTeamColor;
export const getTeamBgColorClass = getTeamBgColor;
export const getTeamBorderColorClass = getTeamBorderColor;
