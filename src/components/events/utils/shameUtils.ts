
import { MockeryAction } from '@/types/mockery';

// Get shame action icon
export const getShameActionIcon = (action: MockeryAction) => {
  const icons: Record<MockeryAction, string> = {
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
  
  return icons[action] || '🔮';
};

// Get shame action cost
export const getShameActionPrice = (action: MockeryAction) => {
  const costs: Record<MockeryAction, number> = {
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
  
  return costs[action] || 0.25;
};

// Get shame action title
export const getShameActionTitle = (action: MockeryAction) => {
  const titles: Record<MockeryAction, string> = {
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
  
  return titles[action] || 'Unknown Action';
};

// Get shame action description
export const getShameActionDescription = (action: MockeryAction) => {
  const descriptions: Record<MockeryAction, string> = {
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

  return descriptions[action] || 'Unknown action description';
};

// Weekly discount functions
export const getWeeklyDiscountedAction = (): MockeryAction => {
  // Return a random action for discount or a fixed one based on current week
  const actions: MockeryAction[] = ['tomatoes', 'eggs', 'shame', 'stocks', 'dungeons'];
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % actions.length;
  return actions[weekNumber];
};

export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  return action === getWeeklyDiscountedAction();
};

export const getDiscountedShamePrice = (action: MockeryAction): number => {
  const originalPrice = getShameActionPrice(action);
  return originalPrice * 0.5; // 50% discount
};

export const isFireSaleMonth = (): boolean => {
  // For example, December is fire sale month
  const currentMonth = new Date().getMonth();
  return currentMonth === 11; // December is 11 (0-indexed)
};

export const getFireSaleDiscountPercentage = (): number => {
  return isFireSaleMonth() ? 0.75 : 0.0; // 75% off during fire sale month
};
