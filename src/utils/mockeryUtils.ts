
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Get the display name for a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Eggs';
    case 'crown': return 'Royal Crown';
    case 'jester': return 'Jester Hat';
    case 'stocks': return 'Public Stocks';
    case 'putridEggs': return 'Throw Putrid Eggs';
    case 'silence': return 'Silence';
    case 'courtJester': return 'Court Jester';
    case 'smokeBomb': return 'Smoke Bomb';
    case 'shame': return 'Public Shaming';
    case 'protection': return 'Royal Protection';
    default: return 'Unknown Action';
  }
};

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw tomatoes at this user for all to see';
    case 'eggs': return 'Throw eggs at this user for their choices';
    case 'crown': return 'Grant royal status temporarily';
    case 'jester': return 'Make them wear a jester hat for everyone to laugh at';
    case 'stocks': return 'Place them in public stocks for ridicule';
    case 'putridEggs': return 'Throw rotten eggs for maximum humiliation';
    case 'silence': return 'Silence this user temporarily';
    case 'courtJester': return 'Make them the court jester for royal entertainment';
    case 'smokeBomb': return 'Hide them behind a cloud of smoke';
    case 'shame': return 'Publicly shame this user';
    case 'protection': return 'Protect this user from mockery';
    default: return 'An unknown mockery action';
  }
};

// Get tier for a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes': return 'common';
    case 'eggs': return 'uncommon';
    case 'stocks': return 'rare';
    case 'putridEggs': return 'rare';
    case 'jester': return 'epic';
    case 'courtJester': return 'epic';
    case 'silence': return 'epic';
    case 'smokeBomb': return 'rare';
    case 'crown': return 'legendary';
    case 'shame': return 'common';
    case 'protection': return 'legendary';
    default: return 'common';
  }
};

// Get cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 0.25;
    case 'eggs': return 0.5;
    case 'stocks': return 0.75;
    case 'putridEggs': return 0.75;
    case 'jester': return 1.5;
    case 'courtJester': return 1.5;
    case 'silence': return 1.5;
    case 'smokeBomb': return 0.75;
    case 'crown': return 3.0;
    case 'shame': return 0.25;
    case 'protection': return 3.0;
    default: return 0.25;
  }
};

// Get CSS class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'text-gray-200';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    default: return 'text-gray-200';
  }
};
