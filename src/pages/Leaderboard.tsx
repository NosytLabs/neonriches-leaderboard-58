
import React, { useState, useEffect } from 'react';
import { Shell } from '@/utils/componentImports';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LeaderboardList from '@/components/leaderboard/LeaderboardList';
import { fetchLeaderboard } from '@/services/leaderboardService';
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';
import { UserProfile } from '@/types/user';
import useAuth from '@/hooks/useAuth';
import { toTeamColor } from '@/utils/teamUtils';

const Leaderboard = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<LeaderboardFilter>({
    timeframe: 'all',
    team: 'all',
    tier: 'all',
    sortDirection: 'desc',
    sortBy: 'totalSpent',
    limit: 10,
    page: 1
  });
  
  useEffect(() => {
    loadLeaderboard();
  }, [filter]);
  
  const loadLeaderboard = async () => {
    setIsLoading(true);
    try {
      const response = await fetchLeaderboard(filter);
      setUsers(response.users);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleUserClick = (userId: string) => {
    console.log('View user profile:', userId);
    // In a real app, you would navigate to the user's profile
  };
  
  const handleShameClick = (userId: string) => {
    console.log('Shame user:', userId);
    // In a real app, you would open the mockery modal
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    loadLeaderboard();
  };
  
  const handleTimeframeChange = (value: string) => {
    // Convert value to a valid timeframe
    const timeframe: 'all' | 'week' | 'month' | 'year' | 'today' | 'all-time' = 
      (value === 'today' || value === 'week' || value === 'month' || value === 'year' || value === 'all' || value === 'all-time') 
        ? value 
        : 'all';
        
    setFilter({ ...filter, timeframe });
  };
  
  // Create a mock version of the current user for the leaderboard
  const createCurrentUserLeaderboardEntry = (profile: UserProfile): LeaderboardUser => {
    return {
      id: profile.id,
      userId: profile.id,
      username: profile.username,
      displayName: profile.displayName || profile.username,
      profileImage: profile.profileImage,
      rank: profile.rank,
      previousRank: profile.previousRank,
      tier: profile.tier,
      team: profile.team,
      totalSpent: profile.totalSpent || profile.amountSpent || 0,
      amountSpent: profile.amountSpent || profile.totalSpent || 0,
      spendStreak: profile.spendStreak || 0,
      walletBalance: profile.walletBalance || 0,
      isVerified: profile.isVerified || false,
      isProtected: profile.isProtected || false
    };
  };
  
  return (
    <Shell>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Royal Leaderboard</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <Input
              placeholder="Search by username"
              value={filter.search || ''}
              onChange={(e) => setFilter({ ...filter, search: e.target.value })}
              className="flex-1"
            />
            <Button type="submit">Search</Button>
          </form>
          
          <div className="flex gap-2">
            <Select
              value={filter.timeframe}
              onValueChange={handleTimeframeChange}
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            
            <Select
              value={filter.team}
              onValueChange={(value) => setFilter({ ...filter, team: value })}
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teams</SelectItem>
                <SelectItem value="red">Red Team</SelectItem>
                <SelectItem value="blue">Blue Team</SelectItem>
                <SelectItem value="green">Green Team</SelectItem>
                <SelectItem value="gold">Gold Team</SelectItem>
                <SelectItem value="purple">Purple Team</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <LeaderboardList
              users={users}
              isLoading={isLoading}
              showTeams={true}
              showTiers={true}
              showRankChange={true}
              onUserClick={handleUserClick}
              onShameClick={handleShameClick}
            />
          </TabsContent>
          
          <TabsContent value="team">
            {user && user.team ? (
              <LeaderboardList
                users={users.filter(u => toTeamColor(u.team) === toTeamColor(user.team as string))}
                isLoading={isLoading}
                showTeams={false}
                showTiers={true}
                showRankChange={true}
                onUserClick={handleUserClick}
                onShameClick={handleShameClick}
              />
            ) : (
              <div className="text-center py-8">
                <p className="mb-4">You are not part of any team yet.</p>
                <Button>Join a Team</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="friends">
            {user ? (
              <LeaderboardList
                users={[
                  createCurrentUserLeaderboardEntry(user),
                  ...users.slice(0, 5)
                ]}
                isLoading={isLoading}
                showTeams={true}
                showTiers={true}
                showRankChange={true}
                onUserClick={handleUserClick}
                onShameClick={handleShameClick}
              />
            ) : (
              <div className="text-center py-8">
                <p className="mb-4">Login to see friends on the leaderboard.</p>
                <Button>Login</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  );
};

export default Leaderboard;
