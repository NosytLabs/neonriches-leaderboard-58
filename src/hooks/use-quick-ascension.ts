
import { useState } from 'react';
import { useToast } from './use-toast';
import { useAuth } from './useAuth';
import { useSound } from './sounds/use-sound';
import { formatCurrency } from '@/utils/formatters';

interface AscensionResult {
  success: boolean;
  message: string;
  newBalance?: number;
}

const useQuickAscension = (): [(amount: number) => Promise<AscensionResult>, boolean] => {
  const { user, updateUserProfile } = useAuth();
  const { toast } = useToast();
  const [isAscending, setIsAscending] = useState(false);
  const sound = useSound();

  const quickAscend = async (amount: number): Promise<AscensionResult> => {
    if (!user) {
      toast({
        title: 'Not Authenticated',
        description: 'You must be logged in to ascend.',
        variant: 'destructive',
      });
      return { success: false, message: 'Not authenticated' };
    }

    if (isAscending) {
      toast({
        title: 'Already Ascending',
        description: 'Please wait for the current ascension to complete.',
      });
      return { success: false, message: 'Already ascending' };
    }

    if (amount <= 0) {
      toast({
        title: 'Invalid Amount',
        description: 'Please enter a valid amount to ascend.',
        variant: 'destructive',
      });
      return { success: false, message: 'Invalid amount' };
    }

    if (user.walletBalance === undefined || user.walletBalance < amount) {
      toast({
        title: 'Insufficient Funds',
        description: `You do not have enough funds. Your balance is ${formatCurrency(user.walletBalance || 0)}.`,
        variant: 'destructive',
      });
      return { success: false, message: 'Insufficient funds' };
    }

    setIsAscending(true);
    try {
      // Optimistic update
      const newBalance = user.walletBalance - amount;

      // Play sound
      sound.playSound('coinDrop', { volume: 0.5 });

      // Update user profile
      const success = await updateUserProfile({ walletBalance: newBalance });

      if (!success) {
        toast({
          title: 'Ascension Failed',
          description: 'There was an error during the ascension process.',
          variant: 'destructive',
        });
        sound.playSound('error', { volume: 0.5 });
        return { success: false, message: 'Ascension failed' };
      }

      toast({
        title: 'Ascension Successful',
        description: `You have ascended for ${formatCurrency(amount)}!`,
      });

      sound.playSound('success', { volume: 0.5 });

      return { success: true, message: 'Ascension successful', newBalance: newBalance };
    } catch (error: any) {
      console.error('Ascension error:', error);
      toast({
        title: 'Ascension Failed',
        description: error.message || 'Failed to ascend. Please try again.',
        variant: 'destructive',
      });
      sound.playSound('error', { volume: 0.5 });
      return { success: false, message: 'Ascension failed' };
    } finally {
      setIsAscending(false);
    }
  };

  return [quickAscend, isAscending];
};

export default useQuickAscension;
