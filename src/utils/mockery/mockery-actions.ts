
import { MockeryAction, MockeryTier } from '@/types/mockery-types';

// Map of mockery actions to their titles
export const getMockeryActionTitle = (action: MockeryAction): string => {
  const titles: Record<string, string> = {
    'tomatoes': 'Throw Rotten Tomatoes',
    'eggs': 'Throw Eggs',
    'putridEggs': 'Throw Putrid Eggs',
    'stocks': 'Place in Stocks',
    'shame': 'Public Shaming',
    'dunce': 'Dunce Cap',
    'jester': 'Make a Jester',
    'crown': 'Crown of Mockery',
    'silence': 'Silence',
    'courtJester': 'Court Jester',
    'jest': 'Royal Jest',
    'smokeBomb': 'Smoke Bomb',
    'glitterBomb': 'Glitter Bomb',
    'royalPie': 'Royal Pie',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'roast': 'Royal Roast',
    'ridicule': 'Ridicule',
    'humiliate': 'Humiliate',
    'expose': 'Expose',
    'mock': 'Mock',
    'taunt': 'Taunt',
    'guillotine': 'Guillotine',
    'removal': 'Removal',
    'fool': 'Fool',
    'protection': 'Royal Protection',
    'immune': 'Royal Immunity',
    'ghost': 'Ghost',
    'target': 'Target',
    'dragon': 'Dragon',
    'demon': 'Demon',
    'troll': 'Troll',
    'peasant': 'Peasant',
    'rat': 'Rat',
    'skeleton': 'Skeleton',
    'zombie': 'Zombie',
    'witch': 'Witch',
    'monster': 'Monster',
    'knight': 'Knight',
    'king': 'King',
    'queen': 'Queen',
    'bishop': 'Bishop',
    'rook': 'Rook',
    'pawn': 'Pawn',
    'dungeons': 'Dungeons',
    'challenge': 'Challenge'
  };
  
  return titles[action] || `Unknown Action: ${action}`;
};

// Map of mockery actions to their descriptions
export const getMockeryActionDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    'tomatoes': 'Pelt this user with rotten tomatoes for all to see. A classic form of medieval public shaming.',
    'eggs': 'Throw eggs at this user, leaving them disgraced for 12 hours.',
    'putridEggs': 'Shower this user with putrid eggs, leaving them smelly and disgraced for 24 hours.',
    'stocks': 'Lock this user in the public stocks, the ultimate medieval punishment for ostentatious spending.',
    'shame': 'Subject this user to public mockery and shame.',
    'dunce': 'Place a dunce cap on this user, marking them as intellectually inferior.',
    'jester': 'Force this user to wear the jester\'s motley, making them the laughingstock of the court.',
    'crown': 'Place a mocking crown upon this user, a false symbol of authority that only invites ridicule.',
    'silence': 'Prevent this user from posting for a time, a punishment for those who speak unwisely.',
    'courtJester': 'Appoint this user as the official court jester, required to amuse with their folly.',
    'jest': 'Make this user the subject of a royal jest, to be laughed at by all who see them.',
    'smokeBomb': 'Deploy a smoke bomb that obscures this user from view, making them temporarily irrelevant.',
    'glitterBomb': 'Explode a glitter bomb on this user, marking them with sparkles that refuse to wash away.',
    'royalPie': 'Smash a pie in this user\'s face, a time-honored tradition of public humiliation.',
    'jokeCrown': 'Place a jester\'s crown on this user\'s head, mocking their aspirations of greatness.',
    'memeFrame': 'Place this user in a frame of mockery, to be ridiculed in meme format for all time.',
    'protection': 'Grant royal protection to shield from mockery attacks.',
    'immune': 'Make this user immune to all forms of mockery for a time.',
    'ghost': 'Turn this user into a ghost, barely visible and easily ignored.',
    'target': 'Mark this user as a target for increased derision.',
    'dragon': 'Transform this user into a dragon, feared but ultimately slain.',
    'demon': 'Cast this user as a demon, reviled and shunned by all.',
    'troll': 'Label this user as a troll, whose words are to be disregarded.',
    'peasant': 'Reduce this user to a lowly peasant, stripped of all status.',
    'rat': 'Transform this user into a rat, scurrying in the shadows.',
    'skeleton': 'Reduce this user to a mere skeleton, a remnant of their former self.',
    'zombie': 'Turn this user into a mindless zombie, lurching through the realm.',
    'witch': 'Brand this user as a witch, feared and mistrusted by all.',
    'monster': 'Transform this user into a monster, to be avoided and despised.',
    'knight': 'Demote this royal to a mere knight, a serious step down in status.',
    'king': 'Crown this user a mock king, whose reign is built on folly.',
    'queen': 'Crown this user a mock queen, whose court is filled with ridicule.',
    'bishop': 'Appoint this user a false bishop, whose sermons are full of nonsense.',
    'rook': 'Make this user a rook, sturdy but ultimately just a game piece.',
    'pawn': 'Reduce this user to a pawn, manipulated and sacrificed at will.',
    'challenge': 'Issue a formal challenge to test this user\'s worthiness.',
    'dungeons': 'Throw this user in the royal dungeons for their transgressions.'
  };
  
  return descriptions[action] || `Unknown Action Description: ${action}`;
};

// Export for use in other files
export default {
  getMockeryActionTitle,
  getMockeryActionDescription
};
