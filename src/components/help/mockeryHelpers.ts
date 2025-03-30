import { MockeryTier } from '@/types/mockery';

// Helper functions for working with mockery tiers
export const getMockeryTierColor = (tier: MockeryTier): { text: string, bg: string, border: string } => {
  const tierColors: Record<string, { text: string, bg: string, border: string }> = {
    'common': {
      text: 'text-white/80',
      bg: 'bg-white/10',
      border: 'border-white/20'
    },
    'uncommon': {
      text: 'text-green-400',
      bg: 'bg-green-500/20',
      border: 'border-green-500/30'
    },
    'rare': {
      text: 'text-blue-400',
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/30'
    },
    'epic': {
      text: 'text-purple-400',
      bg: 'bg-purple-500/20',
      border: 'border-purple-500/30'
    },
    'legendary': {
      text: 'text-royal-gold',
      bg: 'bg-royal-gold/20',
      border: 'border-royal-gold/30'
    },
    'basic': {
      text: 'text-white/80',
      bg: 'bg-white/10',
      border: 'border-white/20'
    },
    'premium': {
      text: 'text-royal-gold',
      bg: 'bg-royal-gold/20',
      border: 'border-royal-gold/30'
    },
    'royal': {
      text: 'text-royal-purple',
      bg: 'bg-royal-purple/20',
      border: 'border-royal-purple/30'
    }
  };
  
  return tierColors[tier] || tierColors['common'];
};

export const getMockeryTierLabel = (tier: MockeryTier): string => {
  const tierLabels: Record<string, string> = {
    'common': 'Common Mockery',
    'uncommon': 'Uncommon Mockery',
    'rare': 'Rare Mockery',
    'epic': 'Epic Mockery',
    'legendary': 'Legendary Mockery',
    'basic': 'Basic Mockery',
    'premium': 'Premium Mockery',
    'royal': 'Royal Mockery'
  };
  
  return tierLabels[tier] || 'Common Mockery';
};

// Simple explanation function for encyclopedia
export const getMockeryTierDescription = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'Basic mockery with minimal visual effects, lasts for 24 hours.';
    case 'uncommon':
      return 'Enhanced visual effects with slightly longer duration, lasts for 48 hours.';
    case 'rare':
      return 'Distinctive mockery effects with special animations, lasts for 72 hours.';
    case 'epic':
      return 'Elaborate effects that can include sound and profile transformations, lasts for a week.';
    case 'legendary':
      return 'Complete profile transformation with unique effects and server-wide notification, lasts for two weeks.';
    default:
      return 'A mockery tier with standard effects and duration.';
  }
};

// Simple tier cost estimator
export const getMockeryTierCost = (tier: MockeryTier): number => {
  switch (tier) {
    case 'common': return 0.5;
    case 'uncommon': return 1.0;
    case 'rare': return 2.5;
    case 'epic': return 5.0;
    case 'legendary': return 10.0;
    default: return 1.0;
  }
};
