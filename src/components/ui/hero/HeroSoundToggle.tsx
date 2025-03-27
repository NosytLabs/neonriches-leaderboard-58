
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSoundToggleProps {
  isMuted: boolean;
  toggleMute: () => void;
}

const HeroSoundToggle: React.FC<HeroSoundToggleProps> = ({ isMuted, toggleMute }) => {
  return (
    <div className="absolute top-0 right-4 md:right-8">
      <Button 
        variant="ghost" 
        size="sm" 
        className="rounded-full p-2 text-white/60 hover:text-white/90 hover:bg-white/10"
        onClick={toggleMute}
        title={isMuted ? "Unmute sounds" : "Mute sounds"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </Button>
    </div>
  );
};

export default HeroSoundToggle;
