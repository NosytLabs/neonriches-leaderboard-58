
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { CosmeticRarity } from '@/types/cosmetics';

// Get mockery action icon
export function getMockeryActionIcon(action: MockeryAction): string {
  const icons: Record<MockeryAction, string> = {
    tomatoes: '🍅',
    eggs: '🥚',
    shame: '🔔',
    dungeons: '⛓️',
    immune: '🛡️',
    crown: '👑',
    stocks: '🪵',
    dunce: '🎭',
    jester: '🃏',
    fool: '😵',
    troll: '👹',
    peasant: '👨‍🌾',
    rat: '🐀',
    ghost: '👻',
    skeleton: '💀',
    zombie: '🧟',
    witch: '🧙',
    monster: '👾',
    demon: '😈',
    dragon: '🐉',
    king: '🤴',
    queen: '👸',
    knight: '🐴',
    bishop: '♗',
    rook: '♖',
    pawn: '♟️',
    target: '🎯',
    challenge: '⚔️'
  };
  
  return icons[action] || '🎭';
}

// Get mockery action title
export function getMockeryActionTitle(action: MockeryAction): string {
  const titles: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    shame: 'Bell of Shame',
    dungeons: 'Royal Dungeons',
    immune: 'Royal Immunity',
    crown: 'Mock Crown',
    stocks: 'In Stocks',
    dunce: 'Dunce',
    jester: 'Jester',
    fool: 'Fool',
    troll: 'Troll',
    peasant: 'Peasant',
    rat: 'Rat',
    ghost: 'Ghost',
    skeleton: 'Skeleton',
    zombie: 'Zombie',
    witch: 'Witch',
    monster: 'Monster',
    demon: 'Demon',
    dragon: 'Dragon',
    king: 'King',
    queen: 'Queen',
    knight: 'Knight',
    bishop: 'Bishop',
    rook: 'Rook',
    pawn: 'Pawn',
    target: 'Target',
    challenge: 'Challenge'
  };
  
  return titles[action] || 'Public Mockery';
}

// Get mockery action price
export function getMockeryActionPrice(action: MockeryAction): number {
  const prices: Record<MockeryAction, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    shame: 0.75,
    dungeons: 1.0,
    immune: 5.0,
    crown: 1.5,
    stocks: 1.25,
    dunce: 0.5,
    jester: 1.0,
    fool: 0.5,
    troll: 1.0,
    peasant: 0.5,
    rat: 0.75,
    ghost: 1.0,
    skeleton: 1.25,
    zombie: 1.5,
    witch: 1.75,
    monster: 2.0,
    demon: 2.5,
    dragon: 3.0,
    king: 3.5,
    queen: 3.5,
    knight: 2.0,
    bishop: 2.25,
    rook: 1.75,
    pawn: 0.25,
    target: 0.5,
    challenge: 5.0
  };
  
  return prices[action] || 0.5;
}

// Get mockery action tier
export function getMockeryTier(action: MockeryAction): MockeryTier {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'basic',
    eggs: 'basic',
    shame: 'basic',
    dungeons: 'premium',
    immune: 'royal',
    crown: 'premium',
    stocks: 'premium',
    dunce: 'basic',
    jester: 'premium',
    fool: 'basic',
    troll: 'premium',
    peasant: 'basic',
    rat: 'basic',
    ghost: 'premium',
    skeleton: 'premium',
    zombie: 'premium',
    witch: 'premium',
    monster: 'royal',
    demon: 'royal',
    dragon: 'legendary',
    king: 'royal',
    queen: 'royal',
    knight: 'premium',
    bishop: 'premium',
    rook: 'premium',
    pawn: 'basic',
    target: 'basic',
    challenge: 'royal'
  };
  
  return tiers[action] || 'basic';
}

// Get mockery tier color
export function getMockeryTierColorClass(tier: MockeryTier): string {
  const colors: Record<MockeryTier, string> = {
    basic: 'text-gray-400',
    premium: 'text-blue-400',
    royal: 'text-royal-gold',
    legendary: 'text-purple-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400'
  };
  
  return colors[tier] || 'text-gray-400';
}

