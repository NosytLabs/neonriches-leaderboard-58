
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMockLeaderboard } from '@/hooks/useMockLeaderboard';
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';
import LeaderboardFilters from '@/components/LeaderboardFilters';
import LeaderboardHeader from '@/components/LeaderboardHeader';
import LeaderboardItem from '@/components/ui/LeaderboardItem';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const Leaderboard = () => {
  const navigate = useNavigate();
  const { loading, mockLeaderboardData } = useMockLeaderboard();
  const [currentUserId] = useState<string | null>(null);
  
  const [filter, setFilter] = useState<LeaderboardFilter>({
    team: 'all',
    tier: 'all',
    timeFrame: 'all',
    search: '',
    sortBy: 'rank',
    sortDirection: 'asc'
  });
  
  const [filteredUsers, setFilteredUsers] = useState<LeaderboardUser[]>([]);
  
  // Apply filters whenever the filter or data changes
  useEffect(() => {
    if (!mockLeaderboardData) return;
    
    let result = [...mockLeaderboardData];
    
    // Apply team filter
    if (filter.team && filter.team !== 'all') {
      result = result.filter(user => user.team === filter.team);
    }
    
    // Apply tier filter
    if (filter.tier && filter.tier !== 'all') {
      result = result.filter(user => user.tier === filter.tier);
    }
    
    // Apply search filter
    if (filter.search) {
      const searchTerm = filter.search.toLowerCase();
      result = result.filter(user => 
        user.username.toLowerCase().includes(searchTerm) || 
        (user.displayName?.toLowerCase().includes(searchTerm))
      );
    }
    
    // Apply sorting
    const sortField = filter.sortBy || 'rank';
    const sortDir = filter.sortDirection || 'asc';
    
    result.sort((a, b) => {
      if (sortField === 'rank') {
        return sortDir === 'asc' ? a.rank - b.rank : b.rank - a.rank;
      } else if (sortField === 'spent') {
        return sortDir === 'asc' 
          ? a.totalSpent - b.totalSpent 
          : b.totalSpent - a.totalSpent;
      } else if (sortField === 'username') {
        return sortDir === 'asc'
          ? a.username.localeCompare(b.username)
          : b.username.localeCompare(a.username);
      }
      return 0;
    });
    
    setFilteredUsers(result);
  }, [filter, mockLeaderboardData]);
  
  const handleFilterChange = (newFilter: Partial<LeaderboardFilter>) => {
    setFilter(prev => ({ ...prev, ...newFilter }));
  };
  
  const handleProfileClick = (userId: string, username: string) => {
    console.log(`Navigate to profile: ${username}`);
    // In a real app, navigate to profile page
    // navigate(`/profile/${username}`);
  };
  
  const renderSkeletons = () => {
    return Array(8).fill(0).map((_, index) => (
      <div key={index} className="flex items-center p-3 rounded-md border border-white/10 hover:bg-white/5">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="ml-3 space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-20" />
        </div>
        <div className="ml-auto">
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    ));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <LeaderboardHeader title="Royal Throne Leaderboard" />
      
      <div className="mt-6">
        <LeaderboardFilters 
          filter={filter} 
          onFilterChange={handleFilterChange} 
        />
      </div>
      
      <div className="mt-6">
        <Card className="bg-black/20 border-white/10">
          <CardContent className="p-4">
            <div className="space-y-3">
              {loading ? (
                renderSkeletons()
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <LeaderboardItem
                    key={user.id}
                    user={user}
                    position={user.rank}
                    isCurrentUser={user.id === currentUserId}
                    onClick={() => handleProfileClick(user.id, user.username)}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-white/60">
                  No users match your filters.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
