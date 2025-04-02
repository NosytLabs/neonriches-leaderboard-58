import React, { useState, useEffect } from 'react';
import { Shell } from '@/components/ui/Shell';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LeaderboardUser } from '@/types/leaderboard';
import LeaderboardList from '@/components/leaderboard/LeaderboardList';
import { useToast } from '@/hooks/use-toast';
import { toTeamColor } from '@/utils/teamUtils';
import useSoundEffect from '@/hooks/useSoundEffect';
import { useLeaderboard } from '@/hooks/useLeaderboard';
import ShameModal from '@/components/leaderboard/ShameModal';
import { UserProfile } from '@/types/user-consolidated'; 

const LeaderboardPage: React.FC = () => {
  const { toast } = useToast();
  const { playSound } = useSoundEffect();
  
  // Leaderboard filter state
  const [timeframe, setTimeframe] = useState<'all' | 'week' | 'month' | 'year' | 'today' | 'all-time'>('all-time');
  const [team, setTeam] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [shameModalOpen, setShameModalOpen] = useState(false);
  
  // Get leaderboard data
  const { data, users, isLoading, error, filter, setFilter } = useLeaderboard({
    limit: 50,
    timeframe,
    team: team === 'all' ? undefined : team,
    search: searchQuery.trim() || undefined
  });
  
  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Handle search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFilter(prev => ({ ...prev, search: searchQuery.trim() || undefined }));
  };
  
  // Handle team filter change
  const handleTeamChange = (value: string) => {
    setTeam(value);
    setFilter(prev => ({ ...prev, team: value === 'all' ? undefined : value }));
  };
  
  // Handle timeframe filter change
  const handleTimeframeChange = (value: 'all' | 'week' | 'month' | 'year' | 'today' | 'all-time') => {
    setTimeframe(value);
    setFilter(prev => ({ ...prev, timeframe: value }));
  };
  
  // Handle user click
  const handleUserClick = (userId: string) => {
    playSound('click');
    // TODO: Navigate to user profile
    toast({
      title: "User Selected",
      description: `Viewing user with ID: ${userId}`,
    });
  };
  
  // Handle shame click
  const handleShameClick = (userId: string) => {
    playSound('click');
    setSelectedUserId(userId);
    setShameModalOpen(true);
  };
  
  // Handle shame completion
  const handleShameComplete = () => {
    setShameModalOpen(false);
    setSelectedUserId(null);
    playSound('success');
    
    toast({
      title: "Public Shaming Complete",
      description: "Your mockery has been delivered to the masses.",
      variant: "success"
    });
  };
  
  return (
    <Shell>
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Royal Leaderboard</h1>
        
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <form onSubmit={handleSearchSubmit} className="flex-1">
            <div className="relative">
              <Input
                placeholder="Search users..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="sm" 
                className="absolute right-0 top-0 h-full"
              >
                Search
              </Button>
            </div>
          </form>
          
          <div className="flex space-x-3">
            <Select value={team} onValueChange={handleTeamChange}>
              <SelectTrigger className="w-[150px]">
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
            
            <Select value={timeframe} onValueChange={handleTimeframeChange}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-time">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Users</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="team">Team Members</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <LeaderboardList 
              users={users} 
              loading={isLoading} 
              showTeams={true} 
              showTiers={true}
              showRankChange={true}
              onUserClick={handleUserClick}
              onShameClick={handleShameClick}
            />
          </TabsContent>
          
          <TabsContent value="friends">
            <LeaderboardList 
              users={users.filter(u => u.rank <= 10)} 
              loading={isLoading} 
              showTeams={false} 
              showTiers={true}
              showRankChange={true}
              onUserClick={handleUserClick}
              onShameClick={handleShameClick}
            />
          </TabsContent>
          
          <TabsContent value="team">
            <LeaderboardList 
              users={users.filter(u => toTeamColor(u.team) === 'red')} 
              loading={isLoading} 
              showTeams={true} 
              showTiers={true}
              showRankChange={true}
              onUserClick={handleUserClick}
              onShameClick={handleShameClick}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      {shameModalOpen && selectedUserId && (
        <ShameModal 
          userId={selectedUserId}
          isOpen={shameModalOpen}
          onClose={() => setShameModalOpen(false)}
          onComplete={handleShameComplete}
        />
      )}
    </Shell>
  );
};

export default LeaderboardPage;
