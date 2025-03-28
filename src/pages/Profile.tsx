
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Edit, User, ChevronLeft } from 'lucide-react';
import ProfileViewer from '@/components/profile/ProfileViewer';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import ProfileSettings from '@/components/profile/ProfileSettings';
import { trackProfileInteraction } from '@/services/walletService';
import ProfileBoost from '@/components/profile/ProfileBoost';
import ProfileAnalytics from '@/components/profile/ProfileAnalytics';
import MarketingProfile from '@/components/profile/MarketingProfile';
import { useToast } from '@/hooks/use-toast';

interface ProfileImage {
  id: number;
  url: string;
  caption: string;
}

interface ProfileLink {
  id: number;
  url: string;
  label: string;
}

interface ProfileData {
  bio: string;
  images: ProfileImage[];
  links: ProfileLink[];
  joinDate?: string;
  lastActive?: string;
  followers?: number;
  following?: number;
  views?: number;
}

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [tab, setTab] = useState<'view' | 'settings' | 'analytics' | 'marketing' | 'boost'>('view');
  const [loading, setLoading] = useState(true);
  const [profileUser, setProfileUser] = useState(user);
  const [viewOnly, setViewOnly] = useState(false);
  
  // Mock profile data
  const [profileData, setProfileData] = useState<ProfileData>({
    bio: "",
    images: [],
    links: [],
    joinDate: "",
    lastActive: "",
    followers: 0,
    following: 0,
    views: 0
  });
  
  // Fetch profile data - in a real app, this would be an API call
  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      
      try {
        if (username && username !== user?.username) {
          // Viewing someone else's profile
          setViewOnly(true);
          
          // Mock fetching another user's data
          // In a real app, this would call an API
          setTimeout(() => {
            const mockUser = {
              id: "other-user-id",
              username: username,
              email: "",
              profileImage: `https://source.unsplash.com/random/300x300?portrait&${username}`,
              amountSpent: Math.floor(Math.random() * 5000),
              walletBalance: 0,
              rank: Math.floor(Math.random() * 100) + 1,
              spendStreak: Math.floor(Math.random() * 10),
              tier: "fish",
              team: ["red", "green", "blue"][Math.floor(Math.random() * 3)],
              gender: "noble",
              joinDate: new Date(Date.now() - Math.random() * 10000000000),
              cosmetics: {
                borders: [],
                colors: [],
                fonts: [],
                emojis: [],
                titles: []
              },
              socialLinks: []
            };
            
            setProfileUser(mockUser as any);
            
            const mockProfileData = {
              bio: `This is ${username}'s profile. They are a noble member of the kingdom.`,
              images: [
                {
                  id: 1,
                  url: "https://source.unsplash.com/random/600x400?medieval",
                  caption: "Royal Castle"
                }
              ],
              links: [
                {
                  id: 1,
                  url: "https://example.com",
                  label: "My Website"
                }
              ],
              joinDate: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
              lastActive: new Date().toLocaleDateString(),
              followers: Math.floor(Math.random() * 100),
              following: Math.floor(Math.random() * 50),
              views: Math.floor(Math.random() * 500)
            };
            
            setProfileData(mockProfileData);
            setLoading(false);
            
            // Track this profile view
            if (user) {
              trackProfileInteraction(mockUser.id, 'view', 'profile_page');
            }
          }, 1000);
        } else {
          // Viewing own profile
          setViewOnly(false);
          setProfileUser(user);
          
          // Mock loading own profile data
          setTimeout(() => {
            const ownProfileData = {
              bio: user?.bio || "Share your story with the kingdom...",
              images: [],
              links: [],
              joinDate: user?.joinDate ? new Date(user.joinDate).toLocaleDateString() : new Date().toLocaleDateString(),
              lastActive: new Date().toLocaleDateString(),
              followers: Math.floor(Math.random() * 100),
              following: Math.floor(Math.random() * 50),
              views: user?.profileViews || 0
            };
            
            setProfileData(ownProfileData);
            setLoading(false);
          }, 800);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false);
      }
    };
    
    fetchProfileData();
  }, [username, user]);
  
  const handleBoostProfile = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to boost a profile.",
        variant: "destructive"
      });
      return;
    }
    
    // Switch to boost tab if it's your own profile
    if (!viewOnly) {
      setTab('boost');
      return;
    }
    
    // Implement boosting another user's profile
    toast({
      title: "Coming Soon",
      description: "Boosting other users' profiles will be available in a future update!",
    });
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-24">
          <div className="flex items-center justify-center h-64">
            <div className="h-12 w-12 border-4 border-t-transparent border-royal-gold rounded-full animate-spin"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // If profile doesn't exist or user isn't found
  if (!profileUser) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-8 pt-24">
          <Card className="max-w-lg mx-auto">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <User size={64} className="mx-auto text-white/30" />
                <h1 className="text-2xl font-bold">Profile Not Found</h1>
                <p className="text-white/60">
                  The profile you're looking for doesn't exist or may have been removed.
                </p>
                <Button onClick={() => navigate('/')}>
                  Return to Homepage
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{profileUser.username} | P2W.fun Profile</title>
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="outline"
            className="glass-morphism border-white/10"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={16} className="mr-1" />
            Back
          </Button>
          
          {!viewOnly && (
            <div className="space-x-3">
              <Button 
                variant={tab === 'view' ? "default" : "outline"}
                className={tab === 'view' ? 'bg-royal-gold text-black' : 'glass-morphism border-white/10'}
                onClick={() => setTab('view')}
              >
                Profile
              </Button>
              
              <Button 
                variant={tab === 'settings' ? "default" : "outline"}
                className={tab === 'settings' ? 'bg-royal-gold text-black' : 'glass-morphism border-white/10'}
                onClick={() => setTab('settings')}
              >
                <Edit size={16} className="mr-1" />
                Edit
              </Button>
              
              <Button 
                variant={tab === 'analytics' ? "default" : "outline"}
                className={tab === 'analytics' ? 'bg-royal-gold text-black' : 'glass-morphism border-white/10'}
                onClick={() => setTab('analytics')}
              >
                Analytics
              </Button>
              
              <Button 
                variant={tab === 'boost' ? "default" : "outline"}
                className={tab === 'boost' ? 'bg-royal-gold text-black' : 'glass-morphism border-white/10'}
                onClick={() => setTab('boost')}
              >
                Boost
              </Button>
              
              <Button 
                variant={tab === 'marketing' ? "default" : "outline"}
                className={tab === 'marketing' ? 'bg-royal-gold text-black' : 'glass-morphism border-white/10'}
                onClick={() => setTab('marketing')}
              >
                Marketing
              </Button>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`${tab !== 'view' && !viewOnly ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
            {tab === 'view' && profileUser && (
              <ProfileViewer 
                user={profileUser} 
                profileData={profileData}
              />
            )}
            
            {tab === 'settings' && !viewOnly && (
              <ProfileSettings user={user} />
            )}
            
            {tab === 'analytics' && !viewOnly && (
              <ProfileAnalytics user={user} />
            )}
            
            {tab === 'boost' && !viewOnly && (
              <ProfileBoost user={user} />
            )}
            
            {tab === 'marketing' && !viewOnly && (
              <MarketingProfile 
                user={user} 
                onBoostProfile={handleBoostProfile} 
              />
            )}
          </div>
          
          {tab !== 'view' && !viewOnly && (
            <div className="lg:col-span-1 space-y-6">
              <MarketingProfile 
                user={user} 
                onBoostProfile={handleBoostProfile} 
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
