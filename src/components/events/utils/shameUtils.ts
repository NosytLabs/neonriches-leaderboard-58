
import { MockeryAction, ShameAction } from '@/types/mockery';
import { getMockeryCost } from '@/utils/mockery/mockery-costs';
import { hasWeeklyDiscount, getWeeklyDiscountedAction, getDiscountedShamePrice } from '@/utils/mockery/shame-discount-utils';

// Re-export the discount utilities
export { hasWeeklyDiscount, getWeeklyDiscountedAction, getDiscountedShamePrice };

// Re-export the price function
export { getMockeryCost as getShameActionPrice };

// Get the icon for a shame action
export const getShameActionIcon = (action: ShameAction): string => {
  const icons: Record<ShameAction, string> = {
    tomatoes: '🍅',
    eggs: '🥚',
    shame: '😱',
    dungeons: '🏰',
    immune: '🛡️',
    crown: '👑',
    stocks: '🪵',
    dunce: '🧢',
    jester: '🃏',
    fool: '🤡',
    troll: '👹',
    peasant: '👨‍🌾',
    rat: '🐀',
    ghost: '👻',
    skeleton: '💀',
    zombie: '🧟',
    witch: '🧙‍♀️',
    monster: '👾',
    demon: '😈',
    dragon: '🐉',
    king: '🤴',
    queen: '👸',
    knight: '🗡️',
    bishop: '♗',
    rook: '♖',
    pawn: '♙',
    target: '🎯',
    challenge: '⚔️'
  };

  return icons[action] || '❓';
};

// Get the title for a shame action
export const getShameActionTitle = (action: ShameAction): string => {
  const titles: Record<ShameAction, string> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Eggs',
    shame: 'Public Shame',
    dungeons: 'Send to Dungeons',
    immune: 'Grant Immunity',
    crown: 'Steal Crown',
    stocks: 'Put in Stocks',
    dunce: 'Dunce Cap',
    jester: 'Make a Jester',
    fool: 'Label as Fool',
    troll: 'Mark as Troll',
    peasant: 'Demote to Peasant',
    rat: 'Turn into Rat',
    ghost: 'Make Ghostly',
    skeleton: 'Skeletonize',
    zombie: 'Zombify',
    witch: 'Accuse of Witchcraft',
    monster: 'Turn into Monster',
    demon: 'Demonize',
    dragon: 'Dragon Transformation',
    king: 'Crown as King',
    queen: 'Crown as Queen',
    knight: 'Knight Them',
    bishop: 'Make Bishop',
    rook: 'Castle Them',
    pawn: 'Reduce to Pawn',
    target: 'Mark as Target',
    challenge: 'Royal Challenge'
  };

  return titles[action] || 'Unknown Action';
};

// Get the description for a shame action
export const getShameActionDescription = (action: ShameAction): string => {
  const descriptions: Record<ShameAction, string> = {
    tomatoes: 'Pelt the user with virtual tomatoes as a sign of disapproval',
    eggs: 'Throw rotten eggs at the user for all to see',
    shame: 'Ring the shame bell and parade the user through the town',
    dungeons: 'Banish the user to the royal dungeons',
    immune: 'Grant immunity from mockery for a period of time',
    crown: 'Temporarily steal the user\'s crown and dignity',
    stocks: 'Place the user in the stocks for public ridicule',
    dunce: 'Make the user wear a dunce cap for their foolishness',
    jester: 'Appoint the user as the court jester',
    fool: 'Officially declare the user a fool',
    troll: 'Label the user as a common internet troll',
    peasant: 'Demote the user to lowly peasant status',
    rat: 'Transform the user into a scurrying rat',
    ghost: 'Turn the user into a transparent ghost',
    skeleton: 'Reduce the user to a mere skeleton',
    zombie: 'Turn the user into a shambling zombie',
    witch: 'Accuse the user of witchcraft',
    monster: 'Transform the user into a hideous monster',
    demon: 'Turn the user into a demonic entity',
    dragon: 'Transform the user into a fearsome dragon',
    king: 'Sarcastically crown the user as the king',
    queen: 'Mockingly crown the user as the queen',
    knight: 'Knight the user in an ironic ceremony',
    bishop: 'Appoint the user as a bishop of folly',
    rook: 'Turn the user into a living castle',
    pawn: 'Reduce the user to a mere pawn',
    target: 'Mark the user as a target for future mockery',
    challenge: 'Issue a royal challenge to the user'
  };

  return descriptions[action] || 'Apply a mysterious effect to the user';
};
