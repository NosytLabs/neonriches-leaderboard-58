
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { useSoundsConfig } from '@/hooks/sounds/use-sounds-config';
import { useSound } from '@/hooks/sounds/use-sound';

const AudioSettings = () => {
  const { config, toggleEnabled, toggleMute, setVolume } = useSoundsConfig();
  const { play } = useSound();
  
  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    play('click');
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Sound Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="sound-effects">Sound Effects</Label>
            <p className="text-sm text-white/70">Enable sound effects throughout the app</p>
          </div>
          <Switch 
            id="sound-effects" 
            checked={config.enabled} 
            onCheckedChange={toggleEnabled} 
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="sound-mute">Mute All Sounds</Label>
            <p className="text-sm text-white/70">Temporarily disable all sounds</p>
          </div>
          <Switch 
            id="sound-mute" 
            checked={config.muted} 
            onCheckedChange={toggleMute}
            disabled={!config.enabled}
          />
        </div>
        
        <div className="space-y-3">
          <div className="space-y-1">
            <Label>Sound Volume</Label>
            <p className="text-sm text-white/70">Adjust the volume of all sounds</p>
          </div>
          <Slider
            defaultValue={[config.volume]}
            max={1}
            min={0}
            step={0.1}
            onValueChange={handleVolumeChange}
            disabled={!config.enabled || config.muted}
            aria-label="Volume"
          />
          <div className="flex justify-between text-xs text-white/50">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioSettings;
