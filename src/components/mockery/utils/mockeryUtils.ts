
import { ExtendedMockeryAction, MockeryAction, MockeryTier } from '@/types/mockery';

export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 0.5;
    case 'eggs': return 1.0;
    case 'stocks': return 2.0;
    case 'silence': return 5.0;
    case 'drama': return 10.0;
    case 'courtJester': return 25.0;
    default: return 0.5;
  }
};

export const getMockeryActionLabel = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Rotten Eggs';
    case 'stocks': return 'Place in Stocks';
    case 'silence': return 'Royal Silence';
    case 'drama': return 'Create Drama';
    case 'courtJester': return 'Name as Court Jester';
    default: return 'Unknown Action';
  }
};

export const getMockeryActionDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Publicly shame with rotten tomatoes for 24 hours';
    case 'eggs': return 'Pelt with rotten eggs, visible to all for 2 days';
    case 'stocks': return 'Lock in the town stocks for public ridicule for 3 days';
    case 'silence': return 'Remove their ability to post for 24 hours';
    case 'drama': return 'Start royal gossip about this user for a week';
    case 'courtJester': return 'Force them to wear the jester hat for a week';
    default: return 'Unknown action effect';
  }
};

export const getMockeryActionIcon = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'tomato';
    case 'eggs': return 'egg';
    case 'stocks': return 'stocks';
    case 'silence': return 'message-square-off';
    case 'drama': return 'drama';
    case 'courtJester': return 'crown';
    case 'crown': return 'crown';
    case 'scroll': return 'scroll';
    case 'shield-off': return 'shield-off';
    case 'message-square-off': return 'message-square-off';
    default: return 'alert-circle';
  }
};

export const getMockeryTierColor = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-yellow-400';
    default: return 'text-gray-400';
  }
};

export const getMockeryTierLabel = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'Common';
    case 'uncommon': return 'Uncommon';
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legendary';
    default: return 'Unknown';
  }
};

export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // This would normally check against a weekly featured mockery list
  // For now, we'll just say that 'eggs' and 'stocks' have a discount
  return action === 'eggs' || action === 'stocks';
};

export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  if (hasWeeklyDiscount(action)) {
    return getMockeryActionPrice(action) * 0.7; // 30% discount
  }
  return getMockeryActionPrice(action);
};

export const convertToBasicAction = (extendedAction: ExtendedMockeryAction): MockeryAction => {
  if (isBasicAction(extendedAction)) {
    return extendedAction;
  }
  
  // Map extended actions to basic ones
  switch (extendedAction) {
    case 'crown': return 'courtJester';
    case 'scroll': return 'drama';
    case 'shield-off': return 'stocks';
    case 'message-square-off': return 'silence';
    default: return 'tomatoes';
  }
};

export const isBasicAction = (action: ExtendedMockeryAction): action is MockeryAction => {
  return ['tomatoes', 'eggs', 'stocks', 'silence', 'drama', 'courtJester'].includes(action as string);
};
