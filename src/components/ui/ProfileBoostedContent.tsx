import React from 'react';
import { UserProfile } from '@/types/user-consolidated';
import { RocketIcon, CrownIcon, StarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProfileBoostedContentProps {
  user: UserProfile;
  boostType?: 'rocket' | 'crown' | 'star';
  className?: string;
  type?: string;
  children?: React.ReactNode;
}

const ProfileBoostedContent: React.FC<ProfileBoostedContentProps> = ({
  user,
  boostType = 'rocket',
  className,
  type,
  children
}) => {
  let IconComponent = RocketIcon;
  let boostText = 'Boosted Profile';
  
  switch (boostType) {
    case 'rocket':
      IconComponent = RocketIcon;
      boostText = 'Rocket Boosted';
      break;
    case 'crown':
      IconComponent = CrownIcon;
      boostText = 'Royal Profile';
      break;
    case 'star':
      IconComponent = StarIcon;
      boostText = 'Star Profile';
      break;
    default:
      IconComponent = RocketIcon;
      boostText = 'Boosted Profile';
      break;
  }
  
  if (children) {
    return (
      <div className={cn("flex items-center space-x-2 rounded-md", className)}>
        {children}
      </div>
    );
  }
  
  return (
    <div className={cn("flex items-center space-x-2 rounded-md bg-secondary p-2 text-sm", className)}>
      <IconComponent className="h-4 w-4 text-primary" />
      <span>{boostText}</span>
    </div>
  );
};

export default ProfileBoostedContent;
