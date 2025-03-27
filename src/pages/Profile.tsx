
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import ProfileSidebar from '@/components/profile/ProfileSidebar';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileEditor from '@/components/profile/ProfileEditor';
import ProfileViewer from '@/components/profile/ProfileViewer';
import UpgradePromotion from '@/components/profile/UpgradePromotion';
import { ProfileData } from '@/types/profile';

// Mock profile data - would come from API/database in a real app
const mockProfileData: ProfileData = {
  bio: "Blockchain enthusiast and digital art collector. Exploring the frontiers of web3 and building the metaverse one transaction at a time.",
  images: [
    { id: 1, url: "https://picsum.photos/id/237/400/300", caption: "My latest NFT acquisition" },
    { id: 2, url: "https://picsum.photos/id/239/400/300", caption: "Digital art collection" },
    { id: 3, url: "https://picsum.photos/id/249/400/300", caption: "Web3 Summit 2023" },
  ],
  links: [
    { id: 1, url: "#", label: "My Crypto Portfolio" },
    { id: 2, url: "#", label: "NFT Gallery" },
    { id: 3, url: "#", label: "Personal Website" },
  ]
};

const Profile = () => {
  const navigate = useNavigate();
  const { user, signOut, updateProfile } = useAuth();
  const { toast } = useToast();
  
  const [profileData, setProfileData] = useState<ProfileData>(mockProfileData);
  const [editMode, setEditMode] = useState(false);

  if (!user) {
    navigate('/auth');
    return null;
  }

  const handleSaveProfile = (updatedData: ProfileData) => {
    setProfileData(updatedData);
    setEditMode(false);
    
    toast({
      title: "Success",
      description: "Profile updated successfully!",
    });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProfileSidebar 
                user={user} 
                onLogout={signOut}
                onUpdateProfile={updateProfile}
              />
            </div>
            
            <div className="lg:col-span-3">
              <ProfileHeader 
                title="Your Profile" 
                editMode={editMode} 
                onEditToggle={toggleEditMode}
                onSave={() => {}} // Not used directly, just for API consistency
              />
              
              {editMode ? (
                <ProfileEditor 
                  user={user}
                  profileData={profileData}
                  onSave={handleSaveProfile}
                  onCancel={() => setEditMode(false)}
                />
              ) : (
                <ProfileViewer 
                  user={user}
                  profileData={profileData}
                />
              )}
              
              {user.tier === 'free' && <UpgradePromotion />}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
