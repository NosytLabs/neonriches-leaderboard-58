
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Calendar, ArrowDown, ArrowUp, Crown, Shield, Star } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { LeaderboardEntry, LeaderboardFilter } from '@/types/leaderboard';
import { formatCurrency } from '@/lib/utils';
import { getLeaderboardEntries } from '@/services/leaderboardService';

interface PersistentLeaderboardProps {
  limit?: number;
}

const PersistentLeaderboard: React.FC<PersistentLeaderboardProps> = ({ limit = 10 }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [filteredData, setFilteredData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<LeaderboardFilter>({
    timeFrame: 'all',
    sortBy: 'rank',
    sortDirection: 'asc',
    team: undefined
  });
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch leaderboard data from Supabase
  useEffect(() => {
    const loadLeaderboardData = async () => {
      setLoading(true);
      try {
        const { entries, totalCount } = await getLeaderboardEntries(currentPage, limit);
        setLeaderboardData(entries as unknown as LeaderboardEntry[]);
        setFilteredData(entries as unknown as LeaderboardEntry[]);
        setTotalCount(totalCount);
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
  }, [currentPage, limit, toast]);

  // Apply filters locally for search and team filters
  useEffect(() => {
    let filtered = [...leaderboardData];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(entry => 
        entry.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (entry.displayName && entry.displayName.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Apply team filter
    if (filters.team) {
      filtered = filtered.filter(entry => 
        entry.team && entry.team.toLowerCase() === filters.team?.toLowerCase()
      );
    }
    
    setFilteredData(filtered);
  }, [searchQuery, filters.team, leaderboardData]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is applied directly in the useEffect
  };

  const handleFilterChange = (filterKey: keyof LeaderboardFilter, value: any) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
    
    if (filterKey === 'timeFrame' || filterKey === 'sortBy' || filterKey === 'sortDirection') {
      // These filters require a new data fetch
      setCurrentPage(1); // Reset to page 1 when changing filters
    }
  };

  const toggleSortDirection = () => {
    handleFilterChange('sortDirection', filters.sortDirection === 'asc' ? 'desc' : 'asc');
  };

  const handleProfileClick = (entryId: string, username: string) => {
    toast({
      title: "Navigating to Profile",
      description: `Viewing the royal profile of ${username}`,
      duration: 2000,
    });
    navigate(`/profile/${username}`);
  };

  // Get tier color for visual differentiation
  const getTierStyle = (tier: string) => {
    switch (tier?.toLowerCase()) {
      case 'royal':
        return 'bg-gradient-to-r from-royal-gold/20 to-royal-purple/10 hover:from-royal-gold/30 hover:to-royal-purple/20 border-royal-gold/30';
      case 'premium':
        return 'bg-gradient-to-r from-purple-500/10 to-indigo-500/5 hover:from-purple-500/20 hover:to-indigo-500/10 border-purple-500/20';
      case 'gold':
        return 'bg-amber-500/10 hover:bg-amber-500/15 border-amber-500/20';
      default:
        return 'hover:bg-white/5';
    }
  };

  // Get tier icon for visual enhancement
  const getTierIcon = (tier: string, rank: number) => {
    if (rank === 1) {
      return <Crown className="h-5 w-5 text-royal-gold animate-pulse" />;
    }
    
    if (rank <= 3) {
      return <Crown className="h-4 w-4 text-royal-gold/80" />;
    }
    
    switch (tier?.toLowerCase()) {
      case 'royal':
        return <Crown className="h-4 w-4 text-royal-gold/60" />;
      case 'premium':
        return <Star className="h-4 w-4 text-purple-400" />;
      default:
        return null;
    }
  };

  // Get user's current rank
  const userRank = user ? leaderboardData.findIndex(entry => entry.id === user.id) + 1 : -1;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <form onSubmit={handleSearch} className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/50" />
          <Input
            placeholder="Search users..."
            className="pl-9 glass-morphism border-white/10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <div className="flex flex-wrap gap-2 items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-white/50" />
            <Select
              value={filters.timeFrame}
              onValueChange={(value) => handleFilterChange('timeFrame', value)}
            >
              <SelectTrigger className="w-[130px] glass-morphism border-white/10 h-9">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent className="glass-morphism border-white/10">
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-white/50" />
            <Select
              value={filters.team}
              onValueChange={(value) => handleFilterChange('team', value)}
            >
              <SelectTrigger className="w-[130px] glass-morphism border-white/10 h-9">
                <SelectValue placeholder="Team" />
              </SelectTrigger>
              <SelectContent className="glass-morphism border-white/10">
                <SelectItem value={undefined}>All Teams</SelectItem>
                <SelectItem value="red">Red Team</SelectItem>
                <SelectItem value="green">Green Team</SelectItem>
                <SelectItem value="blue">Blue Team</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-white/50" />
            <Select
              value={filters.sortBy}
              onValueChange={(value) => handleFilterChange('sortBy', value as any)}
            >
              <SelectTrigger className="w-[130px] glass-morphism border-white/10 h-9">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="glass-morphism border-white/10">
                <SelectItem value="rank">Rank</SelectItem>
                <SelectItem value="amountSpent">Amount Spent</SelectItem>
                <SelectItem value="joinDate">Join Date</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 glass-morphism border-white/10"
            onClick={toggleSortDirection}
          >
            {filters.sortDirection === 'asc' ? (
              <ArrowUp className="h-4 w-4" />
            ) : (
              <ArrowDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Leaderboard explanation tooltip */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="text-sm text-white/60 flex items-center gap-1 cursor-help mb-2">
              <Crown className="h-3 w-3 text-royal-gold" />
              <span>How ranks are determined</span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-md p-4 glass-morphism border-white/10">
            <h4 className="font-bold mb-2 text-royal-gold">SpendThrone Ranking System</h4>
            <p className="mb-2">Rankings are determined by the total amount deposited, with $1 = 1 point. Only deposits count toward your rank, not purchases or other transactions.</p>
            <p className="mb-2">Different tiers get visual enhancements but don't affect your rank position. The only way to climb the leaderboard is by depositing more funds.</p>
            <p>Example: If User A has spent $100 and is ranked #3, and User B (ranked #1) has spent $150, User A needs to deposit at least $51 more to reach the #1 position.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="rounded-lg overflow-hidden">
        <div className="bg-black/20 p-3 grid grid-cols-12 gap-2 text-sm font-medium text-white/70">
          <div className="col-span-1">Rank</div>
          <div className="col-span-5">User</div>
          <div className="col-span-2">Spent</div>
          <div className="col-span-2">Total</div>
          <div className="col-span-2">Joined</div>
        </div>

        {loading ? (
          <div className="py-20 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] opacity-50"></div>
            <p className="mt-4 text-white/50">Loading leaderboard...</p>
          </div>
        ) : filteredData.length === 0 ? (
          <div className="py-20 text-center text-white/50">
            {searchQuery ? "No nobles match your search criteria" : "No leaderboard entries found"}
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {filteredData.map((entry, index) => (
              <div
                key={entry.id}
                className={`p-3 grid grid-cols-12 gap-2 items-center transition-colors ${
                  user && entry.id === user.id
                    ? 'bg-royal-gold/10 hover:bg-royal-gold/15'
                    : getTierStyle(entry.tier || 'basic')
                } border-l-4 ${entry.tier === 'royal' ? 'border-l-royal-gold' : entry.tier === 'premium' ? 'border-l-purple-500' : entry.tier === 'gold' ? 'border-l-amber-500' : 'border-l-transparent'}`}
              >
                <div className="col-span-1 font-mono">
                  <div className="flex items-center">
                    <span className={entry.previousRank && entry.previousRank > entry.rank ? 'text-green-400' : ''}>
                      {entry.rank}
                    </span>
                    {entry.previousRank && entry.previousRank > entry.rank && (
                      <span className="ml-1 text-xs text-green-400">↑</span>
                    )}
                    {entry.previousRank && entry.previousRank < entry.rank && (
                      <span className="ml-1 text-xs text-red-400">↓</span>
                    )}
                  </div>
                </div>

                <div className="col-span-5 flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div 
                          className={`h-8 w-8 rounded-full overflow-hidden border-2 cursor-pointer ${
                            entry.tier === 'royal' ? 'border-royal-gold animate-pulse-slow' : 
                            entry.tier === 'premium' ? 'border-purple-500' : 
                            entry.tier === 'gold' ? 'border-amber-500' : 'border-white/20'
                          }`}
                          onClick={() => handleProfileClick(entry.id, entry.username)}
                        >
                          {entry.avatarUrl ? (
                            <img
                              src={entry.avatarUrl}
                              alt={entry.username}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className={`h-full w-full flex items-center justify-center 
                              ${entry.tier === 'royal' ? 'bg-royal-gold/20' : 
                                entry.tier === 'premium' ? 'bg-purple-500/20' : 
                                entry.tier === 'gold' ? 'bg-amber-500/20' : 'bg-white/10'}`}>
                              {entry.username.charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="right">Click to view profile</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <div>
                    <div className="font-medium flex items-center gap-1">
                      <span 
                        className={`cursor-pointer hover:underline ${
                          entry.tier === 'royal' ? 'text-royal-gold' : 
                          entry.tier === 'premium' ? 'text-purple-400' : 
                          entry.tier === 'gold' ? 'text-amber-400' : ''
                        }`}
                        onClick={() => handleProfileClick(entry.id, entry.username)}
                      >
                        {entry.displayName || entry.username}
                      </span>
                      {getTierIcon(entry.tier || '', entry.rank || 0)}
                      {entry.isVerified && (
                        <span className="ml-1 text-royal-gold">✓</span>
                      )}
                    </div>
                    <div className="text-xs text-white/50 flex items-center gap-1">
                      <span>@{entry.username}</span>
                      {entry.team && (
                        <Badge
                          className={`ml-1 text-xs ${
                            entry.team.toLowerCase() === 'red'
                              ? 'bg-red-500/20 text-red-400'
                              : entry.team.toLowerCase() === 'green'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-blue-500/20 text-blue-400'
                          }`}
                        >
                          {entry.team}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-span-2 font-mono">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className={entry.tier === 'royal' ? 'text-royal-gold' : ''}>
                          {formatCurrency(entry.amountSpent)}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        This determines rank position
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="col-span-2 font-mono">{formatCurrency(entry.totalDeposited || 0)}</div>

                <div className="col-span-2 text-sm text-white/50">
                  {new Date(entry.joinDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {user && userRank > 0 && (
        <div className="p-3 rounded-lg bg-royal-gold/10 border border-royal-gold/20">
          <div className="grid grid-cols-12 gap-2 items-center">
            <div className="col-span-1 font-mono font-bold">{userRank}</div>
            <div className="col-span-5 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-royal-gold/20 flex items-center justify-center">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="font-medium">You</div>
                <div className="text-xs text-white/50">@{user.username}</div>
              </div>
            </div>
            <div className="col-span-2 font-mono">{formatCurrency(user.totalSpent)}</div>
            <div className="col-span-2 font-mono">{formatCurrency(user.totalSpent || 0)}</div>
            <div className="col-span-2 text-sm text-white/50">
              {user.joinDate ? 
                new Date(user.joinDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                }) : 'Unknown'
              }
            </div>
          </div>
        </div>
      )}

      {/* Simple pagination */}
      {totalCount > limit && (
        <div className="flex justify-center mt-4 gap-2">
          <Button 
            variant="outline" 
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="glass-morphism border-white/10"
          >
            Previous
          </Button>
          <span className="px-4 py-2 glass-morphism border-white/10 rounded-md">
            Page {currentPage} of {Math.ceil(totalCount / limit)}
          </span>
          <Button 
            variant="outline" 
            size="sm"
            disabled={currentPage >= Math.ceil(totalCount / limit)}
            onClick={() => setCurrentPage(p => p + 1)}
            className="glass-morphism border-white/10"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default PersistentLeaderboard;
