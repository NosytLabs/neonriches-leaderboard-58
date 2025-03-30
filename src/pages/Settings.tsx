
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/providers/theme-provider';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useSettingsStore } from '@/stores/settingsStore';

const Settings: React.FC = () => {
  const { theme } = useTheme();
  const { soundEffects, notifications, toggleSoundEffects, toggleNotifications } = useSettingsStore();
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="theme">Theme</Label>
              <ThemeToggle />
            </div>
            <p className="text-sm text-white/70">
              Current theme: {theme === 'system' ? 'System default' : theme}
            </p>
          </CardContent>
        </Card>
        
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>Sound & Notifications</CardTitle>
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
            
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="notifications">Notifications</Label>
                <p className="text-sm text-white/70">Enable browser notifications</p>
              </div>
              <Switch 
                id="notifications" 
                checked={notifications} 
                onCheckedChange={toggleNotifications} 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
