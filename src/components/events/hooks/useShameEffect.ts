
import { useState, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { ShameAction } from '@/types/mockery';

export interface ShameEffect {
  action: ShameAction;
  timestamp: number;
  until: number;
}

export interface ShameEffectOptions {
  cooldownPeriod?: number;
}

export interface ShameEffectState {
  shameEffects: Record<number | string, ShameEffect | null>;
  shameCooldown: Record<number | string, number>;
  shameCount: Record<number | string, number>;
  getShameCount: (userId: number | string) => number;
  handleShame: (userId: number | string, username: string, action: ShameAction, amount: number) => Promise<boolean>;
  canShameUser: (userId: number | string) => boolean;
  getUserEffects: (userId: number | string) => ShameEffect[];
  hasActiveShame: (userId: number | string) => boolean;
}

export const useShameEffect = (options?: ShameEffectOptions): ShameEffectState => {
  const { user } = useAuth();
  const [shameEffects, setShameEffects] = useState<Record<number | string, ShameEffect | null>>({});
  const [shameCooldown, setShameCooldown] = useState<Record<number | string, number>>({});
  const [shameCount, setShameCount] = useState<Record<number | string, number>>({});
  const toast = useToast();

  const getShameCount = useCallback((userId: number | string) => {
    return shameCount[userId] || 0;
  }, [shameCount]);

  const canShameUser = useCallback((userId: number | string) => {
    if (!user) return false;
    if (user.id === userId.toString()) return false;
    
    // Check if cooldown is active
    if (shameCooldown[userId] && shameCooldown[userId] > Date.now()) return false;
    
    return true;
  }, [user, shameCooldown]);

  const getUserEffects = useCallback((userId: number | string) => {
    return Object.values(shameEffects).filter(effect => 
      effect && effect.action === 'shame'
    ) as ShameEffect[];
  }, [shameEffects]);

  const hasActiveShame = useCallback((userId: number | string) => {
    const now = Date.now();
    const effect = shameEffects[userId];
    return effect !== null && effect !== undefined && effect.until > now;
  }, [shameEffects]);

  const handleShame = useCallback(async (userId: number | string, username: string, action: ShameAction, amount: number) => {
    if (!user) {
      toast.error({
        title: "Authentication Required",
        description: "You must be logged in to shame other users"
      });
      return false;
    }
    
    if (!canShameUser(userId)) {
      toast.error({
        title: "Cannot Perform Action",
        description: "You cannot perform this action at this time"
      });
      return false;
    }
    
    try {
      // Set cooldown (varies by action type)
      const cooldownDuration = action === 'protection' ? 86400000 : 3600000; // 24hrs for protection, 1hr for others
      const effectDuration = action === 'protection' ? 7200000 : 3600000; // 2hrs for protection, 1hr for others
      
      setShameCooldown(prev => ({
        ...prev,
        [userId]: Date.now() + cooldownDuration
      }));
      
      // Add effect to list
      const newEffect: ShameEffect = {
        action,
        timestamp: Date.now(),
        until: Date.now() + effectDuration
      };
      
      setShameEffects(prev => ({
        ...prev,
        [userId]: newEffect
      }));
      
      setShameCount(prev => ({
        ...prev,
        [userId]: (prev[userId] || 0) + 1
      }));
      
      toast.success({
        title: "Action Successful",
        description: `The ${action} action has been applied successfully`
      });
      
      return true;
    } catch (error) {
      console.error("Error applying shame effect:", error);
      toast.error({
        title: "Action Failed",
        description: "Failed to apply the action. Please try again."
      });
      return false;
    }
  }, [user, canShameUser, toast]);

  return {
    shameEffects,
    shameCooldown,
    shameCount,
    getShameCount,
    handleShame,
    canShameUser,
    getUserEffects,
    hasActiveShame
  };
};

export { type ShameAction } from '@/types/mockery';
export default useShameEffect;
