
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { getMockeryActionIcon, getMockeryActionIconColor } from './mockery-icons';

// Re-export from parent mockery utility
import {
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryTierRarity,
  getMockeryDuration,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  getActiveMockeryClass,
  renderMockeryIcon
} from '../mockery';

// Export mockery action functions
export {
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryTierRarity,
  getMockeryDuration,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  getShameActionPrice,
  getShameActionMessage,
  getActiveMockeryClass,
  renderMockeryIcon,
  getMockeryActionIcon,
  getMockeryActionIconColor
};

// Helper function to get display name for mockery action (alias for compatibility)
export const getMockeryActionName = (action: MockeryAction): string => {
  return getMockeryName(action);
};

// Helper function to get title for a mockery action (alias for compatibility)
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

// Helper function to get description for a mockery action (alias for compatibility)
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

// Helper function to get price for a mockery action (alias for compatibility)
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

// Helper function to determine the appropriate mockery icon color based on mockery type
export const getMockeryClassForAction = (action: MockeryAction): string => {
  const mockeryClasses: Record<string, string> = {
    'tomatoes': 'mockery-tomatoes',
    'eggs': 'mockery-eggs',
    'crown': 'mockery-crown',
    'stocks': 'mockery-stocks',
    'jester': 'mockery-jester',
    'protection': 'mockery-protection',
    'shame': 'mockery-shame',
    'target': 'mockery-target',
    'putridEggs': 'mockery-rotten-eggs',
    'silence': 'mockery-silence',
    'courtJester': 'mockery-court-jester',
    'smokeBomb': 'mockery-smoke-bomb',
    'immune': 'mockery-immune',
    'dunce': 'mockery-dunce',
    'glitterBomb': 'mockery-glitter',
    'royalPie': 'mockery-pie',
    'jokeCrown': 'mockery-joke-crown',
    'memeFrame': 'mockery-meme',
    'roast': 'mockery-roast',
    'ridicule': 'mockery-ridicule',
    'humiliate': 'mockery-humiliate',
    'expose': 'mockery-expose',
    'mock': 'mockery-mock',
    'taunt': 'mockery-taunt',
    'guillotine': 'mockery-guillotine',
    'dungeons': 'mockery-dungeons',
    'removal': 'mockery-removal',
    'troll': 'mockery-troll',
    'peasant': 'mockery-peasant',
    'rat': 'mockery-rat',
    'ghost': 'mockery-ghost',
    'skeleton': 'mockery-skeleton',
    'zombie': 'mockery-zombie',
    'witch': 'mockery-witch',
    'monster': 'mockery-monster',
    'dragon': 'mockery-dragon',
    'jest': 'mockery-jest',
    'challenge': 'mockery-challenge',
    'defeat': 'mockery-defeat',
    'laughing': 'mockery-laughing'
  };
  
  return mockeryClasses[action] || 'mockery-default';
};
