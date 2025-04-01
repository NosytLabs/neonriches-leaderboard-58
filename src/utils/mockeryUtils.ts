
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { LucideIcon } from 'lucide-react';
import { getMockeryActionIcon as getIconFromIconsModule } from '@/utils/mockery/mockery-icons';

/**
 * Get a display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'taunt': 'Taunt',
    'shame': 'Shame',
    'jester': 'Jester',
    'mock': 'Mock',
    'challenge': 'Challenge',
    'joust': 'Joust',
    'duel': 'Duel',
    'tomatoes': 'Rotten Tomatoes',
    'eggs': 'Rancid Eggs',
    'stocks': 'Public Stocks',
    'crown': 'Fool\'s Crown',
    'putridEggs': 'Putrid Eggs',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Royal Protection'
  };

  return names[action] || action;
};

/**
 * Get a description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'taunt': 'Taunt your opponent with a custom message',
    'shame': 'Publicly shame someone for all to see',
    'jester': 'Mark them as the court jester',
    'mock': 'Mock your opponent with a custom message',
    'challenge': 'Challenge someone to increase their spending',
    'joust': 'Challenge a rival to a spending joust',
    'duel': 'Initiate a spending duel with another user',
    'tomatoes': 'Splatter their profile with rotten tomatoes for 24 hours',
    'eggs': 'Pelt their profile with rancid eggs for 24 hours',
    'stocks': 'Lock them in the public stocks for all to see for 3 days',
    'crown': 'Force them to wear a fool\'s crown for a week',
    'putridEggs': 'Assault them with the most putrid eggs in the kingdom for 3 days',
    'silence': 'Prevent them from speaking in public forums for 12 hours',
    'courtJester': 'Assign them as your personal jester for 3 days',
    'smokeBomb': 'Drop a smoke bomb on their profile for 24 hours',
    'protection': 'Protect yourself from mockery for 3 days'
  };

  return descriptions[action] || 'Apply a mysterious effect';
};

/**
 * Get the price for a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    'taunt': 5,
    'shame': 10,
    'jester': 15,
    'mock': 5,
    'challenge': 20,
    'joust': 50,
    'duel': 100,
    'tomatoes': 5,
    'eggs': 10,
    'stocks': 20,
    'crown': 100,
    'putridEggs': 25,
    'silence': 30,
    'courtJester': 50,
    'smokeBomb': 15,
    'protection': 75
  };

  return prices[action] || 5;
};

/**
 * Get the title for a mockery action
 */
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

/**
 * Get the description for a mockery action effect
 */
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

/**
 * Get the effect description for a mockery action
 */
export const getMockeryActionEffect = (action: MockeryAction): string => {
  const effects: Record<MockeryAction, string> = {
    'taunt': 'The target will receive a notification of your taunt',
    'shame': 'The target will be publicly shamed',
    'jester': 'The target will be marked as a jester for 24 hours',
    'mock': 'The target will receive a notification of your mockery',
    'challenge': 'The target will be challenged to spend more',
    'joust': 'A public joust will be initiated',
    'duel': 'A public duel will be initiated',
    'tomatoes': 'Their profile will be covered in tomatoes for 24 hours',
    'eggs': 'Their profile will be pelted with eggs for 24 hours',
    'stocks': 'They will be placed in the public stocks for 3 days',
    'crown': 'They will wear the crown of shame for 7 days',
    'putridEggs': 'Their profile will reek of putrid eggs for 3 days',
    'silence': 'They will be unable to post in public forums for 12 hours',
    'courtJester': 'They will serve as your court jester for 3 days',
    'smokeBomb': 'Their profile will be obscured by smoke for 24 hours',
    'protection': 'You will be protected from mockery for 3 days'
  };

  return effects[action] || 'Apply a mysterious effect';
};

/**
 * Get the icon for a mockery action
 * @param action The mockery action to get the icon for
 * @returns A Lucide icon component
 */
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  return getIconFromIconsModule(action);
};

/**
 * Get the color for a mockery action icon
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    'taunt': '#ef4444',
    'shame': '#dc2626',
    'jester': '#8b5cf6',
    'mock': '#f97316',
    'challenge': '#eab308',
    'joust': '#facc15',
    'duel': '#4338ca',
    'tomatoes': '#dc2626',
    'eggs': '#f59e0b',
    'stocks': '#8b5cf6',
    'crown': '#f59e0b',
    'putridEggs': '#84cc16',
    'silence': '#3b82f6',
    'courtJester': '#ec4899',
    'smokeBomb': '#6b7280',
    'protection': '#10b981'
  };

  return colors[action] || '#6b7280';
};

export default {
  getMockeryName,
  getMockeryDescription,
  getMockeryActionPrice,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionEffect,
  getMockeryActionIcon,
  getMockeryActionIconColor
};
