
import { MockeryAction } from '@/types/mockery-types';
import { convertLegacyMockeryAction } from '../mockeryConverter';

/**
 * Get icon for mockery action
 */
export const getMockeryActionIcon = (action: string): string => {
  // Normalize the action using the converter
  const normalizedAction = convertLegacyMockeryAction(action);
  
  const actionIcons: Record<MockeryAction, string> = {
    'tomato': 'tomato',
    'egg': 'egg',
    'putridEgg': 'egg-rotten',
    'taunt': 'message-circle',
    'shame': 'frown',
    'jester': 'hat',
    'mock': 'laugh',
    'challenge': 'sword',
    'joust': 'lance',
    'duel': 'swords',
    'crown': 'crown',
    'stocks': 'lock',
    'silence': 'volume-x',
    'courtJester': 'hat-court',
    'smokeBomb': 'cloud',
    'protection': 'shield',
    'thumbsDown': 'thumbs-down',
    'laugh': 'smile',
    'fish': 'fish'
  };

  return actionIcons[normalizedAction] || 'help-circle';
};

/**
 * Get mockery action from its icon
 */
export const getActionFromIcon = (icon: string): MockeryAction | null => {
  const iconToAction: Record<string, MockeryAction> = {
    'tomato': 'tomato',
    'egg': 'egg',
    'egg-rotten': 'putridEgg',
    'message-circle': 'taunt',
    'frown': 'shame',
    'hat': 'jester',
    'laugh': 'mock',
    'sword': 'challenge',
    'lance': 'joust',
    'swords': 'duel',
    'crown': 'crown',
    'lock': 'stocks',
    'volume-x': 'silence',
    'hat-court': 'courtJester',
    'cloud': 'smokeBomb',
    'shield': 'protection',
    'thumbs-down': 'thumbsDown',
    'smile': 'laugh',
    'fish': 'fish'
  };

  return iconToAction[icon] || null;
};

export default {
  getMockeryActionIcon,
  getActionFromIcon
};
