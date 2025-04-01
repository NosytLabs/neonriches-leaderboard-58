
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { UserProfile, UserSettings, SocialLink } from '@/types/user-consolidated';
import { useToast } from '@/hooks/use-toast';

interface ProfileMarketingSettingsProps {
  user: UserProfile;
  onUpdateSettings: (settings: Partial<UserSettings>) => Promise<boolean>;
  onUpdateSocialLinks: (links: SocialLink[]) => Promise<boolean>;
}

const ProfileMarketingSettings: React.FC<ProfileMarketingSettingsProps> = ({
  user,
  onUpdateSettings,
  onUpdateSocialLinks
}) => {
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Extract settings with proper defaults
  const settings = user?.settings || {
    profileVisibility: 'public' as 'public' | 'private' | 'friends',
    allowProfileLinks: true,
    theme: 'dark' as 'light' | 'dark' | 'royal' | 'system',
    notifications: true,
    emailNotifications: false,
    marketingEmails: false,
    showRank: true,
    darkMode: true,
    soundEffects: true,
    showBadges: true,
    showTeam: true,
    showSpending: true,
    showEmailOnProfile: false,
    rankChangeAlerts: true
  };
  
  // State for form values
  const [formValues, setFormValues] = useState({
    profileVisibility: settings.profileVisibility,
    allowProfileLinks: settings.allowProfileLinks,
    showRank: settings.showRank,
    showTeam: settings.showTeam,
    showSpending: settings.showSpending,
    showEmailOnProfile: settings.showEmailOnProfile || false,
    marketingEmails: settings.marketingEmails || false,
    rankChangeAlerts: settings.rankChangeAlerts || true,
    teamNotifications: settings.teamNotifications || true
  });
  
  const handleToggle = (field: string, value: boolean) => {
    setFormValues(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleSave = async () => {
    setIsUpdating(true);
    
    try {
      const updatedSettings: Partial<UserSettings> = {
        profileVisibility: formValues.profileVisibility,
        allowProfileLinks: formValues.allowProfileLinks,
        showRank: formValues.showRank,
        showTeam: formValues.showTeam,
        showSpending: formValues.showSpending,
        showEmailOnProfile: formValues.showEmailOnProfile,
        marketingEmails: formValues.marketingEmails,
        rankChangeAlerts: formValues.rankChangeAlerts,
        teamNotifications: formValues.teamNotifications
      };
      
      // Get current social links or initialize as empty array
      const socialLinks: SocialLink[] = Array.isArray(user.socialLinks) 
        ? [...user.socialLinks] 
        : [];
      
      // Update settings
      await onUpdateSettings(updatedSettings);
      
      // Update social links if they exist and have changed
      if (socialLinks.length > 0) {
        await onUpdateSocialLinks(socialLinks);
      }
      
      toast({
        title: "Settings Updated",
        description: "Your marketing settings have been updated successfully."
      });
    } catch (error) {
      console.error('Error updating marketing settings:', error);
      toast({
        title: "Update Failed",
        description: "There was an error updating your settings. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUpdating(false);
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Marketing Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Profile Visibility */}
          <div className="space-y-2">
            <Label htmlFor="visibility">Profile Visibility</Label>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="allowProfileLinks" className="font-normal">
                    Allow Profile Links
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Enable links to be displayed on your profile page
                  </p>
                </div>
                <Switch
                  id="allowProfileLinks"
                  checked={formValues.allowProfileLinks}
                  onCheckedChange={(value) => handleToggle('allowProfileLinks', value)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showRank" className="font-normal">
                    Show Rank
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Display your rank on your profile
                  </p>
                </div>
                <Switch
                  id="showRank"
                  checked={formValues.showRank}
                  onCheckedChange={(value) => handleToggle('showRank', value)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showTeam" className="font-normal">
                    Show Team
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Display your team on your profile
                  </p>
                </div>
                <Switch
                  id="showTeam"
                  checked={formValues.showTeam}
                  onCheckedChange={(value) => handleToggle('showTeam', value)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showSpending" className="font-normal">
                    Show Spending
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Display your spending amount on your profile
                  </p>
                </div>
                <Switch
                  id="showSpending"
                  checked={formValues.showSpending}
                  onCheckedChange={(value) => handleToggle('showSpending', Boolean(value))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showEmailOnProfile" className="font-normal">
                    Show Email
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Display your email on your profile
                  </p>
                </div>
                <Switch
                  id="showEmailOnProfile"
                  checked={Boolean(formValues.showEmailOnProfile)}
                  onCheckedChange={(value) => handleToggle('showEmailOnProfile', Boolean(value))}
                />
              </div>
            </div>
          </div>
          
          {/* Notification Preferences */}
          <div className="space-y-2">
            <Label>Notification Preferences</Label>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketingEmails" className="font-normal">
                    Marketing Emails
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive marketing emails and newsletters
                  </p>
                </div>
                <Switch
                  id="marketingEmails"
                  checked={Boolean(formValues.marketingEmails)}
                  onCheckedChange={(value) => handleToggle('marketingEmails', Boolean(value))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="rankChangeAlerts" className="font-normal">
                    Rank Change Alerts
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications when your rank changes
                  </p>
                </div>
                <Switch
                  id="rankChangeAlerts"
                  checked={Boolean(formValues.rankChangeAlerts)}
                  onCheckedChange={(value) => handleToggle('rankChangeAlerts', Boolean(value))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="teamNotifications" className="font-normal">
                    Team Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive team-related notifications
                  </p>
                </div>
                <Switch
                  id="teamNotifications"
                  checked={Boolean(formValues.teamNotifications)}
                  onCheckedChange={(value) => handleToggle('teamNotifications', Boolean(value))}
                />
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleSave}
            disabled={isUpdating}
          >
            {isUpdating ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileMarketingSettings;
