
import React from 'react';
import { UserProfile, UserTier } from '@/types/user';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getInitials } from '@/utils/stringUtils';
import { getTierColor, getTierIcon } from '@/utils/tierUtils';
import { formatDollarAmount } from '@/utils/formatters';

interface ProfileBannerProps {
  user: UserProfile;
  isSubscriber?: boolean;
  isCurrentUser?: boolean;
  showSpendingAmount?: boolean;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({
  user,
  isSubscriber = false,
  isCurrentUser = false,
  showSpendingAmount = true
}) => {
  // Get the tier display properties
  const tierColor = getTierColor(user.tier);
  const TierIcon = getTierIcon(user.tier);
  
  // Function to handle tier display, accommodating 'noble' or other custom tiers
  const getDisplayTier = (tier: UserTier | string): string => {
    // Handle 'noble' or other custom tiers not in the UserTier type
    const validTiers: string[] = [
      'free', 'basic', 'pro', 'premium', 'royal', 'founder', 
      'platinum', 'diamond', 'gold', 'silver', 'bronze', 
      'vip', 'whale', 'standard', 'elite', 'legendary', 'noble'
    ];
    
    if (validTiers.includes(tier)) {
      return tier.charAt(0).toUpperCase() + tier.slice(1);
    }
    
    return 'Standard';
  };
  
  return (
    <div className="flex items-center">
      <Avatar className="h-14 w-14 mr-4 border-2 border-white/20">
        <AvatarImage src={user.profileImage} alt={user.displayName || user.username} />
        <AvatarFallback>{getInitials(user.displayName || user.username)}</AvatarFallback>
      </Avatar>
      
      <div>
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold">{user.displayName || user.username}</h2>
          {user.isVerified && (
            <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Verified
            </Badge>
          )}
        </div>
        
        <div className="flex items-center space-x-3 mt-1 text-sm">
          <div className="flex items-center text-white/70">
            <span>@{user.username}</span>
          </div>
          
          <div className="flex items-center">
            <Badge 
              variant="outline" 
              className={`bg-${tierColor}-500/20 text-${tierColor}-300 border-${tierColor}-500/30`}
            >
              {TierIcon && <TierIcon className="h-3 w-3 mr-1" />}
              {getDisplayTier(user.tier)}
            </Badge>
          </div>
          
          {showSpendingAmount && user.totalSpent > 0 && (
            <div className="flex items-center text-white/50">
              <span className="text-xs">
                {formatDollarAmount(user.totalSpent || 0)} spent
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
