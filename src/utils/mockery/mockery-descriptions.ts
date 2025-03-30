
import { MockeryAction } from '@/types/mockery';

// Constants for MockeryHowItWorks component
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<string, string> = {
    tomatoes: "Throw virtual tomatoes at the target's profile",
    eggs: "Throw virtual eggs at the target's profile",
    putridEggs: "A more potent version of eggs that lasts longer",
    stocks: "Put the target in virtual stocks for public display",
    dunce: "Place a dunce hat on the target's profile picture",
    silence: "Prevent the target from posting for a limited time",
    courtJester: "Turn the target into a royal court jester",
    smokeBomb: "Temporarily hide the target from the leaderboard",
    glitterBomb: "Cover the target's profile in glitter",
    jester: "Make the target wear a jester costume",
    taunt: "Display taunting messages on the target's profile",
    ridicule: "Subject the target to public ridicule",
    shame: "Apply a shame badge to the target's profile",
    mock: "Mock the target with animated effects",
    humiliate: "Apply humiliating visual effects to the target",
    expose: "Expose the target's spending habits",
    guillotine: "A dramatic visual effect with a historical theme",
    dungeons: "Send the target to the virtual dungeons",
    removal: "Temporarily remove some profile features",
    royalPie: "Throw a royal pie at the target",
    jokeCrown: "Replace the target's crown with a joke version",
    memeFrame: "Add a meme frame to the target's profile picture"
  };
  
  return descriptions[action] || "Apply a mockery effect to the target";
};

export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<string, string> = {
    tomatoes: "Tomato Barrage",
    eggs: "Egg Pelting",
    putridEggs: "Putrid Eggs",
    stocks: "Public Stocks",
    dunce: "Dunce Cap",
    silence: "Royal Silence",
    courtJester: "Court Jester",
    smokeBomb: "Smoke Bomb",
    glitterBomb: "Glitter Bomb",
    jester: "Jester Costume",
    taunt: "Royal Taunt",
    ridicule: "Public Ridicule",
    shame: "Walk of Shame",
    mock: "Royal Mockery",
    humiliate: "Royal Humiliation",
    expose: "Royal Exposure",
    guillotine: "Virtual Guillotine",
    dungeons: "Royal Dungeons",
    removal: "Feature Removal",
    royalPie: "Royal Pie",
    jokeCrown: "Joke Crown",
    memeFrame: "Meme Frame"
  };
  
  return names[action] || "Royal Mockery";
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};
