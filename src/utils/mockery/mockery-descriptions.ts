
import { MockeryAction } from '@/types/mockery-types';

// Get the description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    'tomatoes': 'Throw rotten tomatoes at this user',
    'eggs': 'Pelt this user with rotten eggs',
    'crown': 'Place a ridiculous crown on their profile',
    'stocks': 'Lock them in the public stocks',
    'jester': 'Make them wear the jester\'s hat',
    'protection': 'Protect yourself from mockery',
    'shame': 'Publicly shame this user',
    'target': 'Mark this user as a target',
    'putridEggs': 'Throw especially putrid eggs',
    'silence': 'Silence this user',
    'courtJester': 'Make them the court jester',
    'smokeBomb': 'Deploy a smoke bomb',
    'immune': 'Grant immunity from mockery',
    'dunce': 'Make them wear a dunce cap',
    'glitterBomb': 'Throw a glitter bomb',
    'royalPie': 'Throw a royal pie',
    'jokeCrown': 'Place a joke crown',
    'memeFrame': 'Frame them in a meme',
    'roast': 'Roast this user',
    'ridicule': 'Ridicule this user',
    'humiliate': 'Humiliate this user',
    'expose': 'Expose this user',
    'mock': 'Mock this user',
    'taunt': 'Taunt this user',
    'guillotine': 'Send to the guillotine',
    'dungeons': 'Send to the dungeons',
    'removal': 'Remove from the kingdom',
    'troll': 'Troll this user',
    'peasant': 'Demote to peasant',
    'rat': 'Turn into a rat',
    'ghost': 'Turn into a ghost',
    'skeleton': 'Turn into a skeleton',
    'zombie': 'Turn into a zombie',
    'witch': 'Call them a witch',
    'monster': 'Call them a monster',
    'dragon': 'Call them a dragon',
    'jest': 'Make a jest of them',
    'challenge': 'Challenge to a duel',
    'defeat': 'Declare defeat',
    'laughing': 'Laugh at them'
  };
  
  return descriptions[action] || 'A mysterious form of mockery';
};

export default getMockeryDescription;
