
import React from 'react';
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { getMockeryActionIcon, getMockeryActionIconColor } from './mockery-icons';

// Export all mockery utilities
export * from './mockery-icons';
export * from './mockery-names';
export * from './mockery-descriptions';
export * from './mockery-costs';
export * from './mockery-tiers';
export * from './mockery-durations';
export * from './mockery-effects';

// Render mockery icon with color
export const renderMockeryIcon = (action: MockeryAction, size = 24): JSX.Element => {
  const Icon = getMockeryActionIcon(action);
  return <Icon className={getMockeryActionIconColor(action)} size={size} />;
};

// Check if weekly discount applies to this action
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // This would typically be dynamic based on the day of week or a server config
  // For this example, we'll make 'eggs' always discounted
  return action === 'eggs';
};

// Get current week's discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  return 'eggs'; // Fixed for simplicity
};

// Get discounted price for an action
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getMockeryCost(action);
  return basePrice * 0.75; // 25% discount
};

// Get price with potential discount
export const getShameActionPrice = (action: MockeryAction): number => {
  return hasWeeklyDiscount(action) ? getDiscountedShamePrice(action) : getMockeryCost(action);
};

// Get message to display when action is applied
export const getShameActionMessage = (action: MockeryAction, username: string): string => {
  const messages: Record<MockeryAction, string> = {
    'tomatoes': `You threw rotten tomatoes at ${username}!`,
    'eggs': `You pelted ${username} with rotten eggs!`,
    'crown': `You placed a fool's crown on ${username}!`,
    'stocks': `You put ${username} in the public stocks!`,
    'jester': `You made ${username} the court jester!`,
    'protection': 'You are now protected from mockery!',
    'shame': `You publicly shamed ${username}!`,
    // Add stubs for the remaining actions to satisfy TypeScript
    'putridEggs': `You pelted ${username} with putrid eggs!`,
    'silence': `You silenced ${username}!`,
    'courtJester': `You made ${username} the court jester!`,
    'smokeBomb': `You threw a smoke bomb at ${username}!`,
    'glitterBomb': `You threw a glitter bomb at ${username}!`,
    'dunce': `You made ${username} wear the dunce cap!`,
    'troll': `You trolled ${username}!`,
    'peasant': `You demoted ${username} to peasant status!`,
    'rat': `You compared ${username} to a rat!`,
    'ghost': `You ghosted ${username}!`,
    'skeleton': `You scared ${username} to the bone!`,
    'zombie': `You zombified ${username}!`,
    'witch': `You called ${username} a witch!`,
    'monster': `You called ${username} a monster!`,
    'dragon': `You called ${username} a dragon!`,
    'jest': `You made a jest of ${username}!`,
    'challenge': `You challenged ${username}!`,
    'defeat': `You defeated ${username}!`,
    'taunt': `You taunted ${username}!`,
    'target': `You targeted ${username}!`,
    'immune': `You are now immune to mockery!`,
    'royalPie': `You threw a royal pie at ${username}!`,
    'jokeCrown': `You crowned ${username} as a joke!`,
    'memeFrame': `You framed ${username} in a meme!`,
    'roast': `You roasted ${username}!`,
    'ridicule': `You ridiculed ${username}!`,
    'humiliate': `You humiliated ${username}!`,
    'expose': `You exposed ${username}!`,
    'mock': `You mocked ${username}!`,
    'guillotine': `You sent ${username} to the guillotine!`,
    'dungeons': `You sent ${username} to the dungeons!`,
    'removal': `You removed ${username}!`,
    'laughing': `You laughed at ${username}!`
  };
  
  return messages[action] || `You mocked ${username}!`;
};

// Get CSS class for active mockery
export const getActiveMockeryClass = (action?: MockeryAction): string => {
  if (!action) return '';
  
  const classes: Partial<Record<MockeryAction, string>> = {
    'tomatoes': 'mockery-tomatoes',
    'eggs': 'mockery-eggs',
    'crown': 'mockery-crown',
    'stocks': 'mockery-stocks',
    'jester': 'mockery-jester',
    'protection': 'mockery-protection',
    'shame': 'mockery-shame'
  };
  
  return classes[action] || '';
};
