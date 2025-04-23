
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import type { UserProfile } from '@/types/user';
import ProfileImageEditor from './editor/ProfileImageEditor';
import TeamEditor from './editor/TeamEditor';

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
    team: (user.team as "red" | "blue" | "green") || 'red',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleProfileImageChange = (profileImage: string) => {
    setFormData(prev => ({ ...prev, profileImage }));
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
            <ProfileImageEditor
              user={user}
              profileImage={formData.profileImage}
              onProfileImageChange={handleProfileImageChange}
              onProfileImageUpload={onUpdateProfileImage}
            />
          </TabsContent>
          
          <TabsContent value="team">
            <TeamEditor 
              team={formData.team as "red" | "blue" | "green"}
              onTeamChange={handleTeamChange}
              onSave={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}
              isLoading={isLoading}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileEditor;
