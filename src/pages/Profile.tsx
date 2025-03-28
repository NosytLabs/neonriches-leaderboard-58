
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { useProfileData } from '@/hooks/useProfileData';
import { ProfileLoader, ProfileNotFound } from '@/components/profile/ProfilePageLoader';
import ProfileTabNavigation, { ProfileTab } from '@/components/profile/ProfileTabNavigation';
import ProfileContent from '@/components/profile/ProfileContent';
import { UserProfile } from '@/types/user';
import { ProfileData, ProfileImage } from '@/types/profile';

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  const [tab, setTab] = useState<ProfileTab>('view');
  
  const { profileData, loading, error, isOwnProfile } = useProfileData(username || '');
  
  const handleBoostProfile = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to boost a profile.",
        variant: "destructive"
      });
      return;
    }
    
    if (isOwnProfile) {
      setTab('boost');
      return;
    }
    
    toast({
      title: "Coming Soon",
      description: "Boosting other users' profiles will be available in a future update!",
    });
  };
  
  if (loading) {
    return <ProfileLoader />;
  }
  
  if (!profileData) {
    return <ProfileNotFound />;
  }
  
  // Create profile content data for the ProfileContent component
  const profileUser = profileData as UserProfile;
  const viewOnly = !isOwnProfile;
  
  // Create profile data from user profile for the ProfileContent component
  const profileContentData: ProfileData = {
    bio: profileUser.bio || '',
    images: profileUser.profileImages?.map(img => ({
      id: typeof img.id === 'string' ? parseInt(img.id) || Math.random() : img.id,
      url: img.url,
      caption: img.caption || ''
    })) || [],
    links: profileUser.socialLinks?.map((link, index) => ({
      id: index,
      url: link.url,
      label: link.platform
    })) || [],
    joinDate: profileUser.joinDate,
    lastActive: profileUser.joinedAt,
    followers: profileUser.followers,
    following: profileUser.following,
    views: profileUser.profileViews
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <title>{profileUser.username} | SpendThrone Profile</title>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <ProfileTabNavigation 
          viewOnly={viewOnly} 
          tab={tab} 
          setTab={setTab} 
        />
        
        <ProfileContent 
          tab={tab}
          viewOnly={viewOnly}
          user={user}
          profileUser={profileUser}
          profileData={profileContentData}
          handleBoostProfile={handleBoostProfile}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
