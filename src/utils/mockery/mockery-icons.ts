
import { MockeryAction, MockeryTier } from '@/types/mockery';
import type { LucideIcon } from 'lucide-react';
import {
  AlertCircle, ShieldAlert, User, Crown, 
  Shield, UserX, MessageSquare, Ban, 
  UserRoundX, Skull, Feather, Angry, 
  Flame, Swords, LinkIcon, Crosshair, 
  Lightbulb, Unplug, Cloud, Sparkles, 
  Scissors, Maximize2, Egg, Hammer,
  ThumbsDown
} from 'lucide-react';
import React from 'react';

// Custom tomato icon since Lucide doesn't have one
export const TomatoIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="14" r="8" />
    <path d="M12 6v4" />
    <path d="M8 4l2 2" />
    <path d="M16 4l-2 2" />
  </svg>
);

// Get the appropriate icon for a mockery action
export const getMockeryIcon = (action: MockeryAction): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    tomatoes: TomatoIcon,
    eggs: Egg,
    putridEggs: ShieldAlert,
    dungeons: UserX,
    immune: Shield,
    crown: Crown,
    stocks: Hammer,
    dunce: UserRoundX,
    jester: Feather,
    courtJester: Feather,
    jest: Feather,
    troll: Angry,
    peasant: User,
    rat: User,
    ghost: Skull,
    skeleton: Skull,
    zombie: Skull,
    witch: Flame,
    monster: Flame,
    demon: Flame,
    dragon: Flame,
    king: Crown,
    queen: Crown,
    knight: Swords,
    bishop: Crown,
    rook: Shield,
    pawn: User,
    target: Crosshair,
    challenge: Lightbulb,
    smokeBomb: Cloud,
    glitterBomb: Sparkles,
    royalPie: AlertCircle,
    jokeCrown: Crown,
    memeFrame: Maximize2,
    roast: Flame,
    ridicule: Feather,
    humiliate: Feather,
    expose: AlertCircle,
    mock: Feather,
    taunt: Feather,
    guillotine: Scissors,
    defeat: UserRoundX,
    removal: Ban,
    protection: Shield,
    silence: MessageSquare,
    shame: Ban,
    fool: Feather
  };

  return icons[action] || Ban;
};

// Get the color for a mockery action icon
export const getMockeryIconColor = (action: MockeryAction): string => {
  const colorClasses: Record<string, string> = {
    tomatoes: 'text-red-500',
    eggs: 'text-yellow-500',
    putridEggs: 'text-green-500',
    dungeons: 'text-gray-700',
    immune: 'text-blue-400',
    crown: 'text-yellow-400',
    stocks: 'text-brown-500',
    dunce: 'text-orange-400',
    jester: 'text-purple-400',
    courtJester: 'text-purple-600',
    jest: 'text-purple-300',
    silence: 'text-gray-400',
    smokeBomb: 'text-gray-600',
    glitterBomb: 'text-pink-400',
    royalPie: 'text-white',
    protection: 'text-green-400',
    defeat: 'text-red-600',
    taunt: 'text-orange-500',
    fool: 'text-purple-300'
  };

  // Import mockery tier function for convenience
  const tierColors: Record<MockeryTier, string> = {
    basic: 'text-gray-400',
    common: 'text-gray-300',
    uncommon: 'text-green-400',
    premium: 'text-blue-400',
    silver: 'text-gray-300',
    rare: 'text-purple-400',
    epic: 'text-pink-500',
    royal: 'text-yellow-400',
    legendary: 'text-red-500',
    bronze: 'text-amber-700'
  };

  // Get the tier to use for default coloring
  const tier = getMockeryTier(action);

  // Return specific color or tier-based color  
  return colorClasses[action] || tierColors[tier] || 'text-gray-400';
};

// Import mockery tier function for convenience
import { getMockeryTier } from './mockery-actions';

// Create aliased exports for backward compatibility
export const getMockeryActionIcon = getMockeryIcon;
export const getMockeryActionIconColor = getMockeryIconColor;

export default getMockeryIcon;
