
import React from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';
import { cn } from '@/lib/utils';

export const HeroSoundToggle: React.FC<{ className?: string }> = ({ className }) => {
  const sound = useSound();
  
  const handleToggle = () => {
    sound.toggleMuted();
    
    // Play a click sound when unmuting to provide feedback
    if (sound.isMuted) {
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
      aria-label={sound.isMuted ? "Unmute sound effects" : "Mute sound effects"}
    >
      {sound.isMuted ? (
        <VolumeX className="h-5 w-5" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </Button>
  );
};

export default HeroSoundToggle;
