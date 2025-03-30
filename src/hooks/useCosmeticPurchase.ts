
import { useCallback } from 'react';
import { CosmeticItem, UserCosmeticState } from '@/types/cosmetics';
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
    
    // Update user cosmetics
    const currentCosmetics = user.cosmetics || {
      unlockedBorders: [],
      unlockedColors: [],
      unlockedFonts: [],
      unlockedEmojis: [],
      unlockedTitles: [],
      unlockedBackgrounds: [],
      unlockedEffects: [],
      unlockedBadges: [],
      unlockedThemes: [],
      borders: [],
      colors: [],
      fonts: [],
      emojis: [],
      titles: [],
      backgrounds: [],
      effects: [],
      badges: [],
      themes: []
    };
    
    const unlockedKey = `unlocked${item.category.charAt(0).toUpperCase() + item.category.slice(1)}s` as keyof UserCosmeticState;
    const legacyKey = `${item.category}s` as keyof UserCosmeticState;
    
    const unlockedArray = [...(currentCosmetics[unlockedKey] as string[] || []), item.id];
    const legacyArray = [...(currentCosmetics[legacyKey] as string[] || []), item.id];
    
    const updatedCosmetics = {
      ...currentCosmetics,
      [unlockedKey]: unlockedArray,
      [legacyKey]: legacyArray
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
