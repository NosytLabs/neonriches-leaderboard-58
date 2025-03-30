
import { MockeryAction, MockeryTier } from '@/types/mockery';

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'royalPie' || action === 'tomatoes' || action === 'eggs') {
    return 'bronze';
  } else if (action === 'jokeCrown' || action === 'putridEggs' || action === 'dunce') {
    return 'silver';
  } else if (action === 'memeFrame' || action === 'stocks' || action === 'silence') {
    return 'gold';
  } else if (action === 'expose' || action === 'humiliate' || action === 'ridicule' || action === 'removal') {
    return 'platinum';
  } else if (action === 'guillotine' || action === 'dungeons') {
    return 'diamond';
  } else {
    return 'common';
  }
};

export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'bronze':
      return 'text-amber-400';
    case 'silver':
      return 'text-gray-300';
    case 'gold':
      return 'text-royal-gold';
    case 'platinum':
      return 'text-blue-300';
    case 'diamond':
      return 'text-cyan-400';
    case 'common':
      return 'text-white/80';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-white/80';
  }
};
