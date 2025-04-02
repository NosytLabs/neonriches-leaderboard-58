
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMockLeaderboard } from '@/hooks/useMockLeaderboard';
import { useAuth } from '@/hooks/useAuth';
import { LeaderboardFilter, LeaderboardUser } from '@/types/leaderboard';
import { MockeryAction, TeamColor } from '@/types/mockery-types';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { toTeamColor } from '@/utils/typeConverters';
import {
  LeaderboardHeader,
  LeaderboardFilters,
  LeaderboardList,
  ShameModalWrapper
} from './components';

const CombinedLeaderboard: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const sound = useSound();
  const { loading, mockLeaderboardData } = useMockLeaderboard();
  
  const [filter, setFilter] = useState<LeaderboardFilter>({
    team: 'all',
    tier: 'all',
    timeFrame: 'all',
    search: '',
    sortBy: 'rank',
    sortDirection: 'asc'
  });
  
  const [filteredUsers, setFilteredUsers] = useState<LeaderboardUser[]>([]);
  const [showShameModal, setShowShameModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<LeaderboardUser | null>(null);
  const [shameAction, setShameAction] = useState<MockeryAction>('tomatoes');
  
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
    navigate(`/profile/${username}`);
  };
  
  const handleShameUser = (user: LeaderboardUser) => {
    setSelectedUser(user);
    setShameAction('tomatoes'); // Default action
    setShowShameModal(true);
  };
  
  const handleShameConfirm = (userId: string, action: MockeryAction) => {
    // In a real app, we would call an API to apply the shame
    sound.playSound('mockery');
    
    toast({
      title: "Mockery Applied",
      description: `You have applied ${action} mockery to ${selectedUser?.username}`,
      variant: "success",
    });
    
    setShowShameModal(false);
    setSelectedUser(null);
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
        <LeaderboardList 
          users={filteredUsers} 
          loading={loading} 
          currentUserId={user?.id || ''}
          onProfileClick={handleProfileClick}
          onShameUser={handleShameUser}
        />
      </div>
      
      {showShameModal && selectedUser && (
        <ShameModalWrapper
          showModal={showShameModal}
          selectedUser={selectedUser as any} // This is a hack for now, but we should fix the type conversion
          shameAction={shameAction}
          onOpenChange={setShowShameModal}
          onConfirm={handleShameConfirm}
        />
      )}
    </div>
  );
};

export default CombinedLeaderboard;
