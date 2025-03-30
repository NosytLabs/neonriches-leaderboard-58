
import { MockeryAction, MockeryTier } from '@/types/mockery';

/**
 * Get the title for a mockery action
 * @param action Mockery action type
 * @returns Human-readable title for the action
 */
export function getMockeryTitle(action: MockeryAction): string {
  switch (action) {
    case 'tomatoes': return 'Rotten Tomatoes';
    case 'putridEggs': return 'Putrid Eggs';
    case 'stocks': return 'Public Stocks';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    case 'dunce': return 'Dunce Cap';
    case 'smokeBomb': return 'Royal Smoke Bomb';
    default: return 'Unknown Mockery';
  }
}

/**
 * Get the description for a mockery action
 * @param action Mockery action type
 * @returns Description of the mockery action
 */
export function getMockeryDescription(action: MockeryAction): string {
  switch (action) {
    case 'tomatoes': return 'Cover the user\'s profile with digital rotten tomatoes.';
    case 'putridEggs': return 'Splatter the user\'s profile with putrid digital eggs.';
    case 'stocks': return 'Place the user in digital stocks for public ridicule.';
    case 'silence': return 'Prevent the user from posting in public forums for 1 hour.';
    case 'courtJester': return 'Transform the user\'s profile to that of a court jester.';
    case 'dunce': return 'Place a digital dunce cap on the user\'s profile picture.';
    case 'smokeBomb': return 'Cover the user\'s profile in thick, dramatic smoke for 8 hours.';
    default: return 'Apply an unknown mockery effect to the user.';
  }
}

/**
 * Get the price for a mockery action
 * @param action Mockery action type
 * @returns Price of the mockery action
 */
export function getMockeryActionPrice(action: MockeryAction): number {
  switch (action) {
    case 'tomatoes': return 5;
    case 'putridEggs': return 10;
    case 'stocks': return 25;
    case 'silence': return 50;
    case 'courtJester': return 100;
    case 'dunce': return 5;
    case 'smokeBomb': return 75;
    default: return 5;
  }
}

/**
 * Get the tier of a mockery action
 * @param action Mockery action type
 * @returns Tier of the mockery action
 */
export function getMockeryTier(action: MockeryAction): MockeryTier {
  switch (action) {
    case 'tomatoes': return 'common';
    case 'putridEggs': return 'uncommon';
    case 'stocks': return 'rare';
    case 'silence': return 'epic';
    case 'courtJester': return 'legendary';
    case 'dunce': return 'common';
    case 'smokeBomb': return 'legendary';
    default: return 'common';
  }
}

/**
 * Get the CSS class for a mockery tier
 * @param tier Mockery tier
 * @returns CSS class for the tier
 */
export function getMockeryTierClass(tier: MockeryTier): string {
  switch (tier) {
    case 'common': return 'text-gray-300';
    case 'uncommon': return 'text-green-400';
    case 'rare': return 'text-blue-400';
    case 'epic': return 'text-purple-400';
    case 'legendary': return 'text-yellow-400';
    default: return 'text-gray-300';
  }
}

/**
 * Get the CSS class for an active mockery effect
 * @param action Mockery action type
 * @returns CSS class for the mockery effect
 */
export function getActiveMockeryClass(action: MockeryAction): string {
  switch (action) {
    case 'tomatoes': return 'mockery-tomatoes';
    case 'putridEggs': return 'mockery-eggs';
    case 'stocks': return 'mockery-stocks';
    case 'silence': return 'mockery-silence';
    case 'courtJester': return 'mockery-jester';
    case 'dunce': return 'mockery-dunce';
    case 'smokeBomb': return 'mockery-smoke';
    default: return '';
  }
}
