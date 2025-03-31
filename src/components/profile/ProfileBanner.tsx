
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user';
import { CrownIcon, Users, Medal } from 'lucide-react';

interface ProfileBannerProps {
  user: UserProfile;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ user }) => {
  const { username, displayName, profileImage, tier, rank } = user;

  const renderTierBadge = () => {
    switch (tier) {
      case 'premium':
        return (
          <Badge className="bg-gradient-to-r from-amber-400 to-amber-600 text-black">
            Premium
          </Badge>
        );
      case 'royal':
        return (
          <Badge className="bg-gradient-to-r from-purple-500 to-indigo-600">
            Royal
          </Badge>
        );
      case 'noble':
        return (
          <Badge className="bg-gradient-to-r from-emerald-400 to-teal-500">
            Noble
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-700">
            Basic
          </Badge>
        );
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg p-6 shadow-lg border border-white/10">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative">
          <Avatar className="h-24 w-24 border-2 border-white/20">
            <AvatarImage src={profileImage} alt={username} />
            <AvatarFallback className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
              {username?.charAt(0).toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          {tier !== 'basic' && (
            <div className="absolute -bottom-2 -right-2 bg-royal-gold rounded-full p-1 shadow-lg">
              <CrownIcon className="h-5 w-5 text-black" />
            </div>
          )}
        </div>
        
        <div className="text-center sm:text-left space-y-2 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-bold">{displayName || username}</h1>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              {renderTierBadge()}
              
              <Badge variant="outline" className="border-white/20 gap-1">
                <Medal className="h-3.5 w-3.5 text-royal-gold" />
                Rank #{rank}
              </Badge>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm">{user.bio || "No bio provided"}</p>
          
          <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
            <Button variant="outline" size="sm" className="gap-1.5 border-white/20">
              <Users className="h-4 w-4" />
              Follow
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5 border-white/20">
              Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
