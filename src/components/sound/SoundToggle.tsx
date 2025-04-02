
// Fix SoundToggle to use updated UseSoundHook
import React from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';

const SoundToggle: React.FC = () => {
  const sound = useSound();
  
  const toggleSound = () => {
    sound.toggleMuted?.();
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSound}
      title={sound.isMuted ? 'Enable Sound' : 'Disable Sound'}
      className="relative"
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
