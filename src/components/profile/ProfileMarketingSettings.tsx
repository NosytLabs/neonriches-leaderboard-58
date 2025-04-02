
import React, { useState } from 'react';
import { UserProfile } from '@/types/user-consolidated';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Bell, Mail, Eye, UserRound, Users, Palette, Sparkles } from 'lucide-react';

export interface ProfileMarketingSettingsProps {
  user: UserProfile;
  onSave?: (updates: any) => Promise<void>;
}

const ProfileMarketingSettings: React.FC<ProfileMarketingSettingsProps> = ({ 
  user,
  onSave
}) => {
  const defaultSettings = {
    profileVisibility: user.settings?.profileVisibility || 'public',
    allowProfileLinks: user.settings?.allowProfileLinks ?? true,
    theme: user.settings?.theme || 'dark',
    notifications: user.settings?.notifications ?? true,
    emailNotifications: user.settings?.emailNotifications ?? false,
    marketingEmails: user.settings?.marketingEmails ?? false,
    showRank: user.settings?.showRank ?? true,
    darkMode: user.settings?.darkMode ?? true,
    soundEffects: user.settings?.soundEffects ?? true,
    showBadges: user.settings?.showBadges ?? true,
    showEmailOnProfile: user.settings?.showEmailOnProfile ?? false,
    rankChangeAlerts: user.settings?.rankChangeAlerts ?? true,
    showTeam: user.settings?.showTeam ?? true,
    showSpending: user.settings?.showSpending ?? true,
    newFollowerAlerts: user.settings?.newFollowerAlerts ?? false,
    teamNotifications: user.settings?.teamNotifications ?? false
  };
  
  const [settings, setSettings] = useState(defaultSettings);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (onSave) {
      setIsSaving(true);
      await onSave({ settings });
      setIsSaving(false);
    }
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="mr-2 text-primary h-5 w-5" />
          Marketing & Notifications
        </CardTitle>
        <CardDescription>
          Manage how you receive notifications and marketing communications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Profile Visibility</h3>
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="profile-visibility" className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  Profile Visibility
                </Label>
                <p className="text-sm text-muted-foreground">
                  Control who can see your profile information
                </p>
              </div>
              <Select
                value={settings.profileVisibility}
                onValueChange={(value) => setSettings({...settings, profileVisibility: value as 'public' | 'private' | 'followers' | 'friends'})}
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="followers">Followers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Email Preferences</h3>
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="email-notifications" className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive important notifications via email
                </p>
              </div>
              <Switch
                id="email-notifications"
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="marketing-emails" className="flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  Marketing Emails
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive promotional offers and updates
                </p>
              </div>
              <Switch
                id="marketing-emails"
                checked={settings.marketingEmails}
                onCheckedChange={(checked) => setSettings({...settings, marketingEmails: checked})}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileMarketingSettings;
