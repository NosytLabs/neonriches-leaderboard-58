
import { CosmeticRarity } from '@/types/cosmetics';
import { MockeryAction, MockeryTier } from '@/types/mockery';

/**
 * Get the display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Rotten Tomatoes';
    case 'eggs':
      return 'Rotten Eggs';
    case 'putridEggs':
      return 'Putrid Eggs';
    case 'stocks':
      return 'Public Stocks';
    case 'dunce':
      return 'Dunce Cap';
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
      return 'Royal Defeat';
    case 'immune':
      return 'Royal Immunity';
    case 'guillotine':
      return 'Royal Guillotine';
    case 'dungeons':
      return 'Royal Dungeons';
    case 'removal':
      return 'Profile Removal';
    case 'roast':
      return 'Royal Roast';
    case 'royalPie':
      return 'Royal Pie';
    case 'jokeCrown':
      return 'Joke Crown';
    case 'memeFrame':
      return 'Meme Frame';
    case 'crown':
      return 'Crown Target';
    case 'challenge':
      return 'Royal Challenge';
    case 'target':
      return 'Royal Target';
    default:
      return 'Unknown Mockery';
  }
};

/**
 * Get the cost of a mockery action
 */
export const getMockeryCost = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 5;
    case 'eggs':
      return 10;
    case 'putridEggs':
      return 20;
    case 'stocks':
      return 25;
    case 'dunce':
      return 30;
    case 'silence':
      return 35;
    case 'courtJester':
      return 40;
    case 'smokeBomb':
      return 45;
    case 'protection':
      return 50;
    case 'jest':
      return 60;
    case 'glitterBomb':
      return 75;
    case 'defeat':
      return 100;
    case 'immune':
      return 150;
    case 'guillotine':
      return 75;
    case 'dungeons':
      return 100;
    case 'removal':
      return 200;
    case 'roast':
      return 50;
    case 'royalPie':
      return 25;
    case 'jokeCrown':
      return 100;
    case 'memeFrame':
      return 40;
    case 'crown':
      return 150;
    case 'challenge':
      return 200;
    case 'target':
      return 175;
    default:
      return 10;
  }
};

/**
 * Get description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Splatter rotten tomatoes all over their profile.';
    case 'eggs':
      return 'Throw rotten eggs at their profile picture.';
    case 'putridEggs':
      return 'Throw putrid eggs that leave a lasting stench.';
    case 'stocks':
      return 'Place them in the stocks for public ridicule.';
    case 'dunce':
      return 'Make them wear a dunce cap on their profile.';
    case 'silence':
      return 'Prevent them from posting in public forums.';
    case 'courtJester':
      return 'Force them to wear the court jester outfit.';
    case 'smokeBomb':
      return 'Obscure their profile with a cloud of smoke.';
    case 'protection':
      return 'Protect yourself from mockery for a week.';
    case 'jest':
      return 'Apply a jester theme to their entire profile.';
    case 'glitterBomb':
      return 'Cover their profile in persistent glitter.';
    case 'defeat':
      return 'Display a "defeated" stamp on their profile.';
    case 'immune':
      return 'Become immune to mockery for a month.';
    case 'guillotine':
      return 'Place their profile under a guillotine.';
    case 'dungeons':
      return 'Send their profile to the royal dungeons.';
    case 'removal':
      return 'Temporarily hide their profile from public view.';
    case 'roast':
      return 'Create a custom roast that appears on their profile.';
    case 'royalPie':
      return 'Throw a pie at their face on their profile.';
    case 'jokeCrown':
      return 'Replace their crown with a jester\'s hat.';
    case 'memeFrame':
      return 'Frame their profile picture in a mocking meme.';
    case 'crown':
      return 'Mark them as a target worthy of the crown\'s attention.';
    case 'challenge':
      return 'Issue a formal royal challenge to them.';
    case 'target':
      return 'Place a royal target on their profile.';
    default:
      return 'Apply a mysterious mockery effect to their profile.';
  }
};

/**
 * Get tier for a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'putridEggs':
      return 'common';
    case 'stocks':
    case 'dunce':
    case 'silence':
    case 'courtJester':
      return 'uncommon';
    case 'smokeBomb':
    case 'jest':
    case 'glitterBomb':
    case 'royalPie':
    case 'memeFrame':
      return 'rare';
    case 'defeat':
    case 'guillotine':
    case 'dungeons':
    case 'roast':
    case 'jokeCrown':
      return 'epic';
    case 'removal':
    case 'crown':
    case 'challenge':
    case 'target':
    case 'immune':
    case 'protection':
      return 'legendary';
    default:
      return 'common';
  }
};

/**
 * Get CSS color class for a mockery tier
 */
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'text-gray-400';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-yellow-400';
    case 'basic':
      return 'text-gray-400';
    case 'premium':
      return 'text-blue-400';
    case 'royal':
      return 'text-royal-gold';
    default:
      return 'text-gray-400';
  }
};

