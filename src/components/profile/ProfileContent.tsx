
import React from 'react';
import { UserProfile } from '@/types/user';
import ProfileViewer from './ProfileViewer';
import ProfileEditor from './ProfileEditor';
import ProfileStats from './ProfileStats';
import ProfileMarketingFeatures from './ProfileMarketingFeatures';
import ProfileBoost from './ProfileBoost';
import '../../styles/animations/enhanced-animations.css';

export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
}

export interface ProfileLink {
  id: string | number;
  url: string;
  label: string;
}

export interface ProfileData {
  bio?: string;
  images?: ProfileImage[];
  links?: ProfileLink[];
  joinDate?: string;
  lastActive?: string;
  followers?: number;
  following?: number;
  views?: number;
}

interface ProfileContentProps {
  tab: 'view' | 'edit' | 'stats' | 'boost' | 'marketing';
  viewOnly: boolean;
  user: UserProfile | null;
  profileUser: UserProfile;
  profileData: ProfileData;
  handleBoostProfile: () => void;
}

const ProfileContent: React.FC<ProfileContentProps> = ({
  tab,
  viewOnly,
  user,
  profileUser,
  profileData,
  handleBoostProfile
}) => {
  const isOwnProfile = user?.id === profileUser.id;
  
  // Render different content based on the selected tab
  const renderContent = () => {
    switch(tab) {
      case 'edit':
        return (
          <ProfileEditor 
            user={user} 
            profileUser={profileUser} 
            profileData={profileData} 
          />
        );
      case 'stats':
        return <ProfileStats user={profileUser} />;
      case 'boost':
        return <ProfileBoost />;
      case 'marketing':
        return (
          <ProfileMarketingFeatures
            user={profileUser}
            onBoostProfile={handleBoostProfile}
          />
        );
      case 'view':
      default:
        return <ProfileViewer user={profileUser} profileData={profileData} />;
    }
  };
  
  return (
    <div className="animate-royal-entrance">
      {renderContent()}
      
      {/* Marketing features teaser for own profile */}
      {isOwnProfile && tab === 'view' && (
        <div className="mt-6 p-4 glass-morphism border border-royal-gold/20 rounded-lg animate-profile-pulse">
          <h3 className="text-lg font-semibold flex items-center mb-2">
            <span className="w-5 h-5 mr-2 inline-flex items-center justify-center rounded-full bg-royal-gold/20">
              <span className="text-royal-gold text-xs">✨</span>
            </span>
            Enhance Your Royal Presence
          </h3>
          <p className="text-sm text-white/70 mb-3">
            Your profile is your walking billboard in the SpendThrone realm. 
            Click below to access marketing features and boost your visibility.
          </p>
          <button 
            onClick={() => window.location.href = `/profile/${profileUser.username}?tab=marketing`}
            className="text-sm px-4 py-2 bg-royal-gold/20 hover:bg-royal-gold/30 text-royal-gold rounded-md transition-colors"
          >
            View Marketing Features
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
