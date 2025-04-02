
import { MockeryAction, MockeryTier, TeamColor } from '@/types/mockery-types';

/**
 * Get mockery tier label to display to users
 */
export const getMockeryTierLabel = (tier: string): string => {
  switch (tier) {
    case 'common': return 'Common';
    case 'uncommon': return 'Uncommon';
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legendary';
    case 'royal': return 'Royal';
    case 'basic': return 'Basic';
    case 'premium': return 'Premium';
    case 'silver': return 'Silver';
    case 'bronze': return 'Bronze';
    case 'standard': return 'Standard';
    default: return tier.charAt(0).toUpperCase() + tier.slice(1);
  }
};

/**
 * Get mockery tier color for styling
 */
export const getMockeryTierColor = (tier: string): string => {
  switch (tier) {
    case 'common': return 'gray';
    case 'uncommon': return 'green';
    case 'rare': return 'blue';
    case 'epic': return 'purple';
    case 'legendary': return 'orange';
    case 'royal': return 'gold';
    case 'basic': return 'gray';
    case 'premium': return 'blue';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'standard': return 'gray';
    default: return 'gray';
  }
};

/**
 * Get hex color code for a mockery tier
 */
export const getMockeryTierHexColor = (tier: string): string => {
  switch (tier) {
    case 'common': return '#9ca3af';
    case 'uncommon': return '#4ade80';
    case 'rare': return '#60a5fa';
    case 'epic': return '#c084fc';
    case 'legendary': return '#f97316';
    case 'royal': return '#fbbf24';
    case 'basic': return '#9ca3af';
    case 'premium': return '#60a5fa';
    case 'silver': return '#c0c0c0';
    case 'bronze': return '#cd7f32';
    case 'standard': return '#9ca3af';
    default: return '#9ca3af';
  }
};

/**
 * Get CSS class for mockery tier
 */
export const getMockeryTierClass = (tier: string): string => {
  switch (tier) {
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-orange-400';
    case 'royal': return 'text-yellow-400';
    case 'basic': return 'text-gray-400';
    case 'premium': return 'text-blue-400';
    case 'silver': return 'text-gray-300';
    case 'bronze': return 'text-amber-700';
    case 'standard': return 'text-gray-400';
    default: return 'text-gray-400';
  }
};
