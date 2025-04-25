
import { MockeryAction } from '@/types/mockery-types';

// Maps mockery actions to display names
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    'egg': 'Rotten Eggs',
    'crown': 'Fake Crown',
    'target': 'Bullseye',
    'protection': 'Shield Protection',
    'heart': 'Royal Heart',
    'flame': 'Royal Flame',
    'message': 'Royal Decree',
    'tomatoes': 'Rotten Tomatoes',
    'stocks': 'Stock Pillory',
    'shame': 'Bell of Shame',
    'jester': 'Court Jester'
  };
  
  return names[action] || action;
};

// Maps mockery actions to descriptions
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    'egg': 'Toss rotten eggs at the target\'s profile for 24 hours.',
    'crown': 'Place a fake, lopsided crown on the target\'s profile for 24 hours.',
    'target': 'Mark the target with a bullseye for 24 hours.',
    'protection': 'Protect a noble from mockery for 24 hours.',
    'heart': 'Show admiration with a heart badge for 24 hours.',
    'flame': 'Set the target\'s profile on fire for 24 hours.',
    'message': 'Post a royal decree on the target\'s profile for 24 hours.',
    'tomatoes': 'Throw tomatoes at the target\'s profile for 24 hours.',
    'stocks': 'Place the target in the royal stocks for 24 hours.',
    'shame': 'Ring the bell of shame on the target\'s profile for 24 hours.',
    'jester': 'Make the target wear a jester\'s hat for 24 hours.'
  };
  
  return descriptions[action] || 'Apply this mockery to the target for 24 hours.';
};

// Maps mockery actions to prices
export const getMockeryPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    'egg': 5,
    'crown': 15,
    'target': 10,
    'protection': 25,
    'heart': 20,
    'flame': 15,
    'message': 10,
    'tomatoes': 5,
    'stocks': 20,
    'shame': 15,
    'jester': 10
  };
  
  return prices[action] || 10;
};

// Maps mockery actions to style effects
export const getMockeryEffect = (action: MockeryAction): string => {
  const effects: Record<MockeryAction, string> = {
    'egg': 'shame-effect-eggs',
    'crown': 'animate-float',
    'target': 'animate-pulseSlow',
    'protection': 'animate-glowPulse',
    'heart': 'animate-pulseSlow',
    'flame': 'animate-float',
    'message': 'animate-royalShimmer',
    'tomatoes': 'shame-effect-tomatoes',
    'stocks': 'shame-effect-stocks',
    'shame': 'animate-pulseSlow',
    'jester': 'animate-wobble'
  };
  
  return effects[action] || '';
};

// Determine if a mockery action is positive or negative
export const isMockeryPositive = (action: MockeryAction): boolean => {
  const positiveActions: MockeryAction[] = ['protection', 'heart', 'message'];
  return positiveActions.includes(action);
};

export default {
  getMockeryName,
  getMockeryDescription,
  getMockeryPrice,
  getMockeryEffect,
  isMockeryPositive
};
