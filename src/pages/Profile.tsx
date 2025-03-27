
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

import ProfileSidebar from '@/components/profile/ProfileSidebar';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileEditor from '@/components/profile/ProfileEditor';
import ProfileViewer from '@/components/profile/ProfileViewer';
import UpgradePromotion from '@/components/profile/UpgradePromotion';
import SubscriptionManagement from '@/components/profile/SubscriptionManagement';
import { ProfileData } from '@/types/profile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserCog, CreditCard, ShieldAlert, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const { user, logout, updateUserProfile, subscription } = useAuth();
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const [profileData, setProfileData] = useState<ProfileData>(mockProfileData);
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [showSidebar, setShowSidebar] = useState(!isMobile);

  if (!user) {
    navigate('/auth');
    return null;
  }

  const handleSaveProfile = async (updatedData: ProfileData) => {
    setProfileData(updatedData);
    setEditMode(false);
    
    toast({
      title: "Success",
      description: "Profile updated successfully!",
    });
    
    return Promise.resolve(); // Return a Promise to match the expected type
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    return Promise.resolve(); // Return a Promise to match the expected type
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    return Promise.resolve(); // Return a Promise to match the expected type
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Mobile toggle sidebar button */}
            {isMobile && (
              <div className="flex justify-between items-center mb-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="glass-morphism border-white/10"
                  onClick={toggleSidebar}
                >
                  {showSidebar ? <ArrowLeft size={16} /> : <UserCog size={16} />}
                  <span className="ml-2">{showSidebar ? 'Back' : 'Profile Menu'}</span>
                </Button>
                
                <h1 className="text-xl font-semibold">Your Profile</h1>
              </div>
            )}
            
            {/* Sidebar */}
            {(showSidebar || !isMobile) && (
              <div className={`${isMobile ? 'w-full' : 'lg:w-1/4'} ${isMobile && showSidebar ? 'block' : ''} ${isMobile && !showSidebar ? 'hidden' : ''}`}>
                <ProfileSidebar 
                  user={user} 
                  onLogout={() => {
                    logout();
                    return Promise.resolve();
                  }}
                  onUpdateProfile={() => {
                    updateUserProfile({}); 
                    return Promise.resolve();
                  }}
                />
              </div>
            )}
            
            {/* Main content */}
            <div className={`${isMobile && showSidebar ? 'hidden' : 'block'} lg:flex-1`}>
              <Tabs value={activeTab} onValueChange={handleTabChange}>
                <TabsList className="glass-morphism border-white/10 w-full grid grid-cols-3">
                  <TabsTrigger value="profile" className="data-[state=active]:bg-white/10">
                    <UserCog className="h-4 w-4 mr-2" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="subscription" className="data-[state=active]:bg-white/10">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Subscription
                  </TabsTrigger>
                  <TabsTrigger value="security" className="data-[state=active]:bg-white/10">
                    <ShieldAlert className="h-4 w-4 mr-2" />
                    Security
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="mt-6">
                  <ProfileHeader 
                    title="Your Profile" 
                    editMode={editMode} 
                    onEditToggle={toggleEditMode}
                    onSave={() => Promise.resolve()}
                  />
                  
                  {editMode ? (
                    <ProfileEditor 
                      user={user}
                      profileData={profileData}
                      onSave={handleSaveProfile}
                      onCancel={() => {
                        setEditMode(false);
                        return Promise.resolve();
                      }}
                    />
                  ) : (
                    <ProfileViewer 
                      user={user}
                      profileData={profileData}
                    />
                  )}
                  
                  {user.tier === 'free' && !subscription && <UpgradePromotion />}
                </TabsContent>
                
                <TabsContent value="subscription" className="mt-6">
                  <ProfileHeader 
                    title="Subscription Management" 
                    subtitle="Manage your subscription and billing details"
                    onEditToggle={() => Promise.resolve()}
                    onSave={() => Promise.resolve()}
                    showEditButton={false}
                  />
                  
                  <SubscriptionManagement />
                </TabsContent>
                
                <TabsContent value="security" className="mt-6">
                  <ProfileHeader 
                    title="Security Settings" 
                    subtitle="Manage your account security and authentication"
                    onEditToggle={() => Promise.resolve()}
                    onSave={() => Promise.resolve()}
                    showEditButton={false}
                  />
                  
                  <div className="glass-morphism border-white/10 rounded-xl p-6 space-y-4">
                    <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
                    <p className="text-white/70">
                      Enhance your account security by enabling two-factor authentication.
                      Coming soon in the next update.
                    </p>
                    
                    <div className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">MFA Status</h4>
                        <p className="text-sm text-white/60">Two-factor authentication is currently disabled.</p>
                      </div>
                      <button className="px-3 py-1 rounded-md bg-white/10 text-sm cursor-not-allowed opacity-50">
                        Enable MFA
                      </button>
                    </div>
                    
                    <h3 className="text-lg font-semibold mt-6">Active Sessions</h3>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-sm text-white/70">
                        You currently have 1 active session on this device.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
