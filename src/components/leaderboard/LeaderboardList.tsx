
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { LeaderboardUser } from '@/types/leaderboard';
import LeaderboardEntry from './components/LeaderboardEntry';
import { AlertCircle } from 'lucide-react';

export interface LeaderboardListProps {
  users: LeaderboardUser[];
  loading?: boolean;
  error?: Error | null;
  showTeams?: boolean;
  showTiers?: boolean;
  showRankChange?: boolean;
  onUserClick?: (userId: string) => void;
  onShameClick?: (userId: string) => void;
}

const LeaderboardList: React.FC<LeaderboardListProps> = ({
  users,
  loading = false,
  error = null,
  showTeams = true,
  showTiers = true,
  showRankChange = true,
  onUserClick,
  onShameClick
}) => {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center space-x-4 p-2">
                <Skeleton className="h-9 w-9 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-3 w-[140px]" />
                </div>
                <Skeleton className="h-8 w-20" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Error loading leaderboard: {error.message}</AlertDescription>
      </Alert>
    );
  }

  if (!users || users.length === 0) {
    return (
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>No leaderboard data available.</AlertDescription>
      </Alert>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {users.map((user, index) => (
            <LeaderboardEntry
              key={user.id || index}
              user={user}
              showTeam={showTeams}
              showTier={showTiers}
              showRankChange={showRankChange}
              onUserClick={onUserClick}
              onShameClick={onShameClick}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardList;
