
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { UserProfile } from '@/types/user';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserCog, Shield, Bell, Palette, Monitor } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProfileSettingsProps {
  user: UserProfile;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => {
  const { toast } = useToast();
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [bio, setBio] = useState(user.bio || '');
  const [email, setEmail] = useState(user.email || '');
  
  // Privacy settings with defaults
  const [privacySettings, setPrivacySettings] = useState({
    showProfile: true,
    showRank: true,
    showSpending: false,
    allowMockery: true
  });
  
  // Notification settings with defaults
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    rankChangeAlerts: true,
    teamUpdates: true,
    marketingEmails: false
  });
  
  // Display settings with defaults
  const [displaySettings, setDisplaySettings] = useState({
    theme: 'dark',
    animations: true,
    showEffects: true
  });
  
  const handleSaveProfile = () => {
    // In a real app, this would update the profile via an API
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully.",
    });
  };
  
  const handleSavePrivacy = () => {
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy preferences have been saved.",
    });
  };
  
  const handleSaveNotifications = () => {
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };
  
  const handleSaveDisplay = () => {
    toast({
      title: "Display Settings Updated",
      description: "Your display preferences have been saved.",
    });
  };
  
  return (
    <Tabs defaultValue="profile" className="space-y-4">
      <TabsList className="grid grid-cols-4 glass-morphism">
        <TabsTrigger value="profile" className="flex items-center gap-1.5">
          <UserCog className="h-4 w-4" />
          <span className="hidden sm:inline">Profile</span>
        </TabsTrigger>
        <TabsTrigger value="privacy" className="flex items-center gap-1.5">
          <Shield className="h-4 w-4" />
          <span className="hidden sm:inline">Privacy</span>
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-1.5">
          <Bell className="h-4 w-4" />
          <span className="hidden sm:inline">Notifications</span>
        </TabsTrigger>
        <TabsTrigger value="display" className="flex items-center gap-1.5">
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">Display</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your profile details and how others see you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your display name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell others about yourself"
                rows={4}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveProfile} className="bg-royal-gold hover:bg-royal-gold/90 text-black">
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="privacy">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>Privacy Settings</CardTitle>
            <CardDescription>Manage what information is visible to others</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="show-profile" className="flex-1">
                Show my profile to other users
              </Label>
              <Switch
                id="show-profile"
                checked={privacySettings.showProfile}
                onCheckedChange={(checked) => setPrivacySettings({ ...privacySettings, showProfile: checked })}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="show-rank" className="flex-1">
                Show my rank on the leaderboard
              </Label>
              <Switch
                id="show-rank"
                checked={privacySettings.showRank}
                onCheckedChange={(checked) => setPrivacySettings({ ...privacySettings, showRank: checked })}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="show-spending" className="flex-1">
                Show my spending amount publicly
              </Label>
              <Switch
                id="show-spending"
                checked={privacySettings.showSpending}
                onCheckedChange={(checked) => setPrivacySettings({ ...privacySettings, showSpending: checked })}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="allow-mockery" className="flex-1">
                Allow mockery interactions
              </Label>
              <Switch
                id="allow-mockery"
                checked={privacySettings.allowMockery}
                onCheckedChange={(checked) => setPrivacySettings({ ...privacySettings, allowMockery: checked })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSavePrivacy} className="bg-royal-gold hover:bg-royal-gold/90 text-black">
              Save Privacy Settings
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="notifications">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Control how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="email-notifications" className="flex-1">
                Receive email notifications
              </Label>
              <Switch
                id="email-notifications"
                checked={notificationSettings.emailNotifications}
                onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, emailNotifications: checked })}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="rank-alerts" className="flex-1">
                Rank change alerts
              </Label>
              <Switch
                id="rank-alerts"
                checked={notificationSettings.rankChangeAlerts}
                onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, rankChangeAlerts: checked })}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="team-updates" className="flex-1">
                Team updates and events
              </Label>
              <Switch
                id="team-updates"
                checked={notificationSettings.teamUpdates}
                onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, teamUpdates: checked })}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="marketing-emails" className="flex-1">
                Marketing emails
              </Label>
              <Switch
                id="marketing-emails"
                checked={notificationSettings.marketingEmails}
                onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, marketingEmails: checked })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveNotifications} className="bg-royal-gold hover:bg-royal-gold/90 text-black">
              Save Notification Settings
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="display">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>Display Settings</CardTitle>
            <CardDescription>Customize your visual experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">Theme</Label>
              <div className="flex gap-3">
                <Button
                  variant={displaySettings.theme === 'dark' ? 'default' : 'outline'}
                  onClick={() => setDisplaySettings({ ...displaySettings, theme: 'dark' })}
                >
                  <Monitor className="h-4 w-4 mr-2" />
                  Dark
                </Button>
                <Button
                  variant={displaySettings.theme === 'light' ? 'default' : 'outline'}
                  onClick={() => setDisplaySettings({ ...displaySettings, theme: 'light' })}
                >
                  <Monitor className="h-4 w-4 mr-2" />
                  Light
                </Button>
                <Button
                  variant={displaySettings.theme === 'system' ? 'default' : 'outline'}
                  onClick={() => setDisplaySettings({ ...displaySettings, theme: 'system' })}
                >
                  <Monitor className="h-4 w-4 mr-2" />
                  System
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="animations" className="flex-1">
                Enable animations
              </Label>
              <Switch
                id="animations"
                checked={displaySettings.animations}
                onCheckedChange={(checked) => setDisplaySettings({ ...displaySettings, animations: checked })}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="show-effects" className="flex-1">
                Show visual effects
              </Label>
              <Switch
                id="show-effects"
                checked={displaySettings.showEffects}
                onCheckedChange={(checked) => setDisplaySettings({ ...displaySettings, showEffects: checked })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveDisplay} className="bg-royal-gold hover:bg-royal-gold/90 text-black">
              Save Display Settings
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ProfileSettings;
