import { useState, useEffect } from 'react';
import { useLeaderboard } from '@/hooks/useLeaderboard';
import LeaderboardList from './LeaderboardList';
import { LeaderboardFilter, LeaderboardUser } from '@/types/leaderboard';
import { Loader } from 'lucide-react';

const PersistentLeaderboard = () => {
  const [filter, setFilter] = useState<LeaderboardFilter>({
    tier: undefined,
    sortBy: 'totalSpent',
    team: undefined,
    search: '',
    sortDirection: 'asc',
    timeframe: 'all',
    limit: 10
  });
  
  const { users, loading, error } = useLeaderboard(filter);
  const [errorMessage, setErrorMessage] = useState('');
  
  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10">
          <Loader className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}
      
      <LeaderboardList 
        users={users} 
        loading={loading} 
        error={errorMessage} 
      />
    </div>
  );
};

export default PersistentLeaderboard;
