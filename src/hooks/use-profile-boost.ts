
import { useCallback } from 'react';
import { UserProfile } from '@/types/user';

// Define the boost effect types
export type BoostEffectType = 'border' | 'background' | 'effect';

// Define the boost structure
export interface ProfileBoost {
  id: string;
  type: BoostEffectType;
  style: string;
  expiresAt?: string;
}

// Define a boost effect (for display purposes)
export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode;
  bonusText: string;
}

// Extended UserProfile type with boosts
interface UserProfileWithBoosts extends UserProfile {
  boosts?: ProfileBoost[];
}

export function useProfileBoost(user: UserProfileWithBoosts) {
  // Check if user has any active boosts
  const hasActiveBoosts = useCallback(() => {
    if (!user) return false;
    
    return !!(
      user.tier === 'pro' || 
      user.tier === 'whale' || 
      user.tier === 'shark' || 
      user.tier === 'dolphin' ||
      (user.boosts && user.boosts.length > 0)
    );
  }, [user]);

  // Generate CSS classes based on active boosts
  const getBoostClasses = useCallback(() => {
    if (!user) return '';
    
    let classes: string[] = [];
    
    // Apply tier-based boosts
    if (user.tier === 'pro') {
      classes.push('profile-boost-pro');
    } else if (user.tier === 'whale') {
      classes.push('profile-boost-whale');
    } else if (user.tier === 'shark') {
      classes.push('profile-boost-shark');
    } else if (user.tier === 'dolphin') {
      classes.push('profile-boost-dolphin');
    }
    
    // Apply specific boosts if available
    if (user.boosts) {
      user.boosts.forEach(boost => {
        if (boost.type === 'border') {
          classes.push(`profile-boost-border-${boost.style}`);
        } else if (boost.type === 'effect') {
          classes.push(`profile-boost-effect-${boost.style}`);
        } else if (boost.type === 'background') {
          classes.push(`profile-boost-bg-${boost.style}`);
        }
      });
    }
    
    // Apply team-specific boost
    if (user.team === 'red') {
      classes.push('profile-boost-team-red');
    } else if (user.team === 'green') {
      classes.push('profile-boost-team-green');
    } else if (user.team === 'blue') {
      classes.push('profile-boost-team-blue');
    }
    
    return classes.join(' ');
  }, [user]);

  // Get active boosts for the user
  const getActiveBoosts = useCallback(() => {
    if (!user || !user.boosts) return [];
    return user.boosts;
  }, [user]);

  // Get the effect details for a given boost
  const getBoostEffect = useCallback((boostId: string): BoostEffect | null => {
    // This would typically come from a database or config
    // Mock implementation for now
    const boostEffects: Record<string, BoostEffect> = {
      'gold-border': {
        id: 'gold-border',
        name: 'Gold Border',
        description: 'A luxurious gold border for your profile',
        bonusText: '+5% Visibility'
      },
      'royal-glow': {
        id: 'royal-glow',
        name: 'Royal Glow',
        description: 'A radiant glow effect around your profile',
        bonusText: '+10% Presence'
      }
    };
    
    return boostEffects[boostId] || null;
  }, []);

  // Calculate remaining time for boost
  const getBoostTimeRemaining = useCallback((boost: ProfileBoost): number => {
    if (!boost.expiresAt) return Infinity;
    
    const expiryDate = new Date(boost.expiresAt);
    const currentDate = new Date();
    
    return Math.max(0, expiryDate.getTime() - currentDate.getTime());
  }, []);

  // Format time remaining into human-readable string
  const formatTimeRemaining = useCallback((timeMs: number): string => {
    if (timeMs === Infinity) return 'Permanent';
    if (timeMs <= 0) return 'Expired';
    
    const seconds = Math.floor(timeMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} days remaining`;
    if (hours > 0) return `${hours} hours remaining`;
    if (minutes > 0) return `${minutes} minutes remaining`;
    return `${seconds} seconds remaining`;
  }, []);

  return { 
    hasActiveBoosts, 
    getBoostClasses,
    activeBoosts: getActiveBoosts(),
    getBoostEffect,
    getBoostTimeRemaining,
    formatTimeRemaining
  };
}
