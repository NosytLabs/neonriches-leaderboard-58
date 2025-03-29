
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';
import { BoostType, UserBoost } from '@/types/profile-boost';
import { getBoostById, profileBoostEffects } from '@/data/boostEffects';

export interface ProfileBoost {
  id: string;
  effectId: string;
  startDate: string;
  endDate: string;
  level: number;
  type: string;
  strength: number;
  appliedBy: string;
}

interface BoostEffect {
  id: string;
  name: string;
  description: string;
  bonusText: string;
  icon?: React.ReactNode;
}

export const useProfileBoost = (user: UserProfile) => {
  const [activeBoosts, setActiveBoosts] = useState<ProfileBoost[]>([]);

  // Get active boosts from user profile
  useEffect(() => {
    if (user) {
      // Filter to only active boosts
      const now = new Date();
      const active = user.profileBoosts?.filter(boost => {
        const endDate = new Date(boost.endDate);
        return endDate > now;
      }) || [];
      
      setActiveBoosts(active);
    }
  }, [user]);
  
  // Check if a user has any active boosts
  const hasActiveBoosts = () => {
    return activeBoosts && activeBoosts.length > 0;
  };
  
  // Get the effect details of a boost by ID
  const getBoostEffect = (boostId: string): BoostEffect | null => {
    const boost = activeBoosts.find(b => b.id === boostId);
    if (!boost) return null;
    
    const boostEffect = getBoostById(boost.effectId);
    if (!boostEffect) return null;
    
    return {
      id: boost.id,
      name: boostEffect.name,
      description: boostEffect.description,
      bonusText: `Duration: ${getRemainingDaysText(boost)}`,
    };
  };
  
  // Calculate time remaining for a boost
  const getBoostTimeRemaining = (boost: ProfileBoost): number => {
    const now = Date.now();
    return Math.max(0, new Date(boost.endDate).getTime() - now);
  };
  
  // Get remaining days text
  const getRemainingDaysText = (boost: ProfileBoost): string => {
    const remainingMs = getBoostTimeRemaining(boost);
    const days = Math.ceil(remainingMs / (1000 * 60 * 60 * 24));
    return days === 1 ? "1 day" : `${days} days`;
  };
  
  // Format time remaining in a human-readable format
  const formatTimeRemaining = (milliseconds: number): string => {
    if (milliseconds <= 0) return "Expired";
    
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return `${days}d ${hours % 24}h remaining`;
    } else if (hours > 0) {
      return `${hours}h ${minutes % 60}m remaining`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s remaining`;
    } else {
      return `${seconds}s remaining`;
    }
  };
  
  // Get CSS classes for active boosts
  const getBoostClasses = (): string => {
    if (!hasActiveBoosts()) return '';
    
    const classes: string[] = [];
    
    activeBoosts.forEach(boost => {
      const boostEffect = getBoostById(boost.effectId);
      if (boostEffect) {
        classes.push(boostEffect.cssClass);
      }
      
      // Add tier effects based on user's subscription tier
      if (user.tier === 'premium') {
        classes.push('profile-boost-pro');
      } else if (user.tier === 'royal') {
        classes.push('profile-boost-whale');
      }
      
      // Add team-specific effects
      if (user.team === 'red') {
        classes.push('profile-boost-team-red');
      } else if (user.team === 'green') {
        classes.push('profile-boost-team-green');
      } else if (user.team === 'blue') {
        classes.push('profile-boost-team-blue');
      }
    });
    
    return classes.join(' ');
  };
  
  return {
    activeBoosts,
    hasActiveBoosts,
    getBoostEffect,
    getBoostTimeRemaining,
    formatTimeRemaining,
    getBoostClasses
  };
};