/**
 * Get icon for a mockery action
 */
export const getMockeryActionIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'putridEggs':
      return 'target';
    case 'stocks':
    case 'dunce':
    case 'silence':
      return 'alert-circle';
    case 'courtJester':
    case 'jest':
      return 'feather';
    case 'smokeBomb':
    case 'glitterBomb':
      return 'bomb';
    case 'protection':
    case 'immune':
      return 'shield';
    case 'guillotine':
    case 'dungeons':
      return 'skull';
    case 'crown':
    case 'target':
    case 'challenge':
      return 'crown';
    default:
      return 'thumbs-down';
  }
};

/**
 * Get CSS class for active mockery effect
 */
export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'eggs':
      return 'mockery-eggs';
    case 'putridEggs':
      return 'mockery-putrid-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'dunce':
      return 'mockery-dunce';
    case 'silence':
      return 'mockery-silence';
    case 'courtJester':
      return 'mockery-jester';
    case 'smokeBomb':
      return 'mockery-smoke';
    case 'protection':
      return 'mockery-protected';
    case 'jest':
      return 'mockery-jest';
    case 'glitterBomb':
      return 'mockery-glitter';
    case 'defeat':
      return 'mockery-defeated';
    case 'immune':
      return 'mockery-immune';
    case 'guillotine':
      return 'mockery-guillotine';
    case 'dungeons':
      return 'mockery-dungeons';
    case 'removal':
      return 'mockery-removed';
    case 'roast':
      return 'mockery-roasted';
    case 'royalPie':
      return 'mockery-pied';
    case 'jokeCrown':
      return 'mockery-joke-crown';
    case 'memeFrame':
      return 'mockery-meme';
    case 'crown':
      return 'mockery-crowned';
    case 'challenge':
      return 'mockery-challenged';
    case 'target':
      return 'mockery-targeted';
    default:
      return 'mockery-default';
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

/**
 * Get price for a mockery action
 */
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

/**
 * Get icon color for a mockery action
 */
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const tier = getMockeryTier(action);
  return getMockeryTierColorClass(tier);
};

/**
 * Get the duration in days for a mockery effect
 */
export const getMockeryDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
      return 1; // 1 day
    case 'putridEggs':
    case 'stocks':
    case 'dunce':
      return 2; // 2 days
    case 'silence':
    case 'courtJester':
    case 'smokeBomb':
      return 3; // 3 days
    case 'jest':
    case 'glitterBomb':
    case 'royalPie':
    case 'memeFrame':
      return 5; // 5 days
    case 'defeat':
    case 'guillotine':
    case 'dungeons':
    case 'roast':
    case 'jokeCrown':
      return 7; // 7 days
    case 'crown':
    case 'challenge':
    case 'target':
      return 10; // 10 days
    case 'removal':
      return 1; // 1 day
    case 'protection':
      return 7; // 7 days
    case 'immune':
      return 30; // 30 days
    default:
      return 3; // 3 days
  }
};

/**
 * Get the cooldown in hours before a user can be mocked again
 */
export const getMockeryCooldown = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
      return 6; // 6 hours
    case 'putridEggs':
    case 'stocks':
    case 'dunce':
      return 12; // 12 hours
    case 'silence':
    case 'courtJester':
    case 'smokeBomb':
      return 24; // 24 hours
    case 'jest':
    case 'glitterBomb':
    case 'royalPie':
    case 'memeFrame':
      return 48; // 48 hours
    case 'defeat':
    case 'guillotine':
    case 'dungeons':
    case 'roast':
    case 'jokeCrown':
      return 72; // 72 hours
    case 'crown':
    case 'challenge':
    case 'target':
      return 96; // 96 hours
    case 'removal':
      return 168; // 168 hours (7 days)
    default:
      return 24; // 24 hours
  }
};
