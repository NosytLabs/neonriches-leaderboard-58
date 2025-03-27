
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface UsePokeEffectProps {
  onSuccess?: (targetId: number, targetName: string) => void;
}

export const usePokeEffect = ({ onSuccess }: UsePokeEffectProps = {}) => {
  const { toast } = useToast();
  const [pokeCooldown, setPokeCooldown] = useState<Record<number, boolean>>({});
  const [pokeEffects, setPokeEffects] = useState<Record<number, boolean>>({});
  
  // Show poke effects for a short time to display animation
  const triggerPokeEffect = (targetId: number) => {
    setPokeEffects(prev => ({ ...prev, [targetId]: true }));
    setTimeout(() => {
      setPokeEffects(prev => ({ ...prev, [targetId]: false }));
    }, 2000);
  };

  const handlePoke = (targetId: number, targetName: string) => {
    if (pokeCooldown[targetId]) {
      toast({
        title: "Cooldown Active",
        description: `You've recently poked ${targetName}. Try again later.`,
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would call an API endpoint
    toast({
      title: "Poke Successful!",
      description: `You've visually knocked ${targetName} down one rank for 24 hours. This doesn't affect their actual rank calculation, just how it appears.`,
    });
    
    // Trigger visual effect
    triggerPokeEffect(targetId);
    
    // Create floating particles
    createParticles(targetId);
    
    // Set cooldown
    setPokeCooldown({
      ...pokeCooldown,
      [targetId]: true
    });
    
    // Clear cooldown after 24 hours (or shorter for demo purposes)
    setTimeout(() => {
      setPokeCooldown(prevState => ({
        ...prevState,
        [targetId]: false
      }));
    }, 60000); // 1 minute cooldown for demo purposes
    
    // Call onSuccess callback if provided
    if (onSuccess) {
      onSuccess(targetId, targetName);
    }
  };
  
  const createParticles = (targetId: number) => {
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.innerHTML = ['⚡️', '💫', '✨', '💥'][Math.floor(Math.random() * 4)];
      particle.classList.add('absolute', 'text-xl', 'animate-float', 'pointer-events-none');
      
      // Random position around the target user card
      const targetElement = document.getElementById(`user-card-${targetId}`);
      if (targetElement) {
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
    }
  };

  return {
    pokeCooldown,
    pokeEffects,
    handlePoke
  };
};
