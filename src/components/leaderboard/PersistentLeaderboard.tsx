import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Calendar, ArrowDown, ArrowUp } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/auth';
import { LeaderboardEntry, LeaderboardFilter } from '@/types/leaderboard';
import { formatCurrency } from '@/lib/utils';
import { ensureUser } from '@/utils/userAdapter';
import { getLeaderboardEntries } from '@/services/leaderboardService';

interface PersistentLeaderboardProps {
  limit?: number;
}

const PersistentLeaderboard: React.FC<PersistentLeaderboardProps> = ({ limit = 10 }) => {
  const { user } = useAuth();
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<LeaderboardFilter>({
    timeFrame: 'all',
    sortBy: 'rank',
    sortDirection: 'asc'
  });

  useEffect(() => {
    const loadLeaderboardData = async () => {
      setLoading(true);
      try {
        const entries = await getLeaderboardEntries(filters, limit);
        setLeaderboardData(entries);
      } catch (error) {
        console.error('Failed to load leaderboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboardData();
  }, [filters, limit]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search would be implemented by backend in real application
    console.log('Searching for:', searchQuery);
  };

  const handleFilterChange = (filterKey: keyof LeaderboardFilter, value: any) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
  };

  const toggleSortDirection = () => {
    setFilters(prev => ({
      ...prev,
      sortDirection: prev.sortDirection === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Find the user's rank if they're logged in
  const userRank = user ? leaderboardData.findIndex(entry => entry.username === user.username) + 1 : -1;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <form onSubmit={handleSearch} className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/50" />
          <Input
            placeholder="Search users..."
            className="pl-9 glass-morphism border-white/10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        {/* Filters */}
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

      {/* Leaderboard */}
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
        ) : leaderboardData.length === 0 ? (
          <div className="py-20 text-center text-white/50">
            No leaderboard entries found
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {leaderboardData.map((entry, index) => (
              <div
                key={entry.id}
                className={`p-3 grid grid-cols-12 gap-2 items-center ${
                  user && entry.username === user.username
                    ? 'bg-royal-gold/10 hover:bg-royal-gold/15'
                    : 'hover:bg-white/5'
                } transition-colors`}
              >
                <div className="col-span-1 font-mono">
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

                <div className="col-span-5 flex items-center gap-2">
                  {entry.avatarUrl ? (
                    <img
                      src={entry.avatarUrl}
                      alt={entry.username}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                      {entry.username.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <div className="font-medium">
                      {entry.displayName || entry.username}
                      {entry.isVerified && (
                        <span className="ml-1 text-royal-gold">✓</span>
                      )}
                    </div>
                    <div className="text-xs text-white/50">@{entry.username}</div>
                  </div>
                  {entry.team && (
                    <Badge
                      className={`ml-2 ${
                        entry.team === 'red'
                          ? 'bg-red-500/20 text-red-400'
                          : entry.team === 'green'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}
                    >
                      {entry.team}
                    </Badge>
                  )}
                </div>

                <div className="col-span-2 font-mono">{formatCurrency(entry.amountSpent)}</div>
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
              {new Date(user.joinDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersistentLeaderboard;
