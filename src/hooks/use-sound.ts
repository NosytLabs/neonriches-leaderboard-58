
// Mock implementation for sound hooks
export const useSound = () => {
  const soundMap = {
    click: 'click.mp3',
    success: 'success.mp3',
    error: 'error.mp3',
    coins: 'coins.mp3',
  };

  const playSound = (sound: keyof typeof soundMap) => {
    console.log(`Playing sound: ${soundMap[sound]}`);
    // In a real implementation, this would play the actual sound
  };

  return { playSound };
};

export default useSound;
