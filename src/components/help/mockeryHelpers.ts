
import { getMockeryTierColor, getMockeryTierLabel } from '@/components/mockery/utils/mockeryUtils';
import { MockeryTier } from '@/types/mockery';

// Re-export for easy access
export { getMockeryTierColor, getMockeryTierLabel };

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
