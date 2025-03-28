
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Settings, User, Image, Link2, Crown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';

interface ProfileSettingsProps {
  user: UserProfile | null;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('basic');
  
  const [bio, setBio] = useState(user?.bio || '');
  const [username, setUsername] = useState(user?.username || '');
  const [profileImage, setProfileImage] = useState(user?.profileImage || '');
  
  // For demonstration purposes - would connect to actual APIs in production
  const handleSaveBasicInfo = () => {
    toast({
      title: "Profile Updated",
      description: "Your basic information has been saved."
    });
  };
  
  const handleSaveAppearance = () => {
    toast({
      title: "Appearance Updated",
      description: "Your profile appearance settings have been saved."
    });
  };
  
  const handleSavePrivacy = () => {
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy settings have been saved."
    });
  };
  
  if (!user) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardContent className="p-6">
          <p className="text-center text-white/60">Please login to edit profile settings</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Settings size={18} className="text-royal-gold mr-2" />
          Profile Settings
        </CardTitle>
        <CardDescription>
          Customize your profile appearance and settings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="glass-morphism border-white/20 bg-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="profileImage">Profile Image URL</Label>
                <Input 
                  id="profileImage"
                  value={profileImage}
                  onChange={(e) => setProfileImage(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="glass-morphism border-white/20 bg-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell the kingdom about yourself..."
                  rows={4}
                  className="glass-morphism border-white/20 bg-transparent resize-none"
                />
                <p className="text-xs text-white/50 text-right">
                  {bio.length}/400 characters
                </p>
              </div>
              
              <Button onClick={handleSaveBasicInfo} className="w-full">
                Save Basic Information
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4">
            <div className="space-y-4">
              <div className="p-3 glass-morphism border-white/10 rounded-lg">
                <h3 className="text-sm font-medium flex items-center mb-2">
                  <Crown size={16} className="text-royal-gold mr-2" />
                  Royal Profile Effects
                </h3>
                <p className="text-sm text-white/70 mb-3">
                  Enhance your profile with royal effects and animations.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setActiveTab('appearance')}
                >
                  Manage Cosmetics
                </Button>
              </div>
              
              <div className="p-3 glass-morphism border-white/10 rounded-lg">
                <h3 className="text-sm font-medium flex items-center mb-2">
                  <Image size={16} className="text-royal-gold mr-2" />
                  Profile Images
                </h3>
                <p className="text-sm text-white/70 mb-3">
                  Add and manage images that appear on your profile.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setActiveTab('appearance')}
                >
                  Manage Images
                </Button>
              </div>
              
              <div className="p-3 glass-morphism border-white/10 rounded-lg">
                <h3 className="text-sm font-medium flex items-center mb-2">
                  <Link2 size={16} className="text-royal-gold mr-2" />
                  Profile Links
                </h3>
                <p className="text-sm text-white/70 mb-3">
                  Add social links and custom URLs to your profile.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setActiveTab('appearance')}
                >
                  Manage Links
                </Button>
              </div>
              
              <Button onClick={handleSaveAppearance} className="w-full">
                Save Appearance Settings
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-4">
            <div className="space-y-4">
              <div className="p-3 glass-morphism border-white/10 rounded-lg">
                <h3 className="text-sm font-medium flex items-center mb-2">
                  <User size={16} className="text-royal-gold mr-2" />
                  Profile Visibility
                </h3>
                <p className="text-sm text-white/70 mb-3">
                  Control who can see your profile and interaction history.
                </p>
                {/* For demonstration, actual checkboxes would be here */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Show profile to everyone</span>
                    <div className="h-4 w-8 bg-royal-gold/50 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Show spending history</span>
                    <div className="h-4 w-8 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <Button onClick={handleSavePrivacy} className="w-full">
                Save Privacy Settings
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;
