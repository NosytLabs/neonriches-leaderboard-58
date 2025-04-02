
import { MockeryAction } from '@/types/mockery-types';

export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomato: 'Throw a ripe tomato to express your disapproval.',
    egg: 'Hurl a rotten egg at your target, causing them embarrassment.',
    putridEgg: 'Launch an extremely putrid egg for maximum effect.',
    crown: 'Bestow a crown upon the worthy.',
    thumbsDown: 'Show your royal disapproval with a dramatic thumbs down.',
    mock: 'Publicly mock another member of the court.',
    stocks: 'Suggest public stocks punishment for the offender.',
    jester: 'Send in the jester to ridicule your target.',
    courtJester: 'Summon the royal court jester for an elaborate mockery.',
    silence: 'Command silence, forbidding the target from speaking.',
    taunt: 'Deliver a cutting taunt to wound their pride.',
    smokeBomb: 'Deploy a smoke bomb to create confusion.',
    protection: 'Offer royal protection against mockery to an ally.',
    flame: 'Roast them with a verbal flame attack.',
    heart: 'Show unexpected approval with a heart token.',
    skull: 'Give them the death stare to show extreme disapproval.',
    laugh: 'Respond with royal laughter at their expense.'
  };

  return descriptions[action] || 'No description available.';
};
