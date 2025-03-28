
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

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  const [tab, setTab] = useState<ProfileTab>('view');
  
  const { loading, profileUser, viewOnly, profileData } = useProfileData(username || '', user);
  
  const handleBoostProfile = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to boost a profile.",
        variant: "destructive"
      });
      return;
    }
    
    if (!viewOnly) {
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
  
  if (!profileUser) {
    return <ProfileNotFound />;
  }
  
  // Create profile data from user profile for the ProfileContent component
  const profileContentData = {
    bio: profileUser.bio || '',
    images: profileUser.profileImages || [],
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
      <title>{profileUser.username} | P2W.fun Profile</title>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <ProfileTabNavigation 
          viewOnly={viewOnly || false} 
          tab={tab} 
          setTab={setTab} 
        />
        
        <ProfileContent 
          tab={tab}
          viewOnly={viewOnly || false}
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
