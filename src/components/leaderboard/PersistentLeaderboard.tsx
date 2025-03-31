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

const PersistentLeaderboard: React.FC = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<LeaderboardFilter>({
    team: 'all',
    tier: 'all',
    search: '',
    limit: 50,
    timeFrame: 'all', // Added timeFrame
    sortBy: 'rank', // Added sortBy
    sortDirection: 'asc' // Added sortDirection
  });
  
  // Mocked users - in a real app, this would come from an API
  const mockUsers: LeaderboardUser[] = [
    {
      id: "1",
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
      isProtected: false,
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      spentAmount: 15000
    },
    {
      id: "2",
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
      spentAmount: 12000
    },
    {
      id: "3",
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
      spentAmount: 10000
    },
    {
      id: "4",
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
      spentAmount: 7500
    },
    {
      id: "5",
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
      spentAmount: 5000
    }
  ];
  
  // Mock function to simulate API request
  const fetchLeaderboard = async (filterParams: LeaderboardFilter) => {
    setLoading(true);
    
    // In a real application, this would be a fetch to your API endpoint
    return new Promise<LeaderboardUser[]>((resolve) => {
      setTimeout(() => {
        // Filter and sort the data based on filter params
        let filteredData = [...mockUsers];
        
        // Apply team filter
        if (filterParams.team && filterParams.team !== 'all') {
          filteredData = filteredData.filter(user => user.team === filterParams.team);
        }
        
        // Apply tier filter
        if (filterParams.tier && filterParams.tier !== 'all') {
          filteredData = filteredData.filter(user => user.tier === filterParams.tier);
        }
        
        // Apply search filter
        if (filterParams.search) {
          const searchTerm = filterParams.search.toLowerCase();
          filteredData = filteredData.filter(user => 
            user.username.toLowerCase().includes(searchTerm) || 
            (user.displayName && user.displayName.toLowerCase().includes(searchTerm))
          );
        }
        
        // Apply sorting
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
        
        // Apply limit
        if (filterParams.limit) {
          filteredData = filteredData.slice(0, filterParams.limit);
        }
        
        resolve(filteredData);
      }, 500);
    });
  };
  
  const handleFilterChange = (key: keyof LeaderboardFilter, value: any) => {
    setFilter(prev => ({ ...prev, [key]: value }));
  };
  
  const handleSort = (sortBy: string) => {
    setFilter(prev => ({
      ...prev,
      sortBy: sortBy,
      sortDirection: prev.sortBy === sortBy && prev.sortDirection === 'asc' ? 'desc' : 'asc'
    }));
  };
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(prev => ({ ...prev, search: event.target.value }));
  };
  
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
                <DropdownMenuItem onClick={() => handleFilterChange('team', 'all')}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange('team', 'red')}>Red</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange('team', 'blue')}>Blue</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange('team', 'green')}>Green</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange('team', 'gold')}>Gold</DropdownMenuItem>
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
                <DropdownMenuItem onClick={() => handleFilterChange('tier', 'all')}>All</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange('tier', 'basic')}>Basic</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange('tier', 'pro')}>Pro</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange('tier', 'premium')}>Premium</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterChange('tier', 'royal')}>Royal</DropdownMenuItem>
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
                <DropdownMenuItem onClick={() => handleSort('rank')}>
                  Rank {filter.sortBy === 'rank' && (filter.sortDirection === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />)}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSort('username')}>
                  Username {filter.sortBy === 'username' && (filter.sortDirection === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />)}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSort('totalSpent')}>
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
            {leaderboardData.map((user, index) => (
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
