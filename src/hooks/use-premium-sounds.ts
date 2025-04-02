import { useState, useEffect } from 'react';
import { PremiumSoundPackDetails } from '@/types/sound-types';
import { useToast } from './use-toast';

export const usePremiumSounds = () => {
  const [premiumPacks, setPremiumPacks] = useState<PremiumSoundPackDetails[]>([
    {
      id: 'royal-pack',
      name: 'Royal Sound Pack',
      description: 'Elevate your experience with regal notification sounds',
      price: 75,
      icon: 'crown',
      preview: '/images/sound-packs/royal-preview.png',
      previewSound: 'royal',
      sounds: ['royal-notification', 'royal-success', 'royal-error'],
      features: ['3 premium royal sounds', 'Gold crown sound icon', 'Exclusive to royalty'],
      enabled: false
    },
    {
      id: 'gaming-pack',
      name: 'Gaming Sound Pack',
      description: 'Classic arcade and gaming sounds for notifications',
      price: 50,
      icon: 'gamepad',
      preview: '/images/sound-packs/gaming-preview.png',
      previewSound: 'levelUp',
      sounds: ['level-up', 'game-over', 'power-up'],
      features: ['5 retro gaming sounds', 'Nostalgic 8-bit tones', 'Configurable volume'],
      enabled: false
    },
    {
      id: 'nature-pack',
      name: 'Nature Sound Pack',
      description: 'Serene and calming natural sounds for a peaceful experience',
      price: 40,
      icon: 'leaf',
      preview: '/images/sound-packs/nature-preview.png',
      previewSound: 'chime',
      sounds: ['gentle-stream', 'forest-birds', 'ocean-waves'],
      features: ['4 calming nature sounds', 'Recorded in high definition', 'Perfect for focus'],
      enabled: false
    }
  ]);
  
  const { toast } = useToast();
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ownedPacks, setOwnedPacks] = useState<string[]>([]);
  
  useEffect(() => {
    // Load owned packs from localStorage or API
    const loadOwnedPacks = async () => {
      try {
        const savedPacks = localStorage.getItem('ownedSoundPacks');
        if (savedPacks) {
          const packIds = JSON.parse(savedPacks);
          setOwnedPacks(packIds);
          
          // Update premium packs to show which are enabled
          setPremiumPacks(prevPacks => 
            prevPacks.map(pack => ({
              ...pack,
              enabled: packIds.includes(pack.id)
            }))
          );
        }
      } catch (error) {
        console.error('Error loading owned sound packs:', error);
      }
    };
    
    loadOwnedPacks();
  }, []);
  
  const purchaseSoundPack = async (packId: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Add to owned packs
      const updatedOwnedPacks = [...ownedPacks, packId];
      setOwnedPacks(updatedOwnedPacks);
      
      // Save to localStorage
      localStorage.setItem('ownedSoundPacks', JSON.stringify(updatedOwnedPacks));
      
      // Update premium packs
      setPremiumPacks(prevPacks => 
        prevPacks.map(pack => ({
          ...pack,
          enabled: pack.id === packId ? true : pack.enabled
        }))
      );
      
      toast({
        title: "Sound Pack Purchased",
        description: "Your new sound pack is now available to use.",
      });
      
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Error purchasing sound pack:', error);
      toast({
        title: "Purchase Failed",
        description: "There was an error purchasing the sound pack.",
        variant: "destructive"
      });
      
      setIsLoading(false);
      return false;
    }
  };
  
  const activateSoundPack = async (packId: string): Promise<boolean> => {
    try {
      // Check if pack is owned
      if (!ownedPacks.includes(packId)) {
        toast({
          title: "Pack Not Owned",
          description: "You need to purchase this sound pack first.",
          variant: "destructive"
        });
        return false;
      }
      
      // Save active pack to localStorage
      localStorage.setItem('activeSoundPack', packId);
      
      toast({
        title: "Sound Pack Activated",
        description: "Your selected sound pack is now active.",
      });
      
      return true;
    } catch (error) {
      console.error('Error activating sound pack:', error);
      return false;
    }
  };
  
  const getPackById = (packId: string): PremiumSoundPackDetails | undefined => {
    return premiumPacks.find(pack => pack.id === packId);
  };
  
  const isPackOwned = (packId: string): boolean => {
    return ownedPacks.includes(packId);
  };

  return {
    premiumPacks,
    selectedPack,
    setSelectedPack,
    isLoading,
    ownedPacks,
    purchaseSoundPack,
    activateSoundPack,
    getPackById,
    isPackOwned
  };
};

export default usePremiumSounds;
