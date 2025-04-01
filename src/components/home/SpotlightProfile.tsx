
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserProfile } from '@/types/user-consolidated';
import { Badge } from '@/components/ui/badge';
import { formatNumber } from '@/utils/formatters';

interface SpotlightProfileProps {
  user: UserProfile;
  rank: number;
  isTopSpender?: boolean;
  onClick?: () => void;
}

const SpotlightProfile: React.FC<SpotlightProfileProps> = ({
  user,
  rank,
  isTopSpender = false,
  onClick
}) => {
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div 
      className={`flex items-center space-x-4 p-3 rounded-lg transition-all hover:bg-white/5 cursor-pointer ${isTopSpender ? 'border border-yellow-500/30 bg-yellow-500/5' : ''}`}
      onClick={onClick}
    >
      <div className="relative">
        <Avatar className="h-12 w-12 border border-white/10">
          <AvatarImage src={user.profileImage} />
          <AvatarFallback>{getInitials(user.displayName || user.username)}</AvatarFallback>
        </Avatar>
        {isTopSpender && (
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-500 rounded-full"></div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <h3 className="text-sm font-semibold truncate mr-2">{user.displayName || user.username}</h3>
          {user.isVerified && (
            <Badge variant="outline" className="h-5 bg-blue-500/20 text-blue-300 text-[10px]">
              Verified
            </Badge>
          )}
        </div>
        <div className="flex items-center text-xs text-gray-400">
          <span className="truncate">Total Spent: ${formatNumber(user.totalSpent || 0)}</span>
        </div>
      </div>
    </div>
  );
};

export default SpotlightProfile;
