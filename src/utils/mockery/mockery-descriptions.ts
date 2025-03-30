
import { MockeryAction } from '@/types/mockery';

/**
 * Get a description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Splat! Rotten tomatoes thrown at the user.';
    case 'eggs':
      return 'Crack! Eggs smashed on the user\'s profile.';
    case 'stocks':
      return 'Restrained in the public stocks for all to see.';
    case 'dunce':
      return 'A dunce cap has been placed on this user\'s head.';
    case 'jester':
      return 'Forced to wear the jester\'s outfit for public amusement.';
    case 'crown':
      return 'A mocking crown of thorns has been placed upon their head.';
    case 'taunt':
      return 'This user is being publicly taunted for their actions.';
    case 'shame':
      return 'Public shaming has commenced for this user.';
    case 'putridEggs':
      return 'Putrid eggs have been hurled at this user. The smell lingers...';
    case 'silence':
      return 'This user has been silenced temporarily. Their royal decrees fall upon deaf ears.';
    case 'courtJester':
      return 'Appointed as the Court Jester, they must now entertain the masses.';
    case 'smokeBomb':
      return 'A smoke bomb has concealed their profile in a cloud of embarrassment.';
    case 'protection':
      return 'This user has royal protection against mockery.';
    case 'jest':
      return 'The subject of royal jest and mockery.';
    case 'glitterBomb':
      return 'Sparkly but embarrassing, this user has been glitter bombed!';
    case 'defeat':
      return 'Utterly defeated in public display of humiliation.';
    case 'immune':
      return 'This user is immune to mockery through divine right.';
    case 'guillotine':
      return 'Headed for the guillotine, metaphorically speaking of course!';
    case 'dungeons':
      return 'Sent to the royal dungeons for a timeout from society.';
    case 'removal':
      return 'Removed from court and disgraced.';
    case 'roast':
      return 'This user has been utterly roasted by their peers.';
    case 'royalPie':
      return 'A pie adorned with royal icing, now adorning their face.';
    case 'jokeCrown':
      return 'Wearing a crown of jokes, each jewel a punchline at their expense.';
    case 'memeFrame':
      return 'Framed in internet infamy, their mockery preserved for eternity.';
    case 'humiliate':
      return 'Publicly humiliated for the amusement of the court.';
    case 'challenge':
      return 'Their honor has been challenged in public court.';
    case 'target':
      return 'Marked as a target for mockery and jest.';
    default:
      return 'This user has been mocked in an undefined manner.';
  }
};

/**
 * Get a title for a mockery action
 */
export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Rotten Tomatoes';
    case 'eggs':
      return 'Egg Pelting';
    case 'putridEggs':
      return 'Putrid Eggs';
    case 'stocks':
      return 'Public Stocks';
    case 'dunce':
      return 'Dunce Cap';
    case 'jester':
      return 'Jester\'s Bell';
    case 'crown':
      return 'Mockery Crown';
    case 'taunt':
      return 'Royal Taunt';
    case 'shame':
      return 'Public Shame';
    case 'silence':
      return 'Royal Silence';
    case 'courtJester':
      return 'Court Jester';
    case 'smokeBomb':
      return 'Smoke Bomb';
    case 'protection':
      return 'Royal Protection';
    case 'jest':
      return 'Royal Jest';
    case 'glitterBomb':
      return 'Glitter Bomb';
    case 'defeat':
      return 'Utter Defeat';
    case 'immune':
      return 'Divine Immunity';
    case 'guillotine':
      return 'The Guillotine';
    case 'dungeons':
      return 'Royal Dungeons';
    case 'removal':
      return 'Court Removal';
    case 'roast':
      return 'Royal Roast';
    case 'royalPie':
      return 'Royal Pie';
    case 'jokeCrown':
      return 'Joke Crown';
    case 'memeFrame':
      return 'Meme Frame';
    case 'humiliate':
      return 'Public Humiliation';
    case 'challenge':
      return 'Honor Challenge';
    case 'target':
      return 'Mockery Target';
    default:
      return 'Unknown Mockery';
  }
};

/**
 * Get a detailed description for a mockery action
 */
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

export { getMockeryDescription, getMockeryActionTitle, getMockeryActionDescription };
