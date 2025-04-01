
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import type { UserProfile } from '@/types/user';
import TeamSelector from './TeamSelector';

interface ProfileEditorProps {
  user: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  onUpdateProfileImage: (file: File) => Promise<void>;
}

const ProfileEditor: React.FC<ProfileEditorProps> = ({
  user,
  onUpdateProfile,
  onUpdateProfileImage
}) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user.displayName || '',
    bio: user.bio || '',
    profileImage: user.profileImage || '',
    team: user.team || 'none',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setIsLoading(true);
      try {
        await onUpdateProfileImage(file);
        toast({
          title: "Profile image updated",
          description: "Your profile image has been updated successfully.",
          variant: "success"
        });
      } catch (error) {
        toast({
          title: "Error updating profile image",
          description: "There was an error updating your profile image. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const updates: Partial<UserProfile> = {
      displayName: formData.displayName,
      bio: formData.bio,
      team: formData.team,
    };
    
    try {
      await onUpdateProfile(updates);
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
        variant: "success"
      });
    } catch (error) {
      toast({
        title: "Error updating profile",
        description: "There was an error updating your profile. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleTeamChange = (team: "red" | "blue" | "green") => {
    setFormData(prev => ({ ...prev, team }));
  };
  
  return (
    <Card className="glass-morphism">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="general">
          <TabsList className="mb-6">
            <TabsTrigger value="general">General Info</TabsTrigger>
            <TabsTrigger value="profile-image">Profile Image</TabsTrigger>
            <TabsTrigger value="team">Team Affiliation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="displayName" className="text-sm font-medium">Display Name</label>
                <Input
                  id="displayName"
                  name="displayName"
                  placeholder="Your display name"
                  value={formData.displayName}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                <Textarea
                  id="bio"
                  name="bio"
                  placeholder="Tell us about yourself"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
              
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="profile-image">
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
                  <img 
                    src={formData.profileImage || '/placeholder-avatar.png'} 
                    alt="Profile" 
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Upload a new profile picture. Square images work best.
                  </p>
                  <Input
                    type="file"
                    accept="image/*"
                    disabled={isLoading}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Image URL</h3>
                <Input
                  name="profileImage"
                  placeholder="Or enter an image URL"
                  value={formData.profileImage}
                  onChange={handleInputChange}
                />
                <Button 
                  variant="outline" 
                  onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)} 
                  disabled={isLoading}
                >
                  Update Image URL
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="team">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-medium">Team Affiliation</h3>
                <p className="text-sm text-muted-foreground">
                  Choose which royal team you want to join. Your team choice impacts your available rewards and leaderboard.
                </p>
              </div>
              
              <div className="mt-4">
                <TeamSelector 
                  onTeamChange={handleTeamChange} 
                />
              </div>
              
              <Button 
                onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)} 
                disabled={isLoading}
              >
                Save Team Selection
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileEditor;
