
import React from 'react';
import { Bell, Mail, Crown, UserPlus } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import SettingsLayout from './SettingsLayout';
import { useSettings } from '@/contexts/SettingsContext';
import { Button } from '@/components/ui/button';

const NotificationSettings = () => {
  const { notifications, toggleNotifications, profileSettings, updateProfileSettings, isLoading } = useSettings();
  
  const handleToggleRankChangeAlerts = async () => {
    await updateProfileSettings({ 
      rankChangeAlerts: !profileSettings.showRank 
    });
  };
  
  const handleToggleTeamChangeAlerts = async () => {
    await updateProfileSettings({ 
      teamChangeAlerts: !profileSettings.showTeam
    });
  };
  
  return (
    <SettingsLayout 
      title="Notification Settings"
      description="Manage how you receive alerts and notifications"
      icon={<Bell className="h-5 w-5 text-purple-400" />}
      footerContent={
        <Button disabled={isLoading} onClick={() => {}}>
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      }
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="notifications" className="flex items-center">
              <Bell className="mr-2 h-4 w-4" />
              Browser Notifications
            </Label>
            <p className="text-sm text-white/70">Enable in-app notifications</p>
          </div>
          <Switch 
            id="notifications" 
            checked={notifications} 
            onCheckedChange={toggleNotifications} 
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="email-notifications" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Email Notifications
            </Label>
            <p className="text-sm text-white/70">Receive important updates via email</p>
          </div>
          <Switch 
            id="email-notifications" 
            checked={profileSettings.showEmailOnProfile || false} 
            onCheckedChange={() => updateProfileSettings({ 
              showEmailOnProfile: !profileSettings.showEmailOnProfile 
            })} 
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="rank-notifications" className="flex items-center">
              <Crown className="mr-2 h-4 w-4" />
              Rank Change Alerts
            </Label>
            <p className="text-sm text-white/70">Get notified when your rank changes</p>
          </div>
          <Switch 
            id="rank-notifications" 
            checked={profileSettings.showRank}
            onCheckedChange={handleToggleRankChangeAlerts}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="team-notifications" className="flex items-center">
              <UserPlus className="mr-2 h-4 w-4" />
              Team Change Alerts
            </Label>
            <p className="text-sm text-white/70">Get notified about team changes</p>
          </div>
          <Switch 
            id="team-notifications" 
            checked={profileSettings.showTeam}
            onCheckedChange={handleToggleTeamChangeAlerts}
          />
        </div>
      </div>
    </SettingsLayout>
  );
};

export default NotificationSettings;
