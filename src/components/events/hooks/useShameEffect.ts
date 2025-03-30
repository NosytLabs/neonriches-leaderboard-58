
import { useState, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { MockeryAction, ShameAction } from '@/utils/mockeryUtils';

export interface ShameEffect {
  action: ShameAction;
  timestamp: number;
  until: number;
}

export interface ShameEffectState {
  shameEffects: ShameEffect[];
  shameCooldown: number;
  shameCount: number;
  getShameCount: () => number;
  handleShame: (userId: string, action: ShameAction) => Promise<boolean>;
  canShameUser: (userId: string) => boolean;
  getUserEffects: (userId: string) => ShameEffect[];
  hasActiveShame: (userId: string) => boolean;
}

export const useShameEffect = (): ShameEffectState => {
  const { user } = useAuth();
  const [shameEffects, setShameEffects] = useState<ShameEffect[]>([]);
  const [shameCooldown, setShameCooldown] = useState<number>(0);
  const [shameCount, setShameCount] = useState<number>(0);
  const { toast } = useToast();

  const getShameCount = useCallback(() => {
    return shameCount;
  }, [shameCount]);

  const canShameUser = useCallback((userId: string) => {
    if (!user) return false;
    if (user.id === userId) return false;
    
    // Check if cooldown is active
    if (shameCooldown > Date.now()) return false;
    
    return true;
  }, [user, shameCooldown]);

  const getUserEffects = useCallback((userId: string) => {
    return shameEffects.filter(effect => effect.action === 'shame');
  }, [shameEffects]);

  const hasActiveShame = useCallback((userId: string) => {
    const now = Date.now();
    return shameEffects.some(effect => 
      effect.action === 'shame' && effect.until > now
    );
  }, [shameEffects]);

  const handleShame = useCallback(async (userId: string, action: ShameAction) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to shame other users",
        variant: "destructive"
      });
      return false;
    }
    
    if (!canShameUser(userId)) {
      toast({
        title: "Cannot Perform Action",
        description: "You cannot perform this action at this time",
        variant: "destructive"
      });
      return false;
    }
    
    try {
      // Set cooldown (varies by action type)
      const cooldownDuration = action === 'protection' ? 86400000 : 3600000; // 24hrs for protection, 1hr for others
      const effectDuration = action === 'protection' ? 7200000 : 3600000; // 2hrs for protection, 1hr for others
      
      setShameCooldown(Date.now() + cooldownDuration);
      
      // Add effect to list
      const newEffect: ShameEffect = {
        action,
        timestamp: Date.now(),
        until: Date.now() + effectDuration
      };
      
      setShameEffects(prev => [...prev, newEffect]);
      setShameCount(prev => prev + 1);
      
      toast({
        title: "Action Successful",
        description: `The ${action} action has been applied successfully`,
        variant: "success"
      });
      
      return true;
    } catch (error) {
      console.error("Error applying shame effect:", error);
      toast({
        title: "Action Failed",
        description: "Failed to apply the action. Please try again.",
        variant: "destructive"
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

export type { ShameAction } from '@/utils/mockeryUtils';
export default useShameEffect;
