
import React from 'react';
import { UserProfile } from '@/types/user';
import { useProfileBoost } from '@/hooks/use-profile-boost';
import '../../styles/profile-boost.css';

interface ProfileBoostedContentProps {
  user: UserProfile;
  children: React.ReactNode;
  className?: string;
  type?: 'text' | 'card' | 'container';
}

/**
 * Component that wraps content and applies active profile boost effects
 */
const ProfileBoostedContent: React.FC<ProfileBoostedContentProps> = ({
  user,
  children,
  className = '',
  type = 'text'
}) => {
  // Get all active effects if the user has profile boosts
  const getActiveEffects = () => {
    if (!user.profileBoosts || !Array.isArray(user.profileBoosts)) {
      return [];
    }
    
    const currentTime = Date.now();
    const activeBoosts = user.profileBoosts.filter(boost => 
      boost.endTime > currentTime
    );
    
    // Return class names for active effects
    return activeBoosts.map(boost => {
      switch (boost.effectId) {
        case 'glow':
          return 'royal-glow';
        case 'rainbow':
          return 'royal-rainbow-text';
        case 'pulse':
          return 'royal-pulse';
        case 'sparkle':
          return 'royal-sparkle';
        case 'crown':
          return 'royal-crown';
        case 'shimmer':
          return 'royal-shimmer';
        case 'flames':
          return 'royal-flames';
        case 'banner':
          return 'royal-banner';
        default:
          return '';
      }
    });
  };
  
  // Get the appropriate container class based on type
  const getContainerClass = () => {
    switch (type) {
      case 'card':
        return 'boosted-profile-card';
      case 'container':
        return 'profile-boost-container';
      case 'text':
      default:
        return '';
    }
  };
  
  // Combine all classes
  const effectClasses = getActiveEffects().join(' ');
  const containerClass = getContainerClass();
  const finalClassName = `${containerClass} ${effectClasses} ${className}`.trim();
  
  if (!user.profileBoosts || user.profileBoosts.length === 0) {
    return <>{children}</>;
  }
  
  return (
    <div className={finalClassName}>
      {children}
    </div>
  );
};

export default ProfileBoostedContent;
