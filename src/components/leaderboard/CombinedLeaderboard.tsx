
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMockLeaderboard } from '@/hooks/useMockLeaderboard';
import useAuth from '@/hooks/useAuth';
import { LeaderboardUser } from '@/types/leaderboard';
import { MockeryAction } from '@/types/mockery-types';
import { TeamColor } from '@/types/team';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/useSound';
import { toTeamColor } from '@/utils/typeConverters';
import LeaderboardHeader from '@/components/LeaderboardHeader';
import LeaderboardFilters from '@/components/LeaderboardFilters';
import LeaderboardList from '@/components/leaderboard/components/LeaderboardList';
import { Dialog } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import ShameModal from '@/components/dashboard/leaderboard/ShameModal';

interface CombinedLeaderboardFilter {
  team: TeamColor | 'all';
  tier: string;
  timeframe: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all';
  search: string;
  sortBy: string;
  sortDirection?: 'asc' | 'desc';
}

const CombinedLeaderboard: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const user = auth?.user || null;
  const { toast } = useToast();
  const sound = useSound();
  const { loading, mockLeaderboardData } = useMockLeaderboard?.() || { loading: true, mockLeaderboardData: [] };
  
  const [filter, setFilter] = useState<CombinedLeaderboardFilter>({
    team: 'all',
    tier: 'all',
    timeframe: 'all-time',
    search: '',
    sortBy: 'rank',
    sortDirection: 'asc'
  });
  
  const [filteredUsers, setFilteredUsers] = useState<LeaderboardUser[]>([]);
  const [showShameModal, setShowShameModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<LeaderboardUser | null>(null);
  const [shameAction, setShameAction] = useState<MockeryAction>('tomato');
  
  useEffect(() => {
    if (!mockLeaderboardData) return;
    
    let result = [...mockLeaderboardData];
    
    if (filter.team && filter.team !== 'all') {
      result = result.filter(user => user.team === filter.team);
    }
    
    if (filter.tier && filter.tier !== 'all') {
      result = result.filter(user => user.tier === filter.tier);
    }
    
    if (filter.search) {
      const searchTerm = filter.search.toLowerCase();
      result = result.filter(user => 
        user.username.toLowerCase().includes(searchTerm) || 
        (user.displayName?.toLowerCase().includes(searchTerm))
      );
    }
    
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
  
  const handleFilterChange = (newFilter: Partial<CombinedLeaderboardFilter>) => {
    setFilter(prev => ({ ...prev, ...newFilter }));
  };
  
  const handleProfileClick = (userId: string, username: string) => {
    navigate(`/profile/${username}`);
  };
  
  const handleShameUser = (user: LeaderboardUser) => {
    setSelectedUser(user);
    setShameAction('tomato');
    setShowShameModal(true);
  };
  
  const handleShameConfirm = () => {
    if (!selectedUser) return;
    
    if (sound.playSound) {
      sound.playSound('notification');
    }
    
    toast({
      title: "Mockery Applied",
      description: `You have applied ${shameAction} mockery to ${selectedUser?.username}`,
      variant: "default",
    });
    
    setShowShameModal(false);
    setSelectedUser(null);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <LeaderboardHeader title="Royal Throne Leaderboard" />
      
      <div className="mt-6">
        <LeaderboardFilters 
          filter={filter as any} 
          onFilterChange={handleFilterChange as any} 
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
      
      {showShameModal && selectedUser && (
        <Dialog open={showShameModal} onOpenChange={setShowShameModal}>
          <ShameModal
            targetUser={{
              userId: selectedUser.id,
              username: selectedUser.username,
              profileImage: selectedUser.profileImage || '/placeholder.svg',
              totalSpent: selectedUser.totalSpent,
              rank: selectedUser.rank,
              team: toTeamColor(selectedUser.team || 'none'),
              tier: selectedUser.tier || 'basic',
              spendStreak: selectedUser.spendStreak || 0
            }}
            shameType={shameAction}
            onConfirm={handleShameConfirm}
            onCancel={() => setShowShameModal(false)}
            hasDiscount={false}
          />
        </Dialog>
      )}
    </div>
  );
};

export default CombinedLeaderboard;
