
import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/user';
import { trackProfileInteraction } from '@/services/walletService';
import { ProfileData } from '@/components/profile/ProfileContent';

export const useProfileData = (username: string | undefined, currentUser: UserProfile | null) => {
  const [loading, setLoading] = useState(true);
  const [profileUser, setProfileUser] = useState<UserProfile | null>(currentUser);
  const [viewOnly, setViewOnly] = useState(false);
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

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      
      try {
        if (username && username !== currentUser?.username) {
          setViewOnly(true);
          
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
            
            if (currentUser) {
              trackProfileInteraction(mockUser.id, 'view', 'profile_page');
            }
          }, 1000);
        } else {
          setViewOnly(false);
          setProfileUser(currentUser);
          
          setTimeout(() => {
            const ownProfileData = {
              bio: currentUser?.bio || "Share your story with the kingdom...",
              images: [],
              links: [],
              joinDate: currentUser?.joinDate ? new Date(currentUser.joinDate).toLocaleDateString() : new Date().toLocaleDateString(),
              lastActive: new Date().toLocaleDateString(),
              followers: Math.floor(Math.random() * 100),
              following: Math.floor(Math.random() * 50),
              views: currentUser?.profileViews || 0
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
  }, [username, currentUser]);

  return {
    loading,
    profileUser,
    viewOnly,
    profileData
  };
};
