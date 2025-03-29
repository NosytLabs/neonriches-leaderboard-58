
import React from 'react';
import { UserProfile } from '@/types/user';
import useProfileBoost from '@/hooks/use-profile-boost';

interface ProfileBoostedContentProps {
  user?: UserProfile;
  children: React.ReactNode;
  className?: string;
}

const ProfileBoostedContent: React.FC<ProfileBoostedContentProps> = ({ 
  user, 
  children,
  className = ''
}) => {
  const boostManager = useProfileBoost(user);
  
  // Helper functions to adapt the return type of useProfileBoost
  const getBoostClasses = () => {
    // Return default classes if the function doesn't exist
    if (typeof boostManager.getBoostClasses !== 'function') {
      return '';
    }
    return boostManager.getBoostClasses();
  };
  
  const hasActiveBoosts = () => {
    // Default to false if the property doesn't exist
    return !!boostManager.hasActiveBoosts;
  };
  
  // If no user or no active boosts, just render children normally
  if (!user || !hasActiveBoosts()) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <div className={`${getBoostClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default ProfileBoostedContent;
