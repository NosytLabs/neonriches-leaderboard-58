
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSoundsConfig } from '@/hooks/sounds/use-sounds-config';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import useSound from '@/hooks/useSound';

export function SoundToggle() {
  const { soundConfig, toggleMuted } = useSoundsConfig();
  const sound = useSound();
  
  const handleToggle = () => {
    if (!soundConfig.muted) {
      sound.playSound('click');
    }
    toggleMuted();
  };
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={handleToggle}
          >
            <span className="sr-only">
              {soundConfig.muted ? 'Unmute' : 'Mute'} sounds
            </span>
            {soundConfig.muted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{soundConfig.muted ? 'Unmute' : 'Mute'} sounds</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
