
import React from 'react';
import { UserProfile } from '@/types/user';
import useProfileBoost from '@/hooks/use-profile-boost';

interface ProfileBoostedContentProps {
  user?: UserProfile;
  children: React.ReactNode;
  className?: string;
  type?: string;
}

const ProfileBoostedContent: React.FC<ProfileBoostedContentProps> = ({ 
  user, 
  children,
  className = '',
  type = 'default'
}) => {
  const boostManager = useProfileBoost(user);
  
  // If no user or no active boosts, just render children normally
  if (!user || !boostManager.activeBoosts.length) {
    return <div className={className}>{children}</div>;
  }
  
  const getBoostClasses = () => {
    let classes = '';
    
    // Add classes based on active boosts
    boostManager.activeBoosts.forEach(boost => {
      const boostEffect = boostManager.getBoostEffect(boost.effectId?.toString() || '');
      if (boostEffect?.cssClass) {
        classes += ` ${boostEffect.cssClass}`;
      }
    });
    
    return classes.trim();
  };
  
  return (
    <div className={`${getBoostClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default ProfileBoostedContent;
