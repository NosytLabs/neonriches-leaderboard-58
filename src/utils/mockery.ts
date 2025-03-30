
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

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

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction): string => {
  return MOCKERY_ICONS[action] || '🔮';
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

// Get mockery action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return MOCKERY_TITLES[action] || 'Unknown Mockery';
};

// Costs for mockery actions
export const MOCKERY_COSTS: Record<MockeryAction, number> = {
  'tomatoes': 0.25,
  'eggs': 0.50,
  'shame': 0.75,
  'dungeons': 1.00,
  'immune': 5.00,
  'crown': 1.50,
  'stocks': 1.25,
  'dunce': 0.50,
  'jester': 1.00,
  'fool': 0.50,
  'troll': 1.00,
  'peasant': 0.50,
  'rat': 0.75,
  'ghost': 1.00,
  'skeleton': 1.25,
  'zombie': 1.50,
  'witch': 1.75,
  'monster': 2.00,
  'demon': 2.50,
  'dragon': 3.00,
  'king': 3.50,
  'queen': 3.50,
  'knight': 2.00,
  'bishop': 2.25,
  'rook': 1.75,
  'pawn': 0.25,
  'target': 0.50,
  'challenge': 5.00
};

// Get mockery cost
export const getMockeryCost = (action: MockeryAction): number => {
  return MOCKERY_COSTS[action] || 0.25;
};

// Tiers for mockery actions
export const MOCKERY_TIERS: Record<MockeryAction, MockeryTier> = {
  'tomatoes': 'basic',
  'eggs': 'basic',
  'shame': 'basic',
  'dungeons': 'premium',
  'immune': 'royal',
  'crown': 'premium',
  'stocks': 'premium',
  'dunce': 'basic',
  'jester': 'premium',
  'fool': 'basic',
  'troll': 'premium',
  'peasant': 'basic',
  'rat': 'basic',
  'ghost': 'premium',
  'skeleton': 'premium',
  'zombie': 'premium',
  'witch': 'premium',
  'monster': 'royal',
  'demon': 'royal',
  'dragon': 'legendary',
  'king': 'royal',
  'queen': 'royal',
  'knight': 'premium',
  'bishop': 'premium',
  'rook': 'premium',
  'pawn': 'basic',
  'target': 'basic',
  'challenge': 'royal'
};

// Get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  return MOCKERY_TIERS[action] || 'basic';
};

// Map of tier colors
export const TIER_COLORS: Record<MockeryTier, string> = {
  'basic': 'text-gray-300',
  'premium': 'text-blue-400',
  'royal': 'text-purple-400',
  'legendary': 'text-yellow-400',
  'common': 'text-gray-300',
  'uncommon': 'text-green-400',
  'rare': 'text-blue-400',
  'epic': 'text-purple-400',
  'silver': 'text-gray-300',
  'bronze': 'text-amber-600'
};

// Get mockery tier color class
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  return TIER_COLORS[tier] || 'text-gray-300';
};

