
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';

// Get the icon for a shame action
export const getShameActionIcon = (action: ShameAction): string => {
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
};

// Get the price for a shame action
export const getShameActionPrice = (action: ShameAction): number => {
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
};

// Get the title for a shame action
export const getShameActionTitle = (action: ShameAction): string => {
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
  
  return titles[action] || 'Public Shaming';
};

// Get the description for a shame action
export const getShameActionDescription = (action: ShameAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Pelt the user with rotten tomatoes, a classic medieval public humiliation.',
    eggs: 'Throw rotten eggs at the user, leaving a subtle eggy aroma to follow them around.',
    shame: 'Ring the bell of shame as the user is paraded through town.',
    dungeons: 'Send the user to the royal dungeons for 24 hours of reflection.',
    immune: 'Grant immunity from all mockery for 7 days.',
    crown: 'Place a fake crown on the user\'s head as a pretender to the throne.',
    stocks: 'Place the user in the stocks for public ridicule.',
    dunce: 'Place a dunce cap on the user\'s head marking them as a simpleton.',
    jester: 'Dress the user as the court jester for all to laugh at.',
    fool: 'Proclaim the user as the village fool.',
    troll: 'Label the user as a bridge troll, demanding payment to cross.',
    peasant: 'Demote the user to a lowly peasant status.',
    rat: 'Declare the user a plague rat, to be avoided.',
    ghost: 'Turn the user into a ghost that others can see through.',
    skeleton: 'Transform the user into a skeleton, all bones and no substance.',
    zombie: 'Turn the user into a mindless zombie.',
    witch: 'Accuse the user of witchcraft, leading to suspicion.',
    monster: 'Mark the user as a monster to be feared.',
    demon: 'Expose the user as a demon in disguise.',
    dragon: 'Identify the user as a dragon hoarding wealth.',
    king: 'Crown the user as a false king with no real power.',
    queen: 'Crown the user as a false queen with no real authority.',
    knight: 'Dub the user a rusty knight, past their prime.',
    bishop: 'Name the user a corrupt bishop, falsely blessing actions.',
    rook: 'Declare the user a crumbling rook, only useful at the edges.',
    pawn: 'Expose the user as a mere pawn in the game.',
    target: 'Make the user a target for practice.',
    challenge: 'Issue a royal challenge to the user\'s worthiness.'
  };
  
  return descriptions[action] || 'Subject the user to public mockery for their actions.';
};

// Get the tier for a shame action
export const getShameActionTier = (action: ShameAction): MockeryTier => {
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

// Helper functions
export const isFireSaleMonth = (): boolean => {
  const now = new Date();
  const month = now.getMonth(); // 0-based (0 = January)
  return month === 4 || month === 11; // May or December
};

export const getFireSaleDiscountPercentage = (): number => {
  const now = new Date();
  const month = now.getMonth();
  return month === 4 ? 15 : 25; // 15% in May, 25% in December
};
