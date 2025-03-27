import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, 
  Trophy, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Scroll, 
  ArrowDown, 
  ArrowUp,
  Search,
  Users
} from 'lucide-react';
import { mockLeaderboardData } from '@/components/dashboard/leaderboard/LeaderboardUtils';
import { LeaderboardUser } from '@/components/dashboard/leaderboard/LeaderboardUtils';
import RoyalDivider from '@/components/ui/royal-divider';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { getShameActionPrice, getShameActionTitle } from '@/components/events/utils/shameUtils';
import { ShameAction } from '@/components/events/hooks/useShameEffect';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import ShameModal from '../events/components/ShameModal';

const CombinedLeaderboard: React.FC<{
  className?: string;
  limit?: number;
  compact?: boolean;
}> = ({ className = '', limit = 10, compact = false }) => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>(mockLeaderboardData);
  const [filteredData, setFilteredData] = useState<LeaderboardUser[]>(mockLeaderboardData);
  const [searchQuery, setSearchQuery] = useState('');
  const [teamFilter, setTeamFilter] = useState<'all' | 'red' | 'green' | 'blue'>('all');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedUser, setSelectedUser] = useState<LeaderboardUser | null>(null);
  const [shameAction, setShameAction] = useState<ShameAction>('tomatoes');
  const [showShameModal, setShowShameModal] = useState(false);
  const { toast } = useToast();
  const { playSound } = useNotificationSounds();

  // Handle search and filtering
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterData(query, teamFilter);
  };

  const handleTeamFilter = (team: 'all' | 'red' | 'green' | 'blue') => {
    setTeamFilter(team);
    filterData(searchQuery, team);
  };

  const filterData = (query: string, team: 'all' | 'red' | 'green' | 'blue') => {
    let filtered = [...mockLeaderboardData];
    
    // Apply team filter
    if (team !== 'all') {
      filtered = filtered.filter(user => user.team === team);
    }
    
    // Apply search
    if (query) {
      const lowercaseQuery = query.toLowerCase();
      filtered = filtered.filter(user => 
        user.username.toLowerCase().includes(lowercaseQuery)
      );
    }
    
    // Apply sort
    filtered = sortData(filtered, sortDirection);
    
    setFilteredData(filtered);
  };

  const handleSort = () => {
    const newDirection = sortDirection === 'desc' ? 'asc' : 'desc';
    setSortDirection(newDirection);
    
    const sorted = sortData(filteredData, newDirection);
    setFilteredData(sorted);
  };

  const sortData = (data: LeaderboardUser[], direction: 'asc' | 'desc') => {
    return [...data].sort((a, b) => {
      return direction === 'desc' 
        ? b.amountSpent - a.amountSpent 
        : a.amountSpent - b.amountSpent;
    });
  };

  const handleProfileClick = (userId: string) => {
    // In a production app, this would navigate to the profile page
    console.log(`Navigate to profile: ${userId}`);
    
    toast({
      title: "Royal Intelligence",
      description: "You are now viewing another noble's profile. How delightfully scandalous!",
      duration: 3000,
    });

    // Play notification sound
    playSound('notification');
  };

  const handleShameUser = (user: LeaderboardUser, action: ShameAction) => {
    setSelectedUser(user);
    setShameAction(action);
    setShowShameModal(true);
    
    // Play subtle medieval sound effect
    playSound('notification');
  };

  const confirmShame = () => {
    if (!selectedUser) return;
    
    const amount = getShameActionPrice(shameAction);
    
    // In a production app, this would call an API to process the payment and shame action
    setTimeout(() => {
      toast({
        title: "Royal Decree of Shame",
        description: `You have spent $${amount} to ${getShameActionTitle(shameAction).toLowerCase()} ${selectedUser.username}. How delightfully medieval!`,
        duration: 4000,
      });
      
      setShowShameModal(false);
      setSelectedUser(null);
      
      // Play shame sound effect
      playSound('shame');
    }, 500);
  };

  const getTeamColor = (team: string | null) => {
    switch (team) {
      case 'red': return 'text-royal-crimson';
      case 'green': return 'text-royal-gold';
      case 'blue': return 'text-royal-navy';
      default: return 'text-white/70';
    }
  };

  const getTeamBorderColor = (team: string | null) => {
    switch (team) {
      case 'red': return 'border-royal-crimson';
      case 'green': return 'border-royal-gold';
      case 'blue': return 'border-royal-navy';
      default: return 'border-white/20';
    }
  };

  const getTeamBgColor = (team: string | null) => {
    switch (team) {
      case 'red': return 'bg-royal-crimson/20';
      case 'green': return 'bg-royal-gold/20';
      case 'blue': return 'bg-royal-navy/20';
      default: return 'bg-white/10';
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown size={16} className="text-royal-gold animate-crown-glow" />;
    if (rank === 2) return <Trophy size={16} className="text-gray-300" />;
    if (rank === 3) return <Trophy size={16} className="text-amber-700" />;
    return null;
  };

  return (
    <Card className={`glass-morphism border-white/10 ${className}`}>
      <CardHeader className="space-y-1 border-b border-white/10">
        <div className="flex items-center">
          <Crown className="mr-2 h-6 w-6 text-royal-gold" />
          <CardTitle>Royal Court Standings</CardTitle>
        </div>
        <p className="text-sm text-white/70">
          Where glory is measured in gold spent and shame is a commodity
        </p>
      </CardHeader>
      
      <CardContent className="p-0">
        {/* Search and Filters */}
        <div className="p-4 border-b border-white/10 space-y-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
              <Input
                placeholder="Search for nobles..."
                className="pl-10 glass-morphism border-white/10"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            
            {/* Team Filter */}
            <div className="flex items-center space-x-2">
              <div className="flex rounded-md overflow-hidden">
                <Button
                  size="sm"
                  variant={teamFilter === 'all' ? 'default' : 'outline'}
                  className={`text-xs h-8 ${teamFilter === 'all' ? 'bg-white/20' : 'glass-morphism border-white/10'}`}
                  onClick={() => handleTeamFilter('all')}
                >
                  <Scroll size={14} className="mr-1.5" />
                  All Courts
                </Button>
                <Button
                  size="sm"
                  variant={teamFilter === 'red' ? 'default' : 'outline'}
                  className={`text-xs h-8 ${teamFilter === 'red' ? 'bg-royal-crimson/30' : 'glass-morphism border-white/10'}`}
                  onClick={() => handleTeamFilter('red')}
                >
                  <Shield size={14} className="mr-1.5 text-royal-crimson" />
                  Purple Dynasty
                </Button>
                <Button
                  size="sm"
                  variant={teamFilter === 'green' ? 'default' : 'outline'}
                  className={`text-xs h-8 ${teamFilter === 'green' ? 'bg-royal-gold/30' : 'glass-morphism border-white/10'}`}
                  onClick={() => handleTeamFilter('green')}
                >
                  <Crown size={14} className="mr-1.5 text-royal-gold" />
                  Gold Dominion
                </Button>
                <Button
                  size="sm"
                  variant={teamFilter === 'blue' ? 'default' : 'outline'}
                  className={`text-xs h-8 ${teamFilter === 'blue' ? 'bg-royal-navy/30' : 'glass-morphism border-white/10'}`}
                  onClick={() => handleTeamFilter('blue')}
                >
                  <Shield size={14} className="mr-1.5 text-royal-navy" />
                  Azure Order
                </Button>
              </div>
              
              {/* Sort Toggle */}
              <Button
                variant="outline"
                size="sm"
                className="glass-morphism border-white/10"
                onClick={handleSort}
              >
                {sortDirection === 'desc' ? (
                  <ArrowDown size={14} className="text-white/70" />
                ) : (
                  <ArrowUp size={14} className="text-white/70" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="divide-y divide-white/10">
          {filteredData.slice(0, limit).map((user, index) => (
            <div
              key={user.id}
              className={`p-4 hover:bg-white/5 transition-colors ${
                index < 3 ? getTeamBgColor(user.team) : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Rank */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full glass-morphism border-white/10">
                    {getRankIcon(index + 1) || (
                      <span className="text-sm font-bold">#{index + 1}</span>
                    )}
                  </div>
                  
                  {/* User Info */}
                  <div className="flex items-center space-x-3">
                    <Avatar className={`h-10 w-10 border-2 ${getTeamBorderColor(user.team)}`}>
                      {user.profileImage ? (
                        <AvatarImage src={user.profileImage} alt={user.username} />
                      ) : (
                        <AvatarFallback>
                          {user.username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium hover:text-royal-gold cursor-pointer" onClick={() => handleProfileClick(user.id)}>
                          {user.username}
                        </span>
                        <Badge variant="outline" className={`${getTeamColor(user.team)} border-${getTeamBorderColor(user.team)} text-xs`}>
                          {user.team?.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-sm text-white/60">
                        ${user.amountSpent.toLocaleString()} contributed
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Shame Actions */}
                {!compact && (
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-morphism border-red-500/20 hover:bg-red-500/20 text-white text-xs"
                      onClick={() => handleShameUser(user, 'tomatoes')}
                    >
                      🍅 ${getShameActionPrice('tomatoes')}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-morphism border-yellow-500/20 hover:bg-yellow-500/20 text-white text-xs"
                      onClick={() => handleShameUser(user, 'eggs')}
                    >
                      🥚 ${getShameActionPrice('eggs')}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-morphism border-purple-500/20 hover:bg-purple-500/20 text-white text-xs"
                      onClick={() => handleShameUser(user, 'stocks')}
                    >
                      🪵 ${getShameActionPrice('stocks')}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results */}
        {filteredData.length === 0 && (
          <div className="p-8 text-center text-white/50">
            <Crown size={32} className="mx-auto mb-2 text-royal-gold/50" />
            <p>No nobles match your search criteria</p>
          </div>
        )}
      </CardContent>

      {/* Shame Modal */}
      {showShameModal && selectedUser && (
        <ShameModal
          targetUser={{
            id: parseInt(selectedUser.id),
            username: selectedUser.username,
            profileImage: selectedUser.profileImage || '/placeholder.svg'
          }}
          shameAction={shameAction}
          onClose={() => setShowShameModal(false)}
          onConfirm={confirmShame}
        />
      )}
    </Card>
  );
};

export default CombinedLeaderboard;
