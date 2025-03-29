
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import ProfileContent, { ProfileTab } from '@/components/profile/ProfileContent';
import ProfileTabNavigation from '@/components/profile/ProfileTabNavigation';
import '../styles/animations/enhanced-animations.css';

type ProfilePageState = {
  loading: boolean;
  error: string | null;
  profileData: UserProfile | null;
  isOwnProfile: boolean;
};

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Get initial tab from URL search params if available
  const initialTab = searchParams.get('tab') as ProfileTab || 'overview';
  const [tab, setTab] = useState<ProfileTab>(initialTab);
  
  // Set up profile state
  const [state, setState] = useState<ProfilePageState>({
    loading: true,
    error: null,
    profileData: null,
    isOwnProfile: false
  });
  
  useEffect(() => {
    const fetchProfileData = async () => {
      // This is a mock implementation - in a real app, you would fetch the profile data from an API
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        
        // If no username is provided, or the username matches the current user, show current user's profile
        if (!username || (user && user.username === username)) {
          if (!user) {
            toast({
              title: "Authentication Required",
              description: "Please sign in to view your profile",
              variant: "destructive"
            });
            setState({
              loading: false,
              error: "Authentication required",
              profileData: null,
              isOwnProfile: false
            });
            return;
          }
          
          setState({
            loading: false,
            error: null,
            profileData: user,
            isOwnProfile: true
          });
          return;
        }
        
        // Mock fetching profile data for a different user
        // In a real app, this would be an API call
        setTimeout(() => {
          // For demo purposes, let's create a mock user profile
          const mockProfile: UserProfile = {
            id: '123456',
            username: username || 'royaluser',
            displayName: 'Royal User',
            email: 'user@example.com',
            bio: 'A royal member of the SpendThrone community',
            createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days ago
            lastActive: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
            rank: 42,
            team: 'Crimson',
            role: 'user',
            totalSpent: 1500,
            walletBalance: 350
          };
          
          setState({
            loading: false,
            error: null,
            profileData: mockProfile,
            isOwnProfile: false
          });
        }, 800);
      } catch (error) {
        setState({
          loading: false,
          error: "Failed to load profile data",
          profileData: null,
          isOwnProfile: false
        });
      }
    };
    
    fetchProfileData();
  }, [username, user, toast]);
  
  useEffect(() => {
    // When tab changes, update the URL without reloading the page
    const url = new URL(window.location.href);
    if (tab === 'overview') {
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
    
    toast({
      title: "Coming Soon",
      description: "Profile boosting will be available in a future update!",
    });
  };
  
  const { loading, error, profileData, isOwnProfile } = state;
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-24">
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-royal-gold mx-auto mb-4"></div>
              <p className="text-lg text-white/70">Loading royal profile data...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (error || !profileData) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-24">
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="text-center glass-morphism border-white/10 p-8 rounded-lg max-w-md">
              <h2 className="text-2xl font-bold mb-4">Profile Not Found</h2>
              <p className="text-white/70 mb-6">The royal profile you're looking for doesn't exist or is unavailable.</p>
              <Button onClick={() => window.history.back()}>Return to Previous Page</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{profileData.username} | Royal Profile - SpendThrone</title>
        <meta name="description" content={`View ${profileData.username}'s royal profile on SpendThrone, current rank #${profileData.rank}.`} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="animate-royal-entrance">
          <ProfileTabNavigation 
            viewOnly={!isOwnProfile} 
            tab={tab as any} 
            setTab={setTab as any} 
          />
          
          <ProfileContent 
            user={profileData}
            isOwnProfile={isOwnProfile}
            activeTab={tab}
            onTabChange={setTab}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
