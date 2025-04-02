import React from 'react';
import { LeaderboardUser } from '@/types/leaderboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/utils/formatters';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, TrendingDown, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge'; // Use lowercase to match index.ts

interface LeaderboardListProps {
  users: LeaderboardUser[];
  loading: boolean;
  error: Error | null;
}

const LeaderboardList: React.FC<LeaderboardListProps> = ({ users, loading, error }) => {
  if (error) {
    return (
      <Card className="mt-6">
        <CardContent className="pt-6">
          <div className="text-center text-destructive">
            <p>Error loading leaderboard: {error.message}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!users.length && !loading) {
    return (
      <Card className="mt-6">
        <CardContent className="pt-6">
          <div className="text-center text-gray-500">
            <p>No leaderboard data available.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Spender Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {users.map((user, index) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 text-center font-bold">
                  {index + 1}
                </div>
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.profileImage} alt={user.username} />
                  <AvatarFallback>
                    {user.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {user.username}
                    {index < 3 && <Crown className="h-4 w-4 text-yellow-500" />}
                    <Badge variant="outline" className="ml-2">
                      {user.tier}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500">
                    {user.previousRank > user.rank ? (
                      <span className="flex items-center text-green-500">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        +{user.previousRank - user.rank}
                      </span>
                    ) : user.previousRank < user.rank ? (
                      <span className="flex items-center text-red-500">
                        <TrendingDown className="mr-1 h-3 w-3" />
                        {user.previousRank - user.rank}
                      </span>
                    ) : (
                      <span className="text-gray-500">No change</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="font-medium">{formatCurrency(user.amountSpent)}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardList;
