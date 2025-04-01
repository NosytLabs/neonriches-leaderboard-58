
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks/sounds/use-sound';
import { cn } from '@/lib/utils';
import { useSoundsConfig } from '@/hooks/sounds/use-sounds-config';

interface SoundToggleProps {
  className?: string;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ className }) => {
  const sound = useSound();
  const { soundConfig, toggleMuted } = useSoundsConfig();
  const [isMuted, setIsMuted] = useState(soundConfig?.muted || false);
  
  const handleToggle = () => {
    toggleMuted();
    setIsMuted(!isMuted);
    
    // Play a sound when unmuting to provide immediate feedback
    if (isMuted) {
      setTimeout(() => {
        sound.playSound('click');
      }, 50);
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
