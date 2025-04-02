import React, { useState, useEffect } from 'react';
import { Shell } from '@/components/ui/Shell';  // Update casing to match actual file
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TeamColor } from '@/types/mockery-types';
import { LeaderboardUser } from '@/types/leaderboard';
import { Calendar, Users, Trophy, Flame } from 'lucide-react';

const EventsPage = () => {
  const [activeUsers, setActiveUsers] = useState<LeaderboardUser[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Simulate fetching event data
    const fetchEventData = async () => {
      // Mock data creation with all required fields
      const mockUsers: LeaderboardUser[] = [
        {
          id: 'user-1',
          userId: 'user-1',
          username: 'kingsplendor',
          profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
          totalSpent: 5000,
          amountSpent: 5000, // Added required field
          rank: 1,
          team: 'gold' as TeamColor,
          tier: 'royal',
          spendStreak: 12,
          displayName: 'King Splendor',
          walletBalance: 8000,
          previousRank: 2,
          joinDate: '2023-01-15',
          isVerified: true
        },
        {
          id: 'user-2',
          userId: 'user-2',
          username: 'queenthroneseeker',
          profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
          totalSpent: 4800,
          amountSpent: 4800, // Added required field
          rank: 2,
          team: 'purple' as TeamColor,
          tier: 'royal',
          spendStreak: 10,
          displayName: 'Queen Throne Seeker',
          walletBalance: 7000,
          previousRank: 3,
          joinDate: '2023-02-10',
          isVerified: true
        },
        // Add more mock users as needed with all required fields
      ];

      setActiveUsers(mockUsers);
    };

    fetchEventData();
  }, []);

  // Filter users based on active tab
  const getFilteredUsers = () => {
    switch (activeTab) {
      case 'gold':
        return activeUsers.filter(user => user.team === 'gold');
      case 'purple':
        return activeUsers.filter(user => user.team === 'purple');
      case 'red':
        return activeUsers.filter(user => user.team === 'red');
      default:
        return activeUsers;
    }
  };

  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Events & Tournaments</h1>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 w-full bg-black/20">
            <TabsTrigger value="all" className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              All Events
            </TabsTrigger>
            <TabsTrigger value="gold" className="flex items-center">
              <Trophy className="h-4 w-4 mr-2" />
              Gold Team
            </TabsTrigger>
            <TabsTrigger value="purple" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Purple Team
            </TabsTrigger>
            <TabsTrigger value="red" className="flex items-center">
              <Flame className="h-4 w-4 mr-2" />
              Red Team
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <TabsContent value="all">
              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle>Active Spenders</CardTitle>
                </CardHeader>
                <CardContent>
                  {getFilteredUsers().map(user => (
                    <div key={user.id} className="py-2 border-b border-white/10 last:border-none">
                      {user.displayName} - ${user.totalSpent}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="gold">
              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle>Gold Team Spenders</CardTitle>
                </CardHeader>
                <CardContent>
                  {getFilteredUsers().map(user => (
                    <div key={user.id} className="py-2 border-b border-white/10 last:border-none">
                      {user.displayName} - ${user.totalSpent}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="purple">
              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle>Purple Team Spenders</CardTitle>
                </CardHeader>
                <CardContent>
                  {getFilteredUsers().map(user => (
                    <div key={user.id} className="py-2 border-b border-white/10 last:border-none">
                      {user.displayName} - ${user.totalSpent}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="red">
              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle>Red Team Spenders</CardTitle>
                </CardHeader>
                <CardContent>
                  {getFilteredUsers().map(user => (
                    <div key={user.id} className="py-2 border-b border-white/10 last:border-none">
                      {user.displayName} - ${user.totalSpent}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Shell>
  );
};

export default EventsPage;
