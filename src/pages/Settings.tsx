
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/providers/theme-provider';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useSettingsStore } from '@/stores/settingsStore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Paintbrush, Volume2, Bell, Shield, Sparkles } from 'lucide-react';
import ProfileMarketingSettings from '@/components/profile/ProfileMarketingSettings';
import { useAuth } from '@/hooks/useAuth';

const Settings: React.FC = () => {
  const { theme } = useTheme();
  const { soundEffects, notifications, toggleSoundEffects, toggleNotifications } = useSettingsStore();
  const { user, updateUserProfile } = useAuth();
  
  const handleProfileUpdate = async (updates: any) => {
    if (user && updateUserProfile) {
      await updateUserProfile(updates);
    }
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <Tabs defaultValue="appearance" className="space-y-6">
        <TabsList className="glass-morphism mb-4 grid grid-cols-4">
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Paintbrush size={16} />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="audio" className="flex items-center gap-2">
            <Volume2 size={16} />
            <span className="hidden sm:inline">Audio</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell size={16} />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="marketing" className="flex items-center gap-2">
            <Sparkles size={16} />
            <span className="hidden sm:inline">Marketing</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="appearance">
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
        </TabsContent>
        
        <TabsContent value="audio">
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
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="notifications">Browser Notifications</Label>
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
        </TabsContent>
        
        <TabsContent value="marketing">
          {user && (
            <ProfileMarketingSettings 
              user={user} 
              onSave={handleProfileUpdate} 
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
