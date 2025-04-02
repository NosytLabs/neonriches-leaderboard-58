
import { MockeryAction, MockeryTier, TeamColor } from '@/types/mockery-types';

/**
 * Get mockery tier label to display to users
 */
export const getMockeryTierLabel = (tier: MockeryTier | string): string => {
  switch (tier) {
    case 'common': return 'Common';
    case 'uncommon': return 'Uncommon';
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legendary';
    default: return tier.charAt(0).toUpperCase() + tier.slice(1);
  }
};

/**
 * Get mockery tier color for styling
 */
export const getMockeryTierColor = (tier: MockeryTier | string): string => {
  switch (tier) {
    case 'common': return 'gray';
    case 'uncommon': return 'green';
    case 'rare': return 'blue';
    case 'epic': return 'purple';
    case 'legendary': return 'orange';
    default: return 'gray';
  }
};

/**
 * Get hex color code for a mockery tier
 */
export const getMockeryTierHexColor = (tier: MockeryTier | string): string => {
  switch (tier) {
    case 'common': return '#9ca3af';
    case 'uncommon': return '#4ade80';
    case 'rare': return '#60a5fa';
    case 'epic': return '#c084fc';
    case 'legendary': return '#f97316';
    default: return '#9ca3af';
  }
};

/**
 * Get CSS class for mockery tier
 */
export const getMockeryTierClass = (tier: MockeryTier | string): string => {
  switch (tier) {
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-orange-400';
    default: return 'text-gray-400';
  }
};

/**
 * Get badge color class for mockery tier
 */
export const getMockeryTierBadgeColor = (tier: MockeryTier | string): string => {
  switch (tier) {
    case 'common': return 'bg-gray-800 text-gray-300 border-gray-700';
    case 'uncommon': return 'bg-green-900 text-green-300 border-green-700';
    case 'rare': return 'bg-blue-900 text-blue-300 border-blue-700';
    case 'epic': return 'bg-purple-900 text-purple-300 border-purple-700';
    case 'legendary': return 'bg-orange-900 text-orange-300 border-orange-700';
    default: return 'bg-gray-800 text-gray-300 border-gray-700';
  }
};

export default {
  getMockeryTierLabel,
  getMockeryTierColor,
  getMockeryTierHexColor,
  getMockeryTierClass,
  getMockeryTierBadgeColor
};
