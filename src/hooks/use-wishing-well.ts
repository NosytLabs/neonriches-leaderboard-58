
import { useState } from 'react';
import { useToast } from './use-toast';
import { useAuth } from './useAuth';

interface WishingWellHookResult {
  amount: number;
  setAmount: (amount: number) => void;
  isSubmitting: boolean;
  handleSubmit: () => Promise<void>;
}

const useWishingWell = (): WishingWellHookResult => {
  const [amount, setAmount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();
  const { user, updateUserProfile } = useAuth();
  
  // Import the sound hook properly
  const playSound = () => {
    // Simplified implementation - this would be replaced with actual sound playback
    console.log('Playing coin drop sound');
  };

  const handleSubmit = async (): Promise<void> => {
    if (!user) {
      toast({
        title: 'Not authenticated',
        description: 'You must be logged in to use the Wishing Well.',
        variant: 'destructive',
      });
      return;
    }

    if (amount <= 0) {
      toast({
        title: 'Invalid amount',
        description: 'Please enter a valid amount greater than zero.',
        variant: 'destructive',
      });
      return;
    }

    if (amount > (user?.walletBalance || 0)) {
      toast({
        title: 'Insufficient funds',
        description: 'You do not have enough funds in your wallet.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate a successful transaction
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update the user's wallet balance
      const newBalance = (user.walletBalance || 0) - amount;
      const updatedUser = { ...user, walletBalance: newBalance };

      // Optimistically update the user's profile
      const success = await updateUserProfile({ walletBalance: newBalance });

      if (success) {
        toast({
          title: 'Wishing Well Success',
          description: `You threw ${amount} coins into the Wishing Well!`,
        });
        playSound();
      } else {
        toast({
          title: 'Wishing Well Error',
          description: `Failed to update your profile. Please try again.`,
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      console.error('Wishing Well error:', error);
      toast({
        title: 'Wishing Well Error',
        description: error.message || 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    amount,
    setAmount: (value: number) => setAmount(value),
    isSubmitting,
    handleSubmit,
  };
};

export default useWishingWell;
