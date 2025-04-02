
import { MockeryTier } from '@/types/mockery-types';

export const getMockeryTierLabel = (tier: MockeryTier): string => {
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
    default: return 'Unknown';
  }
};

export const getMockeryTierColor = (tier: MockeryTier): { text: string, bg: string, border: string } => {
  switch (tier) {
    case 'common':
      return {
        text: 'text-gray-200',
        bg: 'bg-gray-800/60',
        border: 'border-gray-600'
      };
    case 'uncommon':
      return {
        text: 'text-green-400',
        bg: 'bg-green-900/20',
        border: 'border-green-500/30'
      };
    case 'rare':
      return {
        text: 'text-blue-400',
        bg: 'bg-blue-900/20',
        border: 'border-blue-500/30'
      };
    case 'epic':
      return {
        text: 'text-purple-400',
        bg: 'bg-purple-900/20',
        border: 'border-purple-500/30'
      };
    case 'legendary':
      return {
        text: 'text-royal-gold',
        bg: 'bg-amber-900/20',
        border: 'border-royal-gold/30'
      };
    case 'royal':
      return {
        text: 'text-royal-gold',
        bg: 'bg-amber-900/20',
        border: 'border-royal-gold/30'
      };
    default:
      return {
        text: 'text-gray-200',
        bg: 'bg-gray-800/60',
        border: 'border-gray-600'
      };
  }
};

export const getMockeryPrice = (tier: MockeryTier): number => {
  switch (tier) {
    case 'common': return 0.25;
    case 'uncommon': return 0.5;
    case 'rare': return 0.75;
    case 'epic': return 1.5;
    case 'legendary': return 3.0;
    case 'royal': return 5.0;
    case 'premium': return 2.0;
    case 'basic': return 0.5;
    case 'silver': return 1.0;
    case 'bronze': return 0.75;
    case 'standard': return 0.25;
    default: return 0.25;
  }
};

export const getMockeryDuration = (tier: MockeryTier): number => {
  // Return durations in hours
  switch (tier) {
    case 'common': return 24;
    case 'uncommon': return 48;
    case 'rare': return 72;
    case 'epic': return 96;
    case 'legendary': return 168; // 7 days
    case 'royal': return 240; // 10 days
    case 'premium': return 120; // 5 days
    case 'basic': return 24;
    case 'silver': return 48;
    case 'bronze': return 24;
    case 'standard': return 24;
    default: return 24;
  }
};
