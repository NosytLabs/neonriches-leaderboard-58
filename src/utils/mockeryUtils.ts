
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';

/**
 * Get the display name for a mockery action
 */
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Rotten Tomatoes';
    case 'eggs':
    case 'putridEggs': return 'Putrid Eggs';
    case 'stocks': return 'Stockade';
    case 'dunce': return 'Dunce Cap';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    case 'smokeBomb': return 'Smoke Bomb';
    case 'protection': return 'Royal Protection';
    case 'jester': return 'Jester Mockery';
    case 'glitterBomb': return 'Glitter Bomb';
    case 'royalPie': return 'Royal Pie';
    case 'jokeCrown': return 'Joke Crown';
    case 'memeFrame': return 'Meme Frame';
    case 'roast': return 'Royal Roast';
    case 'ridicule': return 'Public Ridicule';
    case 'humiliate': return 'Royal Humiliation';
    case 'expose': return 'Royal Exposure';
    case 'mock': return 'Royal Mockery';
    case 'shame': return 'Public Shame';
    case 'taunt': return 'Royal Taunt';
    case 'guillotine': return 'Royal Guillotine';
    case 'dungeons': return 'Royal Dungeons';
    case 'removal': return 'Royal Removal';
    case 'immune': return 'Royal Immunity';
    default: return 'Unknown Mockery';
  }
};

/**
 * Get the cost (in dollars) of a mockery action
 */
export const getMockeryCost = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 5;
    case 'eggs':
    case 'putridEggs': return 10;
    case 'stocks': return 15;
    case 'dunce': return 20;
    case 'silence': return 25;
    case 'courtJester': return 30;
    case 'smokeBomb': return 35;
    case 'protection': return 50;
    case 'glitterBomb': return 60;
    case 'royalPie': return 75;
    case 'jokeCrown': return 100;
    case 'memeFrame': return 125;
    case 'immune': return 150;
    default: return 10;
  }
};

/**
 * Get the description for a mockery action
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Shower the target with virtual rotten tomatoes, creating a mess on their profile.';
    case 'eggs':
    case 'putridEggs': return 'Pelt the target with putrid eggs, adding a foul stench to their profile.';
    case 'stocks': return 'Place the target in virtual stocks for public viewing and ridicule.';
    case 'dunce': return 'Add a dunce cap to the target\'s profile image, marking them as foolish.';
    case 'silence': return 'Temporarily prevent the target from being able to comment on public posts.';
    case 'courtJester': return 'Transform the target\'s profile into that of a court jester, complete with bells and motley.';
    case 'smokeBomb': return 'Drop a smoke bomb on the target\'s profile, obscuring their information temporarily.';
    case 'protection': return 'Protect yourself from being mocked by others for a period of time.';
    case 'glitterBomb': return 'Explode a glitter bomb on the target\'s profile that cannot be removed for days.';
    case 'royalPie': return 'Smash a pie in the target\'s face that appears on their profile image.';
    case 'jokeCrown': return 'Place a ridiculous joke crown on the target\'s head in their profile.';
    case 'memeFrame': return 'Frame the target\'s profile with embarrassing memes.';
    case 'immune': return 'Become completely immune to mockery effects for a period of time.';
    default: return 'An unknown form of mockery with mysterious effects.';
  }
};

/**
 * Get the duration (in hours) of a mockery effect
 */
export const getMockeryDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 12;
    case 'eggs':
    case 'putridEggs': return 24;
    case 'stocks': return 36;
    case 'dunce': return 48;
    case 'silence': return 72;
    case 'courtJester': return 96;
    case 'smokeBomb': return 4;
    case 'protection': return 168; // 7 days
    case 'glitterBomb': return 120;
    case 'royalPie': return 144;
    case 'jokeCrown': return 192;
    case 'memeFrame': return 240;
    case 'immune': return 336; // 14 days
    default: return 24;
  }
};

/**
 * Get the tier of a mockery action
 */
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes': return 'common';
    case 'eggs':
    case 'putridEggs': return 'common';
    case 'stocks': return 'uncommon';
    case 'dunce': return 'uncommon';
    case 'silence': return 'rare';
    case 'courtJester': return 'rare';
    case 'smokeBomb': return 'epic';
    case 'protection': return 'legendary';
    case 'glitterBomb': return 'epic';
    case 'royalPie': return 'epic';
    case 'jokeCrown': return 'legendary';
    case 'memeFrame': return 'legendary';
    case 'immune': return 'legendary';
    default: return 'common';
  }
};

/**
 * Get the CSS class for styling a mockery effect
 */
export const getMockeryCssClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'mockery-tomatoes';
    case 'eggs':
    case 'putridEggs': return 'mockery-eggs';
    case 'stocks': return 'mockery-stocks';
    case 'dunce': return 'mockery-dunce';
    case 'silence': return 'mockery-silence';
    case 'courtJester': return 'mockery-jester';
    case 'smokeBomb': return 'mockery-smoke';
    case 'protection': return 'mockery-protection';
    case 'glitterBomb': return 'mockery-glitter';
    case 'royalPie': return 'mockery-pie';
    case 'jokeCrown': return 'mockery-joke-crown';
    case 'memeFrame': return 'mockery-meme';
    case 'immune': return 'mockery-immune';
    default: return 'mockery-default';
  }
};

/**
 * Get descriptive label for mockery tiers
 */
export const getMockeryTierLabel = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'Common';
    case 'uncommon': return 'Uncommon';
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legendary';
    case 'premium': return 'Premium';
    default: return 'Unknown';
  }
};

/**
 * Get color class for mockery tiers
 */
export const getMockeryTierColor = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'text-gray-400';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-royal-gold';
    case 'premium': return 'text-royal-purple';
    default: return 'text-gray-400';
  }
};

/**
 * Map shame actions to mockery actions
 */
export const mapShameToMockery = (action: ShameAction): MockeryAction => {
  switch (action) {
    case 'tomatoes': return 'tomatoes';
    case 'putridEggs': return 'putridEggs';
    case 'eggs': return 'putridEggs';
    case 'stocks': return 'stocks';
    case 'dunce': return 'dunce';
    case 'silence': return 'silence';
    case 'courtJester': return 'courtJester';
    case 'smokeBomb': return 'smokeBomb';
    case 'shame': return 'mock';
    case 'ridicule': return 'ridicule';
    case 'jester': return 'courtJester';
    default: return 'tomatoes';
  }
};

/**
 * Get the active mockery class for a user
 */
export const getActiveMockeryClass = (action: MockeryAction | null): string => {
  if (!action) return '';
  return getMockeryCssClass(action);
};
