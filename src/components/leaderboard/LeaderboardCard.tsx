
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LeaderboardUser } from '@/types/leaderboard';
import { Shield, Crown, ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface LeaderboardCardProps {
  users: LeaderboardUser[];
  title: string;
  description?: string;
  limit?: number;
  showActions?: boolean;
  onUserClick?: (user: LeaderboardUser) => void;
  loading?: boolean;
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({
  users,
  title,
  description,
  limit = 5,
  showActions = false,
  onUserClick,
  loading = false
}) => {
  const displayUsers = users.slice(0, limit);
  
  if (loading) {
    return (
      <Card className="glass-morphism border-white/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          {description && <p className="text-sm text-white/70">{description}</p>}
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-10">
            <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-white/60 animate-spin"></div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <p className="text-sm text-white/70">{description}</p>}
      </CardHeader>
      <CardContent>
        {displayUsers.length === 0 ? (
          <div className="text-center py-6 text-white/50">
            <Shield className="w-8 h-8 mx-auto mb-2 opacity-30" />
            <p>No users found</p>
          </div>
        ) : (
          <div className="space-y-2">
            {displayUsers.map((user, index) => (
              <div
                key={user.id}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => onUserClick && onUserClick(user)}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center font-semibold mr-2">
                    {user.rank}
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black/20 mr-3">
                    <img
                      src={user.profileImage}
                      alt={user.username}
                      className="w-full h-full object-cover"
                    />
                    {user.rankChange !== undefined && user.rankChange !== 0 && (
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full text-xs
                          ${
                            user.rankChange > 0
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                          }`}
                      >
                        {user.rankChange > 0 ? (
                          <ArrowUp className="h-3 w-3" />
                        ) : (
                          <ArrowDown className="h-3 w-3" />
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{user.displayName || user.username}</div>
                    <div className="text-xs text-white/60 flex items-center">
                      <span>${user.totalSpent.toLocaleString()}</span>
                      {user.spendChange !== undefined && user.spendChange > 0 && (
                        <span className="ml-1 text-green-400">
                          +${user.spendChange.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 ml-2">
                    {user.isVerified && (
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        Verified
                      </Badge>
                    )}
                    {user.tier === 'royal' && (
                      <Crown className="h-4 w-4 text-royal-gold" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
