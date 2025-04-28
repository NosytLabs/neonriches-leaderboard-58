
import { useCallback } from 'react';

// A hook to create floating coin animations
const useFloatingCoins = () => {
  // Function to create a "burst" of coin animations
  const createBurst = useCallback((count: number = 10) => {
    console.log(`Creating coin burst animation with ${count} coins`);
    // In a real implementation, this would animate coins
    // flying from the bottom of the screen
  }, []);

  return { createBurst };
};

export default useFloatingCoins;
