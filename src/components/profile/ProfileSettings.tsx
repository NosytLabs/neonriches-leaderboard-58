
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { UserProfile } from '@/types/user';
import { toast } from '@/hooks/use-toast';
import { Loader2, Save } from 'lucide-react';

interface ProfileSettingsProps {
  user: UserProfile;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user }) => {
  const [formData, setFormData] = useState({
    displayName: user.displayName || '',
    bio: user.bio || '',
    email: user.email || '',
    notifications: {
      email: true,
      marketing: false,
      rankChanges: true,
      teamUpdates: true
    }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked
      }
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Settings saved",
        description: "Your profile settings have been updated successfully.",
      });
    }, 1000);
  };
  
  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit}>
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
            <CardDescription>
              Manage your personal information and preferences
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    placeholder="Your display name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell others about yourself..."
                  rows={4}
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-white/70">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={formData.notifications.email}
                    onCheckedChange={(checked) => handleSwitchChange('email', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Marketing Emails</p>
                    <p className="text-sm text-white/70">Receive marketing and promotional emails</p>
                  </div>
                  <Switch
                    checked={formData.notifications.marketing}
                    onCheckedChange={(checked) => handleSwitchChange('marketing', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Rank Changes</p>
                    <p className="text-sm text-white/70">Get notified when your rank changes</p>
                  </div>
                  <Switch
                    checked={formData.notifications.rankChanges}
                    onCheckedChange={(checked) => handleSwitchChange('rankChanges', checked)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Team Updates</p>
                    <p className="text-sm text-white/70">Receive updates about your team's performance</p>
                  </div>
                  <Switch
                    checked={formData.notifications.teamUpdates}
                    onCheckedChange={(checked) => handleSwitchChange('teamUpdates', checked)}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default ProfileSettings;
