
import { useState } from 'react';
import { CosmeticItem } from '@/types/cosmetics';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useSound } from '@/hooks/sounds/use-sound';

export const useCosmeticPurchase = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user, updateUser } = useAuth();
  const { play } = useSound();

  const purchaseCosmetic = async (item: CosmeticItem) => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'You must be logged in to purchase cosmetics.',
        variant: 'destructive'
      });
      return { success: false, error: 'Not authenticated' };
    }
    
    setLoading(true);
    
    try {
      // Simulate purchase process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user has enough balance
      if (!user.walletBalance || user.walletBalance < item.price) {
        toast({
          title: 'Insufficient Funds',
          description: `You need ${item.price} coins to purchase this item.`,
          variant: 'destructive'
        });
        return { success: false, error: 'Insufficient funds' };
      }
      
      // Success! Play sound and update user state
      play('purchase');
      
      // Update user cosmetics
      const category = `unlocked${item.category.charAt(0).toUpperCase() + item.category.slice(1)}s`;
      const updatedUser = {
        ...user,
        walletBalance: user.walletBalance - item.price,
        cosmetics: {
          ...user.cosmetics,
          [category]: [...(user.cosmetics?.[category] || []), item.id]
        }
      };
      
      // Update global user state
      await updateUser(updatedUser);
      
      toast({
        title: 'Purchase Successful',
        description: `You have purchased ${item.name}!`,
        variant: 'success'
      });
      
      return { success: true, item };
    } catch (error) {
      console.error('Error purchasing cosmetic:', error);
      toast({
        title: 'Purchase Failed',
        description: 'There was an error processing your purchase.',
        variant: 'destructive'
      });
      return { success: false, error: 'Purchase failed' };
    } finally {
      setLoading(false);
    }
  };
  
  return { purchaseCosmetic, loading };
};

export default useCosmeticPurchase;
