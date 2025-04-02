import React, { useState, useEffect } from 'react';
import { Shell } from '@/components/ui/shell';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { LeaderboardList } from '@/components/leaderboard/components/LeaderboardList';
import { Badge } from '@/components/ui/badge';
import { TeamColor } from '@/types/mockery-types';
import { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';
import { useToast } from '@/hooks/use-toast';
import useAuth from '@/hooks/useAuth';
import { ensureTeamColor } from '@/utils/typeUnifier';

const LeaderboardPage: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Define the leaderboard filter with all required properties
  const [filter, setFilter] = useState<LeaderboardFilter>({
    timeframe: 'all-time',
    team: 'all',
    tier: 'all',
    sortBy: 'totalSpent',
    sortDirection: 'desc',
    limit: 50,
    page: 1
  });
  
  const [leaderboardUsers, setLeaderboardUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Mock data for demonstration
  useEffect(() => {
    const mockLeaderboardUsers = [
      {
        id: '3',
        username: 'bigSpender',
        displayName: 'Big Spender',
        profileImage: '/assets/default-avatar.png',
        rank: 3,
        previousRank: 5,
        tier: 'premium',
        team: 'red',
        totalSpent: 8000,
        amountSpent: 8000,
        spendStreak: 20
      },
      {
        id: '4',
        username: 'loyalUser',
        displayName: 'Loyal User',
        profileImage: '/assets/default-avatar.png',
        rank: 4,
        previousRank: 4,
        tier: 'premium',
        team: 'blue',
        totalSpent: 7500,
        amountSpent: 7500,
        spendStreak: 15
      },
      {
        id: '5',
        username: 'newComer',
        displayName: 'New Comer',
        profileImage: '/assets/default-avatar.png',
        rank: 5,
        previousRank: 8,
        tier: 'basic',
        team: 'green',
        totalSpent: 2000,
        amountSpent: 2000,
        spendStreak: 5
      }
    ];
    
    setLeaderboardUsers(mockLeaderboardUsers);
    setLoading(false);
  }, []);
  
  const handleProfileClick = (userId: string, username: string) => {
    toast({
      title: "Viewing Profile",
      description: `Navigating to ${username}'s profile...`,
    });
    // In a real app, this would navigate to the profile page
  };
  
  const handleShameUser = (user: LeaderboardUser) => {
    toast({
      title: "Shame User",
      description: `Preparing to shame ${user.username}...`,
    });
    // In a real app, this would open a shame modal
  };
  
  const handleFilterChange = (newFilter: Partial<LeaderboardFilter>) => {
    setFilter(prevFilter => ({
      ...prevFilter,
      ...newFilter
    }));
  };
  
  const handleTeamFilterChange = (team: string) => {
    handleFilterChange({ team: team === 'all' ? 'all' : ensureTeamColor(team) });
  };
  
  const handleTimeframeChange = (timeframe: string) => {
    if (timeframe === 'all' || timeframe === 'week' || timeframe === 'month' || 
        timeframe === 'year' || timeframe === 'today' || timeframe === 'all-time') {
      handleFilterChange({ timeframe });
    }
  };
  
  const handleSortByChange = (sortBy: string) => {
    if (sortBy === 'totalSpent' || sortBy === 'joinDate') {
      handleFilterChange({ sortBy });
    }
  };
  
  const handleSortDirectionToggle = () => {
    handleFilterChange({ 
      sortDirection: filter.sortDirection === 'asc' ? 'desc' : 'asc' 
    });
  };

  return (
    <Shell>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-8">Royal Leaderboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="md:col-span-3">
            <Tabs defaultValue="all-time" className="w-full">
              <TabsList className="grid grid-cols-5 w-full bg-black/20">
                <TabsTrigger 
                  value="all-time" 
                  onClick={() => handleTimeframeChange('all-time')}
                >
                  All Time
                </TabsTrigger>
                <TabsTrigger 
                  value="year" 
                  onClick={() => handleTimeframeChange('year')}
                >
                  Year
                </TabsTrigger>
                <TabsTrigger 
                  value="month" 
                  onClick={() => handleTimeframeChange('month')}
                >
                  Month
                </TabsTrigger>
                <TabsTrigger 
                  value="week" 
                  onClick={() => handleTimeframeChange('week')}
                >
                  Week
                </TabsTrigger>
                <TabsTrigger 
                  value="today" 
                  onClick={() => handleTimeframeChange('today')}
                >
                  Today
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="flex justify-center md:justify-end space-x-2">
            <Button
              variant="outline"
              size="sm"
              className={filter.sortBy === 'totalSpent' ? 'border-royal-gold' : ''}
              onClick={() => handleSortByChange('totalSpent')}
            >
              By Spend
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={filter.sortBy === 'joinDate' ? 'border-royal-gold' : ''}
              onClick={() => handleSortByChange('joinDate')}
            >
              By Join
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <Card className="bg-black/20 border-white/10">
              <CardContent className="p-4">
                {leaderboardUsers.length > 0 ? (
                  <LeaderboardList
                    users={leaderboardUsers as any}
                    currentUserId={user?.id || ''}
                    onProfileClick={handleProfileClick}
                    onShameUser={handleShameUser}
                  />
                ) : (
                  <div className="text-center py-8">
                    <p className="text-white/60">No users found matching your filters.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="bg-black/20 border border-white/10 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Team Filter</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full ${filter.team === 'all' ? 'border-royal-gold text-royal-gold' : ''}`}
                  onClick={() => handleTeamFilterChange('all')}
                >
                  All Teams
                </Button>
                
                {['red', 'blue', 'green', 'gold', 'purple'].map((team) => (
                  <Button
                    key={team}
                    variant="outline"
                    size="sm"
                    className={`w-full ${filter.team === team ? 'border-royal-gold text-royal-gold' : ''}`}
                    onClick={() => handleTeamFilterChange(team)}
                  >
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ 
                        backgroundColor: 
                          team === 'red' ? '#ef4444' : 
                          team === 'blue' ? '#3b82f6' : 
                          team === 'green' ? '#10b981' : 
                          team === 'gold' ? '#f59e0b' : 
                          '#8b5cf6' 
                      }}
                    ></div>
                    {team.charAt(0).toUpperCase() + team.slice(1)} Team
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="bg-black/20 border border-white/10 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Sorting</h3>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={handleSortDirectionToggle}
              >
                {filter.sortDirection === 'desc' ? 'Highest to Lowest' : 'Lowest to Highest'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
};

export default LeaderboardPage;
