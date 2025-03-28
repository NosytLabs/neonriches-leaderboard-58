import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trophy, Search, ArrowUp, ArrowDown, Crown, Shield, Zap, Flame, Snowflake, UserMinus } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/types/user';
import { adaptUserProfileToUser } from '@/utils/userAdapter';
import PublicShamingFeature from '@/components/leaderboard/PublicShamingFeature';
import MockeryModal from '@/components/mockery/components/MockeryModal';
import { formatCurrency } from '@/lib/utils';

// Mock data for leaderboard
const mockLeaderboardData = [
  {
    id: 'user1',
    username: 'RoyalWhale',
    displayName: 'Royal Whale',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=Felix',
    rank: 1,
    previousRank: 2,
    amountSpent: 25000,
    walletBalance: 5000,
    joinDate: '2023-01-15T00:00:00Z',
    team: 'red',
    tier: 'whale',
    email: 'whale@example.com'
  },
  {
    id: 'user2',
    username: 'CrownCollector',
    displayName: 'Crown Collector',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=Aneka',
    rank: 2,
    previousRank: 1,
    amountSpent: 22500,
    walletBalance: 3000,
    joinDate: '2023-02-10T00:00:00Z',
    team: 'green',
    tier: 'shark',
    email: 'crown@example.com'
  },
  {
    id: 'user3',
    username: 'LuxuryLord',
    displayName: 'Luxury Lord',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=Mimi',
    rank: 3,
    previousRank: 3,
    amountSpent: 18000,
    walletBalance: 2000,
    joinDate: '2023-03-05T00:00:00Z',
    team: 'blue',
    tier: 'dolphin',
    email: 'luxury@example.com'
  },
  {
    id: 'user4',
    username: 'SpendingDuke',
    displayName: 'Spending Duke',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=Bailey',
    rank: 4,
    previousRank: 5,
    amountSpent: 15000,
    walletBalance: 1500,
    joinDate: '2023-04-20T00:00:00Z',
    team: 'red',
    tier: 'fish',
    email: 'duke@example.com'
  },
  {
    id: 'user5',
    username: 'RoyalSpender',
    displayName: 'Royal Spender',
    profileImage: 'https://api.dicebear.com/7.x/personas/svg?seed=Dusty',
    rank: 5,
    previousRank: 4,
    amountSpent: 12500,
    walletBalance: 1000,
    joinDate: '2023-05-15T00:00:00Z',
    team: 'green',
    tier: 'crab',
    email: 'royal@example.com'
  }
];

// Team data
const teams = [
  { id: 'red', name: 'Red Team', icon: <Flame className="h-4 w-4 text-red-500" />, color: 'text-red-500', members: 120, totalSpent: 250000 },
  { id: 'green', name: 'Green Team', icon: <Zap className="h-4 w-4 text-green-500" />, color: 'text-green-500', members: 150, totalSpent: 300000 },
  { id: 'blue', name: 'Blue Team', icon: <Snowflake className="h-4 w-4 text-blue-500" />, color: 'text-blue-500', members: 100, totalSpent: 200000 }
];

const Leaderboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [leaderboardData, setLeaderboardData] = useState<UserProfile[]>(mockLeaderboardData as UserProfile[]);
  const [filteredData, setFilteredData] = useState<UserProfile[]>(mockLeaderboardData as UserProfile[]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'rank' | 'amountSpent' | 'joinDate'>('rank');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [teamFilter, setTeamFilter] = useState<string | undefined>(undefined);
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [mockeryModalOpen, setMockeryModalOpen] = useState(false);
  const [mockeryType, setMockeryType] = useState<'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester'>('tomatoes');

  // Filter and sort leaderboard data
  useEffect(() => {
    let filtered = [...leaderboardData];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(user => 
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.displayName && user.displayName.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Apply team filter
    if (teamFilter) {
      filtered = filtered.filter(user => user.team === teamFilter);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      let comparison = 0;
      
      if (sortBy === 'rank') {
        comparison = (a.rank || 999) - (b.rank || 999);
      } else if (sortBy === 'amountSpent') {
        comparison = (b.amountSpent || 0) - (a.amountSpent || 0);
      } else if (sortBy === 'joinDate') {
        comparison = new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime();
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });
    
    setFilteredData(filtered);
  }, [leaderboardData, searchQuery, sortBy, sortOrder, teamFilter]);

  const handleMockUser = (user: UserProfile) => {
    setSelectedUser(adaptUserProfileToUser(user));
    setMockeryModalOpen(true);
  };

  const handleMockeryConfirm = (targetUser: string, action: string, amount: number) => {
    // In a real app, this would call an API to apply the mockery
    toast({
      title: "Mockery Applied",
      description: `You have applied ${action} mockery to ${targetUser} for $${amount}`,
    });
    
    setMockeryModalOpen(false);
    return true;
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const getTeamIcon = (teamId: string | undefined) => {
    const team = teams.find(t => t.id === teamId);
    return team ? team.icon : null;
  };

  const getTeamColor = (teamId: string | undefined) => {
    const team = teams.find(t => t.id === teamId);
    return team ? team.color : 'text-white/70';
  };

  const getRankChangeIcon = (current: number, previous: number | undefined) => {
    if (!previous || current === previous) {
      return <span className="text-white/50">-</span>;
    }
    
    return current < previous ? (
      <ArrowUp className="h-4 w-4 text-green-500" />
    ) : (
      <ArrowDown className="h-4 w-4 text-red-500" />
    );
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Royal Leaderboard</h1>
          <p className="text-white/70">
            The most prestigious nobles in the kingdom, ranked by their contributions
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
            <SelectTrigger className="w-[180px] glass-morphism border-white/10">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="glass-morphism border-white/10">
              <SelectItem value="rank">Rank</SelectItem>
              <SelectItem value="amountSpent">Amount Spent</SelectItem>
              <SelectItem value="joinDate">Join Date</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon" onClick={toggleSortOrder} className="glass-morphism border-white/10">
            {sortOrder === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="individual" className="space-y-6">
        <TabsList className="glass-morphism border-white/10">
          <TabsTrigger value="individual" className="data-[state=active]:bg-white/10">
            <Trophy className="h-4 w-4 mr-2" />
            Individual
          </TabsTrigger>
          <TabsTrigger value="teams" className="data-[state=active]:bg-white/10">
            <Shield className="h-4 w-4 mr-2" />
            Teams
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="individual" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-3/4">
              <Card className="glass-morphism border-white/10">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle>Noble Rankings</CardTitle>
                    <div className="relative w-64">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/50" />
                      <Input
                        placeholder="Search nobles..."
                        className="pl-8 glass-morphism border-white/10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <CardDescription>
                    Nobles ranked by their spending and contributions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-12 gap-4 py-2 px-4 text-xs text-white/50 font-medium">
                      <div className="col-span-1">Rank</div>
                      <div className="col-span-5">Noble</div>
                      <div className="col-span-2 text-right">Team</div>
                      <div className="col-span-2 text-right">Spent</div>
                      <div className="col-span-2 text-right">Actions</div>
                    </div>
                    
                    {filteredData.length > 0 ? (
                      filteredData.map((noble) => (
                        <div 
                          key={noble.id} 
                          className={`grid grid-cols-12 gap-4 p-4 rounded-lg items-center ${
                            noble.id === user?.id ? 'bg-royal-gold/10 border border-royal-gold/30' : 'glass-morphism-subtle'
                          }`}
                        >
                          <div className="col-span-1 flex items-center gap-1">
                            <span className="font-bold">{noble.rank}</span>
                            {getRankChangeIcon(noble.rank || 0, noble.previousRank)}
                          </div>
                          
                          <div className="col-span-5 flex items-center gap-3">
                            <Avatar className="h-10 w-10 border-2 border-white/10">
                              <AvatarImage src={noble.profileImage} alt={noble.username} />
                              <AvatarFallback>{noble.username.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{noble.displayName || noble.username}</div>
                              <div className="text-sm text-white/60">@{noble.username}</div>
                            </div>
                          </div>
                          
                          <div className="col-span-2 text-right">
                            <div className={`flex items-center justify-end gap-1 ${getTeamColor(noble.team)}`}>
                              {getTeamIcon(noble.team)}
                              <span className="capitalize">{noble.team}</span>
                            </div>
                          </div>
                          
                          <div className="col-span-2 text-right">
                            <div className="font-bold text-royal-gold">
                              {formatCurrency(noble.amountSpent || 0)}
                            </div>
                          </div>
                          
                          <div className="col-span-2 flex justify-end gap-2">
                            {noble.id !== user?.id && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="h-8 glass-morphism border-white/10 hover:bg-white/5"
                                onClick={() => handleMockUser(noble)}
                              >
                                <UserMinus className="h-4 w-4 mr-1 text-royal-crimson" />
                                Mock
                              </Button>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-white/50">
                        No nobles found matching your search criteria
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="w-full md:w-1/4 space-y-4">
              <PublicShamingFeature />
              
              <Card className="glass-morphism border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                    Team Filter
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className={`w-full justify-start glass-morphism ${!teamFilter ? 'border-royal-gold text-royal-gold' : 'border-white/10'}`}
                      onClick={() => setTeamFilter(undefined)}
                    >
                      <Shield className="mr-2 h-4 w-4" />
                      All Teams
                    </Button>
                    
                    {teams.map((team) => (
                      <Button
                        key={team.id}
                        variant="outline"
                        className={`w-full justify-start glass-morphism ${teamFilter === team.id ? `border-${team.id}-500 ${team.color}` : 'border-white/10'}`}
                        onClick={() => setTeamFilter(team.id)}
                      >
                        {team.icon}
                        <span className="ml-2">{team.name}</span>
                        <Badge variant="outline" className="ml-auto">
                          {team.members}
                        </Badge>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="teams" className="space-y-6">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Team Leaderboard</CardTitle>
              <CardDescription>
                Teams ranked by their collective spending and contributions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teams.sort((a, b) => b.totalSpent - a.totalSpent).map((team, index) => (
                  <div key={team.id} className="glass-morphism-subtle p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-${team.id}-500/20 ${team.color}`}>
                          {index === 0 ? (
                            <Crown className="h-5 w-5" />
                          ) : (
                            <span className="font-bold">{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            {team.icon}
                            <span className="font-bold text-lg">{team.name}</span>
                          </div>
                          <div className="text-sm text-white/60">
                            {team.members} members
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-royal-gold">
                          {formatCurrency(team.totalSpent)}
                        </div>
                        <div className="text-sm text-white/60">
                          Total Spent
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-${team.id}-500`}
                        style={{ width: `${(team.totalSpent / 300000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {selectedUser && (
        <MockeryModal
          isOpen={mockeryModalOpen}
          onClose={() => setMockeryModalOpen(false)}
          mockeryType={mockeryType}
          targetUser={selectedUser.username}
          onConfirm={handleMockeryConfirm}
        />
      )}
    </div>
  );
};

export default Leaderboard;
