
import React from 'react';
import { cn } from '@/lib/utils';
import { UserProfile } from '@/types/user-consolidated';
import { safeToString } from '@/utils/typeConverters';

interface ProfileBoostedContentProps {
  user: UserProfile;
  type?: 'text' | 'profile' | 'content';
  className?: string;
  children: React.ReactNode;
}

/**
 * Wraps content and applies boost effects based on user profile boosts
 */
const ProfileBoostedContent = ({
  user,
  type = 'content',
  className,
  children
}: ProfileBoostedContentProps) => {
  // Convert user to the proper type to avoid type errors
  const userId = safeToString(user.id);
  
  // Get active boosts. In a real app, would determine if boosts are active,
  // here we'll just assume all boosts in the array are active.
  const activeBoosts = user.profileBoosts || [];
  
  // Extract CSS classes from boosts
  const boostClasses = activeBoosts
    .filter(boost => boost.isActive)
    .map(boost => {
      // Check if boost has cssClass property
      return boost.cssClass || '';
    })
    .filter(Boolean);
  
  // Combine all classes
  const classNames = cn(
    className,
    ...boostClasses,
    type === 'profile' && 'profile-boosted',
    type === 'text' && 'text-boosted',
  );
  
  return (
    <div className={classNames} data-user-id={userId}>
      {children}
    </div>
  );
};

export default ProfileBoostedContent;
