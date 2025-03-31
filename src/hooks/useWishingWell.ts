
import { useState, useCallback } from 'react';
import { useAuth } from '@/contexts';

// Define types for the wishing well functionality
type WishResult = 'win' | 'pending' | 'lose';

export interface WishResultDetails {
  status: WishResult;
  title?: string;
  message?: string;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
  rewardAmount?: number;
  itemId?: string;
  itemCategory?: string;
}

export interface UseWishingWellReturn {
  result: WishResultDetails | null;
  isWishing: boolean;
  wishError: string | null;
  pullCount: number;
  canWish: boolean;
  makeWish: (amount: number) => Promise<boolean>;
  claimReward: () => Promise<boolean>;
  resetWish: () => void;
}

const useWishingWell = (): UseWishingWellReturn => {
  const [result, setResult] = useState<WishResultDetails | null>(null);
  const [isWishing, setIsWishing] = useState(false);
  const [wishError, setWishError] = useState<string | null>(null);
  const [pullCount, setPullCount] = useState(0);
  const [canWish, setCanWish] = useState(true);
  const { user, updateUser } = useAuth();

  const makeWish = useCallback(async (amount: number) => {
    if (!user) {
      setWishError('You must be logged in to make a wish');
      return false;
    }

    if (amount <= 0) {
      setWishError('Wish amount must be greater than 0');
      return false;
    }

    if (amount > (user.walletBalance || 0)) {
      setWishError('Not enough funds');
      return false;
    }

    setIsWishing(true);
    setWishError(null);

    try {
      // Simulate API call for making a wish
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Determine result based on amount for consistency
      // Higher amounts have better rewards
      let wishResult: WishResultDetails;
      
      if (amount >= 75) { 
        wishResult = {
          status: 'win',
          title: 'Legendary Prize!',
          message: 'You won a legendary royal title!',
          rarity: 'legendary',
          rewardAmount: amount * 5,
          itemId: 'royal-title-legendary',
          itemCategory: 'titles'
        };
      } else if (amount >= 50) {
        wishResult = {
          status: 'win',
          title: 'Epic Prize!',
          message: 'You won an epic profile border!',
          rarity: 'epic',
          rewardAmount: amount * 3,
          itemId: 'border-epic-gold',
          itemCategory: 'borders'
        };
      } else if (amount >= 25) {
        wishResult = {
          status: 'win',
          title: 'Rare Prize!',
          message: 'You won a rare profile effect!',
          rarity: 'rare',
          rewardAmount: amount * 2,
          itemId: 'effect-rare-sparkle',
          itemCategory: 'effects'
        };
      } else if (amount >= 10) {
        wishResult = {
          status: 'win',
          title: 'Common Prize!',
          message: 'You won a common emoji!',
          rarity: 'common',
          rewardAmount: amount * 1.5,
          itemId: 'emoji-common-crown',
          itemCategory: 'emojis'
        };
      } else {
        wishResult = {
          status: 'lose',
          title: 'No luck this time',
          message: 'Your coins vanished into the well...',
        };
      }
      
      setResult(wishResult);
      setPullCount(prev => prev + 1);
      
      // Deduct the amount from the user's balance
      if (user && updateUser) {
        const newBalance = (user.walletBalance || 0) - amount;
        await updateUser({ walletBalance: newBalance });
      }
      
      return true;
    } catch (error) {
      console.error('Error making wish:', error);
      setWishError(error instanceof Error ? error.message : 'Failed to make a wish');
      return false;
    } finally {
      setIsWishing(false);
    }
  }, [user, updateUser]);

  const claimReward = useCallback(async () => {
    if (!result || result.status !== 'win') {
      setWishError('No reward to claim');
      return false;
    }

    try {
      // Simulate API call for claiming the reward
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Add the reward to the user's balance or inventory
      if (user && updateUser && result.rewardAmount) {
        const newBalance = (user.walletBalance || 0) + result.rewardAmount;
        await updateUser({ walletBalance: newBalance });
      }
      
      // Reset the result
      setResult(null);
      setCanWish(false);
      
      // Cooldown period before allowing another wish
      setTimeout(() => setCanWish(true), 5000);
      
      return true;
    } catch (error) {
      console.error('Error claiming reward:', error);
      setWishError(error instanceof Error ? error.message : 'Failed to claim reward');
      return false;
    }
  }, [result, user, updateUser]);

  const resetWish = useCallback(() => {
    setResult(null);
    setWishError(null);
    setCanWish(true);
  }, []);

  return {
    result,
    isWishing,
    wishError,
    pullCount,
    canWish,
    makeWish,
    claimReward,
    resetWish,
  };
};

export default useWishingWell;
