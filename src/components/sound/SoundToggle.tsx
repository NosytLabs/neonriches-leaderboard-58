
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSoundsConfig } from '@/hooks/sounds/use-sounds-config';
import { useSound } from '@/hooks/use-sound';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function SoundToggle() {
  const { config, toggleMute } = useSoundsConfig();
  const sound = useSound();
  
  const handleToggle = () => {
    toggleMute();
    if (config.muted) {
      // If currently muted, will be unmuted after toggle
      sound.playSound('click');
    }
  };
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={handleToggle}
            aria-label={config.muted ? "Unmute sounds" : "Mute sounds"}
          >
            {config.muted ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {config.muted ? "Unmute sounds" : "Mute sounds"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default SoundToggle;
