
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Pricing constants for mockery actions
export const MOCKERY_PRICES: Record<MockeryAction, number> = {
  'tomatoes': 0.25,
  'eggs': 0.5,
  'shame': 0.75,
  'dungeons': 1.0,
  'immune': 5.0,
  'crown': 1.5,
  'stocks': 1.25,
  'dunce': 0.5,
  'jester': 1.0,
  'fool': 0.5,
  'troll': 1.0,
  'peasant': 0.5,
  'rat': 0.75,
  'ghost': 1.0,
  'skeleton': 1.25,
  'zombie': 1.5,
  'witch': 1.75,
  'monster': 2.0,
  'demon': 2.5,
  'dragon': 3.0,
  'king': 3.5,
  'queen': 3.5,
  'knight': 2.0,
  'bishop': 2.25,
  'rook': 1.75,
  'pawn': 0.25,
  'target': 0.5,
  'challenge': 5.0
};

// Get the price for a shame action
export const getShameActionPrice = (action: MockeryAction): number => {
  return MOCKERY_PRICES[action] || 0.25;
};

// Get the discounted price for a shame action
export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const basePrice = getShameActionPrice(action);
  return Math.round((basePrice * 0.5) * 100) / 100; // 50% discount
};

// Check if a shame action has a weekly discount
export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === getWeeklyDiscountedAction();
};

// Get the current weekly discounted action
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // Rotate weekly discounted action based on the current week number
  const weekOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24 / 7);
  const actions: MockeryAction[] = ['tomatoes', 'eggs', 'stocks', 'dunce', 'jester'];
  return actions[weekOfYear % actions.length];
};

// Icons for mockery actions
export const MOCKERY_ICONS: Record<MockeryAction, string> = {
  'tomatoes': '🍅',
  'eggs': '🥚',
  'shame': '🔔',
  'dungeons': '⛓️',
  'immune': '🛡️',
  'crown': '👑',
  'stocks': '🪵',
  'dunce': '🎭',
  'jester': '🃏',
  'fool': '😵',
  'troll': '👹',
  'peasant': '👨‍🌾',
  'rat': '🐀',
  'ghost': '👻',
  'skeleton': '💀',
  'zombie': '🧟',
  'witch': '🧙',
  'monster': '👾',
  'demon': '😈',
  'dragon': '🐉',
  'king': '🤴',
  'queen': '👸',
  'knight': '🐴',
  'bishop': '♗',
  'rook': '♖',
  'pawn': '♟️',
  'target': '🎯',
  'challenge': '⚔️'
};

// Get the icon for a shame action
export const getShameActionIcon = (action: MockeryAction): string => {
  return MOCKERY_ICONS[action] || '🎭';
};

// Get the icon name for a shame action
export const getShameActionIconName = (action: MockeryAction): string => {
  return MOCKERY_ICONS[action] || '🎭';
};

// Titles for mockery actions
export const MOCKERY_TITLES: Record<MockeryAction, string> = {
  'tomatoes': 'Rotten Tomatoes',
  'eggs': 'Rotten Eggs',
  'shame': 'Bell of Shame',
  'dungeons': 'Royal Dungeons',
  'immune': 'Royal Immunity',
  'crown': 'Mock Crown',
  'stocks': 'In Stocks',
  'dunce': 'Dunce Cap',
  'jester': 'Court Jester',
  'fool': 'Village Fool',
  'troll': 'Bridge Troll',
  'peasant': 'Lowly Peasant',
  'rat': 'Plague Rat',
  'ghost': 'Haunting Ghost',
  'skeleton': 'Rattling Skeleton',
  'zombie': 'Shambling Zombie',
  'witch': 'Cackling Witch',
  'monster': 'Lurking Monster',
  'demon': 'Fiendish Demon',
  'dragon': 'Fearsome Dragon',
  'king': 'False King',
  'queen': 'False Queen',
  'knight': 'Rusty Knight',
  'bishop': 'Corrupt Bishop',
  'rook': 'Crumbling Rook',
  'pawn': 'Mere Pawn',
  'target': 'Target Practice',
  'challenge': 'Royal Challenge'
};

// Get the title for a shame action
export const getShameActionTitle = (action: MockeryAction): string => {
  return MOCKERY_TITLES[action] || 'Unknown Mockery';
};

// Descriptions for mockery actions
export const getShameActionDescription = (action: MockeryAction, username: string = 'this user'): string => {
  const descriptions: Record<MockeryAction, string> = {
    'tomatoes': `Pelt ${username} with rotten tomatoes, a classic form of public ridicule.`,
    'eggs': `Throw rotten eggs at ${username}, leaving them with a smelly reputation.`,
    'shame': `Ring the bell of shame at ${username}, announcing their disgrace to all.`,
    'dungeons': `Send ${username} to the royal dungeons for a time-out from society.`,
    'immune': `Grant royal immunity to ${username}, protecting from mockery for a period.`,
    'crown': `Place a mockery crown on ${username}'s head, marking them as a pretender.`,
    'stocks': `Place ${username} in the stocks for public viewing and ridicule.`,
    'dunce': `Place a dunce cap on ${username}'s head to highlight their folly.`,
    'jester': `Force ${username} to serve as court jester for royal entertainment.`,
    'fool': `Proclaim ${username} as the village fool, to be ridiculed by all.`,
    'troll': `Designate ${username} as a bridge troll, collecting tolls from passersby.`,
    'peasant': `Demote ${username} to lowly peasant status, toiling in the royal fields.`,
    'rat': `Identify ${username} as a plague rat, to be avoided at all costs.`,
    'ghost': `Turn ${username} into a ghost, haunting the royal corridors.`,
    'skeleton': `Transform ${username} into a rattling skeleton, a macabre spectacle.`,
    'zombie': `Change ${username} into a shambling zombie, mindlessly wandering.`,
    'witch': `Brand ${username} as a witch, subject to medieval suspicion.`,
    'monster': `Label ${username} as a lurking monster, feared by all in the kingdom.`,
    'demon': `Mark ${username} as a fiendish demon, an agent of chaos.`,
    'dragon': `Identify ${username} as a fearsome dragon, hoarding wealth selfishly.`,
    'king': `Crown ${username} as a false king, a pretender to the throne.`,
    'queen': `Proclaim ${username} as a false queen, lacking true royal lineage.`,
    'knight': `Dub ${username} as a rusty knight, failed in chivalrous duties.`,
    'bishop': `Name ${username} as a corrupt bishop, abusing sacred trust.`,
    'rook': `Designate ${username} as a crumbling rook, unreliable in defense.`,
    'pawn': `Reduce ${username} to a mere pawn, expendable in royal games.`,
    'target': `Make ${username} target practice for the royal archers.`,
    'challenge': `Issue a royal challenge to ${username}, to prove their worth.`
  };
  
  return descriptions[action] || `Mock ${username} with an unknown form of ridicule.`;
};

export const isFireSaleMonth = (): boolean => {
  // Determine if this is a fire sale month (e.g., every 3rd month)
  const currentMonth = new Date().getMonth();
  return currentMonth % 3 === 0;
};

export const getFireSaleDiscountPercentage = (): number => {
  // Return the discount percentage for fire sales
  return isFireSaleMonth() ? 50 : 0;
};
