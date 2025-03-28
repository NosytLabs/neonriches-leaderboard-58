
import { useState, useEffect } from 'react';
import { UserProfile, ProfileBoost, BoostEffect } from '@/types/user';
import { formatDuration } from '@/utils/timeUtils';
import { Zap, Crown, Sparkles, Star, Shield } from 'lucide-react';
import React from 'react';

export type BoostEffectType = 'glow' | 'sparkle' | 'crown' | 'shine' | 'pulse';

// Common boost effects and their CSS classes
const BOOST_EFFECTS: Record<BoostEffectType, BoostEffect> = {
  glow: {
    id: 'glow',
    name: 'Subtle Glow',
    description: 'A subtle glow effect for your profile',
    cssClass: 'boost-effect-glow',
    bonusText: '+10% visibility',
    icon: React.createElement(Zap, { size: 16, className: "text-yellow-300" })
  },
  sparkle: {
    id: 'sparkle',
    name: 'Sparkle Effect',
    description: 'Adds sparkling elements to your profile',
    cssClass: 'boost-effect-sparkle',
    bonusText: '+25% visibility',
    icon: React.createElement(Sparkles, { size: 16, className: "text-purple-300" })
  },
  crown: {
    id: 'crown',
    name: 'Royal Crown',
    description: 'Displays a royal crown on your profile',
    cssClass: 'boost-effect-crown',
    bonusText: '+50% visibility',
    icon: React.createElement(Crown, { size: 16, className: "text-royal-gold" })
  },
  shine: {
    id: 'shine',
    name: 'Golden Shine',
    description: 'Adds a premium golden shine to your profile',
    cssClass: 'boost-effect-shine',
    bonusText: '+15% visibility',
    icon: React.createElement(Star, { size: 16, className: "text-yellow-400" })
  },
  pulse: {
    id: 'pulse',
    name: 'Royal Pulse',
    description: 'Adds a pulsating royal effect to your profile',
    cssClass: 'boost-effect-pulse',
    bonusText: '+20% visibility',
    icon: React.createElement(Shield, { size: 16, className: "text-blue-300" })
  }
};

export const useProfileBoost = (user: UserProfile | null) => {
  const [activeBoosts, setActiveBoosts] = useState<ProfileBoost[]>([]);
  
  useEffect(() => {
    if (!user || !user.profileBoosts) return;
    
    // Filter for active boosts only
    const currentTime = Date.now();
    const active = user.profileBoosts.filter(boost => 
      boost.startTime && boost.endTime && 
      new Date(boost.startTime).getTime() <= currentTime && 
      boost.endTime >= currentTime
    );
    
    setActiveBoosts(active);
  }, [user, user?.profileBoosts]);
  
  /**
   * Check if the user has any active boosts
   */
  const hasActiveBoosts = (): boolean => {
    return activeBoosts.length > 0;
  };
  
  /**
   * Get CSS classes for all active boosts
   */
  const getBoostClasses = (): string => {
    if (!hasActiveBoosts()) return '';
    
    return activeBoosts.map(boost => {
      const effect = BOOST_EFFECTS[boost.effectId as BoostEffectType];
      return effect ? effect.cssClass : '';
    }).join(' ');
  };
  
  /**
   * Get the strongest active boost
   */
  const getStrongestBoost = (): ProfileBoost | null => {
    if (!hasActiveBoosts()) return null;
    
    return activeBoosts.reduce((strongest, current) => 
      (current.strength > strongest.strength) ? current : strongest, 
      activeBoosts[0]
    );
  };
  
  /**
   * Get description text for active boosts
   */
  const getBoostDescription = (): string => {
    if (!hasActiveBoosts()) return '';
    
    const boost = getStrongestBoost();
    if (!boost) return '';
    
    const effect = BOOST_EFFECTS[boost.effectId as BoostEffectType];
    return effect ? effect.bonusText : '';
  };

  /**
   * Get a specific boost effect by effectId
   */
  const getBoostEffect = (effectId: string): BoostEffect | undefined => {
    return BOOST_EFFECTS[effectId as BoostEffectType];
  };

  /**
   * Calculate time remaining for a boost in milliseconds
   */
  const getBoostTimeRemaining = (boost: ProfileBoost): number => {
    const now = Date.now();
    return Math.max(0, boost.endTime - now);
  };

  /**
   * Format the time remaining in a human-readable format
   */
  const formatTimeRemaining = (timeMs: number): string => {
    return formatDuration(timeMs);
  };
  
  return {
    activeBoosts,
    hasActiveBoosts,
    getBoostClasses,
    getStrongestBoost,
    getBoostDescription,
    getBoostEffect,
    getBoostTimeRemaining,
    formatTimeRemaining
  };
};
