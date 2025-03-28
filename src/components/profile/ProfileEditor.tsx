
import React, { useState } from 'react';
import { UserProfile } from '@/types/user';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, User, Image, Link as LinkIcon, Palette, Settings, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import BasicInfoEditor from './editor/BasicInfoEditor';
import ImagesEditor from './editor/ImagesEditor';
import SocialMediaLinksEditor from './editor/SocialMediaLinksEditor';
import AppearanceEditor from './editor/AppearanceEditor';
import TeamSelector from '@/components/teams/TeamSelector';
import { SocialLink } from '@/types/user';
import { ProfileImage } from '@/types/profile';

interface ProfileEditorProps {
  user: UserProfile;
}

type GenderType = 'king' | 'queen' | 'neutral' | 'jester' | 'noble';

const ProfileEditor: React.FC<ProfileEditorProps> = ({ user }) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("basic-info");
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [bio, setBio] = useState(user.bio || '');
  const [gender, setGender] = useState<GenderType>((user.gender as GenderType) || 'neutral');
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>(user.socialLinks || []);
  const [profileImages, setProfileImages] = useState<ProfileImage[]>(
    user.profileImages || []
  );
  const [selectedTeam, setSelectedTeam] = useState<'red' | 'green' | 'blue' | null>(user.team || null);
  const [isSaving, setIsSaving] = useState(false);
  
  const handleGenderChange = (value: GenderType) => {
    setGender(value);
  };
  
  const handleTeamChange = (team: 'red' | 'green' | 'blue' | null) => {
    setSelectedTeam(team);
  };
  
  const handleSaveProfile = async () => {
    setIsSaving(true);
    try {
      // In a real app, this would make an API call
      setTimeout(() => {
        toast({
          title: "Profile Updated",
          description: "Your royal profile has been successfully updated.",
        });
        setIsSaving(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Update Failed",
        description: "There was an error updating your profile.",
        variant: "destructive"
      });
      setIsSaving(false);
    }
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Crown className="mr-2 h-5 w-5 text-royal-gold" />
          Edit Your Royal Profile
        </CardTitle>
        <CardDescription>
          Customize your profile to showcase your digital nobility
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="glass-morphism w-full border-white/10 bg-transparent">
            <TabsTrigger value="basic-info" className="data-[state=active]:bg-white/10">
              <User className="h-4 w-4 mr-2" />
              Basic Info
            </TabsTrigger>
            <TabsTrigger value="images" className="data-[state=active]:bg-white/10">
              <Image className="h-4 w-4 mr-2" />
              Images
            </TabsTrigger>
            <TabsTrigger value="social" className="data-[state=active]:bg-white/10">
              <LinkIcon className="h-4 w-4 mr-2" />
              Social Links
            </TabsTrigger>
            <TabsTrigger value="appearance" className="data-[state=active]:bg-white/10">
              <Palette className="h-4 w-4 mr-2" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-white/10">
              <Shield className="h-4 w-4 mr-2" />
              Royal House
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic-info" className="space-y-4">
            <BasicInfoEditor 
              user={user}
              displayName={displayName}
              bio={bio}
              gender={gender}
              onDisplayNameChange={setDisplayName}
              onBioChange={setBio}
              onGenderChange={handleGenderChange}
            />
          </TabsContent>
          
          <TabsContent value="images" className="space-y-4">
            <ImagesEditor 
              user={user}
              images={profileImages}
              onImagesChange={setProfileImages}
            />
          </TabsContent>
          
          <TabsContent value="social" className="space-y-4">
            <SocialMediaLinksEditor 
              user={user}
              socialLinks={socialLinks}
              onLinksChange={setSocialLinks}
            />
          </TabsContent>
          
          <TabsContent value="appearance" className="space-y-4">
            <AppearanceEditor user={user} />
          </TabsContent>
          
          <TabsContent value="team" className="space-y-4">
            <TeamSelector 
              team={selectedTeam} 
              onTeamChange={handleTeamChange} 
            />
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 flex justify-end">
          <Button 
            onClick={handleSaveProfile}
            className="bg-royal-gold hover:bg-royal-gold/90 text-black"
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Royal Profile"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileEditor;
