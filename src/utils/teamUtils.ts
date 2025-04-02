
import { TeamColor } from '@/types/mockery-types';

// Team color utilities

/**
 * Get the Tailwind text color class for a team
 */
export const getTeamColor = (team: TeamColor | string | null): string => {
  const teamColors: Record<string, string> = {
    'red': 'text-red-500',
    'blue': 'text-blue-500',
    'green': 'text-green-500',
    'gold': 'text-yellow-400',
    'purple': 'text-purple-500',
    'silver': 'text-gray-300',
    'bronze': 'text-amber-600',
    'crimson': 'text-red-700',
    'neutral': 'text-slate-400',
    'none': 'text-gray-400'
  };
  
  return team && teamColors[team] ? teamColors[team] : 'text-gray-400';
};

/**
 * Get the Tailwind background color class for a team
 */
export const getTeamBgColor = (team: TeamColor | string | null): string => {
  const teamBgColors: Record<string, string> = {
    'red': 'bg-red-100 dark:bg-red-900/20',
    'blue': 'bg-blue-100 dark:bg-blue-900/20',
    'green': 'bg-green-100 dark:bg-green-900/20',
    'gold': 'bg-yellow-100 dark:bg-yellow-900/20',
    'purple': 'bg-purple-100 dark:bg-purple-900/20',
    'silver': 'bg-gray-100 dark:bg-gray-700/20',
    'bronze': 'bg-amber-100 dark:bg-amber-900/20',
    'crimson': 'bg-red-100 dark:bg-red-950/30',
    'neutral': 'bg-slate-100 dark:bg-slate-800/20',
    'none': 'bg-gray-100 dark:bg-gray-800/10'
  };
  
  return team && teamBgColors[team] ? teamBgColors[team] : 'bg-gray-100 dark:bg-gray-800/10';
};

/**
 * Get the Tailwind border color class for a team
 */
export const getTeamBorderColor = (team: TeamColor | string | null): string => {
  const teamBorderColors: Record<string, string> = {
    'red': 'border-red-500',
    'blue': 'border-blue-500',
    'green': 'border-green-500',
    'gold': 'border-yellow-400',
    'purple': 'border-purple-500',
    'silver': 'border-gray-300',
    'bronze': 'border-amber-600',
    'crimson': 'border-red-700',
    'neutral': 'border-slate-400',
    'none': 'border-gray-400'
  };
  
  return team && teamBorderColors[team] ? teamBorderColors[team] : 'border-gray-400';
};

/**
 * Get the display name for a team
 */
export const getTeamName = (team: TeamColor | string | null): string => {
  const teamNames: Record<string, string> = {
    'red': 'Red Team',
    'blue': 'Blue Team',
    'green': 'Green Team',
    'gold': 'Gold Team',
    'purple': 'Purple Team',
    'silver': 'Silver Team',
    'bronze': 'Bronze Team',
    'crimson': 'Crimson Team',
    'neutral': 'Neutral',
    'none': 'No Team'
  };
  
  return team && teamNames[team] ? teamNames[team] : 'Unknown Team';
};

/**
 * Get the motto for a team
 */
export const getTeamMotto = (team: TeamColor | string | null): string => {
  const teamMottos: Record<string, string> = {
    'red': 'Fire and Passion!',
    'blue': 'Calm and Determined!',
    'green': 'Growth and Prosperity!',
    'gold': 'Wealth and Glory!',
    'purple': 'Royalty and Power!',
    'silver': 'Swift and Clever!',
    'bronze': 'Strong and Steadfast!',
    'crimson': 'Bold and Fearless!',
    'neutral': 'Balanced and Fair!',
    'none': 'Independent and Free!'
  };
  
  return team && teamMottos[team] ? teamMottos[team] : 'Join a team today!';
};

/**
 * Get the benefits for a team
 */
export const getTeamBenefits = (team: TeamColor | string | null): string[] => {
  const commonBenefits = ['Team profile badge', 'Team chat access', 'Team leaderboard'];
  
  if (!team) return commonBenefits;
  
  const specificBenefits: Record<string, string[]> = {
    'red': ['5% bonus on deposits', 'Red-themed profile items', 'Fire effects'],
    'blue': ['Bonus profile visibility', 'Blue-themed profile items', 'Water effects'],
    'green': ['10% discount on purchases', 'Green-themed profile items', 'Nature effects'],
    'gold': ['Royal profile decorations', 'Gold-themed profile items', 'Sparkle effects'],
    'purple': ['Exclusive profile badges', 'Purple-themed profile items', 'Magic effects'],
    'silver': ['Fast transaction speed', 'Silver-themed profile items', 'Speed effects'],
    'bronze': ['Strength boosts', 'Bronze-themed profile items', 'Armor effects'],
    'crimson': ['Attack bonuses', 'Crimson-themed profile items', 'Blood effects'],
    'neutral': ['Balance bonuses', 'Neutral-themed profile items', 'Zen effects'],
    'none': ['Full independence', 'No team restrictions', 'Freedom to choose']
  };
  
  return specificBenefits[team] ? 
    [...commonBenefits, ...specificBenefits[team]] : 
    commonBenefits;
};

/**
 * Get the icon name for a team
 */
export const getTeamIcon = (team: TeamColor | string | null): string => {
  const teamIcons: Record<string, string> = {
    'red': 'Flame',
    'blue': 'Droplet',
    'green': 'Leaf',
    'gold': 'Crown',
    'purple': 'Sparkles',
    'silver': 'Wind',
    'bronze': 'Shield',
    'crimson': 'Sword',
    'neutral': 'Scale',
    'none': 'User'
  };
  
  return team && teamIcons[team] ? teamIcons[team] : 'Users';
};

// Export all team utilities
export default {
  getTeamColor,
  getTeamBgColor,
  getTeamBorderColor,
  getTeamName,
  getTeamMotto,
  getTeamBenefits,
  getTeamIcon
};
