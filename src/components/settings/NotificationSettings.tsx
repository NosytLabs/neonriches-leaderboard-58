
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useSettingsStore } from '@/stores/settingsStore';

const NotificationSettings = () => {
  const { notifications, toggleNotifications } = useSettingsStore();
  
  return (
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
  );
};

export default NotificationSettings;
