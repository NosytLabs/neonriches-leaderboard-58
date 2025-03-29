
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Crown, 
  Trophy, 
  Shield, 
  Scroll, 
  ArrowDown, 
  ArrowUp,
  Search,
  Info
} from 'lucide-react';
import { Dialog } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import ShameModal from '../events/components/ShameModal';
import RoyalButton from '@/components/ui/royal-button';
import { getTeamColor, getTeamTextColorClass, getRankTextColorClass } from '@/lib/colors';
import { getShameActionPrice } from '@/components/events/utils/shameUtils';
import { ShameAction } from '@/components/events/hooks/useShameEffect';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { fetchLeaderboard } from '@/services/leaderboardService';
import { User } from '@/types/user';

// Helper function to get rank badge class
const getRankBadgeClass = (rank: number): string => {
  if (rank === 1) return 'bg-royal-gold/20 border-royal-gold/40';
  if (rank === 2) return 'bg-gray-300/20 border-gray-300/40';
  if (rank === 3) return 'bg-amber-700/20 border-amber-700/40';
  if (rank <= 10) return 'bg-purple-500/20 border-purple-500/40';
  if (rank <= 25) return 'bg-blue-500/20 border-blue-500/40';
  return 'bg-white/10 border-white/20';
};

// Helper function to get tier style
const getTierStyle = (tier: string | null | undefined): string => {
  if (!tier) return '';
  
  switch (tier.toLowerCase()) {
    case 'royal':
      return 'border-l-4 border-l-royal-gold';
    case 'premium':
      return 'border-l-4 border-l-purple-500';
    case 'gold':
      return 'border-l-4 border-l-amber-500';
    default:
      return '';
  }
};

