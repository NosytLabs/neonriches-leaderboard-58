
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { LeaderboardUser } from '@/types/leaderboard';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/utils/formatters";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown, Shield, Trophy } from "lucide-react";

export interface LeaderboardListProps {
  users: LeaderboardUser[];
  loading?: boolean;
  error?: string;
  compact?: boolean;
}

const LeaderboardList: React.FC<LeaderboardListProps> = ({
  users,
  loading = false,
  error,
  compact = false
}) => {
  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-white/50">
        {error}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-8 text-white/50">
        No users found in the leaderboard.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {users.map((user, index) => {
        // Calculate rank change
        const rankChange = user.previousRank ? user.previousRank - user.rank : 0;
        
        return (
          <div 
            key={user.id}
            className={cn(
              "group relative flex items-center p-3 rounded-lg transition-colors",
              "bg-background/40 hover:bg-background/60 border border-white/5"
            )}
          >
            {/* Rank and Avatar */}
            <div className="mr-3 flex">
              <div className="relative">
                <div className="absolute -top-1 -left-1 w-5 h-5 flex items-center justify-center bg-black/50 text-xs font-medium rounded-full border border-white/10">
                  {index + 1 <= 3 ? <Trophy className="h-3 w-3 text-yellow-400" /> : index + 1}
                </div>
                
                <Avatar className="h-10 w-10 border border-white/10">
                  <AvatarImage 
                    src={user.profileImage || user.avatarUrl || ''} 
                    alt={user.username} 
                  />
                  <AvatarFallback>
                    {user.displayName?.charAt(0) || user.username.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                {/* Rank Change Indicator */}
                {rankChange !== 0 && (
                  <div 
                    className={cn(
                      "absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center text-xs rounded-full border",
                      rankChange > 0 
                        ? "bg-green-500/20 border-green-500 text-green-400" 
                        : "bg-red-500/20 border-red-500 text-red-400"
                    )}
                  >
                    {rankChange > 0 ? (
                      <ArrowUp className="h-3 w-3" />
                    ) : (
                      <ArrowDown className="h-3 w-3" />
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {/* User Info */}
            <div className="flex-1 min-w-0 mr-2">
              <div className="flex items-center flex-wrap gap-x-1.5">
                <span className="font-medium text-sm truncate">
                  {user.displayName || user.username}
                </span>
                
                {/* Badges */}
                <div className="flex items-center gap-1">
                  {user.isVerified && (
                    <Badge variant="outline" className="px-1 py-0 h-4 text-[10px] bg-blue-500/10 text-blue-400 border-blue-500/20">
                      Verified
                    </Badge>
                  )}
                  
                  {user.isProtected && (
                    <Badge variant="outline" className="px-1 py-0 h-4 text-[10px] bg-green-500/10 text-green-400 border-green-500/20">
                      <Shield className="h-2 w-2 mr-0.5" />
                      Protected
                    </Badge>
                  )}
                </div>
              </div>
              
              {/* Spending Details */}
              <div className="text-xs text-white/60 flex items-center gap-1.5">
                <span>{formatCurrency(user.totalSpent)}</span>
                
                {user.spendStreak && user.spendStreak > 0 && (
                  <span className="text-amber-400 text-[10px] flex items-center ml-1.5">
                    🔥 {user.spendStreak}d
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderboardList;
