import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Crown, User, Eye, Bell, Link } from 'lucide-react';
import { UserProfile } from '@/types/user';
import { useToast } from '@/hooks/use-toast';

interface ProfileSettingsProps {
  user: UserProfile;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("basic");
  const [isLoading, setIsLoading] = useState(false);
  
  // Form states with defaults from user settings or sensible fallbacks
  const [basicInfo, setBasicInfo] = useState({
    displayName: user.displayName || user.username,
    bio: user.bio || '',
    email: user.email
  });
  
  const [appearance, setAppearance] = useState({
    showRank: user.settings?.showRank !== false,
    showSpending: user.settings?.showSpending !== false,
    showTeam: user.settings?.showTeam !== false
  });
  
  const [privacy, setPrivacy] = useState({
    profileVisibility: user.settings?.profileVisibility || 'public',
    allowProfileLinks: user.settings?.allowProfileLinks !== false,
    showEmailOnProfile: user.settings?.showEmailOnProfile || false
  });
  
  const [notifications, setNotifications] = useState({
    emailNotifications: user.settings?.emailNotifications !== false,
    rankChangeAlerts: user.settings?.rankChangeAlerts !== false,
    shameAlerts: user.settings?.shameAlerts || false,
    newFollowerAlerts: user.settings?.newFollowerAlerts !== false
  });
  
  // Handle input changes for basic info
  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBasicInfo(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle changes for appearance toggles
  const handleAppearanceChange = (field: string, value: boolean) => {
    setAppearance(prev => ({ ...prev, [field]: value }));
  };
  
  // Handle changes for privacy toggles
  const handlePrivacyChange = (field: string, value: boolean | string) => {
    setPrivacy(prev => ({ ...prev, [field]: value }));
  };
  
  // Handle changes for notification toggles
  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }));
  };
  
  // Save basic info
  const handleSaveBasicInfo = async () => {
    setIsLoading(true);
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Settings Updated",
        description: "Your basic information has been updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update settings. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Save appearance settings
  const handleSaveAppearance = async () => {
    setIsLoading(true);
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Appearance Updated",
        description: "Your profile appearance settings have been updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update appearance settings. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Save privacy settings
  const handleSavePrivacy = async () => {
    setIsLoading(true);
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Privacy Settings Updated",
        description: "Your privacy settings have been updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update privacy settings. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Save notification settings
  const handleSaveNotifications = async () => {
    setIsLoading(true);
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Notification Settings Updated",
        description: "Your notification preferences have been updated.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update notification settings. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Profile Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="basic" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="basic" className="flex items-center gap-2">
              <User size={14} />
              <span>Basic</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Eye size={14} />
              <span>Appearance</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Link size={14} />
              <span>Links & Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell size={14} />
              <span>Notifications</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input 
                id="displayName" 
                name="displayName"
                placeholder="Your display name" 
                value={basicInfo.displayName}
                onChange={handleBasicInfoChange}
                className="glass-morphism border-white/10"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input 
                id="bio" 
                name="bio"
                placeholder="A short bio about yourself" 
                value={basicInfo.bio}
                onChange={handleBasicInfoChange}
                className="glass-morphism border-white/10"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                placeholder="your@email.com" 
                value={basicInfo.email}
                onChange={handleBasicInfoChange}
                className="glass-morphism border-white/10"
              />
            </div>
            
            <Button 
              className="mt-4 w-full" 
              disabled={isLoading}
              onClick={handleSaveBasicInfo}
            >
              {isLoading ? "Saving..." : "Save Basic Info"}
            </Button>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="showRank">Show Rank</Label>
                <p className="text-sm text-white/60">Display your rank on your profile</p>
              </div>
              <Switch 
                id="showRank" 
                checked={appearance.showRank}
                onCheckedChange={(checked) => handleAppearanceChange('showRank', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="showSpending">Show Spending</Label>
                <p className="text-sm text-white/60">Display your total spending on your profile</p>
              </div>
              <Switch 
                id="showSpending" 
                checked={appearance.showSpending}
                onCheckedChange={(checked) => handleAppearanceChange('showSpending', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="showTeam">Show Team</Label>
                <p className="text-sm text-white/60">Display your team affiliation on your profile</p>
              </div>
              <Switch 
                id="showTeam" 
                checked={appearance.showTeam}
                onCheckedChange={(checked) => handleAppearanceChange('showTeam', checked)}
              />
            </div>
            
            <Button 
              className="mt-4 w-full" 
              disabled={isLoading}
              onClick={handleSaveAppearance}
            >
              {isLoading ? "Saving..." : "Save Appearance Settings"}
            </Button>
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="allowProfileLinks">Allow Social Links</Label>
                <p className="text-sm text-white/60">Allow social media links on your profile</p>
              </div>
              <Switch 
                id="allowProfileLinks" 
                checked={privacy.allowProfileLinks}
                onCheckedChange={(checked) => handlePrivacyChange('allowProfileLinks', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="showEmailOnProfile">Show Email</Label>
                <p className="text-sm text-white/60">Show your email address on your profile</p>
              </div>
              <Switch 
                id="showEmailOnProfile" 
                checked={privacy.showEmailOnProfile}
                onCheckedChange={(checked) => handlePrivacyChange('showEmailOnProfile', checked)}
              />
            </div>
            
            <Button 
              className="mt-4 w-full" 
              disabled={isLoading}
              onClick={handleSavePrivacy}
            >
              {isLoading ? "Saving..." : "Save Privacy Settings"}
            </Button>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="emailNotifications">Email Notifications</Label>
                <p className="text-sm text-white/60">Receive important updates via email</p>
              </div>
              <Switch 
                id="emailNotifications" 
                checked={notifications.emailNotifications}
                onCheckedChange={(checked) => handleNotificationChange('emailNotifications', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="rankChangeAlerts">Rank Change Alerts</Label>
                <p className="text-sm text-white/60">Get notified when your rank changes</p>
              </div>
              <Switch 
                id="rankChangeAlerts" 
                checked={notifications.rankChangeAlerts}
                onCheckedChange={(checked) => handleNotificationChange('rankChangeAlerts', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="shameAlerts">Shame Alerts</Label>
                <p className="text-sm text-white/60">Get notified when someone shames you</p>
              </div>
              <Switch 
                id="shameAlerts" 
                checked={notifications.shameAlerts}
                onCheckedChange={(checked) => handleNotificationChange('shameAlerts', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="newFollowerAlerts">New Follower Alerts</Label>
                <p className="text-sm text-white/60">Get notified when someone follows you</p>
              </div>
              <Switch 
                id="newFollowerAlerts" 
                checked={notifications.newFollowerAlerts}
                onCheckedChange={(checked) => handleNotificationChange('newFollowerAlerts', checked)}
              />
            </div>
            
            <Button 
              className="mt-4 w-full" 
              disabled={isLoading}
              onClick={handleSaveNotifications}
            >
              {isLoading ? "Saving..." : "Save Notification Settings"}
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;
