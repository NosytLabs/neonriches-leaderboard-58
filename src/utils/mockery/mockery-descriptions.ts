
import { MockeryAction } from '@/types/mockery-types';

/**
 * Get the description for a mockery action
 * @param action The mockery action
 * @returns The description
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw virtual tomatoes at someone to show your disapproval.',
    eggs: 'Egg someone virtually to express your displeasure.',
    putridEggs: 'Throw the foulest eggs at your target.',
    crown: 'Place a crown of shame upon someone\'s profile.',
    stocks: 'Lock someone in the public stocks for all to see.',
    jester: 'Turn someone into the court jester for a day.',
    shame: 'Publicly shame someone for their actions.',
    silence: 'Silence someone from certain channels temporarily.',
    courtJester: 'Make someone the official court jester.',
    smokeBomb: 'Deploy a smoke bomb to disappear from view.',
    protection: 'Grant royal protection against mockery actions.',
    taunt: 'Issue a formal taunt to challenge someone.',
    mock: 'Mock someone with formalized ridicule.',
    challenge: 'Formally challenge someone to a contest.',
    joust: 'Challenge someone to a virtual joust for honor.',
    duel: 'Demand satisfaction through a gentlemanly duel.'
  };
  
  return descriptions[action] || 'No description available.';
};

/**
 * Get the user-friendly name for a mockery action
 * @param action The mockery action
 * @returns The display name
 */
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Throw Tomatoes',
    eggs: 'Throw Eggs',
    putridEggs: 'Throw Putrid Eggs',
    crown: 'Shameful Crown',
    stocks: 'Public Stocks',
    jester: 'Make a Jester',
    shame: 'Public Shame',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    taunt: 'Taunt',
    mock: 'Mock',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Duel'
  };
  
  return names[action] || 'Unknown Action';
};
