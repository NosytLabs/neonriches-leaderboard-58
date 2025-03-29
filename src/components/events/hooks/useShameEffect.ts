
import { useState, useCallback, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

interface ShameEffect {
  userId: number;
  username: string;
  type: ShameAction;
  appliedAt: number;
  expiresAt: number;
}

interface ShameEffectOptions {
  cooldownPeriod?: number;
}

export const useShameEffect = (options: ShameEffectOptions = {}) => {
  const { cooldownPeriod = 24 * 60 * 60 * 1000 } = options; // 24 hours by default
  const [shameEffects, setShameEffects] = useState<Record<number, ShameEffect | null>>({});
  const [shameCooldown, setShameCooldown] = useState<Record<number, boolean>>({});
  const [shameCount, setShameCount] = useState<Record<number, number>>({});
  const { toast } = useToast();
  
  // Function to get shame count for a user
  const getShameCount = useCallback((userId: number) => {
    return shameCount[userId] || 0;
  }, [shameCount]);
  
  // Handle shaming a user
  const handleShame = useCallback(
    (userId: number, username: string, type: ShameAction, price: number) => {
      // Check if user is already shamed
      if (shameEffects[userId]) {
        toast({
          title: "Already Shamed",
          description: `${username} is already experiencing public shame.`,
          variant: "destructive",
        });
        return false;
      }
      
      // Check if there's a cooldown
      if (shameCooldown[userId]) {
        toast({
          title: "Cooldown Active",
          description: `You must wait before shaming ${username} again.`,
          variant: "destructive",
        });
        return false;
      }
      
      // Create new shame effect
      const now = Date.now();
      const newEffect: ShameEffect = {
        userId,
        username,
        type,
        appliedAt: now,
        expiresAt: now + cooldownPeriod,
      };
      
      // Update state
      setShameEffects((prev) => ({
        ...prev,
        [userId]: newEffect,
      }));
      
      // Set cooldown
      setShameCooldown((prev) => ({
        ...prev,
        [userId]: true,
      }));
      
      // Update count
      setShameCount((prev) => ({
        ...prev,
        [userId]: (prev[userId] || 0) + 1,
      }));
      
      // Set timeout to remove effect
      setTimeout(() => {
        setShameEffects((prev) => ({
          ...prev,
          [userId]: null,
        }));
      }, cooldownPeriod);
      
      // Set timeout to remove cooldown
      setTimeout(() => {
        setShameCooldown((prev) => ({
          ...prev,
          [userId]: false,
        }));
      }, cooldownPeriod * 1.5); // Cooldown longer than effect
      
      toast({
        title: "Shame Applied",
        description: `You have successfully shamed ${username} with ${type}!`,
        variant: "default",
      });
      
      return true;
    },
    [shameEffects, shameCooldown, cooldownPeriod, toast]
  );
  
  return {
    shameEffects,
    shameCooldown,
    shameCount,
    getShameCount,
    handleShame,
  };
};

export default useShameEffect;
