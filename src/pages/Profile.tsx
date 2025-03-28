
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { useProfileData } from '@/hooks/useProfileData';
import { ProfileLoader, ProfileNotFound } from '@/components/profile/ProfilePageLoader';
import ProfileTabNavigation, { ProfileTab } from '@/components/profile/ProfileTabNavigation';
import ProfileContent, { ProfileData } from '@/components/profile/ProfileContent';
import { UserProfile } from '@/types/user';
import { Helmet } from 'react-helmet-async';
import '../styles/animations/enhanced-animations.css';

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Get initial tab from URL search params if available
  const initialTab = searchParams.get('tab') as ProfileTab || 'view';
  const [tab, setTab] = useState<ProfileTab>(initialTab);
  
  const { profileData, loading, error, isOwnProfile } = useProfileData(username || '');
  
  useEffect(() => {
    // When tab changes, update the URL without reloading the page
    const url = new URL(window.location.href);
    if (tab === 'view') {
      url.searchParams.delete('tab');
    } else {
      url.searchParams.set('tab', tab);
    }
    window.history.replaceState({}, '', url.toString());
  }, [tab]);
  
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
      id: img.id,
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
    followers: profileUser.followers || 0,
    following: profileUser.following || 0,
    views: profileUser.profileViews || 0
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{profileUser.username} | Royal Profile - SpendThrone</title>
        <meta name="description" content={`View ${profileUser.username}'s royal profile on SpendThrone, current rank #${profileUser.rank}.`} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="animate-royal-entrance">
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
