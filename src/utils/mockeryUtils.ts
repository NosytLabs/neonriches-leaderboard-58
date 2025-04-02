
import { MockeryAction, MockeryTier, TeamColor } from '@/types/mockery-types';
import { Award, Crown, ThumbsDown, Egg, Target, Shield, Coffee, Laugh, AlarmClock, MessageSquare, Flame, Heart, Skull } from 'lucide-react';

// Get human-readable name for mockery action
export const getMockeryActionName = (action: MockeryAction): string => {
  const actionNames: Record<MockeryAction, string> = {
    tomato: "Throw Tomato",
    egg: "Throw Egg",
    putridEgg: "Throw Putrid Egg",
    rotten_egg: "Throw Rotten Egg",
    crown: "Award Crown",
    thumbs_down: "Thumbs Down",
    thumbsDown: "Thumbs Down",
    mock: "Mock",
    stocks: "Put in Stocks",
    jester: "Make a Jester",
    courtJester: "Make Court Jester",
    silence: "Silence",
    taunt: "Taunt",
    smokeBomb: "Throw Smoke Bomb",
    protection: "Grant Protection",
    shame: "Public Shame",
    challenge: "Challenge",
    joust: "Challenge to Joust",
    duel: "Challenge to Duel",
    royal_decree: "Royal Decree",
    flame: "Flame",
    heart: "Heart",
    skull: "Skull",
    laugh: "Laugh"
  };
  
  return actionNames[action] || "Unknown Action";
};

// Get description for mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomato: "Throw a ripe tomato at this peasant!",
    egg: "Egg this shameful person's profile!",
    putridEgg: "Throw a putrid egg that really stinks!",
    rotten_egg: "Throw a rotten egg that will haunt them for days!",
    crown: "Honor them with a royal crown for their excellence!",
    thumbs_down: "Express your disapproval with a thumbs down",
    thumbsDown: "Express your disapproval with a thumbs down",
    mock: "Mock them publicly with a witty insult",
    stocks: "Put them in the town square stocks for shame!",
    jester: "Appoint them as your personal jester",
    courtJester: "Elevate them to the position of Royal Court Jester",
    silence: "Silence them for their outrageous statements",
    taunt: "Taunt them with royal mockery",
    smokeBomb: "Deploy a smoke bomb to cause confusion",
    protection: "Grant them royal protection from mockery",
    shame: "Publicly shame them for their behavior",
    challenge: "Issue a formal challenge!",
    joust: "Challenge them to a royal joust",
    duel: "Challenge them to a gentleman's duel",
    royal_decree: "Issue a binding royal decree",
    flame: "Flame them with your scorching wit",
    heart: "Show them some love",
    skull: "Mark them for doom",
    laugh: "Laugh at their expense"
  };
  
  return descriptions[action] || "Perform a mysterious action";
};

// Export mockeryDescriptions for backward compatibility
export const mockeryDescriptions = {
  tomato: "Throw a ripe tomato at this peasant!",
  egg: "Egg this shameful person's profile!",
  putridEgg: "Throw a putrid egg that really stinks!",
  rotten_egg: "Throw a rotten egg that will haunt them for days!",
  crown: "Honor them with a royal crown for their excellence!",
  thumbs_down: "Express your disapproval with a thumbs down",
  thumbsDown: "Express your disapproval with a thumbs down",
  mock: "Mock them publicly with a witty insult",
  stocks: "Put them in the town square stocks for shame!",
  jester: "Appoint them as your personal jester",
  courtJester: "Elevate them to the position of Royal Court Jester",
  silence: "Silence them for their outrageous statements",
  taunt: "Taunt them with royal mockery",
  smokeBomb: "Deploy a smoke bomb to cause confusion",
  protection: "Grant them royal protection from mockery",
  shame: "Publicly shame them for their behavior",
  challenge: "Issue a formal challenge!",
  joust: "Challenge them to a royal joust",
  duel: "Challenge them to a gentleman's duel",
  royal_decree: "Issue a binding royal decree",
  flame: "Flame them with your scorching wit",
  heart: "Show them some love",
  skull: "Mark them for doom",
  laugh: "Laugh at their expense"
};

// Get mockery tier for a given action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomato: "common",
    egg: "common",
    putridEgg: "uncommon",
    rotten_egg: "uncommon",
    crown: "legendary",
    thumbs_down: "common",
    thumbsDown: "common",
    mock: "common",
    stocks: "rare",
    jester: "uncommon",
    courtJester: "rare",
    silence: "epic",
    taunt: "uncommon",
    smokeBomb: "rare",
    protection: "epic",
    shame: "rare",
    challenge: "uncommon",
    joust: "epic",
    duel: "legendary",
    royal_decree: "legendary",
    flame: "common",
    heart: "common",
    skull: "rare",
    laugh: "common"
  };
  
  return tiers[action] || "common";
};

// Get mockery tier color
export const getMockeryTierColor = (tier: MockeryTier): string => {
  const tierColors: Record<MockeryTier, string> = {
    common: 'gray',
    uncommon: 'green',
    rare: 'blue',
    epic: 'purple',
    legendary: 'orange',
    gold: 'yellow',
    silver: 'gray',
    bronze: 'amber',
    royal: 'indigo',
    noble: 'violet'
  };

  return tierColors[tier] || 'gray';
};

// Get cost for a mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<MockeryAction, number> = {
    tomato: 5,
    egg: 10,
    putridEgg: 25,
    rotten_egg: 25,
    crown: 100,
    thumbs_down: 5,
    thumbsDown: 5,
    mock: 15,
    stocks: 50,
    jester: 30,
    courtJester: 60,
    silence: 75,
    taunt: 20,
    smokeBomb: 40,
    protection: 80,
    shame: 35,
    challenge: 40,
    joust: 65,
    duel: 90,
    royal_decree: 125,
    flame: 10,
    heart: 15,
    skull: 30,
    laugh: 5
  };
  
  return costs[action] || 10;
};

// Get icon for mockery action
export const getMockeryActionIcon = (action: MockeryAction) => {
  const actionIcons: Record<string, any> = {
    tomato: Target,
    egg: Egg,
    putridEgg: Egg,
    rotten_egg: Egg,
    crown: Crown,
    thumbs_down: ThumbsDown,
    thumbsDown: ThumbsDown,
    mock: MessageSquare,
    stocks: AlarmClock,
    jester: Laugh,
    courtJester: Award,
    silence: Coffee,
    taunt: ThumbsDown,
    smokeBomb: Coffee,
    protection: Shield,
    flame: Flame,
    heart: Heart,
    skull: Skull,
    laugh: Laugh
  };
  
  return actionIcons[action] || MessageSquare;
};
