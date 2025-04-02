import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import LeaderboardFilters from '@/components/LeaderboardFilters';
import LeaderboardList from '@/components/leaderboard/components/LeaderboardList';
import LeaderboardHeader from '@/components/LeaderboardHeader';
import { LeaderboardUser, LeaderboardFilter } from '@/types/mockery-types';
import { useMockLeaderboard } from '@/hooks/useMockLeaderboard';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate();
  const auth = useAuth?.() || { user: null }; // Safely access auth context
  const { user } = auth;
  const { loading, mockLeaderboardData } = useMockLeaderboard?.() || { loading: true, mockLeaderboardData: [] };
  
  // Initialize filter state with sortDirection and limit
  const [filter, setFilter] = useState<LeaderboardFilter>({
    team: 'all',
    tier: 'all',
    timeframe: 'all-time',
    search: '',
    sortBy: 'rank',
    sortDirection: 'asc',
    limit: 50
  });
  
  const [filteredUsers, setFilteredUsers] = useState<LeaderboardUser[]>([]);
  
  // Apply filters whenever filter or data changes
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
    navigate(`/profile/${username}`);
  };
  
  const handleShameUser = (user: LeaderboardUser) => {
    navigate(`/mockery/${user.username}?action=shame`);
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
            <LeaderboardList 
              users={filteredUsers} 
              loading={loading} 
              currentUserId={user?.id || ''} 
              onProfileClick={handleProfileClick}
              onShameUser={handleShameUser}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
