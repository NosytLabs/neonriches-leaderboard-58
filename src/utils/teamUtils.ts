
import { TeamColor } from '@/types/mockery-types';

/**
 * Converts any string to a TeamColor safely
 */
export const asTeamColor = (team: string | null | undefined): TeamColor => {
  if (!team) return 'none';
  
  const teamLower = team.toLowerCase();
  
  switch (teamLower) {
    case 'red':
    case 'blue':
    case 'green':
    case 'gold':
    case 'purple':
    case 'none':
    case 'neutral':
    case 'silver':
    case 'bronze':
    case 'crimson':
      return teamLower as TeamColor;
    default:
      return 'none';
  }
};

/**
 * Get the team color for UI display
 */
export const getTeamColor = (team: TeamColor): string => {
  switch (team) {
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
      return 'text-amber-500';
    case 'crimson':
      return 'text-red-600';
    case 'neutral':
    case 'none':
    default:
      return 'text-white/60';
  }
};

/**
 * Get the team name for display
 */
export const getTeamName = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return 'Red Empire';
    case 'blue':
      return 'Blue Dynasty';
    case 'green':
      return 'Green Kingdom';
    case 'gold':
      return 'Gold Realm';
    case 'purple':
      return 'Purple Monarchy';
    case 'silver':
      return 'Silver Domain';
    case 'bronze':
      return 'Bronze Legion';
    case 'crimson':
      return 'Crimson Order';
    case 'neutral':
      return 'Neutral';
    case 'none':
    default:
      return 'No Team';
  }
};

/**
 * Get the background color class for a team
 */
export const getTeamBgColor = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return 'bg-red-500/10';
    case 'blue':
      return 'bg-blue-500/10';
    case 'green':
      return 'bg-green-500/10';
    case 'gold':
      return 'bg-yellow-500/10';
    case 'purple':
      return 'bg-purple-500/10';
    case 'silver':
      return 'bg-gray-400/10';
    case 'bronze':
      return 'bg-amber-500/10';
    case 'crimson':
      return 'bg-red-600/10';
    case 'neutral':
    case 'none':
    default:
      return 'bg-white/5';
  }
};

export default {
  asTeamColor,
  getTeamColor,
  getTeamName,
  getTeamBgColor
};
