import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useSettings } from '@/hooks/useSettings';
import { Loader } from "lucide-react";

const NotificationSettings: React.FC = () => {
  const { 
    notifications, 
    toggleNotifications, 
    profileSettings, 
    updateProfileSettings, 
    isLoading 
  } = useSettings();
  
  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <Loader className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }
  
  const handleToggleRankAlerts = () => {
    updateProfileSettings({
      rankChangeAlerts: !profileSettings.rankChangeAlerts
    });
  };
  
  const handleToggleTeamAlerts = () => {
    updateProfileSettings({
      teamChangeAlerts: !profileSettings.teamChangeAlerts
    });
  };
  
  const handleToggleAchievementAlerts = () => {
    updateProfileSettings({
      achievementAlerts: !profileSettings.achievementAlerts
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Configure how you'd like to be notified about events in the royal court
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications" className="flex flex-col space-y-1">
              <span>Enable Notifications</span>
              <span className="font-normal text-sm text-muted-foreground">
                Allow the app to send you notifications
              </span>
            </Label>
            <Switch
              id="notifications"
              checked={notifications}
              onCheckedChange={toggleNotifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="rankAlerts" className="flex flex-col space-y-1">
              <span>Rank Change Alerts</span>
              <span className="font-normal text-sm text-muted-foreground">
                Get notified when your rank changes
              </span>
            </Label>
            <Switch
              id="rankAlerts"
              checked={profileSettings.rankChangeAlerts || false}
              onCheckedChange={handleToggleRankAlerts}
              disabled={!notifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="teamAlerts" className="flex flex-col space-y-1">
              <span>Team Updates</span>
              <span className="font-normal text-sm text-muted-foreground">
                Get notified about updates to your team
              </span>
            </Label>
            <Switch
              id="teamAlerts"
              checked={profileSettings.teamChangeAlerts || false}
              onCheckedChange={handleToggleTeamAlerts}
              disabled={!notifications}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="achievementAlerts" className="flex flex-col space-y-1">
              <span>Achievement Alerts</span>
              <span className="font-normal text-sm text-muted-foreground">
                Get notified when you earn new achievements
              </span>
            </Label>
            <Switch
              id="achievementAlerts"
              checked={profileSettings.achievementAlerts || false}
              onCheckedChange={handleToggleAchievementAlerts}
              disabled={!notifications}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
