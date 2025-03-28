
import { useState, useCallback } from 'react';
import { useToastContext } from '@/contexts/ToastContext';

export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

interface ShameEffectProps {
  onSuccess?: (targetId: number, targetName: string, shameType: ShameAction) => void;
  cooldownPeriod?: number; // in milliseconds
}

export const useShameEffect = ({ 
  onSuccess,
  cooldownPeriod = 60000 * 60 * 24 // 24 hours default cooldown
}: ShameEffectProps = {}) => {
  const { addToast } = useToastContext();
  const [shameCooldown, setShameCooldown] = useState<Record<number, boolean>>({});
  const [shameEffects, setShameEffects] = useState<Record<number, ShameAction | null>>({});
  const [shameCount, setShameCount] = useState<Record<number, number>>({});
  
  // Show shame effects for a short time to display animation
  const triggerShameEffect = useCallback((targetId: number, shameType: ShameAction) => {
    setShameEffects(prev => ({ ...prev, [targetId]: shameType }));
    
    // Update shame count
    setShameCount(prev => ({
      ...prev,
      [targetId]: (prev[targetId] || 0) + 1
    }));
    
    // Store shame count in localStorage for persistence
    const userShameKey = `user_shame_count_${targetId}`;
    const currentCount = parseInt(localStorage.getItem(userShameKey) || '0');
    localStorage.setItem(userShameKey, (currentCount + 1).toString());
    
    // Reset the visual effect after a while
    setTimeout(() => {
      setShameEffects(prev => ({ ...prev, [targetId]: null }));
    }, 5000);
  }, []);

  // Create floating particles effect based on shame type
  const createShameParticles = useCallback((targetId: number, shameType: ShameAction) => {
    const targetElement = document.getElementById(`user-card-${targetId}`);
    if (!targetElement) return;
    
    const getEmojis = (type: ShameAction) => {
      switch(type) {
        case 'tomatoes': return ['🍅', '🍎', '🥫', '💥'];
        case 'eggs': return ['🥚', '🍳', '🧀', '🦴'];
        case 'stocks': return ['🪵', '⛓️', '🔒', '📜'];
      }
    };
    
    const emojis = getEmojis(shameType);
    
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      particle.classList.add('absolute', 'text-xl', 'animate-float', 'pointer-events-none', 'z-10');
      
      // Random position around the target user card
      const rect = targetElement.getBoundingClientRect();
      const randomX = Math.random() * rect.width;
      const randomY = rect.height / 2;
      
      particle.style.left = `${randomX}px`;
      particle.style.top = `${randomY}px`;
      
      targetElement.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (targetElement.contains(particle)) {
          targetElement.removeChild(particle);
        }
      }, 5000);
    }
  }, []);

  // Get shame count for a user
  const getShameCount = useCallback((targetId: number) => {
    const userShameKey = `user_shame_count_${targetId}`;
    return parseInt(localStorage.getItem(userShameKey) || '0');
  }, []);

  // Handle the shame action
  const handleShame = useCallback((targetId: number, targetName: string, shameType: ShameAction, amount: number) => {
    if (shameCooldown[targetId]) {
      addToast({
        title: "Cooldown Active",
        description: `You've recently shamed ${targetName}. The stocks are still being prepared for next use.`,
        variant: "destructive"
      });
      return false;
    }
    
    // In a real app, this would call an API endpoint
    const messages = {
      tomatoes: `You've pelted ${targetName} with rotten tomatoes! The shame is visible to all.`,
      eggs: `You've hurled rotten eggs at ${targetName}! What a stench they'll have for 24 hours.`,
      stocks: `You've placed ${targetName} in the public stocks! The whole kingdom will mock them for 24 hours.`
    };
    
    addToast({
      title: "Public Shaming Successful!",
      description: messages[shameType],
    });
    
    // Trigger visual effects
    triggerShameEffect(targetId, shameType);
    createShameParticles(targetId, shameType);
    
    // Set cooldown
    setShameCooldown(prev => ({
      ...prev,
      [targetId]: true
    }));
    
    // Store last shame time in localStorage
    localStorage.setItem(`lastShame_${targetId}`, Date.now().toString());
    
    // Clear cooldown after specified period
    setTimeout(() => {
      setShameCooldown(prevState => ({
        ...prevState,
        [targetId]: false
      }));
    }, cooldownPeriod);
    
    // Call onSuccess callback if provided
    if (onSuccess) {
      onSuccess(targetId, targetName, shameType);
    }
    
    return true;
  }, [shameCooldown, addToast, triggerShameEffect, createShameParticles, cooldownPeriod, onSuccess]);

  return {
    shameCooldown,
    shameEffects,
    shameCount,
    getShameCount,
    handleShame
  };
};
