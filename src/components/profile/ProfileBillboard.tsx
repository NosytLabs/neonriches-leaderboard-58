
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/types/user';
import { formatDate } from '@/utils/formatters';
import { getTeamBgColorClass, getTeamTextColorClass } from '@/lib/colors';
import { ExternalLink, Mail, User, Shield, Crown, Calendar, Users, DollarSign } from 'lucide-react';
import { safeToLocaleString } from '@/utils/safeToString';
import { SpendAmount } from '@/components/ui/theme-components';

interface ProfileBillboardProps {
  user: UserProfile;
  onFollow?: () => void;
  onUnfollow?: () => void;
  onDM?: () => void;
  onBoost?: () => void;
  onMockery?: () => void;
  onGift?: () => void;
  isOwnProfile?: boolean;
}

const ProfileBillboard: React.FC<ProfileBillboardProps> = ({
  user,
  onFollow,
  onUnfollow,
  onDM,
  onBoost,
  onMockery,
  onGift,
  isOwnProfile = false
}) => {
  // Fallback values for important user properties if missing
  const displayName = user.displayName || user.username;
  const joinedDate = user.joinedDate || new Date().toISOString();
  const formattedDate = formatDate(joinedDate);
  
  // Team-related styling
  const teamBgClass = user.team ? getTeamBgColorClass(user.team.toString()) : 'bg-gray-700';
  const teamTextClass = user.team ? getTeamTextColorClass(user.team.toString()) : 'text-gray-300';
  
  // User verification badge
  const verifiedBadge = user.isVerified && (
    <Badge variant="outline" className="ml-2 bg-blue-500/20 text-blue-300 border-blue-400/30">
      <Shield className="h-3 w-3 mr-1" />
      Verified
    </Badge>
  );
  
  // VIP status badge
  const vipBadge = user.isVIP && (
    <Badge variant="outline" className="ml-2 bg-purple-500/20 text-purple-300 border-purple-400/30">
      <Crown className="h-3 w-3 mr-1" />
      VIP
    </Badge>
  );
  
  // Active title display
  const activeTitle = user.activeTitle && (
    <div className="text-sm mt-1 text-white/60">
      {user.activeTitle}
    </div>
  );
  
  // Conditional follow/unfollow button
  const followButton = !isOwnProfile && (
    user.following ? (
      <Button 
        variant="outline" 
        size="sm" 
        onClick={onUnfollow} 
        className="glass-morphism border-white/10"
      >
        <Users className="h-4 w-4 mr-2" />
        Unfollow
      </Button>
    ) : (
      <Button 
        variant="outline" 
        size="sm" 
        onClick={onFollow} 
        className="glass-morphism border-white/10"
      >
        <Users className="h-4 w-4 mr-2" />
        Follow
      </Button>
    )
  );
  
  // Render social links - only if they exist
  const socialLinksSection = user.socialLinks && user.socialLinks.length > 0 && (
    <div className="mt-4 flex flex-wrap gap-2">
      {user.socialLinks.map(link => (
        <Button 
          key={link.id} 
          variant="outline" 
          size="sm" 
          className="glass-morphism border-white/10"
          onClick={() => window.open(link.url, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          {link.platform}
        </Button>
      ))}
    </div>
  );
  
  return (
    <div className="rounded-lg overflow-hidden glass-morphism border-white/10">
      <div className="h-32 bg-gradient-to-r from-purple-900/30 to-blue-900/30 relative">
        {/* Profile banner image could go here */}
      </div>
      
      <div className="px-6 pb-6 relative">
        <div className="absolute -top-12 left-6 rounded-full border-4 border-black overflow-hidden">
          <img 
            src={user.profileImage || '/placeholder-avatar.png'} 
            alt={user.username} 
            className="w-24 h-24 object-cover"
          />
        </div>
        
        <div className="pt-14 flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <div className="flex items-center flex-wrap">
              <h2 className="text-2xl font-bold">{displayName}</h2>
              {verifiedBadge}
              {vipBadge}
            </div>
            
            <div className="text-sm text-white/60">@{user.username}</div>
            {activeTitle}
            
            {user.bio && (
              <p className="mt-3 text-white/80">{user.bio}</p>
            )}
            
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className={`${teamBgClass}/20 ${teamTextClass}`}>
                {user.team || 'Unaligned'}
              </Badge>
              
              <Badge variant="outline" className="bg-purple-500/20 text-purple-300">
                {user.tier || 'Basic'}
              </Badge>
              
              <Badge variant="outline" className="bg-green-500/20 text-green-300">
                Rank #{user.rank || 'N/A'}
              </Badge>
              
              <Badge variant="outline" className="bg-yellow-500/20 text-yellow-300">
                <DollarSign className="h-3 w-3 mr-1" />
                <SpendAmount amount={user.totalSpent || user.amountSpent || 0} />
              </Badge>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/60">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                Joined {formattedDate}
              </div>
              
              {user.lastActive && (
                <div className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  Last seen: {formatDate(user.lastActive)}
                </div>
              )}
            </div>
            
            {socialLinksSection}
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {followButton}
            
            {!isOwnProfile && (
              <>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={onDM} 
                  className="glass-morphism border-white/10"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Message
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={onBoost} 
                  className="glass-morphism border-white/10"
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Boost
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={onMockery} 
                  className="glass-morphism border-royal-crimson/20 text-royal-crimson"
                >
                  Mockery
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBillboard;
