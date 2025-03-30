
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
  // Add any other mockery actions here
  jester: 75,
  ridicule: 30,
  humiliate: 125,
  expose: 150,
  mock: 20,
  shame: 40,
  immune: 0 // Special case for immune users
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
  // Add any other mockery actions here
  jester: "Jester's Curse",
  ridicule: "Public Ridicule",
  humiliate: "Royal Humiliation",
  expose: "Exposed Secrets",
  mock: "Royal Mockery",
  shame: "Walk of Shame",
  immune: "Immunity Shield"
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
  // Add any other mockery actions here
  jester: "Curse this user to appear as a jester to all who view their profile for 5 hours.",
  ridicule: "Subject this user to public ridicule, with mocking comments appearing on their profile for 2 hours.",
  humiliate: "Humiliate this user with a customized message displayed prominently on their profile for 4 hours.",
  expose: "Expose this user's deepest secrets (randomly generated, of course) for 3 hours.",
  mock: "Apply a general mockery effect to this user's profile for 1 hour.",
  shame: "Force this user on a public walk of shame, with a shame bell following them for 2 hours.",
  immune: "This user is protected from mockery by their royal status or protection shield."
};

// Get the tier of a mockery action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'dunce':
    case 'mock':
      return 'common';
    case 'putridEggs':
    case 'jester':
    case 'ridicule':
    case 'shame':
      return 'uncommon';
    case 'stocks':
    case 'expose':
    case 'humiliate':
      return 'rare';
    case 'silence':
      return 'epic';
    case 'courtJester':
    case 'smokeBomb':
      return 'legendary';
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
