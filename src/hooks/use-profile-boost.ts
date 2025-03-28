
import { UserProfile } from '@/types/user';

export type BoostEffect = 'glow' | 'rainbow' | 'pulse' | 'sparkle' | 'crown' | 'shimmer' | 'flames' | 'banner';

export interface ProfileBoost {
  id: string;
  effectId: BoostEffect;
  startTime: number;
  endTime: number;
}

export interface BoostEffectDetails {
  name: string;
  cssClass: string;
  description: string;
  icon: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
}

// All available boost effects with their details
export const boostEffects: Record<BoostEffect, BoostEffectDetails> = {
  glow: {
    name: 'Royal Glow',
    cssClass: 'royal-glow',
    description: 'A subtle golden glow surrounds your profile elements',
    icon: '✨',
    rarity: 'common'
  },
  rainbow: {
    name: 'Rainbow Text',
    cssClass: 'royal-rainbow-text',
    description: 'Your text shimmers with rainbow colors',
    icon: '🌈',
    rarity: 'uncommon'
  },
  pulse: {
    name: 'Royal Pulse',
    cssClass: 'royal-pulse',
    description: 'Your profile elements pulse with royal energy',
    icon: '💫',
    rarity: 'uncommon'
  },
  sparkle: {
    name: 'Royal Sparkle',
    cssClass: 'royal-sparkle',
    description: 'Sparkling effects adorn your profile elements',
    icon: '⭐',
    rarity: 'rare'
  },
  crown: {
    name: 'Crown Effect',
    cssClass: 'royal-crown',
    description: 'A majestic crown effect appears on your profile',
    icon: '👑',
    rarity: 'rare'
  },
  shimmer: {
    name: 'Gold Shimmer',
    cssClass: 'royal-shimmer',
    description: 'Your profile shimmers with gold accents',
    icon: '✨',
    rarity: 'rare'
  },
  flames: {
    name: 'Royal Flames',
    cssClass: 'royal-flames',
    description: 'Magical flames surround your profile elements',
    icon: '🔥',
    rarity: 'legendary'
  },
  banner: {
    name: 'Royal Banner',
    cssClass: 'royal-banner',
    description: 'A royal banner decorates your profile',
    icon: '🏰',
    rarity: 'legendary'
  }
};

/**
 * Hook for handling profile boost effects
 */
export const useProfileBoost = (user?: UserProfile | null) => {
  /**
   * Get all active boost effects for a user
   */
  const getActiveBoosts = () => {
    if (!user?.profileBoosts || !Array.isArray(user.profileBoosts)) {
      return [];
    }
    
    const currentTime = Date.now();
    return user.profileBoosts.filter(boost => boost.endTime > currentTime);
  };

  /**
   * Get CSS classes for active boost effects
   */
  const getBoostClasses = (type: 'text' | 'card' | 'container' = 'text'): string => {
    const activeBoosts = getActiveBoosts();
    
    if (activeBoosts.length === 0) {
      return '';
    }
    
    // Get container class based on type
    const containerClass = (() => {
      switch (type) {
        case 'card':
          return 'boosted-profile-card';
        case 'container':
          return 'profile-boost-container';
        default:
          return '';
      }
    })();
    
    // Get effect classes
    const effectClasses = activeBoosts
      .map(boost => boostEffects[boost.effectId as BoostEffect]?.cssClass || '')
      .filter(className => className)
      .join(' ');
    
    return `${containerClass} ${effectClasses}`.trim();
  };

  /**
   * Check if a user has any active boosts
   */
  const hasActiveBoosts = (): boolean => {
    return getActiveBoosts().length > 0;
  };

  /**
   * Get time remaining for a boost
   */
  const getTimeRemaining = (boost: ProfileBoost): string => {
    const timeRemaining = boost.endTime - Date.now();
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    
    if (hours < 24) {
      return `${hours} hours remaining`;
    } else {
      const days = Math.floor(hours / 24);
      return `${days} days remaining`;
    }
  };

  return {
    getActiveBoosts,
    getBoostClasses,
    hasActiveBoosts,
    getTimeRemaining,
    boostEffects
  };
};
