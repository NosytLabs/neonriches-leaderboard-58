
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { SoundType } from '@/hooks/sounds/types';
import { premiumSoundPacks } from '@/hooks/sounds/premium-sound-assets';
import { PremiumSoundPackDetails } from '@/hooks/sounds/types';

// Helper function to adapt premium sound packs to the required interface
const adaptSoundPacks = (): PremiumSoundPackDetails[] => {
  return premiumSoundPacks.map(pack => ({
    id: pack.id,
    name: pack.name,
    description: pack.description,
    price: pack.price,
    icon: pack.icon || `/images/sound-packs/${pack.id}.png`,
    preview: pack.preview || `/sounds/previews/${pack.id}-preview.mp3`,
    previewSound: pack.previewSound,
    sounds: pack.sounds,
    features: pack.features
  }));
};

export const usePremiumSounds = () => {
  const [soundPacks, setSoundPacks] = useState<PremiumSoundPackDetails[]>(adaptSoundPacks());
  const [purchasedPacks, setPurchasedPacks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const fetchPurchasedSoundPacks = async () => {
      setIsLoading(true);
      try {
        // Simulate fetching purchased packs
        await new Promise(resolve => setTimeout(resolve, 500));
        const userPacks = user?.purchasedFeatures?.filter(f => f.startsWith('sound_pack_')) || [];
        
        if (userPacks.length > 0) {
          setPurchasedPacks(userPacks.map(p => p.replace('sound_pack_', '')));
          
          // Update sound packs with purchase status
          const updatedPacks = soundPacks.map(pack => ({
            ...pack,
            isPurchased: userPacks.includes(`sound_pack_${pack.id}`)
          }));
          
          setSoundPacks(updatedPacks as PremiumSoundPackDetails[]);
        }
      } catch (error) {
        console.error('Error fetching premium sound packs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchPurchasedSoundPacks();
    }
  }, [user]);

  const purchaseSoundPack = useCallback(async (packId: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Simulate API call for purchasing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update local state
      setPurchasedPacks(prev => [...prev, packId]);
      
      // Show success message
      toast({
        title: "Purchase Successful",
        description: "You have successfully purchased the sound pack.",
        variant: "success"
      });
      
      return true;
    } catch (error) {
      console.error('Error purchasing sound pack:', error);
      
      toast({
        title: "Purchase Failed",
        description: "There was an error processing your purchase. Please try again.",
        variant: "destructive"
      });
      
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  return {
    soundPacks,
    purchasedPacks,
    isLoading,
    purchaseSoundPack,
    isPurchased: (packId: string) => purchasedPacks.includes(packId)
  };
};

export default usePremiumSounds;
