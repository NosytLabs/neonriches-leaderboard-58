
import { MockeryAction, MockeryTier, CosmeticRarity } from '@/types/mockery';

// Get the name of a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    shame: 'Bell of Shame',
    dungeons: 'Royal Dungeons',
    immune: 'Royal Immunity',
    crown: 'Mock Crown',
    stocks: 'In Stocks',
    dunce: 'Dunce Cap',
    jester: 'Court Jester',
    fool: 'Village Fool',
    troll: 'Bridge Troll',
    peasant: 'Lowly Peasant',
    rat: 'Plague Rat',
    ghost: 'Haunting Ghost',
    skeleton: 'Bare Bones',
    zombie: 'Walking Dead',
    witch: 'Witch Hunt',
    monster: 'Hidden Monster',
    demon: 'Inner Demon',
    dragon: 'Fierce Dragon',
    king: 'False King',
    queen: 'False Queen',
    knight: 'Rusty Knight',
    bishop: 'Corrupt Bishop',
    rook: 'Crumbling Rook',
    pawn: 'Mere Pawn',
    target: 'Practice Target',
    challenge: 'Royal Challenge'
  };
  
  return names[action] || 'Unknown Mockery';
};

// Get the description of a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Pelt the user with rotten tomatoes, a classic form of medieval public humiliation.',
    eggs: 'Throw rotten eggs at the user, leaving a lingering stench of medieval disgrace.',
    shame: 'Ring the bell of shame as they are paraded through the digital town square.',
    dungeons: 'Send them to the royal dungeons for a time-out from society.',
    immune: 'Grant royal immunity, protecting from all mockery for a time.',
    crown: 'Place a mockery crown on their profile, marking them as a pretender to the throne.',
    stocks: 'Place them in the stocks for all to see and ridicule.',
    dunce: 'Brand them with the dunce cap of digital ignorance.',
    jester: 'Force them to wear the motley garb of a court jester.',
    fool: 'Proclaim them as the village fool for all to witness.',
    troll: 'Transform them into a bridge troll, collecting tolls from passersby.',
    peasant: 'Reduce them to lowly peasant status, toiling in digital fields.',
    rat: 'Turn them into a plague rat, scurrying through the digital gutters.',
    ghost: 'Make them a ghost, haunting the halls of the leaderboard.',
    skeleton: 'Strip them to bare bones, a reminder of mortality.',
    zombie: 'Turn them into a mindless husk, wandering the digital realm.',
    witch: 'Mark them for a witch hunt, suspicion brewing among the townsfolk.',
    monster: 'Reveal their monstrous form, hidden beneath a human guise.',
    demon: 'Expose their demonic nature, corrupting all they touch.',
    dragon: 'Show their true form as a fierce dragon, hoarding wealth.',
    king: 'Crown them as a false king, their legitimacy always in question.',
    queen: 'Adorn them as a false queen, their rule a mere charade.',
    knight: 'Equip them as a rusty knight, their armor creaking and useless.',
    bishop: 'Consecrate them as a corrupt bishop, their prayers falling on deaf ears.',
    rook: 'Fortify them as a crumbling rook, their defenses in disrepair.',
    pawn: 'Reduce them to a mere pawn, expendable in the greater game.',
    target: 'Place them as a target for archery practice, arrows landing all around.',
    challenge: 'Issue them a royal challenge, their honor now at stake.'
  };
  
  return descriptions[action] || 'This mockery has no description';
};

// Get the cost of a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 0.25,
    eggs: 0.5,
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
  
  return costs[action] || 1.0;
};

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
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
};

// Get the color class for a mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    basic: 'text-gray-400',
    premium: 'text-royal-gold',
    royal: 'text-purple-500',
    legendary: 'text-red-500',
    silver: 'text-gray-300'
  };
  
  return colors[tier] || 'text-gray-400';
};

// Get the rarity for a mockery tier
export const getMockeryTierRarity = (tier: MockeryTier): CosmeticRarity => {
  const rarities: Record<MockeryTier, CosmeticRarity> = {
    basic: 'common',
    premium: 'uncommon',
    royal: 'rare',
    legendary: 'epic',
    silver: 'uncommon'
  };
  
  return rarities[tier] || 'common';
};

// Get the action icon for a mockery action
export const getMockeryActionIcon = (action: MockeryAction): string => {
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
  
  return icons[action] || '❓';
};

// Get the CSS class for active mockery
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const classNames: Record<MockeryAction, string> = {
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
  
  return classNames[action] || '';
};

// Alias functions for backward compatibility
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;
