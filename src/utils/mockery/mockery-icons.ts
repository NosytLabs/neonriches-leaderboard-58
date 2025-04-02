
import { MockeryAction } from '@/types/mockery-types';

/**
 * This utility maps mockery actions to their icon names
 * For use with various icon libraries or CSS classes
 */

// Map of mockery actions to icon paths
const mockeryIcons: Partial<Record<MockeryAction, string>> = {
  tomato: 'food',
  egg: 'egg',
  putridEgg: 'egg-fried',
  taunt: 'message-square',
  shame: 'thumbs-down',
  jester: 'crown',
  mock: 'message',
  challenge: 'flag',
  joust: 'swords',
  duel: 'sword',
  crown: 'crown',
  stocks: 'lock',
  silence: 'message-square-off',
  courtJester: 'sparkles',
  smokeBomb: 'cloud-fog',
  protection: 'shield',
  thumbs_down: 'thumbs-down',
  laugh: 'smile',
  fish: 'fish',
  // Add the remaining MockeryAction types
  rotten_egg: 'egg',
  flame: 'flame',
  heart: 'heart',
  skull: 'skull',
  thumbsDown: 'thumbs-down',
};

// Define a more comprehensive set of mockery actions with associated icons
export const mockeryIconMap: Record<string, string> = {
  'tomato': 'tomato',
  'egg': 'egg',
  'rotten_egg': 'egg-off',
  'putridEgg': 'egg-off',
  'shame': 'thumbs-down',
  'mock': 'message-square',
  'challenge': 'flag',
  'joust': 'swords',
  'duel': 'swords-x',
  'flame': 'flame',
  'jester': 'crown',
  'crown': 'crown',
  'stocks': 'lock',
  'silence': 'message-square-off',
  'courtJester': 'sparkles',
  'smokeBomb': 'cloud-fog',
  'protection': 'shield',
  'thumbs_down': 'thumbs-down',
  'thumbsDown': 'thumbs-down',
  'taunt': 'message-circle',
  'heart': 'heart',
  'skull': 'skull',
  'laugh': 'smile',
  'fish': 'fish',
};

export default mockeryIcons;
