
import React from 'react';
import { Target, Shield, Bomb, Crown, AlertCircle, Feather, Skull, ThumbsDown } from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery';

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

export const getMockeryCost = (action: MockeryAction): number => {
  const costs: Record<string, number> = {
    tomatoes: 5,
    eggs: 10,
    putridEggs: 15,
    stocks: 20,
    dunce: 25,
    silence: 30,
    courtJester: 35,
    smokeBomb: 40,
    glitterBomb: 45,
    jester: 50,
    taunt: 15,
    ridicule: 25,
    shame: 30,
    mock: 10,
    humiliate: 35,
    expose: 40,
    guillotine: 50,
    dungeons: 45,
    removal: 30,
    royalPie: 20,
    jokeCrown: 30,
    memeFrame: 25
  };
  
  return costs[action] || 10;
};

export const getMockeryCooldown = (action: MockeryAction): number => {
  // Return cooldown in milliseconds (24 hours by default)
  return 24 * 60 * 60 * 1000;
};

export const getMockeryDuration = (action: MockeryAction): number => {
  // Return duration in milliseconds (1 hour by default)
  return 60 * 60 * 1000;
};

// Export this utility helper for icons
export const getMockeryIcon = (action: MockeryAction): React.ReactNode => {
  switch (action) {
    case 'tomatoes':
    case 'eggs':
    case 'putridEggs':
      return <Target size={16} />;
    case 'stocks':
    case 'dunce':
    case 'silence':
      return <AlertCircle size={16} />;
    case 'courtJester':
    case 'jest':
      return <Feather size={16} />;
    case 'smokeBomb':
    case 'glitterBomb':
      return <Bomb size={16} />;
    case 'protection':
    case 'immune':
      return <Shield size={16} />;
    case 'guillotine':
    case 'dungeons':
      return <Skull size={16} />;
    case 'crown':
    case 'target':
    case 'challenge':
      return <Crown size={16} />;
    default:
      return <ThumbsDown size={16} />;
  }
};

// Export utility function to get mockery action color
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  if (action === 'shame' || action === 'tomatoes') {
    return "text-red-500";
  }
  else if (action === 'taunt' || action === 'eggs') {
    return "text-yellow-500";
  }
  else if (action === 'ridicule' || action === 'putridEggs') {
    return "text-orange-500";
  }
  else if (action === 'jester' || action === 'courtJester') {
    return "text-purple-500";
  }
  else if (action === 'mock' || action === 'dunce') {
    return "text-blue-500";
  }
  else if (action === 'humiliate' || action === 'silence') {
    return "text-indigo-500";
  }
  else if (action === 'expose' || action === 'glitterBomb') {
    return "text-pink-500";
  }
  else if (action === 'guillotine' || action === 'smokeBomb') {
    return "text-stone-500";
  }
  else if (action === 'dungeons' || action === 'defeat') {
    return "text-slate-500";
  }
  else if (action === 'removal' || action === 'challenge') {
    return "text-amber-500";
  }
  else if (action === 'roast') {
    return "text-rose-500";
  }
  else if (action === 'royalPie') {
    return "text-royal-crimson";
  }
  else if (action === 'jokeCrown') {
    return "text-royal-gold";
  }
  else if (action === 'memeFrame') {
    return "text-royal-purple";
  }
  else {
    return "text-gray-500";
  }
};

// Export additional utility functions for mockery actions
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'royalPie' || action === 'tomatoes' || action === 'eggs') {
    return 'bronze';
  } else if (action === 'jokeCrown' || action === 'putridEggs' || action === 'dunce') {
    return 'silver';
  } else if (action === 'memeFrame' || action === 'stocks' || action === 'silence') {
    return 'gold';
  } else if (action === 'expose' || action === 'humiliate' || action === 'ridicule' || action === 'removal') {
    return 'platinum';
  } else if (action === 'guillotine' || action === 'dungeons') {
    return 'diamond';
  } else {
    return 'common';
  }
};

export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'bronze':
      return 'text-amber-400';
    case 'silver':
      return 'text-gray-300';
    case 'gold':
      return 'text-royal-gold';
    case 'platinum':
      return 'text-blue-300';
    case 'diamond':
      return 'text-cyan-400';
    case 'common':
      return 'text-white/80';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-white/80';
  }
};

export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'eggs':
    case 'putridEggs':
      return 'mockery-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'dunce':
      return 'mockery-dunce';
    case 'silence':
      return 'mockery-silence';
    case 'courtJester':
      return 'mockery-jester';
    case 'jester':
      return 'mockery-jester';
    case 'royalPie':
      return 'mockery-pie';
    case 'jokeCrown':
      return 'mockery-joke-crown';
    case 'memeFrame':
      return 'mockery-meme';
    case 'roast':
      return 'mockery-roast';
    case 'ridicule':
      return 'mockery-ridicule';
    case 'humiliate':
      return 'mockery-humiliate';
    case 'expose':
      return 'mockery-expose';
    case 'mock':
      return 'mockery-mock';
    case 'shame':
      return 'mockery-shame';
    case 'taunt':
      return 'mockery-taunt';
    case 'guillotine':
      return 'mockery-guillotine';
    case 'dungeons':
      return 'mockery-dungeon';
    case 'removal':
      return 'mockery-removal';
    default:
      return 'mockery-default';
  }
};

export const getMockeryActionIcon = (action: MockeryAction): React.ReactNode => {
  // Reusing the getMockeryIcon function for now, but can be extended
  return getMockeryIcon(action);
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

