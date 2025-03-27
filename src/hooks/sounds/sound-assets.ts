
import { SoundMap } from './types';

// Core sounds that load immediately
export const coreSounds: SoundMap = {
  notification: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3',
    description: 'Soft notification',
    volume: 0.2
  },
  purchase: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3',
    description: 'Purchase confirmation',
    volume: 0.3
  },
  royalAnnouncement: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-fairy-arcade-sparkle-866.mp3',
    description: 'Royal announcement chime',
    volume: 0.2
  }
};

// Additional sounds loaded on demand
export const additionalSounds: SoundMap = {
  shame: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-cartoon-toy-whistle-616.mp3',
    description: 'Playful shame whistle',
    volume: 0.4
  },
  reward: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-coins-handling-1939.mp3',
    description: 'Coins dropping',
    volume: 0.3
  },
  rankUp: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3',
    description: 'Ascending rank notification',
    volume: 0.3
  },
  rankDown: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-losing-bleeps-2026.mp3',
    description: 'Descending rank notification',
    volume: 0.3
  },
  potion: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3',
    description: 'Magical potion or effect',
    volume: 0.3
  },
  swordClash: {
    src: 'https://assets.mixkit.co/sfx/preview/mixkit-sword-slides-2793.mp3',
    description: 'Sword draw or clash',
    volume: 0.3
  }
};

// Get sound info from either core or additional sounds
export const getSoundInfo = (type: string): SoundInfo | undefined => {
  return coreSounds[type] || additionalSounds[type];
};
