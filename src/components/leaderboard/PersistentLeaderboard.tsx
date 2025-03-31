import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown, Search, Users, Filter, ChevronDown, ArrowUpDown, SortAsc, SortDesc } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';
import { useAuth } from '@/hooks/useAuth';
import { TeamColor } from '@/types/team';
import { UserTier } from '@/types/user';

type SortByOptions = 'rank' | 'totalSpent' | 'username' | 'joined' | 'spent';

interface TypedLeaderboardFilter extends Omit<LeaderboardFilter, 'sortBy'> {
  sortBy: SortByOptions;
}

const PersistentLeaderboard: React.FC = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<TypedLeaderboardFilter>({
    team: 'all',
    tier: 'all',
    search: '',
    limit: 50,
    timeFrame: 'all',
    sortBy: 'rank',
    sortDirection: 'asc'
  });
  
  const mockUsers: LeaderboardUser[] = [
    {
      id: "1",
      userId: "1",
      username: "KingMidas",
      displayName: "King Midas",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      tier: "royal",
      team: "gold",
      rank: 1,
      previousRank: 1,
      totalSpent: 15000,
      walletBalance: 5000,
      isVerified: true,
      isProtected: true,
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      spendStreak: 5
    },
    {
      id: "2",
      userId: "2",
      username: "SirSpendALot",
      displayName: "Sir Spend-A-Lot",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      tier: "premium",
      team: "red",
      rank: 2,
      previousRank: 4,
      totalSpent: 12000,
      walletBalance: 3000,
      isVerified: true,
      isProtected: true,
      avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      spendStreak: 3
    },
    {
      id: "3",
      userId: "3",
      username: "LadyFortune",
      displayName: "Lady Fortune",
      profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
      tier: "premium",
      team: "blue",
      rank: 3,
      previousRank: 2,
      totalSpent: 10000,
      walletBalance: 4500,
      isVerified: true,
      isProtected: false,
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      spendStreak: 0
    },
    {
      id: "4",
      userId: "4",
      username: "GoldHoarder",
      displayName: "Gold Hoarder",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
      tier: "pro",
      team: "green",
      rank: 4,
      previousRank: 3,
      totalSpent: 7500,
      walletBalance: 2000,
      isVerified: false,
      isProtected: false,
      avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      spendStreak: 0
    },
    {
      id: "5",
      userId: "5",
      username: "RoyalSpender",
      displayName: "Royal Spender",
      profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
      tier: "basic",
      team: "blue",
      rank: 5,
      previousRank: 5,
      totalSpent: 5000,
      walletBalance: 1000,
      isVerified: false,
      isProtected: false,
      avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      spendStreak: 0
    }
  ];
  
  useEffect(() => {
    const loadLeaderboard = async () => {
      setLoading(true);
      const data = await fetchLeaderboard(filter);
      setLeaderboardData(data);
      setLoading(false);
    };
    
    loadLeaderboard();
  }, [filter]);

  const handleTeamChange = (team: string) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      team: team as TeamColor | 'all'
    }));
  };

  const handleTierChange = (tier: string) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      tier: tier as UserTier | 'all'
    }));
  };

  const handleSortChange = (sortBy: string) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      sortBy: sortBy as SortByOptions
    }));
  };

  const handleSortDirectionChange = (direction: string) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      sortDirection: direction as 'asc' | 'desc'
    }));
  };

  const handleSearchChange = (search: string) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      search: search
    }));
  };

  const handleLimitChange = (limit: number) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      limit: limit
    }));
  };
  
  const fetchLeaderboard = async (filterParams: LeaderboardFilter) => {
    setLoading(true);
    
    return new Promise<LeaderboardUser[]>((resolve) => {
      setTimeout(() => {
        let filteredData = [...mockUsers];
        
        if (filterParams.team && filterParams.team !== 'all') {
          filteredData = filteredData.filter(user => user.team === filterParams.team);
        }
        
        if (filterParams.tier && filterParams.tier !== 'all') {
          filteredData = filteredData.filter(user => user.tier === filterParams.tier);
        }
        
        if (filterParams.search) {
          const searchTerm = filterParams.search.toLowerCase();
          filteredData = filteredData.filter(user => 
            user.username.toLowerCase().includes(searchTerm) || 
            (user.displayName && user.displayName.toLowerCase().includes(searchTerm))
          );
        }
        
        if (filterParams.sortBy) {
          filteredData.sort((a, b) => {
            const propA = a[filterParams.sortBy as keyof LeaderboardUser];
            const propB = b[filterParams.sortBy as keyof LeaderboardUser];
            
            if (typeof propA === 'string' && typeof propB === 'string') {
              return filterParams.sortDirection === 'asc' 
                ? propA.localeCompare(propB) 
                : propB.localeCompare(propA);
            }
            
            if (typeof propA === 'number' && typeof propB === 'number') {
              return filterParams.sortDirection === 'asc' 
                ? propA - propB 
                : propB - propA;
            }
            
            return 0;
          });
        }
        
        if (filterParams.limit) {
          filteredData = filteredData.slice(0, filterParams.limit);
        }
        
        resolve(filteredData);
      }, 500);
    });
  };
  
  const handleFilterChange = (key: keyof TypedLeaderboardFilter, value: any) => {
    setFilter(prev => ({ ...prev, [key]: value }));
  };
  
  const handleSort = (sortBy: SortByOptions) => {
    setFilter(prev => ({
      ...prev,
      sortBy: sortBy,
      sortDirection: prev.sortBy === sortBy && prev.sortDirection === 'asc' ? 'desc' : 'asc'
    }));
  };
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(prev => ({ ...prev, search: event.target.value }));
  };

  const filteredUsers = leaderboardData
    .filter(user => {
      const matchesTeam = filter.team === 'all' || user.team === filter.team;
      const matchesTier = filter.tier === 'all' || user.tier === filter.tier;
      const matchesSearch = !filter.search || 
        user.username.toLowerCase().includes(filter.search.toLowerCase()) ||
        (user.displayName && user.displayName.toLowerCase().includes(filter.search.toLowerCase()));
      
      return matchesTeam && matchesTier && matchesSearch;
    })
    .sort((a, b) => {
      if (filter.sortBy === 'rank') {
        return filter.sortDirection === 'asc' ? a.rank - b.rank : b.rank - a.rank;
      } else if (filter.sortBy === 'totalSpent') {
        return filter.sortDirection === 'asc' ? a.totalSpent - b.totalSpent : b.totalSpent - a.totalSpent;
      } else if (filter.sortBy === 'username') {
        return filter.sortDirection === 'asc' 
          ? a.username.localeCompare(b.username) 
          : b.username.localeCompare(a.username);
      }
      return 0;
    })
    .slice(0, filter.limit || 50);

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-royal royal-gradient flex items-center">
          <Crown size={18} className="text-royal-gold mr-2" />
          Royal Court Standings
        </CardTitle>
        <CardDescription>
          See who is leading the court in total spending
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <Input
            type="text"
            placeholder="Search username..."
            className="max-w-xs"
            onChange={handleSearch}
          />
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1">
                  <Filter size={16} />
                  Team: {filter.team === 'all' ? 'All' : filter.team}
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Select Team</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleTeamChange('all')}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTeamChange('red')}>Red</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTeamChange('blue')}>Blue</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTeamChange('green')}>Green</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTeamChange('gold')}>Gold</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1">
                  <Filter size={16} />
                  Tier: {filter.tier === 'all' ? 'All' : filter.tier}
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Select Tier</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleTierChange('all')}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTierChange('basic')}>Basic</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTierChange('pro')}>Pro</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTierChange('premium')}>Premium</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleTierChange('royal')}>Royal</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-1">
                  <ArrowUpDown size={16} />
                  Sort By
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleSortChange('rank')}>
                  Rank {filter.sortBy === 'rank' && (filter.sortDirection === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />)}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortChange('username')}>
                  Username {filter.sortBy === 'username' && (filter.sortDirection === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />)}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortChange('totalSpent')}>
                  Total Spent {filter.sortBy === 'totalSpent' && (filter.sortDirection === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />)}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center">
            Loading leaderboard...
          </div>
        ) : (
          <div className="space-y-3">
            {filteredUsers.map((user, index) => (
              <div key={user.id} className="glass-morphism border-white/10 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-semibold text-sm mr-2">#{index + 1}</span>
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src={user.profileImage} alt={user.username} className="w-full h-full object-cover" />
                    </div>
                    <span className="ml-2 font-medium">{user.displayName || user.username}</span>
                  </div>
                  <span className="font-bold text-sm">${user.totalSpent.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PersistentLeaderboard;
