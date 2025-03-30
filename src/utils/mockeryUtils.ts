
import { MockeryAction } from '@/types/mockery';

// Mockery name mapping
export const MOCKERY_NAMES: Record<MockeryAction, string> = {
  tomatoes: "Rotten Tomatoes",
  putridEggs: "Putrid Eggs",
  stocks: "Public Stocks",
  dunce: "Dunce Cap",
  silence: "Silenced",
  courtJester: "Court Jester",
  smokeBomb: "Royal Smoke Bomb",
  protection: "Royal Protection"
};

// Mockery descriptions
export const MOCKERY_DESCRIPTIONS: Record<MockeryAction, string> = {
  tomatoes: "Cover the user's profile in splattered tomatoes for 1 hour.",
  putridEggs: "Adorn the user's profile with cracked, putrid eggs for 3 hours.",
  stocks: "Lock the user in the public stocks for 6 hours for all to see.",
  dunce: "Place a dunce cap on the user's avatar for 4 hours.",
  silence: "Silence the user with a symbolic gag for 12 hours.",
  courtJester: "Force the user to wear a court jester's hat for 24 hours.",
  smokeBomb: "Completely shroud the user's profile in thick smoke for 8 hours.",
  protection: "Shield the user from mockery effects for 7 days."
};

// Mockery cooldown periods (in hours)
export const MOCKERY_COOLDOWNS: Record<MockeryAction, number> = {
  tomatoes: 3,
  putridEggs: 6,
  stocks: 12,
  dunce: 8,
  silence: 24,
  courtJester: 48,
  smokeBomb: 36,
  protection: 0  // Protection doesn't have a cooldown
};

/**
 * Get the duration of a mockery effect in hours
 * @param action The mockery action
 * @returns Duration in hours
 */
export const getMockeryDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 1;
    case 'putridEggs': return 3;
    case 'stocks': return 6;
    case 'dunce': return 4;
    case 'silence': return 12;
    case 'courtJester': return 24;
    case 'smokeBomb': return 8;
    case 'protection': return 168; // 7 days in hours
    default: return 1;
  }
};

/**
 * Get the cost of applying a mockery effect
 * @param action The mockery action
 * @returns Cost in dollars
 */
export const getMockeryCost = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 10;
    case 'putridEggs': return 25;
    case 'stocks': return 50;
    case 'dunce': return 20;
    case 'silence': return 75;
    case 'courtJester': return 100;
    case 'smokeBomb': return 150;
    case 'protection': return 50;
    default: return 10;
  }
};

/**
 * Get a description of the mockery effect
 * @param action The mockery action
 * @returns Human-readable description
 */
export const getMockeryDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || "Apply a mysterious effect to the user's profile.";
};
