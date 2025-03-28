
import React from 'react';
import { UserProfile } from '@/types/user';
import ProfileViewer from './ProfileViewer';
import ProfileSettings from './ProfileSettings';
import ProfileBoost from './ProfileBoost';
import ProfileEditor from './ProfileEditor';
import ProfileAnalytics from './ProfileAnalytics';

export type ProfileTab = 'view' | 'edit' | 'settings' | 'boost' | 'analytics';

export interface ProfileData {
  bio: string;
  images: { id: number | string; url: string; caption?: string; }[];
  links: { id: number; url: string; label: string; }[];
  joinDate?: string;
  lastActive?: string;
  followers?: number;
  following?: number;
  views?: number;
}

interface ProfileContentProps {
  tab: ProfileTab;
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
  // Render based on the active tab
  switch (tab) {
    case 'edit':
      return <ProfileEditor user={profileUser} />;
    case 'settings':
      return <ProfileSettings user={profileUser} />;
    case 'boost':
      return <ProfileBoost />;
    case 'analytics':
      return <ProfileAnalytics profileId={profileUser.id} />;
    case 'view':
    default:
      return <ProfileViewer user={profileUser} profileData={profileData} />;
  }
};

export default ProfileContent;
