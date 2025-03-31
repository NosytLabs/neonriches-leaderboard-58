
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import type { LucideIcon } from 'lucide-react';
import {
  Target, ShieldAlert, Skull, Crown, Prison, UserX, 
  MessageSquareOff, UserRoundX, Ban, Theatre, User, Rat, 
  Ghost, Candy, Skull, Angry, Flame, Swords, King, 
  Queen, Shield, ScrollText, Crosshair, Lightbulb, 
  Laugh, Frown, XCircle, Trash2, Sparkles, Cloud, 
  Snowflake, Megaphone, Unplug, Palette, Aperture, 
  CloudLightning, Bomb, Scissors, Maximize2
} from 'lucide-react';

// Get the appropriate icon for a mockery action
export const getMockeryActionIcon = (action: MockeryAction): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    tomatoes: Ban,
    eggs: ShieldAlert,
    putridEggs: Ban,
    dungeons: Prison,
    immune: Shield,
    crown: Crown,
    stocks: UserX,
    dunce: UserRoundX,
    jester: Theatre,
    courtJester: Theatre,
    jest: Laugh,
    troll: Angry,
    peasant: User,
    rat: Rat,
    ghost: Ghost,
    skeleton: Skull,
    zombie: Skull,
    witch: Candy,
    monster: Flame,
    demon: Flame,
    dragon: Flame,
    king: King,
    queen: Queen,
    knight: Swords,
    bishop: ScrollText,
    rook: Shield,
    pawn: User,
    target: Crosshair,
    challenge: Lightbulb,
    smokeBomb: Cloud,
    glitterBomb: Sparkles,
    royalPie: Target,
    jokeCrown: Crown,
    memeFrame: Aperture,
    roast: Flame,
    ridicule: Laugh,
    humiliate: Frown,
    expose: XCircle,
    mock: Laugh,
    taunt: Megaphone,
    guillotine: Scissors,
    defeat: UserRoundX,
    removal: Trash2,
    protection: Shield,
    silence: MessageSquareOff,
    shame: Ban
  };

  return icons[action] || Ban;
};

// Get the color for a mockery action icon
export const getMockeryActionIconColor = (action: MockeryAction): string => {
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
    taunt: 'text-orange-500'
  };

  // Default based on tier
  const tierColors: Record<MockeryTier, string> = {
    basic: 'text-gray-400',
    common: 'text-gray-300',
    uncommon: 'text-green-400',
    premium: 'text-blue-400',
    silver: 'text-gray-300',
    rare: 'text-purple-400',
    epic: 'text-pink-500',
    royal: 'text-yellow-400',
    legendary: 'text-red-500'
  };

  // Get tier for the action
  const tier = getMockeryTier(action);
  
  // Return specific color or tier-based color
  return colorClasses[action] || tierColors[tier] || 'text-gray-400';
};
