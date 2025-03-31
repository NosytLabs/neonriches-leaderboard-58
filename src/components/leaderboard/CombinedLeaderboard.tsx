
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import LeaderboardCard from './LeaderboardCard';
import FilterLeaderboard from './FilterLeaderboard';
import { Team } from '@/types/team';
import { User, UserSettings } from '@/types/user';
import { LeaderboardUser } from '@/types/leaderboard';
import { useMockLeaderboard } from '@/hooks/useMockLeaderboard';

const userTeams = [
  { id: '1', name: 'Red Team', color: 'red', members: 120, totalContribution: 35000 },
  { id: '2', name: 'Blue Team', color: 'blue', members: 150, totalContribution: 42000 },
  { id: '3', name: 'Green Team', color: 'green', members: 90, totalContribution: 28000 },
  { id: '4', name: 'Gold Team', color: 'gold', members: 60, totalContribution: 18000 },
];

const completeUserSettings: UserSettings = {
  profileVisibility: "public",
  allowProfileLinks: true,
  theme: "dark",
  notifications: true,
  emailNotifications: true,
  marketingEmails: true,
  soundEffects: true,
  showEmailOnProfile: false,
  rankChangeAlerts: true,
  showRank: true,
  showTeam: true,
  showSpending: true,
  showBadges: true,
};

const CombinedLeaderboard: React.FC = () => {
  const { mockLeaderboardData } = useMockLeaderboard();
  const [filter, setFilter] = useState({ tier: 'all', team: 'all', searchQuery: '' });
  
  // Global leaderboard
  const globalLeaderboard = mockLeaderboardData;
  
  // Weekly leaderboard (could be fetched from a different API endpoint)
  const weeklyLeaderboard: LeaderboardUser[] = [
    {
      id: "10",
      username: "NewRiser",
      displayName: "New Riser",
      profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
      tier: "basic",
      team: "red",
      rank: 1,
      previousRank: 5,
      totalSpent: 4500,
      walletBalance: 1500,
      isVerified: true,
      isProtected: false,
      spendStreak: 2
    },
    // ... more users
  ];
  
  // Monthly leaderboard
  const monthlyLeaderboard: LeaderboardUser[] = [
    {
      id: "20",
      username: "MonthlyChamp",
      displayName: "Monthly Champion",
      profileImage: "https://randomuser.me/api/portraits/men/20.jpg",
      tier: "premium",
      team: "blue",
      rank: 1,
      previousRank: 2,
      totalSpent: 25000,
      walletBalance: 8000,
      isVerified: true,
      isProtected: true,
      spendStreak: 4
    },
    // ... more users
  ];
  
  // Yearly leaderboard
  const yearlyLeaderboard: LeaderboardUser[] = [
    {
      id: "30",
      username: "YearlyDominator",
      displayName: "Yearly Dominator",
      profileImage: "https://randomuser.me/api/portraits/women/30.jpg",
      tier: "royal",
      team: "gold",
      rank: 1,
      previousRank: 1,
      totalSpent: 150000,
      walletBalance: 50000,
      isVerified: true,
      isProtected: true,
      spendStreak: 52
    },
    // ... more users
  ];
  
  // Team leaderboard
  const teamLeaderboard: LeaderboardUser[] = [
    {
      id: "40",
      username: "TeamLeader",
      displayName: "Team Leader",
      profileImage: "https://randomuser.me/api/portraits/men/40.jpg",
      tier: "royal",
      team: "green",
      rank: 1,
      previousRank: 1,
      totalSpent: 75000,
      walletBalance: 25000,
      isVerified: true,
      isProtected: false,
      spendStreak: 10
    },
    // ... more users
  ];
  
  // Mock user
  const user: User = {
    id: "1",
    username: "CurrentUser",
    displayName: "Current User",
    email: "user@example.com",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "I am a user of this platform",
    joinDate: "2023-01-01",
    tier: "basic",
    team: "red",
    rank: 150,
    previousRank: 160,
    totalSpent: 1000,
    walletBalance: 500,
    isFounder: false,
    isVerified: true,
    settings: completeUserSettings,
    cosmetics: {
      border: [],
      color: [],
      font: [],
      emoji: [],
      title: [],
      background: [],
      effect: [],
      badge: [],
      theme: []
    },
    profileBoosts: []
  };
  
  const handleFilter = (newFilter: { tier: string; team: string; searchQuery: string }) => {
    setFilter(newFilter);
  };
  
  return (
    <div className="space-y-6">
      <FilterLeaderboard onFilter={handleFilter} />
      
      <Tabs defaultValue="global" className="w-full">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="global">Global</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>
        
        <TabsContent value="global">
          <LeaderboardCard 
            title="Global Rank"
            users={globalLeaderboard}
            filter={filter}
            currentUser={user as User}
          />
        </TabsContent>
        
        <TabsContent value="weekly">
          <LeaderboardCard 
            title="Weekly Rank"
            users={weeklyLeaderboard}
            filter={filter}
            currentUser={user as User}
          />
        </TabsContent>
        
        <TabsContent value="monthly">
          <LeaderboardCard 
            title="Monthly Rank"
            users={monthlyLeaderboard}
            filter={filter}
            currentUser={user as User}
          />
        </TabsContent>
        
        <TabsContent value="yearly">
          <LeaderboardCard 
            title="Yearly Rank"
            users={yearlyLeaderboard}
            filter={filter}
            currentUser={user as User}
          />
        </TabsContent>
        
        <TabsContent value="team">
          <div className="mb-4 grid grid-cols-4 gap-4">
            {userTeams.map(team => (
              <Button 
                key={team.id}
                variant="outline"
                className={`border-${team.color}-500/30 hover:border-${team.color}-500/60`}
                onClick={() => handleFilter({ ...filter, team: team.color })}
              >
                {team.name}
              </Button>
            ))}
          </div>
          
          <LeaderboardCard 
            title="Team Rank"
            users={teamLeaderboard.filter(u => filter.team === 'all' || u.team === filter.team)}
            filter={filter}
            currentUser={user as User}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CombinedLeaderboard;
