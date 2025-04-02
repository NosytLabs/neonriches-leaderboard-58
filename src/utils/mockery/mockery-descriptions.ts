
import { MockeryAction } from '@/types/mockery-types';

/**
 * Get the display name of a mockery action
 */
export function getMockeryDisplayName(action: MockeryAction): string {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Eggs',
    confetti: 'Confetti',
    flowers: 'Flowers',
    praise: 'Royal Praise',
    putridEggs: 'Putrid Eggs',
    crown: 'Jester Crown',
    stocks: 'Stocks',
    jester: 'Jester Hat',
    shame: 'Public Shame',
    silence: 'Royal Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    taunt: 'Royal Taunt',
    challenge: 'Royal Challenge',
    joust: 'Royal Joust',
    duel: 'Royal Duel',
    carrot: 'Rotten Carrot',
    fish: 'Stinky Fish',
    gift: 'Royal Gift',
    mock: 'Mock',
    thumbsDown: 'Royal Disapproval'
  };
  
  return names[action] || 'Unknown Mockery';
}

/**
 * Get the description of a mockery action
 */
export function getMockeryActionDescription(action: MockeryAction): string {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw rotten tomatoes at this user, marking their profile with tomato splatters for 24 hours.',
    eggs: 'Throw eggs at this user, marking their profile with egg residue for 24 hours.',
    confetti: 'Shower this user with colorful confetti to celebrate their contributions.',
    flowers: 'Show appreciation by sending a bouquet of flowers to this user.',
    praise: 'Send royal praise to this user, boosting their profile status.',
    putridEggs: 'Throw especially putrid eggs at this user, creating a lingering stench for 48 hours.',
    crown: 'Force this user to wear a jester crown for 24 hours.',
    stocks: 'Place this user in the royal stocks for 24 hours, limiting their profile actions.',
    jester: 'Turn this user into the royal jester for 24 hours.',
    shame: 'Publicly shame this user on the leaderboard for 48 hours.',
    silence: 'Prevent this user from posting for 12 hours.',
    courtJester: 'Demote this user to court jester status for 48 hours.',
    smokeBomb: 'Deploy a smoke bomb on this user, temporarily hiding their profile details.',
    protection: 'Grant royal protection to prevent mockery for 24 hours.',
    taunt: 'Send a royal taunt to challenge this user.',
    challenge: 'Issue a formal spending challenge to this user.',
    joust: 'Challenge this user to a spending joust, with the winner gaining profile enhancements.',
    duel: 'Challenge this user to a spending duel for leaderboard recognition.',
    carrot: 'Throw a rotten carrot at this user, marking their profile for 12 hours.',
    fish: 'Slap this user with a stinky fish, adding a fishy aroma to their profile for 24 hours.',
    gift: 'Send a mysterious royal gift with unknown effects to this user.',
    mock: 'Publicly mock this user with a custom message.',
    thumbsDown: 'Express royal disapproval of this user\'s actions.'
  };
  
  return descriptions[action] || 'Unknown effect';
}
