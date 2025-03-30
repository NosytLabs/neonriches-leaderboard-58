
import { MockeryAction } from '@/types/mockery';

/**
 * Get the display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Rotten Tomatoes';
    case 'eggs': return 'Rotten Eggs';
    case 'putridEggs': return 'Putrid Eggs';
    case 'stocks': return 'Public Stocks';
    case 'dunce': return 'Dunce Cap';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    case 'smokeBomb': return 'Smoke Bomb';
    case 'protection': return 'Royal Protection';
    case 'jest': return 'Royal Jest';
    case 'glitterBomb': return 'Glitter Bomb';
    case 'defeat': return 'Royal Defeat';
    case 'immune': return 'Royal Immunity';
    case 'guillotine': return 'Royal Guillotine';
    case 'dungeons': return 'Royal Dungeons';
    case 'removal': return 'Profile Removal';
    case 'roast': return 'Royal Roast';
    case 'royalPie': return 'Royal Pie';
    case 'jokeCrown': return 'Joke Crown';
    case 'memeFrame': return 'Meme Frame';
    case 'crown': return 'Crown Target';
    case 'challenge': return 'Royal Challenge';
    case 'target': return 'Royal Target';
    default: return 'Unknown Mockery';
  }
};

/**
 * Get description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Splatter rotten tomatoes all over their profile.';
    case 'eggs': return 'Throw rotten eggs at their profile picture.';
    case 'putridEggs': return 'Throw putrid eggs that leave a lasting stench.';
    case 'stocks': return 'Place them in the stocks for public ridicule.';
    case 'dunce': return 'Make them wear a dunce cap on their profile.';
    case 'silence': return 'Prevent them from posting in public forums.';
    case 'courtJester': return 'Force them to wear the court jester outfit.';
    case 'smokeBomb': return 'Obscure their profile with a cloud of smoke.';
    case 'protection': return 'Protect yourself from mockery for a week.';
    case 'jest': return 'Apply a jester theme to their entire profile.';
    case 'glitterBomb': return 'Cover their profile in persistent glitter.';
    case 'defeat': return 'Display a "defeated" stamp on their profile.';
    case 'immune': return 'Become immune to mockery for a month.';
    case 'guillotine': return 'Place their profile under a guillotine.';
    case 'dungeons': return 'Send their profile to the royal dungeons.';
    case 'removal': return 'Temporarily hide their profile from public view.';
    case 'roast': return 'Create a custom roast that appears on their profile.';
    case 'royalPie': return 'Throw a pie at their face on their profile.';
    case 'jokeCrown': return 'Replace their crown with a jester\'s hat.';
    case 'memeFrame': return 'Frame their profile picture in a mocking meme.';
    case 'crown': return 'Mark them as a target worthy of the crown\'s attention.';
    case 'challenge': return 'Issue a formal royal challenge to them.';
    case 'target': return 'Place a royal target on their profile.';
    default: return 'Apply a mysterious mockery effect to their profile.';
  }
};

/**
 * Get title for a mockery action (shortened version of name)
 */
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

/**
 * Get description for a mockery action
 */
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

export { getMockeryDescription, getMockeryActionTitle, getMockeryActionDescription };
