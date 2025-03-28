
import { useState, useEffect } from 'react';
import { premiumSoundPacks, premiumSoundAssets, premiumVolumePresets } from './sounds/premium-sound-assets';
import { PremiumSoundPackDetails, SoundType } from './sounds/types';
import { useToast } from './use-toast';

// Create a safe cast function to convert string to SoundType when needed
const asSoundType = (sound: string): SoundType => {
  // This cast is safe because we control the values in the premium sound packs
  return sound as SoundType;
};

export const usePremiumSounds = () => {
  const [soundPacks, setSoundPacks] = useState<PremiumSoundPackDetails[]>(premiumSoundPacks);
  const [purchasedPacks, setPurchasedPacks] = useState<string[]>([]);
  const [audioElements, setAudioElements] = useState<Record<string, HTMLAudioElement>>({});
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Load premium sound packs from localStorage on mount
  useEffect(() => {
    const loadPurchasedPacks = () => {
      try {
        const savedPacks = localStorage.getItem('purchased_sound_packs');
        if (savedPacks) {
          const parsedPacks = JSON.parse(savedPacks);
          setPurchasedPacks(parsedPacks);
          
          // Update the isPurchased flag for each pack
          const updatedPacks = premiumSoundPacks.map(pack => ({
            ...pack,
            isPurchased: parsedPacks.includes(pack.id)
          }));
          
          setSoundPacks(updatedPacks);
        }
      } catch (error) {
        console.error('Error loading purchased sound packs:', error);
      }
      
      setLoading(false);
    };
    
    loadPurchasedPacks();
  }, []);

  // Preload sound files for purchased packs
  useEffect(() => {
    const preloadSounds = async () => {
      const newAudioElements: Record<string, HTMLAudioElement> = {};
      
      for (const packId of purchasedPacks) {
        const pack = soundPacks.find(p => p.id === packId);
        if (pack && pack.sounds) {
          for (const soundName of pack.sounds) {
            const assetKey = `${packId}.${soundName}`;
            const assetPath = premiumSoundAssets[assetKey];
            
            if (assetPath) {
              const audio = new Audio(assetPath);
              await audio.load();
              newAudioElements[assetKey] = audio;
            }
          }
        }
      }
      
      setAudioElements(newAudioElements);
    };
    
    if (purchasedPacks.length > 0) {
      preloadSounds();
    }
  }, [purchasedPacks, soundPacks]);

  // Play a premium sound if available
  const playPremiumSound = (sound: SoundType, packId?: string) => {
    try {
      // If packId is provided, try to play from that pack
      if (packId && purchasedPacks.includes(packId)) {
        const assetKey = `${packId}.${sound}`;
        const audio = audioElements[assetKey];
        
        if (audio) {
          // Set volume based on presets or default
          const volume = premiumVolumePresets[asSoundType(sound)] || 0.5;
          audio.volume = volume;
          
          // Reset and play
          audio.currentTime = 0;
          return audio.play();
        }
      }
      
      // If packId not provided or sound not found, try all purchased packs
      for (const id of purchasedPacks) {
        const assetKey = `${id}.${sound}`;
        const audio = audioElements[assetKey];
        
        if (audio) {
          // Set volume based on presets or default
          const volume = premiumVolumePresets[asSoundType(sound)] || 0.5;
          audio.volume = volume;
          
          // Reset and play
          audio.currentTime = 0;
          return audio.play();
        }
      }
      
      return Promise.resolve(); // Return resolved promise if no sound played
    } catch (error) {
      console.error('Error playing premium sound:', error);
      return Promise.resolve(); // Return resolved promise on error
    }
  };

  // Purchase a sound pack
  const purchaseSoundPack = (packId: string): boolean => {
    try {
      if (purchasedPacks.indexOf(packId) !== -1) {
        toast({
          title: "Already Purchased",
          description: "You already own this sound pack.",
          variant: "default"
        });
        return false;
      }
      
      // Add to purchased packs
      const newPurchasedPacks = [...purchasedPacks, packId];
      setPurchasedPacks(newPurchasedPacks);
      
      // Update localStorage
      localStorage.setItem('purchased_sound_packs', JSON.stringify(newPurchasedPacks));
      
      // Update the packs state
      const updatedPacks = soundPacks.map(pack => ({
        ...pack,
        isPurchased: newPurchasedPacks.includes(pack.id)
      }));
      
      setSoundPacks(updatedPacks);
      
      toast({
        title: "Purchase Successful",
        description: "Your new sound pack is ready to use!",
        variant: "success"
      });
      
      return true;
    } catch (error) {
      console.error('Error purchasing sound pack:', error);
      
      toast({
        title: "Purchase Failed",
        description: "There was an error processing your purchase.",
        variant: "destructive"
      });
      
      return false;
    }
  };

  // Preview a sound from a pack
  const previewSoundPack = (packId: string) => {
    const pack = soundPacks.find(p => p.id === packId);
    if (pack && pack.previewSound) {
      const assetKey = `${packId}.${pack.previewSound}`;
      const assetPath = premiumSoundAssets[assetKey];
      
      if (assetPath) {
        const audio = new Audio(assetPath);
        audio.volume = 0.5;
        audio.play();
      }
    }
  };

  return {
    soundPacks,
    purchasedPacks,
    loading,
    playPremiumSound,
    purchaseSoundPack,
    previewSoundPack
  };
};

export default usePremiumSounds;
