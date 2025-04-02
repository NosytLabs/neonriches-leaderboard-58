
import React, { useState, useEffect } from 'react';
import CombinedLeaderboard from './leaderboard/CombinedLeaderboard';
import useAuth from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const Leaderboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [royalCourt, setRoyalCourt] = useState([]);
  const [leaderboardUsers, setLeaderboardUsers] = useState([]);

  useEffect(() => {
    // Mock data for demonstration
    const mockRoyalCourt = [
      {
        id: '1',
        username: 'royalKing',
        displayName: 'Royal King',
        profileImage: '/assets/default-avatar.png',
        rank: 1,
        tier: 'royal',
        team: 'gold',
        totalSpent: 10000,
        amountSpent: 10000,
        spendStreak: 30
      },
      {
        id: '2',
        username: 'royalQueen',
        displayName: 'Royal Queen',
        profileImage: '/assets/default-avatar.png',
        rank: 2,
        tier: 'royal',
        team: 'purple',
        totalSpent: 9500,
        amountSpent: 9500,
        spendStreak: 28
      }
    ];
    
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
    
    setRoyalCourt(mockRoyalCourt);
    setLeaderboardUsers(mockLeaderboardUsers);
  }, []);

  const handleProfileClick = (userId: string, username: string) => {
    // Handle profile click
    toast({
      title: "Profile Clicked",
      description: `Viewing profile of ${username}`,
    });
  };

  const handleShameUser = (user: any) => {
    // Handle shame user action
    toast({
      title: "Shame Action",
      description: `Preparing to shame ${user.username}`,
    });
  };

  return (
    <CombinedLeaderboard
      royalCourt={royalCourt}
      leaderboardUsers={leaderboardUsers}
      currentUserId={user?.id || ''}
      onProfileClick={handleProfileClick}
      onShameUser={handleShameUser}
    />
  );
};

export default Leaderboard;
