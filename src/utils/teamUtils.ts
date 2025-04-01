
import { TeamColor } from '@/types/team';
import { toTeamColor } from '@/utils/typeConverters';

// Team names mapping
const teamNames = {
  red: 'Crimson Crown',
  blue: 'Azure Knights',
  green: 'Emerald Order',
  gold: 'Golden Dynasty',
  purple: 'Royal Purple',
  silver: 'Silver Alliance',
  bronze: 'Bronze Brigade',
  none: 'Unaffiliated',
  neutral: 'Neutral Observer'
};

// Team mottos mapping
const teamMottos = {
  red: 'Victory Through Power',
  blue: 'Wisdom and Strategy',
  green: 'Growth and Prosperity',
  gold: 'Wealth Above All',
  purple: 'Royal Blood Rules',
  silver: 'Defense and Honor',
  bronze: 'Strength and Craftsmanship',
  none: 'Independent and Free',
  neutral: 'Balance In All Things'
};

/**
 * Convert any value to TeamColor and ensure it's a valid team color
 */
export const asTeamColor = (team: any): TeamColor => {
  return toTeamColor(team);
};

/**
 * Get the displayable name for a team
 */
export const getTeamName = (team: string): string => {
  const teamColor = toTeamColor(team);
  return teamNames[teamColor] || 'Unaffiliated';
};

/**
 * Get the motto for a team
 */
export const getTeamMotto = (team: string): string => {
  const teamColor = toTeamColor(team);
  return teamMottos[teamColor] || 'Independent and Free';
};

/**
 * Get the Tailwind color class for a team
 */
export const getTeamColor = (team: string): string => {
  const teamColor = toTeamColor(team);
  
  switch (teamColor) {
    case 'red': return 'text-red-500';
    case 'blue': return 'text-blue-500';
    case 'green': return 'text-green-500';
    case 'gold': return 'text-yellow-400';
    case 'purple': return 'text-purple-500';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-600';
    case 'none':
    case 'neutral':
    default: return 'text-gray-400';
  }
};

/**
 * Get the Tailwind background color class for a team
 */
export const getTeamTailwindBgColor = (team: string): string => {
  const teamColor = toTeamColor(team);
  
  switch (teamColor) {
    case 'red': return 'bg-red-500/20';
    case 'blue': return 'bg-blue-500/20';
    case 'green': return 'bg-green-500/20';
    case 'gold': return 'bg-yellow-400/20';
    case 'purple': return 'bg-purple-500/20';
    case 'silver': return 'bg-gray-300/20';
    case 'bronze': return 'bg-amber-600/20';
    case 'none':
    case 'neutral':
    default: return 'bg-gray-400/20';
  }
};

/**
 * Get the Tailwind border color class for a team
 */
export const getTeamBorderColor = (team: string): string => {
  const teamColor = toTeamColor(team);
  
  switch (teamColor) {
    case 'red': return 'border-red-500';
    case 'blue': return 'border-blue-500';
    case 'green': return 'border-green-500';
    case 'gold': return 'border-yellow-400';
    case 'purple': return 'border-purple-500';
    case 'silver': return 'border-gray-300';
    case 'bronze': return 'border-amber-600';
    case 'none':
    case 'neutral':
    default: return 'border-gray-400';
  }
};

/**
 * Get benefits of a team
 */
export const getTeamBenefits = (team: string): string[] => {
  const teamColor = toTeamColor(team);
  
  switch (teamColor) {
    case 'red':
      return [
        'Strength in numbers: +10% damage in team battles',
        'Pride of the Red: Access to exclusive Red team cosmetics',
        'Discounted weapons and armor in the Royal Armory'
      ];
    
    case 'blue':
      return [
        'Wisdom of the seas: +15% experience gain',
        'Strategic advantage: Reduced cooldown on special abilities',
        'Access to the Blue Library of hidden knowledge'
      ];
    
    case 'green':
      return [
        'Growth multiplier: +20% resource gathering',
        'Natural healing: Health regeneration +5%',
        'Access to Green team exclusive planting areas'
      ];
    
    case 'gold':
      return [
        'Midas touch: 10% chance of double gold from activities',
        'Royal discount: 5% off all marketplace purchases',
        'Access to the Golden Vault investment opportunities'
      ];
    
    case 'purple':
      return [
        'Mystery bonus: Random buffs during special events',
        'Royal connections: Higher chance of rare item drops',
        'Access to the Purple Palace exclusive areas'
      ];
    
    case 'silver':
      return [
        'Enhanced defense: +10% armor effectiveness',
        'Resilience: 15% reduced effect from negative status effects',
        'Access to Silver exclusive crafting recipes'
      ];
    
    case 'bronze':
      return [
        'Sturdy foundation: +15% max health',
        'Craftsman\'s touch: 10% reduced crafting costs',
        'Access to Bronze exclusive mining areas'
      ];
    
    case 'neutral':
      return [
        'Diplomatic immunity: Can\'t be attacked in certain zones',
        'Flexibility: Can temporarily join any team event',
        'Access to Neutral-only quests and missions'
      ];
    
    case 'none':
    default:
      return [
        'Freedom of choice: No faction restrictions',
        'Independent spirit: Bonus to solo activities',
        'Self-reliance: Additional inventory space'
      ];
  }
};

// Export all functions from this utility
export default {
  asTeamColor,
  getTeamName,
  getTeamMotto,
  getTeamColor,
  getTeamTailwindBgColor,
  getTeamBorderColor,
  getTeamBenefits
};
