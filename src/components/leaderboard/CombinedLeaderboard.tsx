
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LeaderboardList from './components/LeaderboardList';
import { UserProfile } from '@/types/user-consolidated';
import { Button } from '@/components/ui/button';
import { Trophy, Flame, Calendar, Trending, History, Coins } from 'lucide-react';
import { useSound } from '@/hooks/use-sound';
import { sortBy } from 'lodash';
import { useAuth } from '@/hooks/useAuth';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ShameModalWrapper from '../dashboard/leaderboard/ShameModalWrapper';
import { MockeryAction } from '@/types/mockery-types';
import { ensureNumber } from '@/utils/typeConverters';

const CombinedLeaderboard = () => {
  const { user } = useAuth();
  const sound = useSound();
  const [leaderboardData, setLeaderboardData] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedLeaderboard, setSelectedLeaderboard] = useState<string>('weekly');
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [shameAction, setShameAction] = useState<MockeryAction>('tomatoes');
  
  useEffect(() => {
    const fetchLeaderboardData = async () => {
      setLoading(true);
      
      try {
        // In a real app, this would fetch from an API
        setTimeout(() => {
          const mockData: UserProfile[] = Array.from({ length: 10 }).map((_, index) => ({
            id: `user-${index + 1}`,
            username: `noble${index + 1}`,
            displayName: `Noble User ${index + 1}`,
            profileImage: `https://source.unsplash.com/random/?portrait&${index}`,
            tier: index < 3 ? 'royal' : index < 6 ? 'premium' : 'basic',
            team: ['red', 'blue', 'green', 'gold', 'purple'][index % 5],
            rank: index + 1,
            totalSpent: Math.floor(10000 / (index + 1)), 
            amountSpent: Math.floor(10000 / (index + 1)), // Adding amountSpent to match UserProfile type
            previousRank: ensureNumber(Math.floor(Math.random() * 20)), // Convert to number
            joinedDate: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
            isVerified: index < 3,
            walletBalance: Math.floor(Math.random() * 1000),
            spendStreak: index < 5 ? index + 1 : 0
          }));
          
          setLeaderboardData(mockData);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        setLoading(false);
      }
    };
    
    fetchLeaderboardData();
  }, [selectedLeaderboard]);
  
  const handleLeaderboardChange = (value: string) => {
    sound.playSound('click');
    setSelectedLeaderboard(value);
  };
  
  const handleProfileClick = (userId: string, username: string) => {
    console.log(`Clicked on user profile: ${username} (${userId})`);
    // Could navigate to profile page or show profile modal
  };
  
  const handleShameUser = (user: UserProfile) => {
    setSelectedUser(user);
    setShowModal(true);
    sound.playSound('notification');
  };
  
  const handleConfirmShame = (userId: string, type: MockeryAction) => {
    setShowModal(false);
    sound.playSound('mockery');
    console.log(`Applied ${type} to user ${userId}`);
    // In a real app, this would call an API to apply the shame effect
  };
  
  const sortLeaderboardData = () => {
    // Sort by total spent, highest first
    return sortBy(leaderboardData, user => -user.totalSpent);
  };
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-royal-gold" />
          Royal Leaderboard
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue={selectedLeaderboard} onValueChange={handleLeaderboardChange}>
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="daily" className="flex items-center justify-center">
              <Flame className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Daily</span>
            </TabsTrigger>
            <TabsTrigger value="weekly" className="flex items-center justify-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Weekly</span>
            </TabsTrigger>
            <TabsTrigger value="monthly" className="flex items-center justify-center">
              <Trending className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Monthly</span>
            </TabsTrigger>
            <TabsTrigger value="alltime" className="flex items-center justify-center">
              <History className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">All-Time</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily">
            <LeaderboardList 
              users={sortLeaderboardData()}
              loading={loading}
              currentUserId={user?.id || ''}
              onProfileClick={handleProfileClick}
              onShameUser={handleShameUser}
            />
          </TabsContent>
          
          <TabsContent value="weekly">
            <LeaderboardList 
              users={sortLeaderboardData()}
              loading={loading}
              currentUserId={user?.id || ''}
              onProfileClick={handleProfileClick}
              onShameUser={handleShameUser}
            />
          </TabsContent>
          
          <TabsContent value="monthly">
            <LeaderboardList 
              users={sortLeaderboardData()}
              loading={loading}
              currentUserId={user?.id || ''}
              onProfileClick={handleProfileClick}
              onShameUser={handleShameUser}
            />
          </TabsContent>
          
          <TabsContent value="alltime">
            <LeaderboardList 
              users={sortLeaderboardData()}
              loading={loading}
              currentUserId={user?.id || ''}
              onProfileClick={handleProfileClick}
              onShameUser={handleShameUser}
            />
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="glass-morphism border-white/10">
            <Coins className="h-4 w-4 mr-2" />
            View Full Leaderboard
          </Button>
        </div>
      </CardContent>
      
      {selectedUser && (
        <ShameModalWrapper 
          showModal={showModal}
          selectedUser={selectedUser}
          shameAction={shameAction}
          onOpenChange={setShowModal}
          onConfirm={handleConfirmShame}
        />
      )}
    </Card>
  );
};

export default CombinedLeaderboard;
