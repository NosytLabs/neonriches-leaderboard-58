
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Crown } from '@/utils/icons';
import { TeamColor, UserTier } from '@/types/team';

// Fix the interface - don't extend from a member prop
export interface RoyalCourtMemberProps {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: UserTier;
  team: TeamColor;
  isAdmin: boolean;
}

const RoyalCourtMember: React.FC<RoyalCourtMemberProps> = ({
  id,
  username,
  displayName,
  profileImage,
  tier,
  team,
  isAdmin
}) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-black/20 rounded-lg border border-white/10">
      <div className="relative">
        <Avatar className="h-12 w-12">
          <AvatarImage src={profileImage} alt={displayName} />
          <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        {isAdmin && (
          <div className="absolute -top-1 -right-1 bg-royal-gold rounded-full p-0.5">
            <Crown className="h-3 w-3 text-black" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="font-medium">{displayName}</div>
        <div className="text-sm text-gray-400">@{username}</div>
      </div>
      <div className="flex items-center space-x-2">
        <Badge 
          variant="outline" 
          className={`
            ${team === 'red' ? 'border-red-500 text-red-400' : ''}
            ${team === 'blue' ? 'border-blue-500 text-blue-400' : ''}
            ${team === 'green' ? 'border-green-500 text-green-400' : ''}
            ${team === 'gold' ? 'border-yellow-500 text-yellow-400' : ''}
            ${team === 'purple' ? 'border-purple-500 text-purple-400' : ''}
            ${team === 'none' ? 'border-gray-500 text-gray-400' : ''}
            ${team === 'neutral' ? 'border-gray-500 text-gray-400' : ''}
          `}
        >
          {team}
        </Badge>
        <Badge 
          variant="secondary" 
          className={`
            ${tier === 'free' ? 'bg-gray-700' : ''}
            ${tier === 'basic' ? 'bg-blue-900' : ''}
            ${tier === 'premium' ? 'bg-purple-900' : ''}
            ${tier === 'royal' ? 'bg-amber-900' : ''}
            ${tier === 'elite' ? 'bg-emerald-900' : ''}
          `}
        >
          {tier}
        </Badge>
      </div>
    </div>
  );
};

export default RoyalCourtMember;
