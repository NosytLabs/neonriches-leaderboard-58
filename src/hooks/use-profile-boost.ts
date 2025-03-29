
import { useState, useEffect } from 'react';
import { ProfileBoost, BoostEffectType } from '@/types/boost';
import { UserProfile } from '@/types/user';
import { useToast } from '@/components/ui/use-toast';
import profileBoostEffects from '@/data/boostEffects';

export interface ProfileBoost {
  id: string;
  startDate: string;
  endDate: string;
  level: number;
  effectId: BoostEffectType;
  type?: string;
  strength?: number;
  appliedBy?: string;
}

export interface UseProfileBoostResult {
  activeBoosts: ProfileBoost[];
  addBoost: (effectId: BoostEffectType, days: number, level?: number) => boolean;
  removeBoost: (boostId: string) => void;
  hasActiveBoost: (effectId: BoostEffectType) => boolean;
  isBoostActive: (boostId: string) => boolean;
  getBoostClasses: () => string;
  hasActiveBoosts: boolean;
}

export const useProfileBoost = (user?: UserProfile): UseProfileBoostResult => {
  const [activeBoosts, setActiveBoosts] = useState<ProfileBoost[]>([]);
  const { toast } = useToast();

  // Initialize boosts from user profile
  useEffect(() => {
    if (user && user.profileBoosts) {
      // Convert user profile boosts to our internal format
      const validBoosts = user.profileBoosts.filter(boost => {
        const endDate = new Date(boost.endDate);
        return endDate > new Date(); // Only include active boosts
      });
      
      // Convert the boosts to our internal format with proper type casting
      const convertedBoosts = validBoosts.map(boost => ({
        ...boost,
        effectId: (boost.effectId || 'gold-aura') as BoostEffectType
      }));
      
      setActiveBoosts(convertedBoosts as ProfileBoost[]);
    }
  }, [user]);

  // Add a new boost
  const addBoost = (effectId: BoostEffectType, days: number, level = 1): boolean => {
    // Check if user has the required tier for this boost
    const boostInfo = profileBoostEffects.find(b => b.id === effectId);
    if (!boostInfo) {
      toast({
        title: "Boost Error",
        description: "This boost type doesn't exist.",
        variant: "destructive"
      });
      return false;
    }
    
    // Check if boost allows stacking
    if (!boostInfo.allowStacking && hasActiveBoost(effectId)) {
      toast({
        title: "Boost Error",
        description: "This boost is already active and doesn't allow stacking.",
        variant: "destructive"
      });
      return false;
    }
    
    // Create the new boost
    const now = new Date();
    const endDate = new Date(now);
    endDate.setDate(endDate.getDate() + days);
    
    const newBoost: ProfileBoost = {
      id: crypto.randomUUID(),
      startDate: now.toISOString(),
      endDate: endDate.toISOString(),
      level,
      effectId,
      type: boostInfo.type
    };
    
    setActiveBoosts(prev => [...prev, newBoost]);
    
    toast({
      title: "Boost Applied",
      description: `${boostInfo.name} boost has been applied to your profile for ${days} days.`,
      variant: "default"
    });
    
    return true;
  };
  
  // Remove a boost
  const removeBoost = (boostId: string): void => {
    setActiveBoosts(prev => prev.filter(b => b.id !== boostId));
    
    toast({
      title: "Boost Removed",
      description: "The boost has been removed from your profile.",
      variant: "default"
    });
  };
  
  // Check if a specific boost type is active
  const hasActiveBoost = (effectId: BoostEffectType): boolean => {
    return activeBoosts.some(boost => boost.effectId === effectId);
  };
  
  // Check if a specific boost is active by ID
  const isBoostActive = (boostId: string): boolean => {
    return activeBoosts.some(boost => boost.id === boostId);
  };
  
  // Get CSS classes for active boosts
  const getBoostClasses = (): string => {
    const classes: string[] = [];
    
    // First check if user has required tier for premium effects
    if (user && user.subscription?.tier === 'premium') {
      classes.push('premium-tier-boost');
    }
    
    // Add classes for each active boost
    activeBoosts.forEach(boost => {
      const effect = profileBoostEffects.find(e => e.id === boost.effectId);
      if (effect?.cssClass) {
        classes.push(effect.cssClass);
      }
    });
    
    return classes.join(' ');
  };
  
  return {
    activeBoosts,
    addBoost,
    removeBoost,
    hasActiveBoost,
    isBoostActive,
    getBoostClasses,
    hasActiveBoosts: activeBoosts.length > 0
  };
};

export default useProfileBoost;
