
// Fix the useCosmeticPurchase hook to work with updated sound API
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { CosmeticItem } from '@/types/cosmetics';

export const useCosmeticPurchase = () => {
  const [purchasing, setPurchasing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const sound = useSound();
  
  const purchaseCosmetic = useCallback(async (cosmeticId: string, price: number) => {
    setPurchasing(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful purchase
      sound.playSound('purchase'); // Use playSound instead of play
      
      toast({
        title: 'Purchase Successful',
        description: `You've successfully purchased the cosmetic item for ${price} coins!`,
        variant: 'success'
      });
      
      setPurchasing(false);
      return true;
    } catch (err) {
      setError('Failed to complete purchase. Please try again.');
      
      toast({
        title: 'Purchase Failed',
        description: 'There was an error processing your purchase. Please try again.',
        variant: 'destructive'
      });
      
      setPurchasing(false);
      return false;
    }
  }, [toast, sound]);
  
  return {
    purchaseCosmetic,
    purchasing,
    error
  };
};

export default useCosmeticPurchase;
