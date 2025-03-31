
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSoundsConfig } from '@/hooks/sounds/use-sounds-config';
import { useSound } from '@/hooks/sounds/use-sound';

export default function HeroSoundToggle() {
  const { soundConfig, toggleMuted } = useSoundsConfig();
  const sound = useSound();
  
  const handleToggle = () => {
    sound.playSound('click');
    toggleMuted();
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white h-10 w-10 rounded-full"
      onClick={handleToggle}
    >
      <span className="sr-only">{soundConfig.muted ? 'Unmute' : 'Mute'}</span>
      {soundConfig.muted ? (
        <VolumeX className="h-5 w-5" />
      ) : (
        <Volume2 className="h-5 w-5" />
      )}
    </Button>
  );
}
