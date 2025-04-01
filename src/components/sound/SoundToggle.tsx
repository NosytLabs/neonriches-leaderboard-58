
import React from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks/sounds/use-sound';
import { cn } from '@/lib/utils';

interface SoundToggleProps {
  className?: string;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ className }) => {
  const sound = useSound();
  
  const handleToggle = () => {
    sound.toggleMuted();
    
    // Play a sound when unmuting to provide immediate feedback
    if (sound.isMuted) {
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
      aria-label={sound.isMuted ? "Unmute Sounds" : "Mute Sounds"}
    >
      {sound.isMuted ? (
        <VolumeX className="h-5 w-5" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </Button>
  );
};

export default SoundToggle;
