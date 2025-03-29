
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/auth';
import { UserProfile } from '@/types/user';
import profileBoostEffects from '@/data/profileBoostEffects';

export type BoostEffectType = 'glow' | 'crown' | 'sparkle' | 'pulse' | 'flame' | 'shadow';

export interface ProfileBoost {
  id: string;
  effectId: BoostEffectType;
  startDate: string;
  endDate: string;
  level: number;
  type: 'visibility' | 'appearance' | 'effect';
  strength: number;
  appliedBy: string;
}

export interface UseProfileBoostResult {
  activeBoosts: ProfileBoost[];
  hasActiveBoost: boolean;
  applyBoost: (boostId: string, days: number) => Promise<boolean>;
  removeBoost: (boostId: string) => Promise<boolean>;
  getBoostLevel: () => number;
  getBoostEffect: () => BoostEffectType | null;
  canApplyBoost: (boostId: string) => boolean;
}

export const useProfileBoost = (
  profile?: UserProfile | null,
  updateProfile?: (data: Partial<UserProfile>) => Promise<void>
): UseProfileBoostResult => {
  const { user } = useAuth();
  const targetProfile = profile || user;
  
  const [activeBoosts, setActiveBoosts] = useState<ProfileBoost[]>([]);
  
  useEffect(() => {
    if (!targetProfile) return;
    
    // Extract active boosts from profile
    const profileBoosts = targetProfile.profileBoosts || [];
    const now = new Date().toISOString();
    
    // Filter active boosts
    const active = profileBoosts.filter(boost => {
      return new Date(boost.endDate).toISOString() > now;
    });
    
    setActiveBoosts(active);
  }, [targetProfile]);
  
  const applyBoost = useCallback(async (boostId: string, days: number = 7): Promise<boolean> => {
    if (!targetProfile || !updateProfile) return false;
    
    // Get boost details
    const boostDetails = profileBoostEffects.find(b => b.id === boostId);
    if (!boostDetails) return false;
    
    // Create boost object
    const now = new Date();
    const endDate = new Date(now);
    endDate.setDate(endDate.getDate() + days);
    
    const effectMapping: Record<string, BoostEffectType> = {
      'gold-aura': 'glow',
      'crown-effect': 'crown',
      'neon-pulse': 'pulse',
      'rainbow-flow': 'flame',
      'royal-sparkle': 'sparkle',
      'animated-border': 'shadow'
    };
    
    const newBoost: ProfileBoost = {
      id: `boost_${Date.now()}`,
      effectId: effectMapping[boostId] || 'glow',
      startDate: now.toISOString(),
      endDate: endDate.toISOString(),
      level: boostDetails.tier === 'royal' ? 3 : boostDetails.tier === 'premium' ? 2 : 1,
      type: boostDetails.type as 'visibility' | 'appearance' | 'effect',
      strength: boostDetails.tier === 'royal' ? 3 : boostDetails.tier === 'premium' ? 2 : 1,
      appliedBy: targetProfile.id
    };
    
    // Update profile with new boost
    const currentBoosts = targetProfile.profileBoosts || [];
    const updatedBoosts = [...currentBoosts, newBoost];
    
    try {
      await updateProfile({
        profileBoosts: updatedBoosts
      });
      setActiveBoosts(prev => [...prev, newBoost]);
      return true;
    } catch (error) {
      console.error('Error applying boost:', error);
      return false;
    }
  }, [targetProfile, updateProfile]);
  
  const removeBoost = useCallback(async (boostId: string): Promise<boolean> => {
    if (!targetProfile || !updateProfile) return false;
    
    const currentBoosts = targetProfile.profileBoosts || [];
    const updatedBoosts = currentBoosts.filter(boost => boost.id !== boostId);
    
    try {
      await updateProfile({
        profileBoosts: updatedBoosts
      });
      setActiveBoosts(prev => prev.filter(boost => boost.id !== boostId));
      return true;
    } catch (error) {
      console.error('Error removing boost:', error);
      return false;
    }
  }, [targetProfile, updateProfile]);
  
  const getBoostLevel = useCallback((): number => {
    if (!activeBoosts.length) return 0;
    
    // Return highest boost level
    return Math.max(...activeBoosts.map(boost => boost.level));
  }, [activeBoosts]);
  
  const getBoostEffect = useCallback((): BoostEffectType | null => {
    if (!activeBoosts.length) return null;
    
    // Get highest level boost
    const highestLevelBoost = [...activeBoosts].sort((a, b) => b.level - a.level)[0];
    return highestLevelBoost.effectId;
  }, [activeBoosts]);
  
  const canApplyBoost = useCallback((boostId: string): boolean => {
    if (!targetProfile) return false;
    
    const userTier = targetProfile.subscriptionTier || 'free';
    const boostDetails = profileBoostEffects.find(b => b.id === boostId);
    
    if (!boostDetails) return false;
    
    // Check if user tier is high enough
    if (boostDetails.tier === 'royal' && userTier !== 'royal') {
      return false;
    }
    
    if (boostDetails.tier === 'premium' && userTier === 'free') {
      return false;
    }
    
    return true;
  }, [targetProfile]);
  
  return {
    activeBoosts,
    hasActiveBoost: activeBoosts.length > 0,
    applyBoost,
    removeBoost,
    getBoostLevel,
    getBoostEffect,
    canApplyBoost
  };
};

export default useProfileBoost;
