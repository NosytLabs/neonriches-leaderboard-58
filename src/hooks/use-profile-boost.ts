
import { useState, useEffect } from 'react';
import { UserProfile, ProfileBoost } from '@/types/user';

export type BoostEffectType = 'glow' | 'sparkle' | 'crown' | 'shine' | 'pulse';

// Common boost effects and their CSS classes
const BOOST_EFFECTS = {
  glow: {
    name: 'Subtle Glow',
    cssClass: 'boost-effect-glow',
    bonusText: '+10% visibility'
  },
  sparkle: {
    name: 'Sparkle Effect',
    cssClass: 'boost-effect-sparkle',
    bonusText: '+25% visibility'
  },
  crown: {
    name: 'Royal Crown',
    cssClass: 'boost-effect-crown',
    bonusText: '+50% visibility'
  },
  shine: {
    name: 'Golden Shine',
    cssClass: 'boost-effect-shine',
    bonusText: '+15% visibility'
  },
  pulse: {
    name: 'Royal Pulse',
    cssClass: 'boost-effect-pulse',
    bonusText: '+20% visibility'
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
  
  return {
    activeBoosts,
    hasActiveBoosts,
    getBoostClasses,
    getStrongestBoost,
    getBoostDescription
  };
};
