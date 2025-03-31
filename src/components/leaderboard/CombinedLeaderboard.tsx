
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { LeaderboardUser, SortByOptions } from '@/types/leaderboard';
import LeaderboardCard from './LeaderboardCard';
import { fetchLeaderboard } from '@/services/leaderboardService';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Crown } from 'lucide-react';
import { UserProfile, UserSettings } from '@/types/user-consolidated';

const CombinedLeaderboard: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [users, setUsers] = useState<LeaderboardUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState<SortByOptions>('rank');
  const [teamFilter, setTeamFilter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');
  
  // Default user settings if not available
  const defaultSettings: UserSettings = {
    profileVisibility: 'public',
    allowProfileLinks: true,
    theme: 'dark',
    notifications: true,
    emailNotifications: true,
    marketingEmails: false,
    showRank: true,
    darkMode: true,
    soundEffects: true,
    newFollowerAlerts: true,
    teamNotifications: true,
    showTeam: true,
    showSpending: true,
    showBadges: true,
  };
  
  const settings = user?.settings || defaultSettings;
  
  useEffect(() => {
    const loadLeaderboard = async () => {
      setLoading(true);
      try {
        const data = await fetchLeaderboard(sortBy, teamFilter);
        setUsers(data);
        setFilteredUsers(data.slice(0, 10));
        setTotalPages(Math.ceil(data.length / 10));
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        toast({
          title: "Error loading leaderboard",
          description: "Please try again later",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadLeaderboard();
  }, [sortBy, teamFilter, toast]);
  
  useEffect(() => {
    const start = (page - 1) * 10;
    const end = start + 10;
    setFilteredUsers(users.slice(start, end));
  }, [page, users]);
  
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === 'all') {
      setTeamFilter(null);
    } else {
      setTeamFilter(value);
    }
    setPage(1);
  };
  
  // Create mock user (represents current user)
  const currentUser: UserProfile = {
    id: user?.id || '0',
    username: user?.username || 'You',
    displayName: user?.displayName || 'You',
    profileImage: user?.profileImage || '/assets/default-avatar.png',
    tier: user?.tier || 'free',
    team: user?.team || null,
    rank: user?.rank || 0,
    totalSpent: user?.totalSpent || 0,
    joinedDate: user?.joinedDate || new Date().toISOString(),
    isVerified: user?.isVerified || false,
    walletBalance: user?.walletBalance || 0,
    previousRank: user?.previousRank || 0,
    spendStreak: user?.spendStreak || 0
  };
  
  return (
    <div className="w-full">
      <Card className="glass-morphism border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="h-5 w-5 mr-2 text-royal-gold" />
            Throne Leaderboard
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-0">
          <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="px-6 pb-2">
              <TabsList className="w-full grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="red">Crimson</TabsTrigger>
                <TabsTrigger value="blue">Azure</TabsTrigger>
                <TabsTrigger value="green">Emerald</TabsTrigger>
                <TabsTrigger value="gold">Gold</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="m-0">
              <LeaderboardCard
                users={filteredUsers}
                loading={loading}
                currentUser={user ? currentUser : undefined}
                settings={settings}
              />
            </TabsContent>
            
            <TabsContent value="red" className="m-0">
              <LeaderboardCard
                users={filteredUsers}
                loading={loading}
                currentUser={user?.team === 'red' ? currentUser : undefined}
                settings={settings}
              />
            </TabsContent>
            
            <TabsContent value="blue" className="m-0">
              <LeaderboardCard
                users={filteredUsers}
                loading={loading}
                currentUser={user?.team === 'blue' ? currentUser : undefined}
                settings={settings}
              />
            </TabsContent>
            
            <TabsContent value="green" className="m-0">
              <LeaderboardCard
                users={filteredUsers}
                loading={loading}
                currentUser={user?.team === 'green' ? currentUser : undefined}
                settings={settings}
              />
            </TabsContent>
            
            <TabsContent value="gold" className="m-0">
              <LeaderboardCard
                users={filteredUsers}
                loading={loading}
                currentUser={user?.team === 'gold' ? currentUser : undefined}
                settings={settings}
              />
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-between items-center p-4 border-t border-white/10">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="text-xs"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            
            <div className="text-xs text-muted-foreground">
              Page {page} of {totalPages}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className="text-xs"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CombinedLeaderboard;
