
import React, { useState, useEffect } from 'react';
import CombinedLeaderboard from './leaderboard/CombinedLeaderboard';
import LeaderboardHeader from './LeaderboardHeader';
import LeaderboardFilters from './LeaderboardFilters';
import useAuth from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useSound } from '@/hooks/use-sound';
import { LeaderboardUser, LeaderboardFilters as FilterOptions } from '@/types/leaderboard-types';
import { allLeaderboardUsers } from '@/data/leaderboardData';

const Leaderboard = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const sound = useSound();
  
  const [royalCourt, setRoyalCourt] = useState<LeaderboardUser[]>([]);
  const [leaderboardUsers, setLeaderboardUsers] = useState<LeaderboardUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Default filters
  const [filters, setFilters] = useState<FilterOptions>({
    team: 'all',
    tier: 'all',
    timeframe: 'all-time',
    sortBy: 'rank',
    sortDirection: 'asc'
  });

  useEffect(() => {
    // Simulate API loading
    setIsLoading(true);
    
    setTimeout(() => {
      // Get the top 2 users for royal court
      const royalCourtUsers = [...allLeaderboardUsers]
        .sort((a, b) => b.totalSpent - a.totalSpent)
        .slice(0, 2);
      
      // Get the rest of the users for the main leaderboard
      const remainingUsers = [...allLeaderboardUsers]
        .sort((a, b) => b.totalSpent - a.totalSpent)
        .slice(2);
      
      setRoyalCourt(royalCourtUsers);
      setLeaderboardUsers(remainingUsers);
      setIsLoading(false);
    }, 800);
  }, []);
  
  // Handle filter changes
  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    
    // In a real app, you would call an API with these filters
    // For now, we'll just simulate filtering
    setIsLoading(true);
    
    setTimeout(() => {
      let filteredUsers = [...allLeaderboardUsers];
      
      // Apply team filter
      if (updatedFilters.team && updatedFilters.team !== 'all') {
        filteredUsers = filteredUsers.filter(user => 
          user.team === updatedFilters.team
        );
      }
      
      // Apply tier filter
      if (updatedFilters.tier && updatedFilters.tier !== 'all') {
        filteredUsers = filteredUsers.filter(user => 
          user.tier === updatedFilters.tier
        );
      }
      
      // Sort users
      filteredUsers.sort((a, b) => {
        if (updatedFilters.sortBy === 'rank') {
          return updatedFilters.sortDirection === 'asc' 
            ? a.rank - b.rank
            : b.rank - a.rank;
        }
        
        return updatedFilters.sortDirection === 'asc'
          ? a.totalSpent - b.totalSpent
          : b.totalSpent - a.totalSpent;
      });
      
      // Update royal court and leaderboard users
      setRoyalCourt(filteredUsers.slice(0, 2));
      setLeaderboardUsers(filteredUsers.slice(2));
      setIsLoading(false);
    }, 500);
  };

  const handleProfileClick = (userId: string, username: string) => {
    // Handle profile click
    toast({
      title: "Profile Clicked",
      description: `Viewing profile of ${username}`,
    });
    sound.playSound('click');
  };

  const handleShameUser = (user: LeaderboardUser) => {
    // Handle shame user action
    toast({
      title: "Shame Action",
      description: `Preparing to shame ${user.username}`,
    });
    sound.playSound('notification');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <LeaderboardHeader />
      
      <div className="mb-6">
        <LeaderboardFilters 
          filter={filters}
          onFilterChange={handleFilterChange}
        />
      </div>
      
      {isLoading ? (
        <div className="text-center py-20">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
          <p className="mt-4 text-white/70">Loading royal leaderboard...</p>
        </div>
      ) : (
        <CombinedLeaderboard
          royalCourt={royalCourt}
          leaderboardUsers={leaderboardUsers}
          currentUserId={user?.id || ''}
          onProfileClick={handleProfileClick}
          onShameUser={handleShameUser}
        />
      )}
    </div>
  );
};

export default Leaderboard;
