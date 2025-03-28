
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';

export type BoostEffectType = 'speed' | 'power' | 'prestige';

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
  
  return {
    activeBoosts,
    hasActiveBoosts,
    getBoostEffect,
    getBoostTimeRemaining,
    formatTimeRemaining
  };
};
