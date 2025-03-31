
import { MockeryAction } from '@/types/mockery';
import { getMockeryActionPrice } from './mockery-costs';

// Weekly discount data
const DISCOUNT_PERCENT = 0.5; // 50% discount
let weeklyDiscountedAction: MockeryAction = 'tomatoes';

// Set a different action to be discounted each week
export function updateWeeklyDiscount() {
  const actions: MockeryAction[] = ['tomatoes', 'eggs', 'stocks'];
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  weeklyDiscountedAction = actions[weekNumber % actions.length];
}

// Initialize weekly discount
updateWeeklyDiscount();

/**
 * Check if an action has a weekly discount
 */
export function hasWeeklyDiscount(action: MockeryAction): boolean {
  return action === weeklyDiscountedAction;
}

/**
 * Get the currently discounted mockery action
 */
export function getWeeklyDiscountedAction(): MockeryAction {
  return weeklyDiscountedAction;
}

/**
 * Get the discounted price for a mockery action
 */
export function getDiscountedShamePrice(action: MockeryAction): number {
  const originalPrice = getMockeryActionPrice(action);
  return originalPrice * (1 - DISCOUNT_PERCENT);
}

/**
 * Get the shame action price (alias for getMockeryActionPrice)
 */
export function getShameActionPrice(action: MockeryAction): number {
  return getMockeryActionPrice(action);
}

/**
 * Get the shame action title (reusing the title from mockery actions)
 */
export function getShameActionTitle(action: MockeryAction): string {
  const titles: Record<MockeryAction, string> = {
    'tomatoes': 'Rotten Tomatoes',
    'eggs': 'Rotten Eggs',
    'stocks': 'The Stocks',
    'shame': 'Public Shame',
    'dungeons': 'Dungeons',
    'immune': 'Royal Immunity',
    'crown': 'Royal Crown',
    'dunce': 'Dunce Cap',
    'jester': 'Court Jester',
    'fool': 'Royal Fool',
    'troll': 'Castle Troll',
    'peasant': 'Lowly Peasant',
    'rat': 'Sewer Rat',
    'ghost': 'Haunting Ghost',
    'skeleton': 'Rattling Bones',
    'zombie': 'Walking Dead',
    'witch': 'Wicked Witch',
    'monster': 'Hideous Monster',
    'demon': 'Mischievous Demon',
    'dragon': 'Fearsome Dragon',
    'king': 'False King',
    'queen': 'False Queen',
    'knight': 'Dark Knight',
    'bishop': 'Corrupt Bishop',
    'rook': 'Crumbling Tower',
    'pawn': 'Mere Pawn',
    'target': 'Target Practice',
    'challenge': 'Royal Challenge'
  };
  
  return titles[action] || 'Unknown Action';
}

/**
 * Get the icon for a shame action
 */
export function getShameActionIcon(action: MockeryAction): string {
  const icons: Record<MockeryAction, string> = {
    'tomatoes': '🍅',
    'eggs': '🥚',
    'stocks': '🪵',
    'shame': '😱',
    'dungeons': '🏰',
    'immune': '🛡️',
    'crown': '👑',
    'dunce': '🎓',
    'jester': '🤡',
    'fool': '🤪',
    'troll': '👹',
    'peasant': '👨‍🌾',
    'rat': '🐀',
    'ghost': '👻',
    'skeleton': '💀',
    'zombie': '🧟',
    'witch': '🧙‍♀️',
    'monster': '👾',
    'demon': '😈',
    'dragon': '🐉',
    'king': '🤴',
    'queen': '👸',
    'knight': '🗡️',
    'bishop': '♗',
    'rook': '♖',
    'pawn': '♙',
    'target': '🎯',
    'challenge': '⚔️'
  };
  
  return icons[action] || '❓';
}

/**
 * Get the shame action tier
 */
export function getShameActionTier(action: MockeryAction): string {
  const tiers: Record<MockeryAction, string> = {
    'tomatoes': 'basic',
    'eggs': 'premium',
    'stocks': 'royal',
    'shame': 'basic',
    'dungeons': 'royal',
    'immune': 'royal',
    'crown': 'royal',
    'dunce': 'basic',
    'jester': 'premium',
    'fool': 'premium',
    'troll': 'premium',
    'peasant': 'basic',
    'rat': 'basic',
    'ghost': 'premium',
    'skeleton': 'premium',
    'zombie': 'premium',
    'witch': 'royal',
    'monster': 'royal',
    'demon': 'royal',
    'dragon': 'royal',
    'king': 'royal',
    'queen': 'royal',
    'knight': 'premium',
    'bishop': 'premium',
    'rook': 'premium',
    'pawn': 'basic',
    'target': 'basic',
    'challenge': 'royal'
  };
  
  return tiers[action] || 'basic';
}

/**
 * Get a description for a shame action
 */
export function getShameActionDescription(action: MockeryAction): string {
  const descriptions: Record<MockeryAction, string> = {
    'tomatoes': 'Throw rotten tomatoes at this user for a visual effect.',
    'eggs': 'Throw rotten eggs at this user for a visual effect.',
    'stocks': 'Place this user in the public stocks for all to mock.',
    'shame': 'Publicly shame this user with a shaming ribbon.',
    'dungeons': 'Send this user to the royal dungeons.',
    'immune': 'Grant immunity from mockery for a period of time.',
    'crown': 'Bestow a royal crown upon this user.',
    'dunce': 'Place a dunce hat on this user\'s profile.',
    'jester': 'Mark this user as the court jester.',
    'fool': 'Pronounce this user as the royal fool.',
    'troll': 'Brand this user as a troll under the bridge.',
    'peasant': 'Demote this user to lowly peasant status.',
    'rat': 'Turn this user into a sewer rat.',
    'ghost': 'Turn this user into a transparent ghost.',
    'skeleton': 'Reduce this user to bare bones.',
    'zombie': 'Turn this user into a shambling zombie.',
    'witch': 'Brand this user as a wicked witch.',
    'monster': 'Transform this user into a hideous monster.',
    'demon': 'Mark this user as a mischievous demon.',
    'dragon': 'Transform this user into a fearsome dragon.',
    'king': 'Crown this user as a false king.',
    'queen': 'Crown this user as a false queen.',
    'knight': 'Mark this user as a dark knight.',
    'bishop': 'Brand this user as a corrupt bishop.',
    'rook': 'Label this user as a crumbling tower.',
    'pawn': 'Demote this user to a mere pawn.',
    'target': 'Mark this user for target practice.',
    'challenge': 'Issue a royal challenge to this user.'
  };
  
  return descriptions[action] || 'Apply a mysterious effect to this user.';
}
