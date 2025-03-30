
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Mockery utility functions
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    shame: 'Public Shaming',
    dungeons: 'Send to Dungeons',
    immune: 'Royal Immunity',
    crown: 'Mock Crown',
    stocks: 'Placed in Stocks',
    dunce: 'Dunce Cap',
    jester: 'Court Jester',
    clown: 'Royal Clown',
    fool: 'Village Fool',
    troll: 'Bridge Troll',
    peasant: 'Lowly Peasant',
    rat: 'Plague Rat',
    ghost: 'Haunting Ghost',
    skeleton: 'Rattling Skeleton',
    zombie: 'Shambling Zombie',
    witch: 'Cackling Witch',
    monster: 'Fearsome Monster',
    demon: 'Terrifying Demon',
    dragon: 'Mighty Dragon',
    king: 'False King',
    queen: 'False Queen',
    knight: 'Rusty Knight',
    bishop: 'Corrupt Bishop',
    rook: 'Crumbling Rook',
    pawn: 'Mere Pawn',
    target: 'Target Practice',
    challenge: 'Royal Challenge'
  };
  
  return names[action] || 'Unknown Mockery';
};

export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Pelt the user with rotten tomatoes, a classic form of public ridicule.',
    eggs: 'Throw rotten eggs at the user, leaving them with a smelly reputation.',
    shame: 'Ring the bell of shame at the user, announcing their disgrace to all.',
    dungeons: 'Send the user to the royal dungeons for a time-out from society.',
    immune: 'Grant royal immunity, protecting from mockery for a period.',
    crown: 'Place a mockery crown on their head, marking them as a pretender.',
    stocks: 'Place them in the stocks for public viewing and ridicule.',
    dunce: 'Force them to wear the dunce cap, marking their foolishness.',
    jester: 'Appoint them as the court jester, to entertain with their folly.',
    clown: 'Make them the royal clown, a subject of constant laughter.',
    fool: 'Declare them the village fool, known for their poor decisions.',
    troll: 'Label them a bridge troll, feared for their negativity.',
    peasant: 'Demote them to a lowly peasant, stripped of dignity.',
    rat: 'Mark them as a plague rat, carrier of misfortune.',
    ghost: 'Turn them into a ghost, transparent and overlooked.',
    skeleton: 'Reduce them to a skeleton, bare and exposed.',
    zombie: 'Transform them into a zombie, mindlessly following trends.',
    witch: 'Brand them a witch, subject to suspicion and mistrust.',
    monster: 'Label them a monster, feared and avoided.',
    demon: 'Mark them as a demon, source of chaos and discord.',
    dragon: 'Call them a dragon, hoarding wealth and breathing fire.',
    king: 'Crown them a false king, ruler of nothing but air.',
    queen: 'Name them a false queen, commanding no real respect.',
    knight: 'Dub them a rusty knight, well past their prime.',
    bishop: 'Appoint them corrupt bishop, preaching but not practicing.',
    rook: 'Make them a crumbling rook, once strong but now failing.',
    pawn: 'Reduce them to a mere pawn, moved by others\' whims.',
    target: 'Mark them as target practice, easy and satisfying to hit.',
    challenge: 'Issue them a royal challenge, a test of their mettle.'
  };
  
  return descriptions[action] || 'An unknown form of mockery';
};

export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    shame: 0.75,
    dungeons: 1.00,
    immune: 5.00,
    crown: 1.50,
    stocks: 1.25,
    dunce: 0.75,
    jester: 1.00,
    clown: 0.75,
    fool: 0.50,
    troll: 1.00,
    peasant: 0.50,
    rat: 0.75,
    ghost: 1.00,
    skeleton: 1.25,
    zombie: 1.50,
    witch: 1.75,
    monster: 2.00,
    demon: 2.50,
    dragon: 3.00,
    king: 3.50,
    queen: 3.50,
    knight: 2.00,
    bishop: 2.25,
    rook: 1.75,
    pawn: 0.25,
    target: 0.50,
    challenge: 5.00
  };
  
  return costs[action] || 1.00;
};

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
    clown: 'basic',
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
    challenge: 'royal',
  };
  
  return tiers[action] || 'basic';
};

export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colors: Record<MockeryTier, string> = {
    'basic': 'text-gray-400',
    'premium': 'text-blue-400',
    'royal': 'text-royal-gold',
    'legendary': 'text-purple-400',
    'silver': 'text-gray-300'
  };
  
  return colors[tier] || 'text-gray-400';
};

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
    clown: '🤡',
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

export const getActiveMockeryClass = (action: MockeryAction): string => {
  const classes: Record<MockeryAction, string> = {
    tomatoes: 'mockery-tomatoes',
    eggs: 'mockery-eggs',
    shame: 'mockery-shame',
    dungeons: 'mockery-dungeons',
    immune: 'mockery-immune',
    crown: 'mockery-crown',
    stocks: 'mockery-stocks',
    dunce: 'mockery-dunce',
    jester: 'mockery-jester',
    clown: 'mockery-clown',
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
  
  return classes[action] || '';
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};
