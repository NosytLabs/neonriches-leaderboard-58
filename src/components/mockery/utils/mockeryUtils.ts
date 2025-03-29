
import { ExtendedMockeryAction, MockeryAction, MockeryTier } from "@/types/mockery";
import { Egg, MessageSquareOff, Shield, ShieldOff, Theater } from "lucide-react";

// Get mockery price based on action type
export const getMockeryPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    tomatoes: 1,
    eggs: 2,
    stocks: 5,
    silence: 10,
    courtJester: 20
  };
  
  return prices[action] || 1;
};

// Get mockery duration in hours
export const getMockeryDuration = (action: MockeryAction): number => {
  const durations: Record<MockeryAction, number> = {
    tomatoes: 12,
    eggs: 24,
    stocks: 48,
    silence: 72,
    courtJester: 96
  };
  
  return durations[action] || 24;
};

// Get mockery icon based on action
export const getMockeryActionIcon = (action: ExtendedMockeryAction): string => {
  const icons: Record<ExtendedMockeryAction, string> = {
    tomatoes: 'tomato',
    eggs: 'egg',
    stocks: 'stocks',
    silence: 'message-square-off',
    courtJester: 'drama',
    protection: 'shield',
    removal: 'shield-off'
  };
  
  return icons[action] || 'alert-circle';
};

// Get mockery color based on action
export const getMockeryColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-200',
    stocks: 'text-amber-700',
    silence: 'text-blue-500',
    courtJester: 'text-emerald-500'
  };
  
  return colors[action] || 'text-white';
};

// Get mockery background color based on action
export const getMockeryBgColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    tomatoes: 'bg-red-500/20',
    eggs: 'bg-yellow-200/20',
    stocks: 'bg-amber-700/20',
    silence: 'bg-blue-500/20',
    courtJester: 'bg-emerald-500/20'
  };
  
  return colors[action] || 'bg-white/20';
};

// Get mockery tier based on action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'uncommon',
    stocks: 'rare',
    silence: 'epic',
    courtJester: 'legendary'
  };
  
  return tiers[action] || 'common';
};

// Get text description for mockery action
export const getMockeryText = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Pelted with rotten tomatoes',
    eggs: 'Egged with rotten eggs',
    stocks: 'Placed in public stocks',
    silence: 'Silenced by royal decree',
    courtJester: 'Forced to serve as court jester'
  };
  
  return descriptions[action] || 'Mocked';
};

// Convert action to tier string
export const convertActionToTier = (action: MockeryAction): string => {
  return getMockeryTier(action);
};
