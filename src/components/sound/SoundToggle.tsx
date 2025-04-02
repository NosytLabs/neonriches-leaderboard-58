
import React from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';

interface SoundToggleProps {
  className?: string;
}

const SoundToggle: React.FC<SoundToggleProps> = ({ className }) => {
  const { isMuted, setVolume, playSound } = useSound();
  
  const toggleSound = () => {
    if (isMuted) {
      setVolume(0.5);
      playSound('click');
    } else {
      setVolume(0);
    }
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSound}
      className={className}
      aria-label={isMuted ? "Enable sound" : "Mute sound"}
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
