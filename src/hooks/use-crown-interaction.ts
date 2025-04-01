
import { useState, useCallback } from 'react';
import { useSound } from './sounds/use-sound';
import { useNotificationSounds } from './sounds/use-notification-sounds';

interface CrownAnimationOptions {
  duration?: number;
  soundEnabled?: boolean;
  onComplete?: () => void;
}

export const useCrownInteraction = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { playSound } = useSound();
  const { playNotificationSound } = useNotificationSounds();

  const triggerCrownAnimation = useCallback((options: CrownAnimationOptions = {}) => {
    const {
      duration = 1500,
      soundEnabled = true,
      onComplete
    } = options;

    setIsAnimating(true);

    if (soundEnabled) {
      playSound('royal', { volume: 0.6 });
    }

    // Create the crown element
    const crown = document.createElement('div');
    crown.className = 'animated-crown';
    crown.innerHTML = '👑';
    crown.style.position = 'fixed';
    crown.style.top = '50%';
    crown.style.left = '50%';
    crown.style.transform = 'translate(-50%, -50%) scale(0)';
    crown.style.fontSize = '10rem';
    crown.style.opacity = '0';
    crown.style.zIndex = '9999';
    crown.style.pointerEvents = 'none';
    crown.style.transition = 'transform 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67), opacity 0.8s ease';

    document.body.appendChild(crown);

    // Animate in
    setTimeout(() => {
      crown.style.transform = 'translate(-50%, -50%) scale(1)';
      crown.style.opacity = '1';
    }, 50);

    // Add particle effects
    if (soundEnabled) {
      setTimeout(() => {
        playNotificationSound('achievement', { volume: 0.4 });
      }, 400);
    }

    // Animate out
    setTimeout(() => {
      crown.style.transform = 'translate(-50%, -50%) scale(1.2)';
      crown.style.opacity = '0';
      
      setTimeout(() => {
        if (document.body.contains(crown)) {
          document.body.removeChild(crown);
        }
        setIsAnimating(false);
        if (onComplete) onComplete();
      }, 800);
    }, duration);
    
  }, [playSound, playNotificationSound]);

  return {
    triggerCrownAnimation,
    isAnimating
  };
};

export default useCrownInteraction;
