
import { MockeryAction, ShameAction } from '@/types/mockery';

// Prices for different shame actions
const shameActionPrices: Record<ShameAction, number> = {
  tomatoes: 0.25,
  eggs: 0.50,
  stocks: 1.00,
  shame: 0.75,
  dungeons: 1.50,
  immune: 5.00,
  crown: 2.00,
  dunce: 0.75,
  jester: 1.00,
  clown: 1.25,
  fool: 0.50,
  troll: 1.50,
  peasant: 0.75,
  rat: 0.50,
  ghost: 1.25,
  skeleton: 1.50,
  zombie: 2.00,
  witch: 2.25,
  monster: 2.50,
  demon: 3.00,
  dragon: 4.00,
  king: 3.50,
  queen: 3.50,
  knight: 2.00,
  bishop: 2.25,
  rook: 1.75,
  pawn: 0.50,
  target: 0.75,
  challenge: 5.00
};

// Get the price of a shame action
export const getShameActionPrice = (action: ShameAction): number => {
  return shameActionPrices[action] || 1.00;
};

// Weekly discounted action
let _weeklyDiscountedAction: ShameAction = 'stocks';

// Check if an action has a weekly discount
export const hasWeeklyDiscount = (action: ShameAction): boolean => {
  return action === _weeklyDiscountedAction;
};

// Get the current weekly discounted action
export const getWeeklyDiscountedAction = (): ShameAction => {
  return _weeklyDiscountedAction;
};

// Set a new weekly discounted action
export const setWeeklyDiscountedAction = (action: ShameAction): void => {
  _weeklyDiscountedAction = action;
};

// Get the discounted price (50% off)
export const getDiscountedShamePrice = (action: ShameAction): number => {
  return getShameActionPrice(action) * 0.5;
};

// Get the icon name for a shame action
export const getShameActionIconName = (action: MockeryAction): string => {
  const icons: Record<MockeryAction, string> = {
    tomatoes: 'tomato',
    eggs: 'egg',
    shame: 'bell',
    dungeons: 'lock',
    immune: 'shield',
    crown: 'crown',
    stocks: 'wood',
    dunce: 'hat',
    jester: 'cards',
    clown: 'clown',
    fool: 'dizzy',
    troll: 'troll',
    peasant: 'farmer',
    rat: 'rat',
    ghost: 'ghost',
    skeleton: 'skull',
    zombie: 'zombie',
    witch: 'witch',
    monster: 'monster',
    demon: 'devil',
    dragon: 'dragon',
    king: 'king',
    queen: 'queen',
    knight: 'chess-knight',
    bishop: 'chess-bishop',
    rook: 'chess-rook',
    pawn: 'chess-pawn',
    target: 'target',
    challenge: 'swords'
  };
  
  return icons[action] || 'help-circle';
};

// Get the icon for a shame action
export const getShameActionIcon = (action: ShameAction): string => {
  const icons: Record<ShameAction, string> = {
    tomatoes: '🍅',
    eggs: '🥚',
    stocks: '🪵',
    shame: '🔔',
    dungeons: '⛓️',
    immune: '🛡️',
    crown: '👑',
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
