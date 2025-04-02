
import { TeamColor } from '@/types/team';

/**
 * Get the tailwind color class for a team
 */
export const getTeamColor = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'green': return 'text-green-500';
    case 'gold': return 'text-yellow-400';
    case 'purple': return 'text-purple-500';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-600';
    case 'crimson': return 'text-red-600';
    default: return 'text-gray-400'; // For none or neutral
  }
};

/**
 * Get the background color class for a team
 */
export const getTeamTailwindBgColor = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'bg-red-500';
    case 'blue': return 'bg-blue-500';
    case 'green': return 'bg-green-500';
    case 'gold': return 'bg-yellow-400';
    case 'purple': return 'bg-purple-500';
    case 'silver': return 'bg-gray-300';
    case 'bronze': return 'bg-amber-600';
    case 'crimson': return 'bg-red-600';
    default: return 'bg-gray-400'; // For none or neutral
  }
};

/**
 * Get the team name from its color code
 */
export const getTeamName = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'Red Team';
    case 'blue': return 'Blue Team';
    case 'green': return 'Green Team';
    case 'gold': return 'Gold Team';
    case 'purple': return 'Purple Team';
    case 'silver': return 'Silver Team';
    case 'bronze': return 'Bronze Team';
    case 'crimson': return 'Crimson Team';
    case 'neutral': return 'Neutral';
    default: return 'Unaffiliated';
  }
};

/**
 * Get the team motto from its color code
 */
export const getTeamMotto = (team: TeamColor): string => {
  switch (team) {
    case 'red': return 'Strength and Power';
    case 'blue': return 'Wisdom and Loyalty';
    case 'green': return 'Growth and Prosperity';
    case 'gold': return 'Wealth and Ambition';
    case 'purple': return 'Mystery and Royalty';
    case 'silver': return 'Elegance and Grace';
    case 'bronze': return 'Foundation and History';
    case 'crimson': return 'Blood and Glory';
    case 'neutral': return 'Balance in All Things';
    default: return 'Independent and Free';
  }
};

/**
 * Get team benefits from its color code
 */
export const getTeamBenefits = (team: TeamColor): string[] => {
  switch (team) {
    case 'red': return [
      'Damage bonus in team competitions',
      'Early access to combat events',
      'Loyalty rewards for long-term members'
    ];
    case 'blue': return [
      'Cooldown reduction on abilities',
      'Bonus reputation with scholars',
      'Access to exclusive knowledge bases'
    ];
    case 'green': return [
      'Resource gathering bonus',
      'Growth-related achievements unlock faster',
      'Environmentally-friendly status effects'
    ];
    case 'gold': return [
      'Increased currency drops',
      'Merchant discounts in the marketplace',
      'Bonus rewards from treasure events'
    ];
    case 'purple': return [
      'Exclusive cosmetic items',
      'Enhanced stealth capabilities',
      'Rare item drop rate increase'
    ];
    case 'silver': return [
      'Enhanced defense capabilities',
      'Resistance to negative status effects',
      'Bonuses during night cycles'
    ];
    case 'bronze': return [
      'Bonus experience gain',
      'Crafting cost reduction',
      'Improved durability for equipment'
    ];
    case 'crimson': return [
      'Blood magic abilities',
      'Intimidation bonus in negotiations',
      'Sacrifice-based power enhancements'
    ];
    case 'neutral': return [
      'Diplomatic immunity in certain zones',
      'Access to neutral-only quests',
      'Flexible alliance options'
    ];
    default: return [
      'No faction restrictions',
      'Neutral status in faction conflicts',
      'Balanced stat distribution'
    ];
  }
};

// Export helper functions to get specific teams
export const getAllTeams = (): TeamColor[] => {
  return ['red', 'blue', 'green', 'gold', 'purple', 'silver', 'bronze', 'crimson', 'neutral', 'none'];
};

export const getTeamById = (id: string): TeamColor | null => {
  const validTeams: TeamColor[] = getAllTeams();
  return validTeams.includes(id as TeamColor) ? id as TeamColor : null;
};

export const getTeamByColor = (color: string): TeamColor | null => {
  return getTeamById(color);
};

// Export default for backward compatibility
export default {
  getTeamColor,
  getTeamName,
  getTeamMotto,
  getTeamBenefits,
  getTeamTailwindBgColor,
  getAllTeams,
  getTeamById,
  getTeamByColor
};
