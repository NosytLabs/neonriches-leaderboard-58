
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSoundToggleProps {
  isMuted: boolean;
  toggleMute: () => void;
}

const HeroSoundToggle: React.FC<HeroSoundToggleProps> = ({ isMuted, toggleMute }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-4 right-4 z-30 bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-full hover:bg-foreground/10 transition-all"
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeX className="h-5 w-5 text-white/70" />
      ) : (
        <Volume2 className="h-5 w-5 text-white/70" />
      )}
    </Button>
  );
};

export default HeroSoundToggle;
