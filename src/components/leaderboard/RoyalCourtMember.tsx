
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Crown, Sparkles } from 'lucide-react';
import { UserTier } from '@/types/user';

interface RoyalCourtMemberProps {
  user: {
    id: string;
    username: string;
    displayName?: string;
    profileImage?: string;
    tier: UserTier;
    rank: number;
    totalSpent: number;
    joinDate: string;
  };
  position: number;
}

const RoyalCourtMember: React.FC<RoyalCourtMemberProps> = ({ user, position }) => {
  const getPositionBadge = () => {
    if (position === 1) return '👑';
    if (position === 2) return '🥈';
    if (position === 3) return '🥉';
    return position;
  };
  
  return (
    <div className="flex items-center p-2 rounded-lg hover:bg-white/5 transition-colors">
      <div className="w-8 h-8 flex items-center justify-center font-bold text-royal-gold mr-2">
        {getPositionBadge()}
      </div>
      
      <Avatar className="h-10 w-10 mr-3 border border-royal-gold/30">
        <AvatarImage src={user.profileImage} alt={user.username} />
        <AvatarFallback className="bg-royal-gold/20 text-royal-gold">
          {user.username.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <div className="font-medium flex items-center">
          {user.displayName || user.username}
          {user.tier === 'royal' && (
            <Crown className="ml-1 h-3 w-3 text-royal-gold" />
          )}
        </div>
        <div className="text-xs text-gray-400">
          ${user.totalSpent.toLocaleString()}
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 rounded-full text-royal-gold hover:bg-royal-gold/10"
      >
        <Sparkles className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default RoyalCourtMember;