// Descriptions for mockery actions
export const MOCKERY_DESCRIPTIONS: Record<MockeryAction, string> = {
  'tomatoes': 'Pelt the user with rotten tomatoes, a classic form of public ridicule.',
  'eggs': 'Throw rotten eggs at the user, leaving them with a smelly reputation.',
  'shame': 'Ring the bell of shame, announcing their disgrace to all.',
  'dungeons': 'Send the user to the royal dungeons for a time-out from society.',
  'immune': 'Grant royal immunity, protecting from mockery for a period.',
  'crown': 'Place a mockery crown on their head, marking them as a pretender.',
  'stocks': 'Place them in the stocks for public viewing and ridicule.',
  'dunce': 'Place a dunce cap on their head to highlight their folly.',
  'jester': 'Force them to serve as court jester for royal entertainment.',
  'fool': 'Proclaim them as the village fool, to be ridiculed by all.',
  'troll': 'Designate them as a bridge troll, collecting tolls from passersby.',
  'peasant': 'Demote them to lowly peasant status, toiling in the royal fields.',
  'rat': 'Identify them as a plague rat, to be avoided at all costs.',
  'ghost': 'Turn them into a ghost, haunting the royal corridors.',
  'skeleton': 'Transform them into a rattling skeleton, a macabre spectacle.',
  'zombie': 'Change them into a shambling zombie, mindlessly wandering.',
  'witch': 'Brand them as a witch, subject to medieval suspicion.',
  'monster': 'Label them as a lurking monster, feared by all in the kingdom.',
  'demon': 'Mark them as a fiendish demon, an agent of chaos.',
  'dragon': 'Identify them as a fearsome dragon, hoarding wealth selfishly.',
  'king': 'Crown them as a false king, a pretender to the throne.',
  'queen': 'Proclaim them as a false queen, lacking true royal lineage.',
  'knight': 'Dub them as a rusty knight, failed in chivalrous duties.',
  'bishop': 'Name them as a corrupt bishop, abusing sacred trust.',
  'rook': 'Designate them as a crumbling rook, unreliable in defense.',
  'pawn': 'Reduce them to a mere pawn, expendable in royal games.',
  'target': 'Make them target practice for the royal archers.',
  'challenge': 'Issue a royal challenge, to prove their worth.'
};

// Get mockery description
export const getMockeryDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || 'Unknown mockery action';
};

// CSS classes for active mockery effects
export const MOCKERY_CSS_CLASSES: Record<MockeryAction, string> = {
  'tomatoes': 'mockery-tomatoes',
  'eggs': 'mockery-eggs',
  'shame': 'mockery-shame',
  'dungeons': 'mockery-dungeons',
  'immune': 'mockery-immune',
  'crown': 'mockery-crown',
  'stocks': 'mockery-stocks',
  'dunce': 'mockery-dunce',
  'jester': 'mockery-jester',
  'fool': 'mockery-fool',
  'troll': 'mockery-troll',
  'peasant': 'mockery-peasant',
  'rat': 'mockery-rat',
  'ghost': 'mockery-ghost',
  'skeleton': 'mockery-skeleton',
  'zombie': 'mockery-zombie',
  'witch': 'mockery-witch',
  'monster': 'mockery-monster',
  'demon': 'mockery-demon',
  'dragon': 'mockery-dragon',
  'king': 'mockery-king',
  'queen': 'mockery-queen',
  'knight': 'mockery-knight',
  'bishop': 'mockery-bishop',
  'rook': 'mockery-rook',
  'pawn': 'mockery-pawn',
  'target': 'mockery-target',
  'challenge': 'mockery-challenge'
};

// Get active mockery class
export const getActiveMockeryClass = (action: MockeryAction): string => {
  return MOCKERY_CSS_CLASSES[action] || '';
};

// Map tiers to cosmetic rarities
export const MOCKERY_TIER_TO_RARITY: Record<MockeryTier, CosmeticRarity> = {
  'basic': 'common',
  'premium': 'uncommon',
  'royal': 'rare',
  'legendary': 'legendary',
  'common': 'common',
  'uncommon': 'uncommon',
  'rare': 'rare',
  'epic': 'epic',
  'silver': 'uncommon',
  'bronze': 'common'
};

// Get cosmetic rarity for mockery tier
export const getMockeryRarity = (tier: MockeryTier): CosmeticRarity => {
  return MOCKERY_TIER_TO_RARITY[tier] || 'common';
};

// Get mockery action name (for UI display)
export const getMockeryName = (action: MockeryAction): string => {
  return getMockeryActionTitle(action);
};

// Get mockery action price (alias for consistency)
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

// Get mockery action description with username
export const getMockeryActionDescription = (action: MockeryAction, username: string = 'user'): string => {
  const description = MOCKERY_DESCRIPTIONS[action] || '';
  return description.replace('the user', username).replace('them', username);
};
