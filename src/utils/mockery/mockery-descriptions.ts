
import { MockeryAction } from '@/types/mockery-types';

// Get the description for a mockery action
export const getMockeryActionDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    tomatoes: 'Pelt the user with rotten tomatoes - a classic form of public ridicule.',
    eggs: 'Throw rotten eggs at the user - a stinky visual embarrassment.',
    putridEggs: 'Hurl extremely putrid eggs at the user - the stench remains for days.',
    dungeons: 'Throw the user into the royal dungeons for 48 hours.',
    immune: 'Grant immunity from mockery actions for 48 hours.',
    crown: 'Replace their profile crown with a jester\'s hat.',
    stocks: 'Place the user in medieval stocks for public display.',
    dunce: 'Force the user to wear a dunce cap for 24 hours.',
    jester: 'Appoint the user as your personal jester for 24 hours.',
    courtJester: 'Appoint the user as the royal court jester for 36 hours.',
    jest: 'Subject the user to a medieval royal jest.',
    troll: 'Label the user as the village troll.',
    peasant: 'Demote the user to the status of a lowly peasant.',
    rat: 'Turn the user into a castle rat scurrying around.',
    ghost: 'Transform the user into a haunting royal ghost.',
    skeleton: 'Turn the user into a rattling skeleton.',
    zombie: 'Transform the user into a royal zombie.',
    witch: 'Transform the user into a medieval witch.',
    monster: 'Turn the user into a fearsome castle monster.',
    demon: 'Transform the user into a terrifying royal demon for 36 hours.',
    dragon: 'Turn the user into a fearsome dragon for 36 hours.',
    king: 'Label the user as a false king with no real power.',
    queen: 'Label the user as a false queen with no real power.',
    knight: 'Demote the user to a fallen knight.',
    bishop: 'Label the user as a corrupt bishop.',
    rook: 'Demote the user to a fallen rook piece.',
    pawn: 'Demote the user to a mere pawn in the game.',
    target: 'Mark the user as a royal target for mockery.',
    challenge: 'Issue a royal challenge to the user.',
    smokeBomb: 'Throw a smoke bomb that obscures their profile.',
    glitterBomb: 'Cover their profile with royal glitter that\'s impossible to remove.',
    royalPie: 'Throw a custard pie in their royal face.',
    jokeCrown: 'Replace their crown with a jester\'s hat for all to see.',
    memeFrame: 'Frame their profile in medieval memes.',
    roast: 'Subject them to a royal roasting ceremony.',
    ridicule: 'Subject them to public ridicule in the town square.',
    humiliate: 'Subject them to public humiliation for 48 hours.',
    expose: 'Expose their embarrassing royal secrets for 48 hours.',
    mock: 'Mock them publicly with royal impersonations.',
    taunt: 'Taunt them with royal insults.',
    guillotine: 'Place their profile under the guillotine for 36 hours.',
    defeat: 'Mark them with the stamp of royal defeat.',
    removal: 'Banish them from the kingdom for 48 hours.',
    protection: 'Shield yourself from all mockery for 7 days.',
    silence: 'Silence the user for 24 hours.',
    shame: 'Shame the user publicly with a classic mockery effect.'
  };

  return descriptions[action] || 'An unknown form of medieval mockery.';
};

// For backward compatibility
export const getMockeryDescription = getMockeryActionDescription;
