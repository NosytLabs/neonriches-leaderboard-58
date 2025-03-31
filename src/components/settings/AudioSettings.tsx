
import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import SettingsLayout from './SettingsLayout';
import { useSettings } from '@/contexts/SettingsContext';

const AudioSettings: React.FC = () => {
  const { soundConfig, toggleSounds, toggleMuted, setVolume, togglePremium } = useSettings();
  const [sliderValue, setSliderValue] = useState(soundConfig.volume * 100);
  
  const handleVolumeChange = (value: number[]) => {
    const newValue = value[0];
    setSliderValue(newValue);
    setVolume(newValue / 100);
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
              <VolumeX className="mr-2 h-4 w-4" />
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
                <Music className="mr-2 h-4 w-4" />
                Premium Sound Pack
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
        </div>
      </div>
    </SettingsLayout>
  );
};

export default AudioSettings;
