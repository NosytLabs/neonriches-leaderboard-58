
import { useState } from 'react';
import { PremiumSoundPackDetails } from '@/types/sound-types';

export function usePremiumSounds() {
  const [soundPacks, setSoundPacks] = useState<PremiumSoundPackDetails[]>([
    {
      id: 'royal',
      name: 'Royal Court',
      description: 'Elegant, regal sound effects fit for royalty',
      price: 19.99,
      icon: 'crown',
      preview: '/images/sound-packs/royal-preview.jpg',
      previewSound: 'royal_preview',
      sounds: ['royal_bell', 'royal_fanfare', 'royal_announcement', 'royal_success'],
      features: ['4 exclusive royal sounds', 'Premium quality audio', 'Court ambience'],
      enabled: false
    },
    {
      id: 'epic',
      name: 'Epic Adventure',
      description: 'Dramatic, cinematic sound effects for an epic experience',
      price: 14.99,
      icon: 'sword',
      preview: '/images/sound-packs/epic-preview.jpg',
      previewSound: 'epic_preview',
      sounds: ['epic_victory', 'epic_defeat', 'epic_discovery', 'epic_challenge'],
      features: ['4 cinematic sound effects', 'Orchestral quality', 'Dramatic impact'],
      enabled: false
    },
    {
      id: 'minimal',
      name: 'Minimalist',
      description: 'Clean, subtle sound effects for a distraction-free experience',
      price: 9.99,
      icon: 'circle',
      preview: '/images/sound-packs/minimal-preview.jpg',
      previewSound: 'minimal_preview',
      sounds: ['minimal_notification', 'minimal_success', 'minimal_alert', 'minimal_action'],
      features: ['4 subtle sound effects', 'Distraction-free', 'Clear and concise'],
      enabled: false
    }
  ]);

  const setPremiumSoundPackEnabled = (packId: string, enabled: boolean) => {
    setSoundPacks(currentPacks => 
      currentPacks.map(pack => 
        pack.id === packId ? { ...pack, enabled } : pack
      )
    );
  };

  return {
    soundPacks,
    setPremiumSoundPackEnabled
  };
}
