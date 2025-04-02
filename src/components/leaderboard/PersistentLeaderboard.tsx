import React, { useState, useEffect, useMemo } from 'react';
import { useLeaderboard } from '@/hooks/useLeaderboard';
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';
import { UserTier, TeamColor } from '@/types/mockery-types';
import { Loader } from 'lucide-react';

const PersistentLeaderboard = () => {
  const [filter, setFilter] = useState<LeaderboardFilter>({
    team: 'all',
    tier: 'all',
    timeframe: 'all',
    search: '',
    sortBy: 'spent',
    sortDirection: 'desc',
    limit: 10
  });

  const { data, loading, error, fetchLeaderboard } = useLeaderboard();

  useEffect(() => {
    fetchLeaderboard(filter);
  }, [filter, fetchLeaderboard]);

  const handleFilterChange = (key: keyof LeaderboardFilter, value: any) => {
    setFilter(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10">
          <Loader className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
      
      <LeaderboardList 
        users={data} 
        loading={loading} 
        error={error} 
      />
    </div>
  );
};

export default PersistentLeaderboard;
