
// Modified implementation to fix the interface
import { useState, useCallback, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/sounds/use-sound';
import { recordTransaction } from '@/services/transactionService';

// Define the WishResult type to include properties that are being used
export type WishResult = 'win' | 'lose' | 'pending';

export interface UseWishingWellReturn {
  wishResult: WishResult;
  isWishing: boolean;
  makeWish: (wishAmount: number) => Promise<void>;
  hasWishAvailable: boolean;
  wishesRemaining: number;
  resetWish: () => void;
  wishError: string | null;
  pullCount: number;
  canWish: boolean;
}

const WISH_COST = 10;

const useWishingWell = (): UseWishingWellReturn => {
  const { user } = useAuth();
  const { toast } = useToast();
  const { play } = useSound();

  const [wishResult, setWishResult] = useState<WishResult>('pending');
  const [isWishing, setIsWishing] = useState(false);
  const [wishError, setWishError] = useState<string | null>(null);
  const [pullCount, setPullCount] = useState(0);
  const [canWish, setCanWish] = useState(true);

  const hasSufficientFunds = user && user.walletBalance !== undefined && user.walletBalance >= WISH_COST;
  const hasWishAvailable = canWish && hasSufficientFunds;
  const wishesRemaining = hasWishAvailable ? 1 : 0;

  const makeWish = useCallback(async (wishAmount: number) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to make a wish.",
        variant: "destructive"
      });
      return;
    }

    if (!hasWishAvailable) {
      toast({
        title: "Insufficient Funds",
        description: "You do not have enough funds in your wallet to make a wish.",
        variant: "destructive"
      });
      return;
    }

    setIsWishing(true);
    setWishError(null);

    try {
      const randomResult = Math.random();
      let result: WishResult;

      if (randomResult < 0.3) {
        result = 'win';
        play('reward', { volume: 0.5 });
        toast({
          title: "Your Wish Granted!",
          description: "Congratulations! You've received a special reward.",
        });
      } else {
        result = 'lose';
        play('shame', { volume: 0.4 });
        toast({
          title: "No Luck This Time",
          description: "Unfortunately, your wish was not granted. Better luck next time!",
          variant: "destructive"
        });
      }

      setWishResult(result);
      setPullCount(prevCount => prevCount + 1);
      setCanWish(false);

      await recordTransaction(
        user.id,
        wishAmount,
        'wish',
        `Made a wish at the Wishing Well`,
        {}
      );
    } catch (error: any) {
      console.error("Error making a wish:", error);
      setWishResult('lose');
      setWishError("Failed to make a wish. Please try again.");
      toast({
        title: "Wish Failed",
        description: "There was an error processing your wish. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsWishing(false);
    }
  }, [user, toast, play, hasWishAvailable]);

  const resetWish = useCallback(() => {
    setWishResult('pending');
    setIsWishing(false);
    setWishError(null);
    setCanWish(true);
  }, []);

  useEffect(() => {
    if (user) {
      setCanWish(user.walletBalance !== undefined && user.walletBalance >= WISH_COST);
    }
  }, [user]);

  return {
    wishResult,
    isWishing,
    makeWish,
    hasWishAvailable,
    wishesRemaining,
    resetWish,
    wishError,
    pullCount,
    canWish
  };
};

export default useWishingWell;
