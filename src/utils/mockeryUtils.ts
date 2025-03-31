
/**
 * Centralized utility functions for mockery functionality
 */
import React from 'react';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import type { LucideIcon } from 'lucide-react';
import { 
  Target, 
  Egg, 
  Crown, 
  Lock, 
  AlertCircle, 
  Ghost,
  Volume2,
  Sparkles,
  Cloud
} from 'lucide-react';

/**
 * Custom tomato icon component
 */
export const TomatoIcon: React.FC<{ size?: number; className?: string }> = ({ 
  size = 24, 
  className = '' 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 2c0 4-8 4-8 4s0-4 8-4z" />
      <circle cx="12" cy="14" r="8" />
      <path d="M12 6v4" />
      <path d="M15 9h-6" />
    </svg>
  );
};

/**
 * Get the appropriate icon for a mockery action
 */
export function getMockeryActionIcon(action: MockeryAction): LucideIcon | React.FC<{ className?: string; size?: number }> {
  const icons: Record<string, LucideIcon | React.FC<{ className?: string; size?: number }>> = {
    'tomatoes': TomatoIcon,
    'eggs': Egg,
    'crown': Crown,
    'stocks': Lock,
    'jester': Sparkles,
    'protection': Lock,
    'shame': AlertCircle,
    'target': Target,
    'challenge': AlertCircle,
    'ghost': Ghost,
    'putridEggs': Egg,
    'silence': Volume2,
    'courtJester': Sparkles,
    'smokeBomb': Cloud
  };
  
  return icons[action] || AlertCircle;
}

/**
 * Get the color class for a mockery action icon
 */
export function getMockeryActionIconColor(action: MockeryAction): string {
  const colors: Record<string, string> = {
    'tomatoes': 'text-red-500',
    'eggs': 'text-yellow-500',
    'crown': 'text-yellow-400',
    'stocks': 'text-gray-500',
    'jester': 'text-purple-500',
    'protection': 'text-green-500',
    'shame': 'text-red-500',
    'target': 'text-red-400',
    'challenge': 'text-blue-500',
    'ghost': 'text-blue-200',
    'putridEggs': 'text-green-600',
    'silence': 'text-indigo-400',
    'courtJester': 'text-purple-400',
    'smokeBomb': 'text-gray-400'
  };
  
  return colors[action] || 'text-gray-400';
}

/**
 * Get display name for a mockery action
 */
export function getMockeryName(action: MockeryAction): string {
  const names: Record<string, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Rotten Eggs',
    crown: 'Mock Crown',
    stocks: 'Public Stocks',
    jester: 'Court Jester',
    protection: 'Royal Protection',
    shame: 'Public Shame',
    target: 'Target',
    challenge: 'Challenge',
    ghost: 'Ghost',
    putridEggs: 'Putrid Eggs',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb'
  };
  
  return names[action] || 'Unknown Mockery';
}

/**
 * Get description for a mockery action
 */
export function getMockeryDescription(action: MockeryAction): string {
  const descriptions: Record<string, string> = {
    tomatoes: 'Throw rotten tomatoes at this user to humiliate them publicly.',
    eggs: 'Throw rotten eggs at this user to make them stink of shame.',
    crown: 'Place a ridiculous crown on their head to mock their achievements.',
    stocks: 'Lock them in the royal stocks for public ridicule.',
    jester: 'Force them to wear the court jester outfit for all to see.',
    protection: 'Buy protection against mockery for yourself.',
    shame: 'Publicly shame this user for all to see.',
    target: 'Mark this user as a target for others.',
    challenge: 'Challenge this user to a mockery duel.',
    ghost: 'Make this user appear as a ghost.',
    putridEggs: 'Throw extra putrid eggs for maximum stench.',
    silence: 'Silence this user from the public court.',
    courtJester: 'Make them the official court jester.',
    smokeBomb: 'Throw a smoke bomb to temporarily hide their profile.'
  };
  
  return descriptions[action] || 'A mysterious form of mockery.';
}

/**
 * Get price for a mockery action
 */
export function getMockeryCost(action: MockeryAction): number {
  const costs: Record<string, number> = {
    tomatoes: 0.25,
    eggs: 0.50,
    crown: 1.00,
    stocks: 2.00,
    jester: 3.00,
    protection: 5.00,
    shame: 0.75,
    target: 0.50,
    challenge: 1.50,
    ghost: 2.50,
    putridEggs: 1.25,
    silence: 3.50,
    courtJester: 4.00,
    smokeBomb: 2.75
  };
  
  return costs[action] || 1.00;
}

