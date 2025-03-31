
import { UserTier } from '@/types/user-consolidated';
import { Crown, Award, Shield, Star, Sparkles, User, Gem, Medal, Zap } from 'lucide-react';

/**
 * Get the icon component for a user tier
 * @param tier The user tier
 * @returns The icon component for the tier
 */
export const getTierIcon = (tier: UserTier | string) => {
  switch (tier) {
    case 'founder':
    case 'king':
    case 'emperor':
    case 'royal':
      return Crown;
    case 'legendary':
    case 'whale':
      return Sparkles;
    case 'premium':
    case 'gold':
    case 'platinum':
      return Star;
    case 'noble':
    case 'knight':
    case 'baron':
    case 'viscount':
    case 'earl':
    case 'duke':
    case 'prince':
      return Shield;
    case 'elite':
    case 'pro':
    case 'diamond':
      return Gem;
    case 'silver':
    case 'bronze':
      return Medal;
    case 'standard':
    case 'vip':
      return Award;
    case 'basic':
    case 'free':
    default:
      return User;
  }
};

/**
 * Get color classes for a user tier
 * @param tier The user tier
 * @returns CSS classes for the tier colors
 */
export const getTierColor = (tier: UserTier | string): string => {
  switch (tier) {
    case 'founder':
    case 'king':
    case 'emperor':
    case 'royal':
      return 'text-purple-400 bg-purple-600/20';
    case 'legendary':
    case 'whale':
      return 'text-amber-400 bg-amber-500/20';
    case 'premium':
    case 'gold':
      return 'text-yellow-400 bg-yellow-500/20';
    case 'platinum':
    case 'diamond':
      return 'text-cyan-400 bg-cyan-500/20';
    case 'noble':
    case 'knight':
    case 'baron':
    case 'viscount':
    case 'earl':
    case 'duke':
    case 'prince':
      return 'text-indigo-400 bg-indigo-500/20';
    case 'elite':
    case 'pro':
    case 'silver':
      return 'text-blue-400 bg-blue-500/20';
    case 'standard':
    case 'vip':
    case 'bronze':
      return 'text-green-400 bg-green-500/20';
    case 'basic':
    case 'free':
    default:
      return 'text-gray-400 bg-gray-500/20';
  }
};

/**
 * Get display name for a user tier
 * @param tier The user tier
 * @returns The display name for the tier
 */
export const getTierName = (tier: UserTier | string): string => {
  switch (tier) {
    case 'founder':
      return 'Founder';
    case 'king':
      return 'King';
    case 'emperor':
      return 'Emperor';
    case 'royal':
      return 'Royal';
    case 'legendary':
      return 'Legendary';
    case 'whale':
      return 'Whale';
    case 'premium':
      return 'Premium';
    case 'gold':
      return 'Gold';
    case 'platinum':
      return 'Platinum';
    case 'noble':
      return 'Noble';
    case 'knight':
      return 'Knight';
    case 'baron':
      return 'Baron';
    case 'viscount':
      return 'Viscount';
    case 'earl':
      return 'Earl';
    case 'duke':
      return 'Duke';
    case 'prince':
      return 'Prince';
    case 'elite':
      return 'Elite';
    case 'pro':
      return 'Pro';
    case 'diamond':
      return 'Diamond';
    case 'silver':
      return 'Silver';
    case 'bronze':
      return 'Bronze';
    case 'standard':
      return 'Standard';
    case 'vip':
      return 'VIP';
    case 'basic':
      return 'Basic';
    case 'free':
      return 'Free';
    default:
      return 'Member';
  }
};
