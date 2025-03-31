
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/utils/formatters';
import { UserProfile } from '@/types/user';

interface RoyalCourtMemberProps {
  user: UserProfile;
  rank: number;
  className?: string;
}

const RoyalCourtMember: React.FC<RoyalCourtMemberProps> = ({ user, rank, className }) => {
  return (
    <Card 
      className={cn(
        "glass-morphism border-royal-gold/20 overflow-hidden relative",
        className
      )}
    >
      {rank <= 3 && (
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-royal-gold/20 rounded-full flex items-center justify-center">
          <Crown className="h-8 w-8 text-royal-gold" />
        </div>
      )}
      
      <CardContent className="p-4 flex items-center space-x-4">
        <div className="relative">
          <Avatar className="h-16 w-16 border-2 border-royal-gold">
            <AvatarImage src={user.profileImage || ''} alt={user.username} />
            <AvatarFallback className="bg-royal-gold/10 text-royal-gold">
              {user.username.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 bg-black rounded-full w-6 h-6 flex items-center justify-center border border-royal-gold">
            <span className="text-xs font-bold">{rank}</span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="font-bold text-royal-gold">{user.displayName || user.username}</div>
          <div className="text-sm text-white/70">@{user.username}</div>
          <div className="mt-1 text-sm flex items-center">
            <span className="mr-1">Rank</span>
            <span className="font-medium">{user.rank || rank}</span>
            <span className="mx-2">•</span>
            <span className="font-medium">{formatCurrency(user.totalSpent || 0)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoyalCourtMember;
