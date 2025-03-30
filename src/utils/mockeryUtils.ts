
import { Egg, Target, Crown, Sword, Bell, BellOff, Flame, Skull, Shield, Zap, Sparkles } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';

// Mockery names for each action
export const getMockeryName = (action: MockeryAction): string => {
  const mockeryNames = {
    tomatoes: "Royal Tomato Toss",
    eggs: "Noble Egg Splatter",
    putridEggs: "Putrid Egg Bombardment",
    stocks: "Public Humiliation Stocks",
    dunce: "Dunce Crown of Shame",
    silence: "Royal Silence Decree",
    courtJester: "Court Jester Demotion",
    smokeBomb: "Smoke Bomb Vanishing",
    protection: "Royal Protection Shield",
    immune: "Noble Immunity",
    glitterBomb: "Glitter Bomb",
    target: "Royal Target",
    challenge: "Noble Challenge",
    jest: "Jester's Mockery",
    crown: "Crown Usurpation",
    defeat: "Noble Defeat"
  };
  
  return mockeryNames[action] || "Unknown Mockery";
};

// Descriptions for each mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  const mockeryDescriptions = {
    tomatoes: "Splatter this noble with virtual tomatoes, temporarily marking their profile with tomato stains.",
    eggs: "Bombard with fresh eggs, leaving their profile sticky and messy for all to see.",
    putridEggs: "Launch rotten eggs that create a lingering effect and stronger visual impact.",
    stocks: "Place them in the village stocks for public ridicule, severely limiting their profile visibility.",
    dunce: "Force them to wear a dunce hat on their profile, marking them as foolish.",
    silence: "Temporarily remove their ability to use chat features or post comments.",
    courtJester: "Demote them to jester status with a special marker on their profile.",
    smokeBomb: "Temporarily obscure their profile with smoke effects, making information harder to read.",
    protection: "Shield that prevents any mockery for a limited time.",
    immune: "Special status showing they've paid for mockery immunity.",
    glitterBomb: "Cover their profile in sparkly glitter that takes time to clean off.",
    target: "Mark as a prime target for future mockery events.",
    challenge: "Issue a formal spending challenge to another noble.",
    jest: "Apply jester-themed visual effects to their profile.",
    crown: "Temporarily steal their crown if they're in a top position.",
    defeat: "Declare victory over a rival in spending challenges."
  };
  
  return mockeryDescriptions[action] || "An undefined mockery action with mysterious effects.";
};

// Cost for each mockery action
export const getMockeryCost = (action: MockeryAction): number => {
  const mockeryCosts = {
    tomatoes: 10,
    eggs: 15,
    putridEggs: 25,
    stocks: 50,
    dunce: 35,
    silence: 75,
    courtJester: 40,
    smokeBomb: 30,
    protection: 50,
    immune: 200,
    glitterBomb: 20,
    target: 15,
    challenge: 25,
    jest: 20,
    crown: 100,
    defeat: 50
  };
  
  return mockeryCosts[action] || 20;
};

// Cooldown (in hours) for each mockery action
export const getMockeryCooldown = (action: MockeryAction): number => {
  const mockeryCooldowns = {
    tomatoes: 1,
    eggs: 1,
    putridEggs: 2,
    stocks: 6,
    dunce: 4,
    silence: 12,
    courtJester: 4,
    smokeBomb: 3,
    protection: 0, // No cooldown on protection
    immune: 0, // No cooldown on immunity
    glitterBomb: 2,
    target: 1,
    challenge: 4,
    jest: 2,
    crown: 8,
    defeat: 6
  };
  
  return mockeryCooldowns[action] || 2;
};

// Get the icon component for a mockery action
export const getMockeryActionIcon = (action: MockeryAction) => {
  const icons = {
    tomatoes: Target,
    eggs: Egg,
    putridEggs: Egg,
    stocks: Skull,
    dunce: Crown,
    silence: BellOff,
    courtJester: Sparkles,
    smokeBomb: Flame,
    protection: Shield,
    immune: Shield,
    glitterBomb: Sparkles,
    target: Target,
    challenge: Sword,
    jest: Sparkles,
    crown: Crown,
    defeat: Sword
  };
  
  return icons[action] || Bell;
};

// Get the CSS class for active mockery
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const classes = {
    tomatoes: "mockery-tomatoes",
    eggs: "mockery-eggs",
    putridEggs: "mockery-putrid-eggs",
    stocks: "mockery-stocks",
    dunce: "mockery-dunce",
    silence: "mockery-silence",
    courtJester: "mockery-jester",
    smokeBomb: "mockery-smoke",
    protection: "mockery-protected",
    immune: "mockery-immune",
    glitterBomb: "mockery-glitter",
    target: "mockery-target",
    challenge: "mockery-challenge",
    jest: "mockery-jest",
    crown: "mockery-crown",
    defeat: "mockery-defeat"
  };
  
  return classes[action] || "";
};