/**
 * Get the mockery tier
 */
export function getMockeryTier(action: MockeryAction): MockeryTier {
  const tiers: Record<string, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    crown: 'uncommon',
    stocks: 'common',
    jester: 'uncommon',
    protection: 'legendary',
    shame: 'common',
    target: 'common',
    challenge: 'rare',
    ghost: 'epic',
    putridEggs: 'uncommon',
    silence: 'epic',
    courtJester: 'rare',
    smokeBomb: 'legendary'
  };
  
  return tiers[action] || 'common';
}

/**
 * Get color class for a mockery tier
 */
export function getMockeryTierColorClass(tier: MockeryTier): string {
  const colors: Record<string, string> = {
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-yellow-400',
    royal: 'text-yellow-300',
    basic: 'text-white',
    premium: 'text-indigo-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-600'
  };
  
  return colors[tier] || 'text-white';
}

/**
 * Get the active mockery CSS class
 */
export function getActiveMockeryClass(action: MockeryAction): string {
  const classes: Record<string, string> = {
    tomatoes: 'tomato-stain',
    eggs: 'egg-stain',
    crown: 'mock-crown',
    stocks: 'in-stocks',
    jester: 'jester-outfit',
    protection: 'royal-protection',
    shame: 'public-shame',
    target: 'bullseye-target',
    challenge: 'challenge-banner',
    ghost: 'ghostly-appearance',
    putridEggs: 'putrid-stain',
    silence: 'silenced-effect',
    courtJester: 'court-jester',
    smokeBomb: 'smoke-effect'
  };
  
  return classes[action] || '';
}

/**
 * Get the duration for a mockery action in hours
 */
export function getMockeryDuration(action: MockeryAction): number {
  const durations: Record<string, number> = {
    tomatoes: 24,
    eggs: 48,
    crown: 72,
    stocks: 24,
    jester: 48,
    protection: 168, // 7 days
    shame: 24,
    target: 24,
    putridEggs: 48,
    silence: 12,
    courtJester: 72,
    smokeBomb: 6
  };
  
  return durations[action] || 24;
}

// Weekly discount helpers
export function hasWeeklyDiscount(action: MockeryAction): boolean {
  const discountedAction = getWeeklyDiscountedAction();
  return action === discountedAction;
}

export function getWeeklyDiscountedAction(): MockeryAction {
  // In a real app, this might come from an API or be date-based
  // For now, let's just return a fixed action
  return 'tomatoes';
}

export function getDiscountedShamePrice(action: MockeryAction): number {
  const originalPrice = getShameActionPrice(action);
  return originalPrice * 0.75; // 25% discount
}

export function getShameActionPrice(action: MockeryAction): number {
  return getMockeryCost(action);
}

export function getShameActionMessage(action: MockeryAction, username: string): string {
  const messages: Record<string, string> = {
    tomatoes: `${username} has been pelted with rotten tomatoes!`,
    eggs: `${username} stinks of rotten eggs!`,
    crown: `${username} wears a fool's crown!`,
    stocks: `${username} has been locked in the public stocks!`,
    jester: `${username} has been dressed as the court jester!`,
    protection: `${username} is now protected from mockery.`,
    shame: `${username} has been publicly shamed!`,
    target: `${username} has been marked as a target!`,
    challenge: `${username} has been challenged to a mockery duel!`,
    ghost: `${username} now appears as a ghost!`,
    putridEggs: `${username} reeks of putrid eggs!`,
    silence: `${username} has been silenced from the court!`,
    courtJester: `${username} is now the official court jester!`,
    smokeBomb: `${username}'s profile is engulfed in smoke!`
  };
  
  return messages[action] || `${username} has been mocked!`;
}

// Export aliases for backward compatibility
export const getMockeryActionTitle = getMockeryName;
export const getMockeryActionDescription = getMockeryDescription;
export const getMockeryActionPrice = getMockeryCost;

// Helper function to render mockery icon with proper color
export function renderMockeryIcon(action: MockeryAction, size = 16, className = '') {
  const IconComponent = getMockeryActionIcon(action);
  const colorClass = getMockeryActionIconColor(action);
  
  return {
    icon: IconComponent,
    size: size,
    className: `${colorClass} ${className}`
  };
}
