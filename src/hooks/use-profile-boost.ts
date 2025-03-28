
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';

export type BoostEffectType = 'speed' | 'power' | 'prestige' | 'crown' | 'sparkle' | 'glow';

export interface ProfileBoost {
  id: string;
  effectType: BoostEffectType;
  multiplier: number;
  expiresAt: number; // Unix timestamp
  acquiredAt: number; // Unix timestamp
  active: boolean;
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

  // Mock active boosts for testing
  useEffect(() => {
    if (user) {
      const mockBoosts: ProfileBoost[] = [
        {
          id: 'boost-1',
          effectType: 'speed',
          multiplier: 1.5,
          expiresAt: Date.now() + 1000 * 60 * 60 * 24, // 24 hours
          acquiredAt: Date.now() - 1000 * 60 * 60, // 1 hour ago
          active: true
        },
        {
          id: 'boost-2',
          effectType: 'power',
          multiplier: 2,
          expiresAt: Date.now() + 1000 * 60 * 60 * 2, // 2 hours
          acquiredAt: Date.now() - 1000 * 60 * 30, // 30 minutes ago
          active: true
        }
      ];
      
      setActiveBoosts(mockBoosts);
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
    
    // Map effect types to their details
    switch (boost.effectType) {
      case 'speed':
        return {
          id: boost.id,
          name: "Royal Speed",
          description: "Your profile loads faster for visitors",
          bonusText: `+${(boost.multiplier * 100) - 100}% speed`,
        };
      case 'power':
        return {
          id: boost.id,
          name: "Royal Power",
          description: "Your actions have more impact",
          bonusText: `+${(boost.multiplier * 100) - 100}% power`,
        };
      case 'prestige':
        return {
          id: boost.id,
          name: "Royal Prestige",
          description: "Your rank appears higher to others",
          bonusText: `+${(boost.multiplier * 100) - 100}% prestige`,
        };
      case 'crown':
        return {
          id: boost.id,
          name: "Royal Crown",
          description: "Display a crown on your profile",
          bonusText: "Premium Profile Effect",
        };
      case 'sparkle':
        return {
          id: boost.id,
          name: "Royal Sparkle",
          description: "Add sparkle effects to your profile",
          bonusText: "Premium Profile Effect",
        };
      case 'glow':
        return {
          id: boost.id,
          name: "Royal Glow",
          description: "Make your profile glow",
          bonusText: "Basic Profile Effect",
        };
      default:
        return null;
    }
  };
  
  // Calculate time remaining for a boost
  const getBoostTimeRemaining = (boost: ProfileBoost): number => {
    const now = Date.now();
    return Math.max(0, boost.expiresAt - now);
  };
  
  // Format time remaining in a human-readable format
  const formatTimeRemaining = (milliseconds: number): string => {
    if (milliseconds <= 0) return "Expired";
    
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
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
      switch (boost.effectType) {
        case 'speed':
          classes.push('profile-boost-effect-shine');
          break;
        case 'power':
          classes.push('profile-boost-pro');
          break;
        case 'prestige':
          classes.push('profile-boost-border-gold');
          break;
        case 'crown':
          classes.push('profile-boost-border-royal');
          break;
        case 'sparkle':
          classes.push('profile-boost-effect-sparkle');
          break;
        case 'glow':
          classes.push('profile-boost-effect-glow');
          break;
      }
      
      // Add other classes based on boost strength if needed
      if (boost.multiplier >= 2) {
        classes.push('profile-boost-whale');
      } else if (boost.multiplier >= 1.5) {
        classes.push('profile-boost-shark');
      } else if (boost.multiplier >= 1.2) {
        classes.push('profile-boost-dolphin');
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
