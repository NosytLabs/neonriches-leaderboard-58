
const SOUND_EFFECTS = {
  shame: '/assets/sounds/crowd-laugh.mp3',
  reward: '/assets/sounds/coins-drop.mp3',
  notification: '/assets/sounds/scroll-unfurl.mp3',
  rankUp: '/assets/sounds/trumpet-fanfare.mp3',
  rankDown: '/assets/sounds/crowd-boo.mp3'
} as const;

export const useNotificationSounds = () => {
  const playSound = (type: keyof typeof SOUND_EFFECTS, volume = 0.3) => {
    const audio = new Audio(SOUND_EFFECTS[type]);
    audio.volume = volume;
    audio.play().catch(e => console.log('Audio playback error:', e));
  };

  return { playSound };
};

export default useNotificationSounds;
