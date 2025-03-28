
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
  const { activeBoosts, getBoostEffect } = useProfileBoost(user);
  
  // No wrapper needed if no boosts active
  if (!activeBoosts || activeBoosts.length === 0) {
    return <>{children}</>;
  }
  
  // Get classes based on active boost effects
  const getBoostClasses = () => {
    let classes = '';
    activeBoosts.forEach(boost => {
      const effect = getBoostEffect(boost.effectId);
      if (effect && effect.cssClass) {
        classes += ` ${effect.cssClass}`;
      }
    });
    return classes;
  };
  
  // Get all boost classes and combine with any additional classes
  const boostClasses = getBoostClasses();
  const finalClassName = `${boostClasses} ${className}`.trim();
  
  return (
    <div className={finalClassName}>
      {children}
    </div>
  );
};

export default ProfileBoostedContent;
