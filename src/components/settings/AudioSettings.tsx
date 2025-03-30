
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useSettingsStore } from '@/stores/settingsStore';

const AudioSettings = () => {
  const { soundEffects, toggleSoundEffects } = useSettingsStore();
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Sound Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="sound-effects">Sound Effects</Label>
            <p className="text-sm text-white/70">Enable sound effects throughout the app</p>
          </div>
          <Switch 
            id="sound-effects" 
            checked={soundEffects} 
            onCheckedChange={toggleSoundEffects} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioSettings;