// Get mockery name
export function getMockeryName(action: MockeryAction): string {
  return getMockeryActionTitle(action);
}

// Get mockery description
export function getMockeryDescription(action: MockeryAction): string {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Pelt the user with rotten tomatoes, a classic medieval public humiliation.',
    eggs: 'Throw rotten eggs at the user, leaving a subtle eggy aroma to follow them around.',
    shame: 'Ring the bell of shame as the user is paraded through town.',
    dungeons: 'Send the user to the royal dungeons for 24 hours of reflection.',
    immune: 'Grant immunity from all mockery for 7 days.',
    crown: 'Place a fake crown on the user\'s head as a pretender to the throne.',
    stocks: 'Place the user in the town square stocks for public viewing.',
    dunce: 'Place a dunce cap on the user\'s head.',
    jester: 'Dress the user as the court jester.',
    fool: 'Declare the user the village fool.',
    troll: 'Turn the user into a bridge troll.',
    peasant: 'Reduce the user to a lowly peasant status.',
    rat: 'Transform the user into a plague rat.',
    ghost: 'Turn the user into a ghost haunting the halls.',
    skeleton: 'Reduce the user to mere bones.',
    zombie: 'Turn the user into a mindless zombie.',
    witch: 'Accuse the user of witchcraft.',
    monster: 'Reveal the user\'s monstrous form.',
    demon: 'Expose the user\'s demonic nature.',
    dragon: 'Reveal the user to be a fearsome dragon.',
    king: 'Expose this user as a false king.',
    queen: 'Reveal this user as a pretender to the throne.',
    knight: 'Show this user to be a rusty knight.',
    bishop: 'Reveal this corrupt bishop.',
    rook: 'Show this user to be a crumbling rook.',
    pawn: 'Reduce the user to a mere pawn in the game.',
    target: 'Make the user a target for practice.',
    challenge: 'Challenge the user to a royal duel.'
  };
  
  return descriptions[action] || 'Publicly mock this user in medieval fashion.';
}

// Get mockery cost
export function getMockeryCost(action: MockeryAction): number {
  return getMockeryActionPrice(action);
}

// Get mockery tier to cosmetic rarity mapping
export function getTierToRarityMapping(tier: MockeryTier): CosmeticRarity {
  const rarityMap: Record<MockeryTier, CosmeticRarity> = {
    basic: 'common',
    premium: 'uncommon',
    royal: 'rare',
    legendary: 'epic',
    silver: 'common',
    bronze: 'common',
    common: 'common',
    uncommon: 'uncommon',
    rare: 'rare',
    epic: 'epic'
  };
  
  return rarityMap[tier] || 'common';
}

// Get CSS class for active mockery effect
export function getActiveMockeryClass(action: MockeryAction): string {
  const effectClasses: Record<MockeryAction, string> = {
    tomatoes: 'mockery-tomatoes',
    eggs: 'mockery-eggs',
    shame: 'mockery-shame',
    dungeons: 'mockery-dungeons',
    immune: 'mockery-immune',
    crown: 'mockery-crown',
    stocks: 'mockery-stocks',
    dunce: 'mockery-dunce',
    jester: 'mockery-jester',
    fool: 'mockery-fool',
    troll: 'mockery-troll',
    peasant: 'mockery-peasant',
    rat: 'mockery-rat',
    ghost: 'mockery-ghost',
    skeleton: 'mockery-skeleton',
    zombie: 'mockery-zombie',
    witch: 'mockery-witch',
    monster: 'mockery-monster',
    demon: 'mockery-demon',
    dragon: 'mockery-dragon',
    king: 'mockery-king',
    queen: 'mockery-queen',
    knight: 'mockery-knight',
    bishop: 'mockery-bishop',
    rook: 'mockery-rook',
    pawn: 'mockery-pawn',
    target: 'mockery-target',
    challenge: 'mockery-challenge'
  };
  
  return effectClasses[action] || 'mockery-generic';
}

export {
  getMockeryTier as getMockeryTier,
  getMockeryTierColorClass as getMockeryTierColorClass,
  getActiveMockeryClass as getActiveMockeryClass
};
