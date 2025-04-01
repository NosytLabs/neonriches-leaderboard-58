
import { useCallback } from 'react';
import { CosmeticItem, UserCosmetics } from '@/types/cosmetics';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useSound } from '@/hooks/sounds/use-sound';

export const useCosmeticPurchase = () => {
  const { user, updateUser } = useAuth();
  const { toast } = useToast();
  const { play } = useSound();
  
  const purchaseCosmetic = useCallback((item: CosmeticItem) => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'You must be logged in to purchase cosmetics',
        variant: 'destructive'
      });
      return false;
    }
    
    // Check if user has enough funds
    if ((user.walletBalance || 0) < item.price) {
      toast({
        title: 'Insufficient Funds',
        description: `You need ${item.price} coins to purchase this item`,
        variant: 'destructive'
      });
      play('error');
      return false;
    }
    
    // Apply purchase - this is a demo so we'll just mock this
    // In a real app, this would involve a server call
    
    const newBalance = (user.walletBalance || 0) - item.price;
    
    // Initialize user's cosmetics if they don't exist
    const currentCosmetics: UserCosmetics = user.cosmetics || {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    };

    // Get the correct category property name
    const category = item.category;
    
    // Get the current items array or initialize an empty array if it doesn't exist
    const currentItems = (currentCosmetics[category as keyof UserCosmetics] as string[]) || [];
    
    // Update the appropriate category with type assertion
    const updatedCosmetics: UserCosmetics = {
      ...currentCosmetics,
      [category]: [...currentItems, item.id]
    };
    
    updateUser({
      ...user,
      walletBalance: newBalance,
      cosmetics: updatedCosmetics
    });
    
    // Play a success sound
    play('purchase');
    
    // Show a toast
    toast({
      title: 'Purchase Successful',
      description: `You've purchased ${item.name}!`,
      variant: 'success'
    });
    
    return true;
  }, [user, toast, play, updateUser]);
  
  return { purchaseCosmetic };
};

export default useCosmeticPurchase;
