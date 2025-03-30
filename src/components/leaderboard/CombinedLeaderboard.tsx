import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { fetchLeaderboard } from '@/services/leaderboardService';
import { User } from '@/types/user';
import { ShameAction } from '@/components/events/hooks/useShameEffect';
import { getShameActionPrice } from '@/components/events/utils/shameUtils';

// Import the new component parts
import LeaderboardHeader from './components/LeaderboardHeader';
import LeaderboardFilters from './components/LeaderboardFilters';
import LeaderboardList from './components/LeaderboardList';
import ShameModalWrapper from './components/ShameModalWrapper';

interface CombinedLeaderboardProps {
  className?: string;
  limit?: number;
  compact?: boolean;
}

const CombinedLeaderboard: React.FC<CombinedLeaderboardProps> = ({ 
  className = '', 
  limit = 10, 
  compact = false 
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [leaderboardData, setLeaderboardData] = useState<User[]>([]);
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [teamFilter, setTeamFilter] = useState<'all' | 'red' | 'green' | 'blue'>('all');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [shameAction, setShameAction] = useState<ShameAction>('tomatoes');
  const [showShameModal, setShowShameModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();
  const { user: currentUser } = useAuth();

  // Load real leaderboard data from Supabase
  useEffect(() => {
    const loadLeaderboardData = async () => {
      setLoading(true);
      try {
        const data = await fetchLeaderboard(1, limit);
        setLeaderboardData(data);
        setFilteredData(data);
      } catch (error) {
        console.error('Failed to load leaderboard data:', error);
        toast({
          title: "Failed to load leaderboard",
          description: "We couldn't fetch the latest ranks. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboardData();
  }, [limit, toast]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterData(query, teamFilter);
  };

  const handleTeamFilter = (team: 'all' | 'red' | 'green' | 'blue') => {
    setTeamFilter(team);
    filterData(searchQuery, team);
  };

  const filterData = (query: string, team: 'all' | 'red' | 'green' | 'blue') => {
    let filtered = [...leaderboardData];
    
    if (team !== 'all') {
      filtered = filtered.filter(user => 
        user.team && user.team.toLowerCase() === team.toLowerCase()
      );
    }
    
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      filtered = filtered.filter(user => 
        user.username.toLowerCase().includes(lowercaseQuery) ||
        (user.displayName && user.displayName.toLowerCase().includes(lowercaseQuery))
      );
    }
    
    filtered = sortData(filtered, sortDirection);
    
    setFilteredData(filtered);
  };

  const handleSort = () => {
    const newDirection = sortDirection === 'desc' ? 'asc' : 'desc';
    setSortDirection(newDirection);
    
    const sorted = sortData(filteredData, newDirection);
    setFilteredData(sorted);
  };

  const sortData = (data: User[], direction: 'asc' | 'desc') => {
    return [...data].sort((a, b) => {
      return direction === 'desc' 
        ? (b.amountSpent || 0) - (a.amountSpent || 0) 
        : (a.amountSpent || 0) - (b.amountSpent || 0);
    });
  };

  const handleProfileClick = (userId: string, username: string) => {
    navigate(`/profile/${username}`);
    
    toast({
      title: "Royal Intelligence",
      description: "You are now viewing another noble's profile.",
      duration: 3000,
    });

    playSound('notification');
  };

  const handleShameUser = (user: User, action: ShameAction) => {
    setSelectedUser(user);
    setShameAction(action);
    setShowShameModal(true);
    
    playSound('notification');
  };

  const confirmShame = (userId: string, type: ShameAction) => {
    if (!selectedUser) return;
    
    const amount = getShameActionPrice(type);
    
    setTimeout(() => {
      toast({
        title: "Royal Decree of Shame",
        description: `You have spent $${amount} to shame ${selectedUser.username}.`,
        duration: 4000,
      });
      
      setShowShameModal(false);
      setSelectedUser(null);
      
      playSound('shame');
    }, 500);
  };

  return (
    <Card className={`glass-morphism border-white/10 ${className}`}>
      <LeaderboardHeader />
      
      <CardContent className="p-0">
        <LeaderboardFilters 
          searchQuery={searchQuery}
          teamFilter={teamFilter}
          sortDirection={sortDirection}
          onSearchChange={handleSearch}
          onTeamFilterChange={handleTeamFilter}
          onSortChange={handleSort}
        />

        <LeaderboardList 
          users={filteredData}
          loading={loading}
          limit={limit}
          currentUserId={currentUser?.id}
          compact={compact}
          onProfileClick={handleProfileClick}
          onShameUser={handleShameUser}
        />

        <ShameModalWrapper 
          showModal={showShameModal}
          selectedUser={selectedUser}
          shameAction={shameAction}
          onOpenChange={setShowShameModal}
          onConfirm={confirmShame}
        />
      </CardContent>
    </Card>
  );
};

export default CombinedLeaderboard;
