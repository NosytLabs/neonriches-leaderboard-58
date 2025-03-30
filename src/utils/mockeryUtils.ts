
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Mockery descriptions
export const getMockeryDescription = (action: MockeryAction, username?: string): string => {
  const descriptions: Partial<Record<MockeryAction, string>> = {
    tomatoes: `${username ? username : 'The user'} will be pelted with virtual tomatoes on their profile for 1 hour`,
    eggs: `${username ? username : 'The user'} will have eggs thrown at their profile for 1 hour`,
    putridEggs: `${username ? username : 'The user'} will be bombarded with putrid eggs, leaving a digital stench for 1 hour`,
    stocks: `${username ? username : 'The user'} will be placed in the virtual stocks for public shame for 1 hour`,
    dunce: `${username ? username : 'The user'} will wear a digital dunce cap for 1 hour`,
    silence: `${username ? username : 'The user'} will have their voice symbolically silenced for 1 hour`,
    courtJester: `${username ? username : 'The user'} will be forced to wear royal jester attire for 2 hours`,
    smokeBomb: `${username ? username : 'The user'}'s profile will be shrouded in thick smoke for 8 hours, making it harder to view`,
    protection: `${username ? username : 'The user'} will be protected from mockery effects for 24 hours`,
    immune: `${username ? username : 'The user'} is immune to mockery effects for 12 hours`,
    glitterBomb: `${username ? username : 'The user'} will be showered with glitter, adding a sparkly effect to their profile for 4 hours`,
    royalPie: `${username ? username : 'The user'} will have a royal cream pie splattered on their profile for 2 hours`,
    jokeCrown: `${username ? username : 'The user'} will wear a joke crown that occasionally squirts water for 3 hours`,
    memeFrame: `${username ? username : 'The user'}'s profile will be framed with animated memes for 4 hours`,
    roast: `${username ? username : 'The user'} will be symbolically roasted with animated flames for 2 hours`,
    ridicule: `${username ? username : 'The user'} will be publicly ridiculed with a scrolling banner for 2 hours`,
    humiliate: `${username ? username : 'The user'} will endure maximum humiliation with multiple animated effects for 4 hours`,
    mock: `${username ? username : 'The user'} will be mocked with animated pointing fingers for 2 hours`,
    guillotine: `${username ? username : 'The user'}'s profile will feature an animated guillotine for 3 hours`,
    dungeons: `${username ? username : 'The user'}'s profile will be cast into the virtual dungeons for 6 hours`,
    removal: `${username ? username : 'The user'}'s profile will be "removed" with a crossed-out effect for 1 hour`
  };

  return descriptions[action] || `Unknown mockery effect on ${username || 'the user'}`;
};

// Mockery names
export const getMockeryName = (action: MockeryAction): string => {
  const names: Partial<Record<MockeryAction, string>> = {
    tomatoes: "Rotten Tomatoes",
    eggs: "Egg Barrage",
    putridEggs: "Putrid Eggs",
    stocks: "Public Stocks",
    dunce: "Dunce Cap",
    silence: "Silence Decree",
    courtJester: "Court Jester",
    smokeBomb: "Royal Smoke Bomb",
    protection: "Royal Protection",
    immune: "Royal Immunity",
    glitterBomb: "Glitter Bomb",
    royalPie: "Royal Cream Pie",
    jokeCrown: "Jester's Crown",
    memeFrame: "Meme Frame",
    roast: "Royal Roast",
    ridicule: "Public Ridicule",
    humiliate: "Ultimate Humiliation",
    mock: "Mockery",
    guillotine: "Symbolic Guillotine",
    dungeons: "Royal Dungeons",
    removal: "Profile 'Removal'"
  };

  return names[action] || "Unknown Mockery";
};

// Mockery costs
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Partial<Record<MockeryAction, number>> = {
    tomatoes: 5,
    eggs: 10,
    putridEggs: 15,
    stocks: 25,
    dunce: 5,
    silence: 30,
    courtJester: 50,
    smokeBomb: 75,
    protection: 50,
    immune: 100,
    glitterBomb: 20,
    royalPie: 30,
    jokeCrown: 40,
    memeFrame: 35,
    roast: 25,
    ridicule: 35,
    humiliate: 60,
    mock: 15,
    guillotine: 45,
    dungeons: 55,
    removal: 40
  };

  return costs[action] || 10;
};

// Mockery durations in milliseconds
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Partial<Record<MockeryAction, number>> = {
    tomatoes: 3600000, // 1 hour
    eggs: 3600000, // 1 hour
    putridEggs: 3600000, // 1 hour
    stocks: 3600000, // 1 hour
    dunce: 3600000, // 1 hour
    silence: 3600000, // 1 hour
    courtJester: 7200000, // 2 hours
    smokeBomb: 28800000, // 8 hours
    protection: 86400000, // 24 hours
    immune: 43200000, // 12 hours
    glitterBomb: 14400000, // 4 hours
    royalPie: 7200000, // 2 hours
    jokeCrown: 10800000, // 3 hours
    memeFrame: 14400000, // 4 hours
    roast: 7200000, // 2 hours
    ridicule: 7200000, // 2 hours
    humiliate: 14400000, // 4 hours
    mock: 7200000, // 2 hours
    guillotine: 10800000, // 3 hours
    dungeons: 21600000, // 6 hours
    removal: 3600000 // 1 hour
  };

  return durations[action] || 3600000; // Default 1 hour
};

// Convert mockery tier to cosmetic rarity for UI display
export const mockeryTierToRarity = (tier: MockeryTier): string => {
  const rarityMap: Partial<Record<MockeryTier, string>> = {
    common: "common",
    uncommon: "uncommon",
    rare: "rare",
    epic: "epic",
    legendary: "legendary",
    elite: "legendary",
    premium: "epic",
    basic: "common"
  };

  return rarityMap[tier] || "common";
};

// Get icon for mockery action
export const getMockeryActionIcon = (action: MockeryAction): string => {
  const icons: Partial<Record<MockeryAction, string>> = {
    tomatoes: "🍅",
    eggs: "🥚",
    putridEggs: "🥚",
    stocks: "🔒",
    dunce: "🎯",
    silence: "🤐",
    courtJester: "🃏",
    smokeBomb: "💨",
    protection: "🛡️",
    immune: "✨",
    glitterBomb: "✨",
    royalPie: "🥧",
    jokeCrown: "👑",
    memeFrame: "🖼️",
    roast: "🔥",
    ridicule: "😆",
    humiliate: "😱",
    mock: "👉",
    guillotine: "⚔️",
    dungeons: "⛓️",
    removal: "❌"
  };

  return icons[action] || "⚠️";
};
