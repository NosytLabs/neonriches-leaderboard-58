
import { TeamColor } from '@/types/mockery-types';

/**
 * Comprehensive Team Utilities
 * Consolidates all team-related utility functions into a single file.
 */

// Team name utilities
export const getTeamName = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return 'Red Dragons';
    case 'blue':
      return 'Blue Knights';
    case 'green':
      return 'Green Rangers';
    case 'gold':
      return 'Gold Monarchs';
    case 'purple':
      return 'Purple Wizards';
    case 'silver':
      return 'Silver Sentinels';
    case 'bronze':
      return 'Bronze Guardians';
    case 'crimson':
      return 'Crimson Lords';
    case 'neutral':
      return 'Neutral Alliance';
    case 'none':
    default:
      return 'Unaligned';
  }
};

// Team color text utilities
export const getTeamColor = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return 'text-red-500';
    case 'blue':
      return 'text-blue-500';
    case 'green':
      return 'text-green-500';
    case 'gold':
      return 'text-amber-400';
    case 'purple':
      return 'text-purple-500';
    case 'silver':
      return 'text-gray-300';
    case 'bronze':
      return 'text-amber-700';
    case 'crimson':
      return 'text-red-700';
    case 'neutral':
      return 'text-gray-400';
    case 'none':
    default:
      return 'text-gray-500';
  }
};

// Team background colors
export const getTeamBgColor = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return 'bg-red-500';
    case 'blue':
      return 'bg-blue-500';
    case 'green':
      return 'bg-green-500';
    case 'gold':
      return 'bg-amber-400';
    case 'purple':
      return 'bg-purple-500';
    case 'silver':
      return 'bg-gray-300';
    case 'bronze':
      return 'bg-amber-700';
    case 'crimson':
      return 'bg-red-700';
    case 'neutral':
      return 'bg-gray-400';
    case 'none':
    default:
      return 'bg-gray-500';
  }
};

// Team border colors
export const getTeamBorderColor = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return 'border-red-500';
    case 'blue':
      return 'border-blue-500';
    case 'green':
      return 'border-green-500';
    case 'gold':
      return 'border-amber-400';
    case 'purple':
      return 'border-purple-500';
    case 'silver':
      return 'border-gray-300';
    case 'bronze':
      return 'border-amber-700';
    case 'crimson':
      return 'border-red-700';
    case 'neutral':
      return 'border-gray-400';
    case 'none':
    default:
      return 'border-gray-500';
  }
};

// Team motto utilities
export const getTeamMotto = (team: TeamColor): string => {
  switch (team) {
    case 'red':
      return "Blood and Gold Above All";
    case 'blue':
      return "Honor Through Service";
    case 'green':
      return "Fortune Favors the Bold";
    case 'gold':
      return "Glory Through Golden Prosperity";
    case 'purple':
      return "Power Through Royal Bloodlines";
    case 'silver':
      return "Wisdom Through Reflection";
    case 'bronze':
      return "Strength Through Persistence";
    case 'crimson':
      return "Victory Through Sacrifice";
    case 'neutral':
      return "Balance In All Things";
    case 'none':
    default:
      return "Status Through Spending";
  }
};

// Team benefits utilities
export const getTeamBenefits = (team: TeamColor): string[] => {
  const commonBenefits = ['Team profile badge', 'Team chat access', 'Team leaderboard'];
  
  const specificBenefits: Record<TeamColor, string[]> = {
    red: ['5% bonus on deposits', 'Red-themed profile items', 'Fire effects'],
    blue: ['Bonus profile visibility', 'Blue-themed profile items', 'Water effects'],
    green: ['10% discount on purchases', 'Green-themed profile items', 'Nature effects'],
    gold: ['Royal profile decorations', 'Gold-themed profile items', 'Sparkle effects'],
    purple: ['Exclusive profile badges', 'Purple-themed profile items', 'Magic effects'],
    silver: ['Fast transaction speed', 'Silver-themed profile items', 'Speed effects'],
    bronze: ['Strength boosts', 'Bronze-themed profile items', 'Armor effects'],
    crimson: ['Attack bonuses', 'Crimson-themed profile items', 'Blood effects'],
    neutral: ['Balance bonuses', 'Neutral-themed profile items', 'Zen effects'],
    none: ['Full independence', 'No team restrictions', 'Freedom to choose']
  };
  
  return [...commonBenefits, ...(specificBenefits[team] || [])];
};

// Team conversion utilities
export const asTeamColor = (team: string | TeamColor | null | undefined): TeamColor => {
  if (!team) return 'none';
  
  const validTeamColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral', 'silver', 'bronze', 'crimson'];
  if (validTeamColors.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  return 'none';
};

// Helper functions for leaderboard team display
export const getPositionChangeColor = (previousRank?: number, currentRank?: number) => {
  if (!previousRank) return 'text-white/60';
  if (previousRank > (currentRank || 0)) return 'text-green-500'; // Moved up
  if (previousRank < (currentRank || 0)) return 'text-red-500'; // Moved down
  return 'text-white/60'; // No change
};

export const getPositionChangeIcon = (previousRank?: number, currentRank?: number) => {
  if (!previousRank) return null;
  if (previousRank > (currentRank || 0)) return 'up';
  if (previousRank < (currentRank || 0)) return 'down';
  return null;
};

// For backwards compatibility
export const getTeamTailwindBgColor = getTeamBorderColor;
export const getTeamDisplayName = getTeamName;
export const getTeamColorClass = getTeamColor;

export default {
  getTeamName,
  getTeamColor,
  getTeamBgColor,
  getTeamBorderColor,
  getTeamTailwindBgColor,
  getTeamMotto,
  getTeamBenefits,
  asTeamColor,
  getTeamDisplayName,
  getTeamColorClass,
  getPositionChangeColor,
  getPositionChangeIcon
};
