
// Define sound effect paths with consistent medieval themes
const SOUND_EFFECTS = {
  shame: 'https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3', // Medieval crowd laugh
  reward: 'https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3', // Coins dropping
  notification: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', // Scroll unfolding/paper sound
  rankUp: 'https://assets.mixkit.co/active_storage/sfx/1993/1993-preview.mp3', // Trumpet fanfare
  rankDown: 'https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3', // Crowd booing
  potion: 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3', // Magic potion effect
  swordClash: 'https://assets.mixkit.co/active_storage/sfx/981/981-preview.mp3', // Sword clash
  royalAnnouncement: 'https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3', // Royal horn announcement
  purchase: 'https://assets.mixkit.co/active_storage/sfx/156/156-preview.mp3' // Cash register
} as const;

// Sound player hook
export const useNotificationSounds = () => {
  // Track loading state for sounds
  const soundCache: Record<string, HTMLAudioElement> = {};

  // Preload a sound
  const preloadSound = (type: keyof typeof SOUND_EFFECTS) => {
    if (!soundCache[type]) {
      soundCache[type] = new Audio(SOUND_EFFECTS[type]);
      // Start loading the audio file
      soundCache[type].load();
    }
  };

  // Preload all sounds
  const preloadAllSounds = () => {
    Object.keys(SOUND_EFFECTS).forEach(type => {
      preloadSound(type as keyof typeof SOUND_EFFECTS);
    });
  };

  // Play a sound effect
  const playSound = (type: keyof typeof SOUND_EFFECTS, volume = 0.3) => {
    if (!soundCache[type]) {
      preloadSound(type);
    }
    
    const audio = soundCache[type];
    audio.volume = volume;
    
    // Reset the audio to the beginning if it's already playing
    audio.currentTime = 0;
    
    audio.play().catch(e => {
      console.log('Audio playback error:', e);
      // If playback fails, try creating a new audio instance
      soundCache[type] = new Audio(SOUND_EFFECTS[type]);
      soundCache[type].load();
    });
  };

  return { playSound, preloadSound, preloadAllSounds };
};

export default useNotificationSounds;
