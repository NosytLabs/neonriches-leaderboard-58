
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks/sounds/use-sound';
import { cn } from '@/lib/utils';
import { useSoundsConfig } from '@/hooks/sounds/use-sounds-config';

export const HeroSoundToggle: React.FC<{ className?: string }> = ({ className }) => {
  const sound = useSound();
  const { soundConfig, toggleMuted } = useSoundsConfig();
  const [isMuted, setIsMuted] = useState(soundConfig?.muted || false);
  
  const handleToggle = () => {
    toggleMuted();
    setIsMuted(!isMuted);
    
    // Play a click sound when unmuting to provide feedback
    if (isMuted) {
      setTimeout(() => {
        sound.playSound('click');
      }, 50);
    }
  };
  
  return (
    <Button
      variant="ghost"
      className={cn(
        "rounded-full bg-background/80 backdrop-blur-sm border border-white/10 p-2 hover:bg-background/90", 
        className
      )}
      onClick={handleToggle}
      aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </Button>
  );
};

export default HeroSoundToggle;
