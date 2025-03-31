
import React from 'react';
import { Bell, Mail, Crown, UserPlus, Award, DollarSign } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import SettingsLayout from './SettingsLayout';
import { useSettings } from '@/contexts/SettingsContext';
import { Button } from '@/components/ui/button';

const NotificationSettings: React.FC = () => {
  const { 
    notifications, 
    toggleNotifications, 
    profileSettings, 
    updateProfileSettings, 
    isLoading 
  } = useSettings();
  
  const handleToggleRankChangeAlerts = async () => {
    await updateProfileSettings({ 
      rankChangeAlerts: !profileSettings.rankChangeAlerts 
    });
  };
  
  const handleToggleTeamChangeAlerts = async () => {
    await updateProfileSettings({ 
      teamChangeAlerts: !profileSettings.teamChangeAlerts
    });
  };

  const handleToggleEmailNotifications = async () => {
    await updateProfileSettings({
      emailNotifications: !profileSettings.showEmailOnProfile
    });
  };

  const handleToggleAchievementAlerts = async () => {
    await updateProfileSettings({
      achievementAlerts: !profileSettings.achievementAlerts
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
            onCheckedChange={handleToggleEmailNotifications} 
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
            checked={profileSettings.rankChangeAlerts || false}
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
            checked={profileSettings.teamChangeAlerts || false}
            onCheckedChange={handleToggleTeamChangeAlerts}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="achievement-notifications" className="flex items-center">
              <Award className="mr-2 h-4 w-4" />
              Achievement Alerts
            </Label>
            <p className="text-sm text-white/70">Get notified when you earn achievements</p>
          </div>
          <Switch 
            id="achievement-notifications" 
            checked={profileSettings.achievementAlerts || false}
            onCheckedChange={handleToggleAchievementAlerts}
          />
        </div>
        
        <div className="p-4 rounded-lg bg-black/20">
          <h3 className="text-sm font-medium mb-2">Alert Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-800/50 flex items-center justify-center">
                <Crown className="h-4 w-4 text-purple-300" />
              </div>
              <div>
                <p className="text-sm font-medium">Rank Updates</p>
                <p className="text-xs text-white/60">Changes to your position</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-purple-800/50 flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-purple-300" />
              </div>
              <div>
                <p className="text-sm font-medium">Spending</p>
                <p className="text-xs text-white/60">Purchases and deposits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default NotificationSettings;