const CombinedLeaderboard: React.FC<{
  className?: string;
  limit?: number;
  compact?: boolean;
}> = ({ className = '', limit = 10, compact = false }) => {
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

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown size={16} className="text-royal-gold animate-crown-glow" />;
    if (rank === 2) return <Trophy size={16} className="text-gray-300" />;
    if (rank === 3) return <Trophy size={16} className="text-amber-700" />;
    return null;
  };

  return (
    <Card className={`glass-morphism border-white/10 ${className}`}>
      <CardHeader className="space-y-1 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Crown className="mr-2 h-6 w-6 text-royal-gold" />
            <CardTitle>Royal Court Standings</CardTitle>
          </div>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Info size={16} className="text-white/70" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-md p-4">
                <h4 className="font-bold mb-2 text-royal-gold">SpendThrone Ranking System</h4>
                <p className="mb-2">Rankings are determined solely by the total amount deposited. $1 = 1 point on the leaderboard.</p>
                <p className="mb-2">Only deposits count toward your rank, not purchases made using your wallet balance.</p>
                <p>Different tier users have different visual styles but tier doesn't affect your rank position.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-sm text-white/70">
          Where glory is measured in gold spent and shame is a commodity
        </p>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="p-4 border-b border-white/10 space-y-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
              <Input
                placeholder="Search for nobles..."
                className="pl-10 glass-morphism border-white/10"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            
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
                  Crimson Court
                </Button>
                <Button
                  size="sm"
                  variant={teamFilter === 'green' ? 'default' : 'outline'}
                  className={`text-xs h-8 ${teamFilter === 'green' ? 'bg-royal-gold/30' : 'glass-morphism border-white/10'}`}
                  onClick={() => handleTeamFilter('green')}
                >
                  <Crown size={14} className="mr-1.5 text-royal-gold" />
                  Golden Order
                </Button>
                <Button
                  size="sm"
                  variant={teamFilter === 'blue' ? 'default' : 'outline'}
                  className={`text-xs h-8 ${teamFilter === 'blue' ? 'bg-royal-navy/30' : 'glass-morphism border-white/10'}`}
                  onClick={() => handleTeamFilter('blue')}
                >
                  <Shield size={14} className="mr-1.5 text-royal-navy" />
                  Royal Navy
                </Button>
              </div>
              
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

        <div className="divide-y divide-white/10">
          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] opacity-50"></div>
              <p className="mt-4 text-white/50">Loading leaderboard...</p>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="p-8 text-center text-white/50">
              <Crown size={32} className="mx-auto mb-2 text-royal-gold/50" />
              <p>No nobles match your search criteria</p>
            </div>
          ) : (
            filteredData.slice(0, limit).map((user, index) => (
              <div
                key={user.id}
                className={`p-4 hover:bg-white/5 transition-colors ${
                  index < 3 ? getTeamColor(user.team) : ''
                } ${getTierStyle(user.tier)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full glass-morphism border-white/10 
                      ${index < 10 ? getRankBadgeClass(index + 1) : 'bg-white/5'}`}>
                      {getRankIcon(index + 1) || (
                        <span className={`text-sm font-bold ${getRankTextColorClass(index + 1)}`}>#{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Avatar 
                        className={`h-10 w-10 border-2 cursor-pointer ${
                          user.tier === 'royal' ? 'border-royal-gold' :
                          user.tier === 'premium' ? 'border-purple-500' :
                          user.tier === 'gold' ? 'border-amber-500' : 'border-white/20'
                        }`}
                        onClick={() => handleProfileClick(user.id, user.username)}
                      >
                        {user.profileImage ? (
                          <AvatarImage src={user.profileImage} alt={user.username} />
                        ) : (
                          <AvatarFallback className={getTeamColor(user.team)}>
                            {user.username.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      
                      <div>
                        <div className="flex items-center space-x-2">
                          <span 
                            className={`font-medium hover:text-royal-gold cursor-pointer ${index < 3 ? getRankTextColorClass(index + 1) : ''} ${
                              user.tier === 'royal' ? 'text-royal-gold' :
                              user.tier === 'premium' ? 'text-purple-400' :
                              user.tier === 'gold' ? 'text-amber-400' : ''
                            }`} 
                            onClick={() => handleProfileClick(user.id, user.username)}
                          >
                            {user.displayName || user.username}
                          </span>
                          {user.team && (
                            <Badge 
                              variant="outline" 
                              className={`${getTeamTextColorClass(user.team)} text-xs`}
                            >
                              {user.team.toUpperCase()}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-white/60">
                          <span className="flex items-center">
                            <Crown size={12} className="mr-1 text-royal-gold/70" />
                            ${user.amountSpent?.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {!compact && currentUser && currentUser.id !== user.id && (
                    <div className="flex items-center space-x-2">
                      <RoyalButton
                        variant="royalPurple"
                        size="sm"
                        className="text-xs"
                        icon={<span className="text-sm">🍅</span>}
                        onClick={() => handleShameUser(user, 'tomatoes')}
                      >
                        ${getShameActionPrice('tomatoes')}
                      </RoyalButton>
                      <RoyalButton
                        variant="royalGold"
                        size="sm"
                        className="text-xs"
                        icon={<span className="text-sm">🥚</span>}
                        onClick={() => handleShameUser(user, 'eggs')}
                      >
                        ${getShameActionPrice('eggs')}
                      </RoyalButton>
                      <RoyalButton
                        variant="royalPurple"
                        size="sm"
                        className="text-xs"
                        icon={<span className="text-sm">🪵</span>}
                        onClick={() => handleShameUser(user, 'stocks')}
                      >
                        ${getShameActionPrice('stocks')}
                      </RoyalButton>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>

      {showShameModal && selectedUser && (
        <Dialog open={showShameModal} onOpenChange={setShowShameModal}>
          <ShameModal
            targetUser={{
              userId: selectedUser.id.toString(),
              username: selectedUser.username,
              profileImage: selectedUser.profileImage || '/placeholder.svg',
              totalSpent: selectedUser.amountSpent || 0,
              rank: selectedUser.rank || 0,
              team: selectedUser.team || null,
              tier: selectedUser.tier || 'free',
              spendStreak: selectedUser.spendStreak || 0
            }}
            shameType={shameAction}
            onConfirm={confirmShame}
            onCancel={() => setShowShameModal(false)}
          />
        </Dialog>
      )}
    </Card>
  );
};

export default CombinedLeaderboard;
