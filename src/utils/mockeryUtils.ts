
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Laugh, Egg, Crown, Shield, Flame, ThumbsDown, AlertTriangle, Skull, CloudLightning, Music, Heart, Feather } from 'lucide-react';

// Mock action names mapping
export const getMockeryName = (action: MockeryAction): string => {
  const nameMap: Record<string, string> = {
    tomato: "Throw Tomatoes",
    egg: "Throw Eggs",
    putridEgg: "Throw Putrid Eggs",
    rotten_egg: "Rotten Egg Barrage",
    crown: "Flip Crown",
    thumbs_down: "Thumbs Down",
    mock: "Mock",
    stocks: "Put in Stocks",
    jester: "Jester Hat",
    courtJester: "Court Jester",
    silence: "Royal Silence",
    taunt: "Royal Taunt",
    smokeBomb: "Smoke Bomb",
    protection: "Royal Protection",
    shame: "Public Shame",
    challenge: "Challenge",
    joust: "Joust",
    duel: "Royal Duel",
    royal_decree: "Royal Decree",
    flame: "Flame",
    heart: "Heart",
    skull: "Skull",
    laugh: "Laugh",
    thumbsDown: "Thumbs Down",
  };
  return nameMap[action] || "Unknown Action";
};

// Mock action descriptions
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptionMap: Record<string, string> = {
    tomato: "Pelt the target with rotten tomatoes, reducing their status temporarily.",
    egg: "Throw eggs at the target, leaving them with egg on their face.",
    putridEgg: "Assault the target with putrid eggs that will make them stink for days.",
    rotten_egg: "Barrage of the most rotten eggs in the kingdom, a truly disgusting display.",
    crown: "Flip their crown upside down, making them look foolish.",
    thumbs_down: "Express your disapproval with a royal thumbs down.",
    mock: "Openly mock them in the royal court.",
    stocks: "Place them in the stocks for public humiliation.",
    jester: "Force them to wear a jester hat for a day.",
    courtJester: "Demote them to court jester status for all to see.",
    silence: "Impose a royal silence, preventing them from speaking in royal channels.",
    taunt: "Taunt them with a personalized message visible to all.",
    smokeBomb: "Deploy a smoke bomb to temporarily hide their presence.",
    protection: "Protect yourself from mockery for a period of time.",
    shame: "Subject them to public shaming on the town square board.",
    challenge: "Challenge them to a spending duel to prove superiority.",
    joust: "Initiate a jousting match where spending determines the winner.",
    duel: "Challenge to a royal duel of honor (and spending).",
    royal_decree: "Issue a royal decree forcing them to perform an act of submission.",
    flame: "Flame them with a scorching insult visible to all.",
    heart: "Send hearts to confuse everyone about your true feelings.",
    skull: "Send a skull as a symbolic threat to their status.",
    laugh: "Laugh at their expense, lowering their perceived status.",
    thumbsDown: "Express your disapproval with a royal thumbs down.",
  };
  return descriptionMap[action] || "Unknown Action";
};

// Get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tierMap: Record<string, MockeryTier> = {
    tomato: "common",
    egg: "common",
    putridEgg: "uncommon",
    rotten_egg: "uncommon",
    crown: "legendary",
    thumbs_down: "common",
    mock: "common",
    stocks: "rare",
    jester: "uncommon",
    courtJester: "rare",
    silence: "epic",
    taunt: "uncommon",
    smokeBomb: "rare",
    protection: "epic",
    shame: "rare",
    challenge: "epic",
    joust: "legendary",
    duel: "legendary",
    royal_decree: "legendary",
    flame: "uncommon",
    heart: "common",
    skull: "epic",
    laugh: "common",
    thumbsDown: "common",
  };
  return tierMap[action] || "common";
};

// Get mockery cost
export const getMockeryCost = (action: MockeryAction): number => {
  const costMap: Record<string, number> = {
    tomato: 5,
    egg: 10,
    putridEgg: 20,
    rotten_egg: 25,
    crown: 100,
    thumbs_down: 5,
    mock: 15,
    stocks: 35,
    jester: 25,
    courtJester: 50,
    silence: 75,
    taunt: 20,
    smokeBomb: 30,
    protection: 50,
    shame: 40,
    challenge: 60,
    joust: 100,
    duel: 150,
    royal_decree: 200,
    flame: 25,
    heart: 10,
    skull: 75,
    laugh: 15,
    thumbsDown: 5,
  };
  return costMap[action] || 10;
};

// Export the action icon mapping for consistency
export const getMockeryActionIcon = (action: MockeryAction) => {
  const iconMap: Record<string, any> = {
    tomato: Flame,
    egg: Egg,
    putridEgg: Egg,
    rotten_egg: Egg,
    crown: Crown,
    thumbs_down: ThumbsDown,
    mock: Feather,
    stocks: AlertTriangle,
    jester: Music,
    courtJester: Music,
    silence: AlertTriangle,
    taunt: Feather,
    smokeBomb: CloudLightning,
    protection: Shield,
    shame: AlertTriangle,
    challenge: Shield,
    joust: Shield,
    duel: Shield,
    royal_decree: Crown,
    flame: Flame,
    heart: Heart,
    skull: Skull,
    laugh: Laugh,
    thumbsDown: ThumbsDown,
  };
  return iconMap[action] || Feather;
};

// Export mockeryDescriptions for backward compatibility 
export const mockeryDescriptions = Object.fromEntries(
  Object.keys(getMockeryDescription({} as any)).map(key => [
    key, 
    getMockeryDescription(key as MockeryAction)
  ])
);

