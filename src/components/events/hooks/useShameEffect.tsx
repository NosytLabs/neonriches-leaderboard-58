
import { useState, useEffect } from 'react';
import { ShameAction } from '@/types/mockery';
import { User } from '@/types/user';
import { toast } from '@/hooks/use-toast';
import { formatDollarAmount } from '@/utils/formatters';

export type ShameEffect = {
  userId: string | number;
  username: string;
  action: ShameAction;
  timestamp: number;
  until: number;
  appliedBy?: string;
};

export const useShameEffect = (currentUser?: User | null) => {
  const [shamedUsers, setShamedUsers] = useState<Record<string, ShameEffect>>({});
  const [loading, setLoading] = useState(false);
  const [cooldowns, setCooldowns] = useState<Record<string, number>>({});
  
  // Simulate applying a shame effect to a user
  const applyShameEffect = (
    targetUserId: string | number, 
    targetUsername: string, 
    action: ShameAction, 
    amount: number
  ): boolean => {
    setLoading(true);
    
    try {
      // Check if the current user can apply this effect
      if (!currentUser) {
        toast({
          title: "Action Failed",
          description: "You must be logged in to shame others.",
          variant: "destructive",
        });
        return false;
      }
      
      // Check if the user is on cooldown
      const userCooldownKey = `${currentUser.id}-${targetUserId}`;
      const cooldownUntil = cooldowns[userCooldownKey] || 0;
      const now = Date.now();
      
      if (cooldownUntil > now) {
        const remainingTime = Math.ceil((cooldownUntil - now) / (1000 * 60));
        toast({
          title: "On Cooldown",
          description: `You can shame this user again in ${remainingTime} minutes.`,
          variant: "destructive",
        });
        return false;
      }
      
      // Check if the user has enough wallet balance
      if ((currentUser.walletBalance || 0) < amount) {
        toast({
          title: "Insufficient Funds",
          description: `You need ${formatDollarAmount(amount)} to use this shame action.`,
          variant: "destructive",
        });
        return false;
      }
      
      // Create the shame effect
      const duration = getShameEffectDuration(action) * 60 * 60 * 1000; // hours to ms
      const until = now + duration;
      
      // Update shamed users state
      setShamedUsers(prev => ({
        ...prev,
        [targetUserId.toString()]: {
          userId: targetUserId,
          username: targetUsername,
          action,
          timestamp: now,
          until,
          appliedBy: currentUser.username
        }
      }));
      
      // Set cooldown for this user pair
      const cooldownDuration = getShameEffectCooldown(action) * 60 * 60 * 1000; // hours to ms
      setCooldowns(prev => ({
        ...prev,
        [userCooldownKey]: now + cooldownDuration
      }));
      
      // Show success message
      toast({
        title: "Shame Applied!",
        description: `You've successfully shamed ${targetUsername} with ${action}!`,
      });
      
      // Return success
      return true;
    } catch (error) {
      console.error("Error applying shame effect:", error);
      toast({
        title: "Action Failed",
        description: "There was an error applying the shame effect.",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  // Check if a user is currently shamed
  const isUserShamed = (userId: string | number): { isShamed: boolean; action?: ShameAction; until?: number } => {
    const now = Date.now();
    const userShame = shamedUsers[userId.toString()];
    
    if (userShame && userShame.until > now) {
      return { isShamed: true, action: userShame.action, until: userShame.until };
    }
    
    return { isShamed: false };
  };
  
  // Check if a user is on cooldown
  const isUserOnCooldown = (sourceUserId: string | number, targetUserId: string | number): boolean => {
    const userCooldownKey = `${sourceUserId}-${targetUserId}`;
    const cooldownUntil = cooldowns[userCooldownKey] || 0;
    return Date.now() < cooldownUntil;
  };
  
  // Get shame effect duration in hours
  const getShameEffectDuration = (action: ShameAction): number => {
    switch (action) {
      case 'tomatoes':
        return 12;
      case 'eggs':
        return 24;
      case 'stocks':
        return 48;
      case 'ridicule':
        return 6;
      case 'humiliate':
        return 36;
      case 'expose':
        return 72;
      case 'mock':
        return 8;
      default:
        return 24;
    }
  };
  
  // Get shame effect cooldown in hours
  const getShameEffectCooldown = (action: ShameAction): number => {
    switch (action) {
      case 'tomatoes':
        return 6;
      case 'eggs':
        return 12;
      case 'stocks':
        return 24;
      case 'ridicule':
        return 3;
      case 'humiliate':
        return 18;
      case 'expose':
        return 36;
      case 'mock':
        return 4;
      default:
        return 12;
    }
  };
  
  // Get shame count for a user
  const getUserShameCount = (userId: string | number): number => {
    return Object.values(shamedUsers).filter(shame => 
      shame.userId.toString() === userId.toString()
    ).length;
  };
  
  return {
    loading,
    applyShameEffect,
    isUserShamed,
    isUserOnCooldown,
    getUserShameCount,
    shamedUsers
  };
};

export default useShameEffect;
