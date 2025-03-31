
import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, VolumeX as VolumeMute, Crown } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import SettingsLayout from './SettingsLayout';
import { useSettings } from '@/contexts/SettingsContext';
import { useSound } from '@/hooks/sounds/use-sound';
import { Badge } from '@/components/ui/badge';

const AudioSettings: React.FC = () => {
  const { soundConfig, toggleSounds, toggleMuted, setVolume, togglePremium } = useSettings();
  const [sliderValue, setSliderValue] = useState(soundConfig.volume * 100);
  const sound = useSound();
  
  useEffect(() => {
    setSliderValue(soundConfig.volume * 100);
  }, [soundConfig.volume]);
  
  const handleVolumeChange = (value: number[]) => {
    const newValue = value[0];
    setSliderValue(newValue);
    setVolume(newValue / 100);
  };

  const playTestSound = () => {
    if (soundConfig.enabled && !soundConfig.muted) {
      sound.playSound('click');
    }
  };

  return (
    <SettingsLayout
      title="Audio Settings"
      description="Control sound effects and volume"
      icon={<Volume2 className="h-5 w-5 text-purple-400" />}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="sound-enabled" className="flex items-center">
              <Music className="mr-2 h-4 w-4" />
              Enable Game Sounds
            </Label>
            <Switch 
              id="sound-enabled" 
              checked={soundConfig.enabled} 
              onCheckedChange={toggleSounds}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <Label htmlFor="sound-muted" className="flex items-center">
              <VolumeMute className="mr-2 h-4 w-4" />
              Mute All Sounds
            </Label>
            <Switch 
              id="sound-muted" 
              checked={soundConfig.muted} 
              onCheckedChange={toggleMuted}
              disabled={!soundConfig.enabled}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="volume-slider" className="flex items-center mb-1">
              <Volume2 className="mr-2 h-4 w-4" />
              Volume Control
            </Label>
            <div className="flex items-center gap-2">
              <Slider
                id="volume-slider"
                value={[sliderValue]}
                min={0}
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
                disabled={!soundConfig.enabled || soundConfig.muted}
                className="flex-1"
              />
              <span className="min-w-[40px] text-center text-sm">{Math.round(sliderValue)}%</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <Label htmlFor="premium-sounds" className="flex items-center">
                <Crown className="mr-2 h-4 w-4 text-royal-gold" />
                Premium Sound Pack
                <Badge variant="outline" className="ml-2 text-xs bg-royal-gold/10 text-royal-gold border-royal-gold/30">
                  Royal
                </Badge>
              </Label>
              <p className="text-sm text-white/60">Unlock special royal sound effects</p>
            </div>
            <Switch 
              id="premium-sounds" 
              checked={soundConfig.premium} 
              onCheckedChange={togglePremium}
              disabled={!soundConfig.enabled}
            />
          </div>
          
          <div className="mt-6 p-4 bg-black/20 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Test sound settings</span>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={playTestSound}
                disabled={!soundConfig.enabled || soundConfig.muted}
                className="bg-black/30 hover:bg-black/50"
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Play Test Sound
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default AudioSettings;
