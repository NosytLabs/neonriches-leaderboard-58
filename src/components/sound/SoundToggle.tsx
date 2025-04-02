
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks/sounds/use-sound';
import { cn } from '@/lib/utils';

interface SoundToggleProps {
  className?: string;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ className }) => {
  const sound = useSound();
  const { soundConfig, toggleMuted, playSound } = sound;
  const [isMuted, setIsMuted] = useState(soundConfig?.muted || false);
  
  useEffect(() => {
    setIsMuted(soundConfig?.muted || false);
  }, [soundConfig?.muted]);
  
  const handleToggle = () => {
    if (toggleMuted) {
      toggleMuted();
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      
      if (!newMutedState) {
        setTimeout(() => {
          playSound('click', { volume: 0.5 });
        }, 50);
      }
    }
  };
  
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn("px-2", className)}
      onClick={handleToggle}
      aria-label={isMuted ? "Unmute Sounds" : "Mute Sounds"}
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </Button>
  );
};

export default SoundToggle;
