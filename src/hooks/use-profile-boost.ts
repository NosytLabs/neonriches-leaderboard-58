import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';
import { BoostEffect, BoostEffectType, ProfileBoost } from '@/types/boost';
import { profileBoostEffects, getBoostById } from '@/data/boostEffects';

export type BoostEffectType = 'visibility' | 'rank' | 'profile' | 'cosmetic' | 'marketing';

export interface UseProfileBoostResult {
  activeBoosts: ProfileBoost[];
  hasActiveBoosts: boolean;
  applyBoost: (boostId: string, duration: number) => boolean;
  removeBoost: (boostId: string) => boolean;
  getBoostEffect: (boostId: string) => BoostEffect | undefined;
  getBoostTimeLeft: (boostId: string) => number;
  getAllBoosts: () => BoostEffect[];
  canApplyBoost: (boostId: string) => boolean;
}

/**
 * Custom hook to manage profile boosts
 * @param user User profile to manage boosts for
 * @returns Boost management functions and data
 */
const useProfileBoost = (user?: UserProfile): UseProfileBoostResult => {
  const [activeBoosts, setActiveBoosts] = useState<ProfileBoost[]>([]);
  
  // Initialize active boosts from user data
  useEffect(() => {
    if (!user || !user.profileBoosts) return;
    
    const now = new Date();
    // Filter to only include active boosts
    const active = (user.profileBoosts || []).filter(boost => {
      const endDate = new Date(boost.endDate);
      return endDate > now;
    });
    
    setActiveBoosts(active);
  }, [user]);
  
  // Get all available boosts
  const getAllBoosts = (): BoostEffect[] => {
    return profileBoostEffects;
  };
  
  // Get a specific boost effect by ID
  const getBoostEffect = (boostId: string): BoostEffect | undefined => {
    return getBoostById(boostId);
  };
  
  // Check if user can apply a boost
  const canApplyBoost = (boostId: string): boolean => {
    if (!user) return false;
    
    const boostEffect = getBoostEffect(boostId);
    if (!boostEffect) return false;
    
    // Check if user meets tier requirement
    const userTier = user.tier || 'basic';
    const requiredTier = boostEffect.minTier;
    
    const tierValues = {
      basic: 0,
      pro: 1,
      royal: 2,
      bronze: 3,
      silver: 4,
      gold: 5,
      platinum: 6,
      premium: 7,
      elite: 8
    };
    
    if (tierValues[userTier as keyof typeof tierValues] < tierValues[requiredTier as keyof typeof tierValues]) {
      return false;
    }
    
    // Check if user already has a non-stackable boost of the same type
    if (!boostEffect.allowStacking) {
      const hasNonStackable = activeBoosts.some(
        boost => boost.effectId === boostId
      );
      if (hasNonStackable) return false;
    }
    
    return true;
  };
  
  // Apply a boost to the user
  const applyBoost = (boostId: string, duration: number): boolean => {
    if (!user || !canApplyBoost(boostId)) return false;
    
    // Create a new boost with specified duration
    const now = new Date();
    const endDate = new Date(now.getTime() + duration * 60 * 60 * 1000); // Convert hours to ms
    
    const newBoost: ProfileBoost = {
      id: `boost_${Date.now()}`,
      effectId: boostId,
      startDate: now.toISOString(),
      endDate: endDate.toISOString(),
      level: 1 // Default level
    };
    
    setActiveBoosts(prev => [...prev, newBoost]);
    return true;
  };
  
  // Remove a boost from the user
  const removeBoost = (boostId: string): boolean => {
    const initialLength = activeBoosts.length;
    setActiveBoosts(prev => prev.filter(boost => boost.id !== boostId));
    return activeBoosts.length < initialLength;
  };
  
  // Get time left for a boost in hours
  const getBoostTimeLeft = (boostId: string): number => {
    const boost = activeBoosts.find(b => b.id === boostId);
    if (!boost) return 0;
    
    const now = new Date();
    const endDate = new Date(boost.endDate);
    const hoursLeft = Math.max(0, (endDate.getTime() - now.getTime()) / (60 * 60 * 1000));
    
    return Math.round(hoursLeft);
  };
  
  return {
    activeBoosts,
    hasActiveBoosts: activeBoosts.length > 0,
    applyBoost,
    removeBoost,
    getBoostEffect,
    getBoostTimeLeft,
    getAllBoosts,
    canApplyBoost
  };
};

export default useProfileBoost;
