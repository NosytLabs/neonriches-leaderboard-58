
import { MockeryAction } from '@/types/mockery';

export const getMockeryActionDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    tomatoes: 'Pelt your target with rotten tomatoes. A classic form of public ridicule.',
    eggs: 'Throw rotten eggs at your target. The visual stench will follow them for a day.',
    shame: 'Ring the bell of shame to announce their misdeeds to the entire kingdom.',
    dungeons: 'Throw them into the royal dungeons for all to see.',
    immune: 'Grant immunity from mockery for a limited time.',
    crown: 'Force them to wear a mock crown, a symbol of false authority.',
    stocks: 'Lock them in the public stocks for all to ridicule.',
    dunce: 'Force them to wear a dunce cap in the town square.',
    jester: 'Make them the court jester, dancing for your amusement.',
    troll: 'Turn them into a bridge troll, scaring away visitors.',
    peasant: 'Reduce them to a lowly peasant status.',
    rat: 'Transform them into a plague rat scurrying through the streets.',
    ghost: 'Make them appear as a ghost, haunting the kingdom.',
    skeleton: 'Turn them into a skeleton, rattling through the halls.',
    zombie: 'Transform them into a zombie, shambling aimlessly.',
    witch: 'Accuse them of witchcraft, marking them for all to see.',
    monster: 'Turn them into a monster feared by all.',
    demon: 'Make them appear as a demon from the underworld.',
    dragon: 'Transform them into a fearsome dragon.',
    king: 'Crown them as a false king, mocking royal authority.',
    queen: 'Crown them as a false queen, mocking royal authority.',
    knight: 'Equip them with rusty armor, a mockery of knighthood.',
    bishop: 'Dress them as a corrupt bishop, mocking religious authority.',
    rook: 'Turn them into a crumbling rook, a shadow of a fortress.',
    pawn: 'Reduce them to a mere pawn in the game of thrones.',
    target: 'Mark them as a royal target for public mockery.',
    challenge: 'Issue a royal challenge to test their worth.',
    protection: 'Grant royal protection from mockery.'
  };
  
  return descriptions[action] || 'Apply a mysterious mockery effect.';
};

// For backward compatibility
export const getMockeryDescription = getMockeryActionDescription;

export default getMockeryActionDescription;
