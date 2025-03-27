
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { UserProfile } from '@/contexts/AuthContext';
import { ProfileData } from '@/types/profile';
import BioEditor from './editor/BioEditor';
import ImagesEditor from './editor/ImagesEditor';
import LinksEditor from './editor/LinksEditor';

interface ProfileEditorProps {
  user: UserProfile;
  profileData: ProfileData;
  onSave: (data: ProfileData) => void;
  onCancel: () => void;
}

const ProfileEditor = ({ user, profileData, onSave, onCancel }: ProfileEditorProps) => {
  const [bio, setBio] = useState(profileData.bio);
  const [images, setImages] = useState(profileData.images);
  const [links, setLinks] = useState(profileData.links);

  const handleSaveProfile = () => {
    const updatedProfileData = {
      bio,
      images,
      links
    };
    
    onSave(updatedProfileData);
  };

  return (
    <Card className="glass-morphism border-white/10">
      <CardContent className="pt-6">
        <Tabs defaultValue="info">
          <TabsList className="glass-morphism border-white/10 mb-6">
            <TabsTrigger value="info">Basic Info</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="links">Links</TabsTrigger>
          </TabsList>
          
          <TabsContent value="info">
            <BioEditor 
              user={user} 
              bio={bio} 
              onBioChange={setBio} 
              onSave={handleSaveProfile} 
            />
          </TabsContent>
          
          <TabsContent value="images">
            <ImagesEditor 
              user={user} 
              images={images} 
              onImagesChange={setImages} 
            />
          </TabsContent>
          
          <TabsContent value="links">
            <LinksEditor 
              user={user} 
              links={links} 
              onLinksChange={setLinks} 
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProfileEditor;
