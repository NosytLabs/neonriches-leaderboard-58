
import { useState } from 'react';
import { SoundType } from '@/hooks/sounds/types';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { useToastContext } from "@/contexts/ToastContext";

export function useCrownInteraction() {
  const { addToast } = useToastContext();
  const { playSound } = useNotificationSounds();
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleCrownClick = (containerRef: React.RefObject<HTMLElement>) => {
    setHasInteracted(true);
    playSound('royalAnnouncement', 0.2);
    
    addToast({
      title: "Royal Decree",
      description: "The crown acknowledges your admiration. Now prove your worth with currency!",
      duration: 3000,
    });
    
    if (containerRef.current) {
      const sparkleContainer = document.createElement('div');
      sparkleContainer.className = 'absolute w-full h-full top-0 left-0 pointer-events-none';
      
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-royal-gold animate-float';
        particle.style.width = `${Math.random() * 10 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `50%`;
        particle.style.opacity = '0.8';
        sparkleContainer.appendChild(particle);
      }
      
      containerRef.current.appendChild(sparkleContainer);
      
      setTimeout(() => {
        sparkleContainer.remove();
      }, 5000);
    }
  };

  return {
    hasInteracted,
    setHasInteracted,
    handleCrownClick
  };
}
