import { useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { ShameAction } from '../utils/shameUtils';
import { useSound } from '@/hooks/use-sound';

interface ShameEffectData {
  type: ShameAction;
  timestamp: string;
}

// Default shame duration in hours
const SHAME_DURATION = 24;

// Cooldown period in hours
const SHAME_COOLDOWN = 1;

const useShameEffect = () => {
  const sound = useSound();
  const [shameEffects, setShameEffects] = useLocalStorage<Record<number, ShameEffectData>>('shame-effects', {});
  const [shameCooldown, setShameCooldown] = useLocalStorage<Record<number, boolean>>('shame-cooldown', {});
  const [shameCount, setShameCount] = useLocalStorage<Record<number, number>>('shame-count', {});
  const [isMocking, setIsMocking] = useState(false);

  // Clean up expired effects and cooldowns
  useEffect(() => {
    const now = new Date();
    const updatedEffects = { ...shameEffects };
    const updatedCooldowns = { ...shameCooldown };
    let hasChanges = false;

    // Check for expired effects
    Object.entries(updatedEffects).forEach(([userId, effect]) => {
      const expiryTime = new Date(effect.timestamp);
      expiryTime.setHours(expiryTime.getHours() + SHAME_DURATION);
      
      if (now > expiryTime) {
        delete updatedEffects[Number(userId)];
        hasChanges = true;
      }
    });

    // Check for expired cooldowns
    Object.entries(updatedCooldowns).forEach(([userId, _]) => {
      const cooldownKey = `shame-cooldown-${userId}`;
      const cooldownExpiry = localStorage.getItem(cooldownKey);
      
      if (cooldownExpiry && now > new Date(JSON.parse(cooldownExpiry))) {
        delete updatedCooldowns[Number(userId)];
        localStorage.removeItem(cooldownKey);
        hasChanges = true;
      }
    });

    if (hasChanges) {
      setShameEffects(updatedEffects);
      setShameCooldown(updatedCooldowns);
    }
  }, [shameEffects, shameCooldown, setShameEffects, setShameCooldown]);

  // Apply shame effect to a user
  const handleShame = (userId: number, username: string, type: ShameAction): boolean => {
    if (shameCooldown[userId] || shameEffects[userId]) {
      return false;
    }

    setIsMocking(true);

    try {
      // Record the shame effect
      const now = new Date().toISOString();
      setShameEffects(prev => ({
        ...prev,
        [userId]: { type, timestamp: now }
      }));

      // Set cooldown
      setShameCooldown(prev => ({
        ...prev,
        [userId]: true
      }));

      // Store cooldown expiry time
      const cooldownExpiry = new Date();
      cooldownExpiry.setHours(cooldownExpiry.getHours() + SHAME_COOLDOWN);
      localStorage.setItem(`shame-cooldown-${userId}`, JSON.stringify(cooldownExpiry.toISOString()));

      // Increment shame count
      setShameCount(prev => ({
        ...prev,
        [userId]: (prev[userId] || 0) + 1
      }));

      // Play shame sound
      sound.playSound('shame', { volume: 0.4 });

      return true;
    } catch (error) {
      console.error('Error applying shame effect:', error);
      return false;
    } finally {
      setIsMocking(false);
    }
  };

  // Get active mockery for a user
  const getActiveMockery = (userId: number): ShameEffectData | null => {
    return shameEffects[userId] || null;
  };

  // Get shame count for a user
  const getShameCount = (userId: number): number => {
    return shameCount[userId] || 0;
  };

  return {
    handleShame,
    getShameCount,
    getActiveMockery,
    shameEffects,
    shameCooldown,
    shameCount,
    isMocking
  };
};

export default useShameEffect;
