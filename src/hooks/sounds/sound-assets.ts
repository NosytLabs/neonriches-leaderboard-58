
import { SoundCategoryEnum, SoundMap } from './types';

// Core sounds that load immediately
export const coreSounds: SoundMap = {
  [SoundCategoryEnum.notification]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3',
    description: 'Soft notification',
    volume: 0.2
  },
  [SoundCategoryEnum.purchase]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3',
    description: 'Purchase confirmation',
    volume: 0.3
  },
  [SoundCategoryEnum.royalAnnouncement]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-fairy-arcade-sparkle-866.mp3',
    description: 'Royal announcement chime',
    volume: 0.2
  },
  [SoundCategoryEnum.error]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-alert-quick-chime-766.mp3',
    description: 'Error notification',
    volume: 0.2
  },
  [SoundCategoryEnum.success]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3',
    description: 'Success notification',
    volume: 0.2
  }
};

// Additional sounds loaded on demand
export const additionalSounds: SoundMap = {
  [SoundCategoryEnum.shame]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-cartoon-toy-whistle-616.mp3',
    description: 'Playful shame whistle',
    volume: 0.4
  },
  [SoundCategoryEnum.reward]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-coins-handling-1939.mp3',
    description: 'Coins dropping',
    volume: 0.3
  },
  [SoundCategoryEnum.rankUp]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3',
    description: 'Ascending rank notification',
    volume: 0.3
  },
  [SoundCategoryEnum.rankDown]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-losing-bleeps-2026.mp3',
    description: 'Descending rank notification',
    volume: 0.3
  },
  [SoundCategoryEnum.potion]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3',
    description: 'Magical potion or effect',
    volume: 0.3
  },
  [SoundCategoryEnum.swordClash]: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-sword-slides-2793.mp3',
    description: 'Sword draw or clash',
    volume: 0.3
  }
};

// Get sound info from either core or additional sounds
export const getSoundInfo = (type: string): SoundMap[string] | undefined => {
  if (type in coreSounds) {
    return coreSounds[type];
  } else if (type in additionalSounds) {
    return additionalSounds[type];
  }
  console.warn(`Sound type "${type}" not found in any sound collection`);
  return undefined;
};

// Helper to check if a sound type exists
export const soundExists = (type: string): boolean => {
  return type in coreSounds || type in additionalSounds;
};

// Get all available sound types
export const getAllSoundTypes = (): string[] => {
  return [...Object.keys(coreSounds), ...Object.keys(additionalSounds)];
};
