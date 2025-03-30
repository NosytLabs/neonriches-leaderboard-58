
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Cost in virtual currency for each mockery action
export const MOCKERY_COSTS: Record<MockeryAction, number> = {
  tomatoes: 10,
  putridEggs: 25,
  stocks: 50,
  silence: 100,
  courtJester: 250,
  dunce: 15,
  smokeBomb: 200,
  jester: 75,
  ridicule: 30,
  humiliate: 125,
  expose: 150,
  mock: 20,
  shame: 40,
  immune: 0, // Special case for immune users
  eggs: 15, // Added new mockery types
  protection: 100,
  glitterBomb: 50,
  royalPie: 35,
  jokeCrown: 60,
  memeFrame: 25,
  roast: 40
};

// Display names for mockery actions
export const MOCKERY_NAMES: Record<MockeryAction, string> = {
  tomatoes: "Rotten Tomatoes",
  putridEggs: "Putrid Eggs",
  stocks: "Public Stocks",
  silence: "Royal Silence",
  courtJester: "Court Jester",
  dunce: "Dunce Cap",
  smokeBomb: "Royal Smoke Bomb",
  jester: "Jester's Curse",
  ridicule: "Public Ridicule",
  humiliate: "Royal Humiliation",
  expose: "Exposed Secrets",
  mock: "Royal Mockery",
  shame: "Walk of Shame",
  immune: "Immunity Shield",
  eggs: "Rotten Eggs Barrage",
  protection: "Royal Protection",
  glitterBomb: "Glitter Bomb",
  royalPie: "Royal Pie",
  jokeCrown: "Joke Crown",
  memeFrame: "Meme Frame",
  roast: "Royal Roast"
};

// Descriptions for each mockery action
export const MOCKERY_DESCRIPTIONS: Record<MockeryAction, string> = {
  tomatoes: "Pelt this user with virtual rotten tomatoes, leaving their profile stained for 1 hour.",
  putridEggs: "Shower this user with putrid eggs, creating a lingering stench on their profile for 2 hours.",
  stocks: "Place this user in the public stocks for all to mock, restricting their profile access for 3 hours.",
  silence: "Impose a royal decree of silence on this user, preventing them from commenting for 4 hours.",
  courtJester: "Demote this user to court jester status, forcing them to wear the fool's cap for 6 hours.",
  dunce: "Place a dunce cap on this user for 1 hour, marking them for their foolishness.",
  smokeBomb: "Engulf this user's profile in thick smoke for 8 hours, obscuring their content from view.",
  jester: "Curse this user to appear as a jester to all who view their profile for 5 hours.",
  ridicule: "Subject this user to public ridicule, with mocking comments appearing on their profile for 2 hours.",
  humiliate: "Humiliate this user with a customized message displayed prominently on their profile for 4 hours.",
  expose: "Expose this user's deepest secrets (randomly generated, of course) for 3 hours.",
  mock: "Apply a general mockery effect to this user's profile for 1 hour.",
  shame: "Force this user on a public walk of shame, with a shame bell following them for 2 hours.",
  immune: "This user is protected from mockery by their royal status or protection shield.",
  eggs: "Barrage this user with rotten eggs, creating a foul stench on their profile for 2 hours.",
  protection: "Shield yourself from mockery effects for 24 hours.",
  glitterBomb: "Cover this user's profile in glitter that can't be removed for 3 hours.",
  royalPie: "Smash a pie in this user's profile picture for 2 hours.",
  jokeCrown: "Replace this user's crown with a jester hat for 4 hours.",
  memeFrame: "Frame this user's profile in ridiculous memes for 3 hours.",
  roast: "Subject this user to a royal roasting for 2 hours."
};

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'dunce':
    case 'mock':
    case 'eggs':
      return 'common';
    case 'putridEggs':
    case 'jester':
    case 'ridicule':
    case 'shame':
    case 'memeFrame':
    case 'roast':
      return 'uncommon';
    case 'stocks':
    case 'expose':
    case 'humiliate':
    case 'royalPie':
    case 'glitterBomb':
      return 'rare';
    case 'silence':
    case 'jokeCrown':
      return 'epic';
    case 'courtJester':
    case 'smokeBomb':
      return 'legendary';
    case 'protection':
      return 'premium';
    default:
      return 'common';
  }
};

// Get the cost of a mockery action
export const getMockeryPrice = (action: MockeryAction): number => {
  return MOCKERY_COSTS[action] || 10;
};

// Get the display name of a mockery action
export const getMockeryName = (action: MockeryAction): string => {
  return MOCKERY_NAMES[action] || 'Unknown Mockery';
};

// Get the description of a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || 'A mysterious mockery effect of unknown origin.';
};

// Get shame action price (utility function for public shaming feature)
export const getShameActionPrice = (action: MockeryAction): number => {
  return MOCKERY_COSTS[action] || 10;
};

// Utility for generating mockery CSS class
export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'putridEggs':
    case 'eggs':
      return 'mockery-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'silence':
      return 'mockery-silence';
    case 'courtJester':
    case 'jester':
      return 'mockery-jester';
    case 'dunce':
      return 'mockery-dunce';
    case 'smokeBomb':
      return 'mockery-smoke';
    case 'ridicule':
      return 'mockery-ridicule';
    case 'humiliate':
      return 'mockery-humiliate';
    case 'expose':
      return 'mockery-expose';
    case 'mock':
      return 'mockery-general';
    case 'shame':
      return 'mockery-shame';
    case 'glitterBomb':
      return 'mockery-glitter';
    case 'royalPie':
      return 'mockery-pie';
    case 'jokeCrown':
      return 'mockery-joke-crown';
    case 'memeFrame':
      return 'mockery-meme';
    case 'roast':
      return 'mockery-roast';
    default:
      return '';
  }
};
