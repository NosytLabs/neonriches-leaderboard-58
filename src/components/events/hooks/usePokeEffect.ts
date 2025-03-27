
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface UsePokeEffectProps {
  onSuccess?: (targetId: number, targetName: string) => void;
  cooldownPeriod?: number; // in milliseconds
}

export const usePokeEffect = ({ 
  onSuccess,
  cooldownPeriod = 60000 // Default to 1 minute for demo purposes
}: UsePokeEffectProps = {}) => {
  const { toast } = useToast();
  const [pokeCooldown, setPokeCooldown] = useState<Record<number, boolean>>({});
  const [pokeEffects, setPokeEffects] = useState<Record<number, boolean>>({});
  
  // Show poke effects for a short time to display animation
  const triggerPokeEffect = useCallback((targetId: number) => {
    setPokeEffects(prev => ({ ...prev, [targetId]: true }));
    setTimeout(() => {
      setPokeEffects(prev => ({ ...prev, [targetId]: false }));
    }, 2000);
  }, []);

  // Create floating particles effect
  const createParticles = useCallback((targetId: number) => {
    const targetElement = document.getElementById(`user-card-${targetId}`);
    if (!targetElement) return;
    
    const emojis = ['⚡️', '💫', '✨', '💥'];
    
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      particle.classList.add('absolute', 'text-xl', 'animate-float', 'pointer-events-none');
      
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

  // Handle the poke action
  const handlePoke = useCallback((targetId: number, targetName: string) => {
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
    
    // Trigger visual effects
    triggerPokeEffect(targetId);
    createParticles(targetId);
    
    // Set cooldown
    setPokeCooldown(prev => ({
      ...prev,
      [targetId]: true
    }));
    
    // Clear cooldown after specified period
    setTimeout(() => {
      setPokeCooldown(prevState => ({
        ...prevState,
        [targetId]: false
      }));
    }, cooldownPeriod);
    
    // Call onSuccess callback if provided
    if (onSuccess) {
      onSuccess(targetId, targetName);
    }
  }, [pokeCooldown, toast, triggerPokeEffect, createParticles, cooldownPeriod, onSuccess]);

  return {
    pokeCooldown,
    pokeEffects,
    handlePoke
  };
};
