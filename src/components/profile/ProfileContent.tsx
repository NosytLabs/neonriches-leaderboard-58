
import React from 'react';
import { UserProfile } from '@/types/user';
import ProfileViewer from '@/components/profile/ProfileViewer';
import ProfileSettings from '@/components/profile/ProfileSettings';
import ProfileAnalytics from '@/components/profile/ProfileAnalytics';
import ProfileBoost from '@/components/profile/ProfileBoost';
import MarketingProfile from '@/components/profile/MarketingProfile';
import ProfileBoostDisplay from '@/components/profile/ProfileBoostDisplay';
import { ProfileTab } from './ProfileTabNavigation';

export interface ProfileData {
  bio: string;
  images: {
    id: number;
    url: string;
    caption: string;
  }[];
  links: {
    id: number;
    url: string;
    label: string;
  }[];
  joinDate?: string;
  lastActive?: string;
  followers?: number;
  following?: number;
  views?: number;
}

interface ProfileContentProps {
  tab: ProfileTab;
  viewOnly: boolean;
  user: UserProfile;
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
  return (
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
          
          {user && user.profileBoosts && user.profileBoosts.length > 0 && (
            <ProfileBoostDisplay 
              user={user} 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
