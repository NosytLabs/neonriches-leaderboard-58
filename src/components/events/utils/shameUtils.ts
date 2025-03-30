
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
  
  return descriptions[action] || 'Publicly shame this user in medieval fashion.';
};

// Get the tier of a shame action
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

// Check if the action has a weekly discount
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  // Here we're just simulating a discount - in a real system this might be
  // based on the current date or a server response
  return action === getWeeklyDiscountedAction();
};

// Get the action that is discounted this week
export const getWeeklyDiscountedAction = (): ShameAction => {
  // Again, this is a simulation - a real implementation would be more dynamic
  // For now, let's assume "stocks" is always the discounted action
  return 'stocks';
};

// Get the discounted price
export const getDiscountedShamePrice = (action: ShameAction): number => {
  const regularPrice = getShameActionPrice(action);
  return regularPrice * 0.5; // 50% discount
};

// Get FireSale discount percentage
export const getFireSaleDiscountPercentage = (): number => {
  return 30; // 30% discount
};

// Check if it's FireSale month
export const isFireSaleMonth = (): boolean => {
  const now = new Date();
  return now.getMonth() === 10; // November is 10 (0-based)
};

export default {
  getShameActionIcon,
  getShameActionTitle,
  getShameActionDescription,
  getShameActionPrice,
  getShameActionTier,
  hasWeeklyDiscount,
  getWeeklyDiscountedAction,
  getDiscountedShamePrice,
  isFireSaleMonth,
  getFireSaleDiscountPercentage
};
