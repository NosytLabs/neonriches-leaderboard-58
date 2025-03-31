
import { MockeryAction } from '@/types/mockery';

export const getMockeryActionDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Pelt your target with rotten tomatoes. A classic form of public ridicule.',
    eggs: 'Hurl rotten eggs at your target. The stench will follow them for a day.',
    shame: 'Subject your target to public ridicule and shame.',
    dungeons: 'Condemn your target to the digital dungeons for their offenses.',
    immune: 'Grant yourself immunity from mockery for a period of time.',
    crown: 'Place a mock crown upon the head of your target, making them a false king/queen.',
    stocks: 'Place your target in the virtual stocks for public display.',
    dunce: 'Make your target wear a dunce cap, marking their foolishness.',
    jester: 'Turn your target into a court jester, forced to entertain the nobles.',
    // fool: 'Label your target as the village fool.',
    troll: 'Mark your target as a digital troll for all to see.',
    peasant: 'Demote your target to peasant status, regardless of their spending.',
    rat: 'Curse your target with the mark of the plague rat.',
    ghost: 'Make your target appear as a ghost, haunting the digital realm.',
    skeleton: 'Turn your target into a skeleton, a reminder of their digital mortality.',
    zombie: 'Mark your target as infected with the digital plague.',
    witch: 'Subject your target to a virtual witch trial.',
    monster: 'Label your target as a digital monster, feared by all.',
    demon: 'Mark your target with demonic symbols for their digital sins.',
    dragon: 'Make your target the target of a virtual dragon\'s wrath.',
    king: 'Declare your target a false king, unworthy of their title.',
    queen: 'Declare your target a false queen, unworthy of their title.',
    knight: 'Brand your target as a tarnished knight, fallen from grace.',
    bishop: 'Mark your target as a fallen bishop, their digital piety questioned.',
    rook: 'Label your target as a damaged rook, their defenses crumbling.',
    pawn: 'Demote your target to a mere pawn in the digital game.',
    target: 'Mark your target as the royal target, the focus of the court\'s ridicule.',
    challenge: 'Challenge your target to a gauntlet of digital trials and tribulations.'
  };
  
  return descriptions[action] || 'Subject your target to mockery.';
};

// For backward compatibility
export const getMockeryDescription = getMockeryActionDescription;
