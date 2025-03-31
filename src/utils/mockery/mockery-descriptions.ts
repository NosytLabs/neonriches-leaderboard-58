
import { MockeryAction } from '@/types/mockery-types';

// Get the description for a mockery action
export const getMockeryActionDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    tomatoes: 'Throw rotten tomatoes at this user, marking them with public shame.',
    eggs: 'Pelt this user with rotten eggs, leaving a stinky reputation.',
    putridEggs: 'Bombard with particularly putrid eggs that leave a lasting stench.',
    dungeons: 'Send this user to the royal dungeons for their crimes against the throne.',
    immune: 'Grant immunity from mockery for a short period.',
    crown: 'Steal their crown, reducing their royal status temporarily.',
    stocks: 'Place them in the public stocks for all to ridicule.',
    dunce: 'Force them to wear a dunce cap, highlighting their foolishness.',
    jester: 'Turn them into a court jester, dancing for your amusement.',
    courtJester: 'Promote them to Royal Court Jester with an elaborate costume.',
    jest: 'Make a royal jest at their expense.',
    troll: 'Label them as the village troll, an outcast among nobles.',
    peasant: 'Demote them to a lowly peasant, removing noble privileges.',
    rat: 'Transform them into a castle rat, scurrying in the shadows.',
    ghost: 'Turn them into a ghostly apparition, barely noticed by others.',
    skeleton: 'Reduce them to a skeleton crew, bare bones of their former glory.',
    zombie: 'Make them a mindless royal zombie, following orders without question.',
    witch: 'Label them a royal witch, feared and avoided by other nobles.',
    monster: 'Transform them into a castle monster, frightening other users.',
    demon: 'Mark them as a royal demon, a truly terrifying presence.',
    dragon: 'Make them face the royal dragon, a mighty challenge to overcome.',
    king: 'Mock them as a false king, a pretender to the throne.',
    queen: 'Ridicule them as a false queen, with no real power.',
    knight: 'Demote them to a fallen knight, disgraced and dishonored.',
    bishop: 'Label them a corrupt bishop, unworthy of trust.',
    rook: 'Make them a fallen rook, no longer strategic or useful.',
    pawn: 'Reduce them to a mere pawn in your royal game.',
    target: 'Mark them as a royal target for public mockery.',
    challenge: 'Issue a royal challenge, testing their worthiness.',
    smokeBomb: 'Throw a smoke bomb to obscure their profile and achievements.',
    glitterBomb: 'Explode a glitter bomb on their profile that won\'t wash away.',
    royalPie: 'Splat a cream pie in their face for all the court to see.',
    jokeCrown: 'Replace their crown with a ridiculous joke version.',
    memeFrame: 'Frame their profile in a humorous medieval meme.',
    roast: 'Deliver a royal roasting that burns their reputation.',
    ridicule: 'Subject them to public ridicule in the town square.',
    humiliate: 'Orchestrate a grand public humiliation ceremony.',
    expose: 'Expose their shortcomings to the entire kingdom.',
    mock: 'Mock them mercilessly with royal wit.',
    taunt: 'Taunt them with royal insults that sting their pride.',
    guillotine: 'Send them to the royal guillotine (metaphorically).',
    defeat: 'Declare their total defeat in courtly matters.',
    removal: 'Banish them temporarily from royal recognition.',
    protection: 'Grant royal protection against mockery for an extended period.',
    silence: 'Impose royal silence, preventing them from being heard at court.',
    shame: 'Cover them in public shame for all to see.'
  };

  return descriptions[action] || 'A mysterious mockery with unknown effects.';
};

// For backward compatibility
export const getMockeryDescription = getMockeryActionDescription;
