
import { useState, useCallback, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { PremiumSoundPack, PremiumSoundPackDetails, SoundType } from './sounds/types';
import { premiumSoundPacks, premiumSoundAssets, premiumVolumePresets } from './sounds/premium-sound-assets';
import useNotificationSounds from './use-notification-sounds';

interface PremiumSoundsState {
  activePack: PremiumSoundPack | null;
  ownedPacks: PremiumSoundPack[];
  availablePacks: PremiumSoundPackDetails[];
  isPremiumActive: boolean;
}

const usePremiumSounds = () => {
  const { toast } = useToast();
  const { playSound, preloadSounds } = useNotificationSounds();
  const [premiumState, setPremiumState] = useState<PremiumSoundsState>({
    activePack: null,
    ownedPacks: [],
    availablePacks: premiumSoundPacks,
    isPremiumActive: false
  });
  
  // Load saved premium sound state
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('premium-sound-state');
      if (savedState) {
        setPremiumState(JSON.parse(savedState));
      }
    } catch (error) {
      console.error("Failed to load premium sound state:", error);
    }
  }, []);
  
  // Save state when it changes
  useEffect(() => {
    try {
      localStorage.setItem('premium-sound-state', JSON.stringify(premiumState));
    } catch (error) {
      console.error("Failed to save premium sound state:", error);
    }
  }, [premiumState]);
  
  // Purchase a sound pack
  const purchaseSoundPack = useCallback((packId: PremiumSoundPack) => {
    // In a real app, this would initiate a payment flow
    setPremiumState(prev => {
      const packIndex = prev.availablePacks.findIndex(pack => pack.id === packId);
      if (packIndex === -1) return prev;
      
      // Create a new array with the updated pack
      const updatedPacks = [...prev.availablePacks];
      updatedPacks[packIndex] = {
        ...updatedPacks[packIndex],
        isPurchased: true
      };
      
      // Add to owned packs if not already owned
      const ownedPacks = prev.ownedPacks.includes(packId) 
        ? prev.ownedPacks 
        : [...prev.ownedPacks, packId];
      
      return {
        ...prev,
        ownedPacks,
        availablePacks: updatedPacks,
        activePack: prev.activePack || packId,
        isPremiumActive: true
      };
    });
    
    // Show purchase confirmation
    toast({
      title: "Sound Pack Purchased",
      description: `You now own the ${packId.charAt(0).toUpperCase() + packId.slice(1)} sound pack!`,
      duration: 3000,
    });
    
    // Play a success sound
    playSound('success', 0.5);
    
    return true;
  }, [toast, playSound]);
  
  // Activate a sound pack
  const activateSoundPack = useCallback((packId: PremiumSoundPack | null) => {
    setPremiumState(prev => {
      // Check if pack is owned
      if (packId && !prev.ownedPacks.includes(packId)) {
        toast({
          title: "Sound Pack Not Owned",
          description: "You need to purchase this sound pack before activating it.",
          variant: "destructive",
          duration: 3000,
        });
        return prev;
      }
      
      return {
        ...prev,
        activePack: packId,
        isPremiumActive: !!packId
      };
    });
    
    // Play the pack's preview sound if activating
    if (packId) {
      const pack = premiumSoundPacks.find(p => p.id === packId);
      if (pack && pack.previewSound) {
        const soundToPlay = pack.previewSound as SoundType;
        playSound(soundToPlay, 0.4);
      }
    }
    
    return true;
  }, [toast, playSound]);
  
  // Preview a sound from a pack
  const previewPackSound = useCallback((packId: PremiumSoundPack, soundType?: SoundType) => {
    const pack = premiumSoundPacks.find(p => p.id === packId);
    if (!pack) return;
    
    // Play either the specified sound or the pack's default preview sound
    if (soundType) {
      playSound(soundType, 0.4);
    } else if (pack.previewSound) {
      playSound(pack.previewSound as SoundType, 0.4);
    }
  }, [playSound]);
  
  // Play a premium sound (will use active pack if available)
  const playPremiumSound = useCallback((soundType: SoundType, volumeMultiplier = 1.0) => {
    // If premium is not active, fall back to regular sounds
    if (!premiumState.isPremiumActive) {
      playSound(soundType, volumeMultiplier);
      return;
    }
    
    // Check if the active pack has this sound
    const activePack = premiumState.activePack;
    if (activePack) {
      const packDetails = premiumSoundPacks.find(p => p.id === activePack);
      if (packDetails && packDetails.sounds && packDetails.sounds.some(sound => sound === soundType)) {
        // This is where we'd play the premium version of the sound
        // For now, we'll just use the regular sound library with a volume boost
        const premiumVolume = (premiumVolumePresets[soundType] || 0.5) * volumeMultiplier;
        playSound(soundType, premiumVolume);
        return;
      }
    }
    
    // Fall back to regular sound if not in the active pack
    playSound(soundType, volumeMultiplier);
  }, [premiumState, playSound]);

  return {
    premiumState,
    purchaseSoundPack,
    activateSoundPack,
    previewPackSound,
    playPremiumSound
  };
};

export default usePremiumSounds;
